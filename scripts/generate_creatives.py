#!/usr/bin/env python3
from __future__ import annotations

import argparse
import csv
import dataclasses
import datetime as dt
import json
import re
import unicodedata
from collections import defaultdict
from pathlib import Path
from typing import Any, Iterable, Literal, Optional

import openpyxl


PROJECT_ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = PROJECT_ROOT / "data"
LIB_DIR = PROJECT_ROOT / "lib"


PT_MONTHS = {
    1: "Jan",
    2: "Fev",
    3: "Mar",
    4: "Abr",
    5: "Mai",
    6: "Jun",
    7: "Jul",
    8: "Ago",
    9: "Set",
    10: "Out",
    11: "Nov",
    12: "Dez",
}


Categoria = Literal["audiencia", "mensagens"]
Tipo = Literal["reel", "video", "carrossel", "imagem"]


def strip_accents(value: str) -> str:
    return "".join(
        c for c in unicodedata.normalize("NFD", value) if unicodedata.category(c) != "Mn"
    )


def slugify(value: str) -> str:
    value = strip_accents(value).lower()
    value = re.sub(r"[^a-z0-9]+", "-", value).strip("-")
    value = re.sub(r"-{2,}", "-", value)
    return value


def parse_date(value: Any) -> Optional[dt.date]:
    if value is None:
        return None
    if isinstance(value, dt.datetime):
        return value.date()
    if isinstance(value, dt.date):
        return value
    text = str(value).strip()
    if not text:
        return None
    for fmt in ("%Y-%m-%d", "%d/%m/%Y", "%m/%d/%Y"):
        try:
            return dt.datetime.strptime(text, fmt).date()
        except ValueError:
            pass
    return None


def fmt_date_iso(value: dt.date) -> str:
    return value.isoformat()


def fmt_periodo(start: dt.date, end: dt.date) -> str:
    if start.year == end.year and start.month == end.month:
        return f"{PT_MONTHS[start.month]}/{start.year}"
    if start.year == end.year:
        return f"{PT_MONTHS[start.month]}–{PT_MONTHS[end.month]}/{start.year}"
    return f"{PT_MONTHS[start.month]}/{start.year}–{PT_MONTHS[end.month]}/{end.year}"


def infer_tipo(text: str) -> Tipo:
    t = strip_accents(text).lower()
    if "carrossel" in t:
        return "carrossel"
    if "reels" in t or "reel" in t:
        return "reel"
    if "video" in t or "vídeo" in t:
        return "video"
    return "imagem"


def infer_influenciador(text: str) -> Optional[str]:
    t = strip_accents(text).lower()
    if "layla" in t:
        return "Layla Monteiro"
    if "isadora" in t:
        return "Isadora"
    if "thassia" in t or "thássia" in t:
        return "Thassia"
    return None


def parse_ddmm_from_text(text: str) -> Optional[tuple[int, int]]:
    # captura dd/mm em nomes como: "Vídeo Post 26/11" ou "Reels Layla ... 10/08" ou "[15/08]"
    m = re.search(r"(?<!\d)(\d{2})/(\d{2})(?!\d)", text)
    if not m:
        return None
    day = int(m.group(1))
    month = int(m.group(2))
    if not (1 <= month <= 12 and 1 <= day <= 31):
        return None
    return day, month


def extract_instagram_shortcode(url: str) -> Optional[str]:
    m = re.search(r"instagram\.com/(?:p|reel)/([^/?#]+)/?", url)
    return m.group(1) if m else None


@dataclasses.dataclass(frozen=True)
class InstagramPost:
    published_at: dt.datetime
    url: str
    tipo: str
    username: str
    descricao: str

    @property
    def date_key(self) -> str:
        return self.published_at.strftime("%m/%d/%Y")

    @property
    def shortcode(self) -> Optional[str]:
        return extract_instagram_shortcode(self.url)


def load_instagram_posts(path: Path) -> dict[str, list[InstagramPost]]:
    posts_by_date: dict[str, list[InstagramPost]] = defaultdict(list)
    with path.open("r", encoding="utf-8-sig", newline="") as f:
        reader = csv.DictReader(f)
        for row in reader:
            raw_dt = (row.get("Horário de publicação") or "").strip()
            raw_url = (row.get("Link permanente") or "").strip()
            raw_tipo = (row.get("Tipo de post") or "").strip()
            raw_username = (row.get("Nome de usuário da conta") or "").strip()
            raw_desc = (row.get("Descrição") or "").strip()

            if not raw_dt or not raw_url:
                continue
            try:
                published = dt.datetime.strptime(raw_dt, "%m/%d/%Y %H:%M")
            except ValueError:
                continue

            post = InstagramPost(
                published_at=published,
                url=raw_url,
                tipo=raw_tipo,
                username=raw_username,
                descricao=raw_desc,
            )
            posts_by_date[post.date_key].append(post)

    return posts_by_date


def load_manual_overrides(path: Path) -> dict[Categoria, dict[str, str]]:
    if not path.exists():
        return {"audiencia": {}, "mensagens": {}}

    data = json.loads(path.read_text(encoding="utf-8"))
    overrides: dict[Categoria, dict[str, str]] = {"audiencia": {}, "mensagens": {}}
    for categoria in ("audiencia", "mensagens"):
        raw = data.get(categoria)
        if not isinstance(raw, dict):
            continue
        cleaned: dict[str, str] = {}
        for key, value in raw.items():
            if not key or not value:
                continue
            cleaned[str(key).strip()] = str(value).strip()
        overrides[categoria] = cleaned

    return overrides


def apply_instagram_override(record: dict[str, Any], url: str) -> None:
    shortcode = extract_instagram_shortcode(url)
    record["instagramUrl"] = url
    record["instagramShortcode"] = shortcode
    record["thumbSrc"] = f"/ads/mm-ig-{shortcode}.jpg" if shortcode else None


def ensure_unique_ids(records: list[dict[str, Any]]) -> None:
    used: set[str] = set()
    for record in records:
        base = str(record.get("id") or "")
        if not base:
            continue

        candidate = base
        counter = 2
        while candidate in used:
            candidate = f"{base}--{counter}"
            counter += 1

        record["id"] = candidate
        used.add(candidate)


def score_post(
    *,
    post: InstagramPost,
    expected_tipo: Tipo,
    expected_keywords: Iterable[str],
    expected_influenciador: Optional[str],
) -> int:
    score = 0
    post_tipo = strip_accents(post.tipo).lower()

    if expected_tipo in ("reel", "video") and "reel" in post_tipo:
        score += 3
    if expected_tipo == "carrossel" and "carrossel" in post_tipo:
        score += 3

    hay = strip_accents(f"{post.username} {post.descricao}").lower()
    for kw in expected_keywords:
        kw_norm = strip_accents(kw).lower()
        if kw_norm and kw_norm in hay:
            score += 2

    if expected_influenciador and strip_accents(expected_influenciador).lower().split()[0] in hay:
        score += 2

    return score


def find_instagram_post_for_creative(
    *,
    anuncio: str,
    report_start: dt.date,
    tipo: Tipo,
    campanha: str,
    influenciador: Optional[str],
    posts_by_date: dict[str, list[InstagramPost]],
) -> Optional[InstagramPost]:
    ddmm = parse_ddmm_from_text(anuncio)
    if not ddmm:
        return None
    day, month = ddmm
    # CSV está em mm/dd/YYYY
    candidate_date_key = f"{month:02d}/{day:02d}/{report_start.year}"
    candidates = posts_by_date.get(candidate_date_key, [])
    if not candidates:
        return None

    keywords = []
    for token in (campanha, anuncio):
        t = strip_accents(token).lower()
        for kw in ("aura", "origem", "diamonds", "primavera", "florescer", "evento", "presentes", "unique", "luz"):
            if kw in t:
                keywords.append(kw)

    scored = [
        (score_post(post=post, expected_tipo=tipo, expected_keywords=keywords, expected_influenciador=influenciador), post)
        for post in candidates
    ]
    scored.sort(key=lambda x: x[0], reverse=True)
    best_score, best_post = scored[0]
    # score 0 ainda pode ser correto (data coincide), então aceitamos
    return best_post


def as_float(value: Any) -> float:
    if value is None:
        return 0.0
    if isinstance(value, (int, float)):
        return float(value)
    text = str(value).strip().replace(",", ".")
    if not text:
        return 0.0
    try:
        return float(text)
    except ValueError:
        return 0.0


def safe_int(value: float) -> int:
    return int(round(value))


def read_sheet_rows(path: Path, sheet_name: str) -> list[dict[str, Any]]:
    wb = openpyxl.load_workbook(path, read_only=True, data_only=True)
    ws = wb[sheet_name]
    rows = ws.iter_rows(values_only=True)
    headers = [str(h).strip() if h is not None else "" for h in next(rows)]
    out: list[dict[str, Any]] = []
    for r in rows:
        out.append({headers[i]: r[i] if i < len(r) else None for i in range(len(headers))})
    wb.close()
    return out


def dominant_value(values: list[tuple[str, float]]) -> str:
    if not values:
        return ""
    values.sort(key=lambda x: x[1], reverse=True)
    return values[0][0]


def generate_audience_creatives(posts_by_date: dict[str, list[InstagramPost]]) -> list[dict[str, Any]]:
    rows = read_sheet_rows(DATA_DIR / "meta-audiencia-mensal.xlsx", "Creative Reporting")

    grouped: dict[str, list[dict[str, Any]]] = defaultdict(list)
    for row in rows:
        anuncio = row.get("Anúncios") or row.get("Nome do anúncio")
        if not anuncio:
            continue
        grouped[str(anuncio).strip()].append(row)

    out: list[dict[str, Any]] = []
    for anuncio, items in grouped.items():
        spend = sum(as_float(r.get("Valor usado (BRL)")) for r in items)
        reach = sum(as_float(r.get("Alcance")) for r in items)
        impr = sum(as_float(r.get("Impressões")) for r in items)
        clicks = sum(as_float(r.get("Cliques no link")) for r in items)
        visitas = sum(as_float(r.get("Visitas ao perfil do Instagram")) for r in items)

        # datas
        starts = [parse_date(r.get("Início dos relatórios")) for r in items]
        ends = [parse_date(r.get("Término dos relatórios")) for r in items]
        start = min(d for d in starts if d is not None)
        end = max(d for d in ends if d is not None)

        # campanha dominante por gasto
        campanhas = defaultdict(float)
        for r in items:
            campanhas[str(r.get("Nome da campanha") or "").strip()] += as_float(r.get("Valor usado (BRL)"))
        campanha = dominant_value([(k, v) for k, v in campanhas.items() if k])

        display_name = re.sub(r"^Ad\s+\d+\s+-\s+", "", anuncio).strip()
        tipo = infer_tipo(display_name)
        influenciador = infer_influenciador(display_name) or infer_influenciador(campanha)

        ig_post = find_instagram_post_for_creative(
            anuncio=display_name,
            report_start=start,
            tipo=tipo,
            campanha=campanha,
            influenciador=influenciador,
            posts_by_date=posts_by_date,
        )

        ctr = (clicks / impr * 100.0) if impr else 0.0
        cpc = (spend / clicks) if clicks else None
        custo_visita = (spend / visitas) if visitas else None

        record: dict[str, Any] = {
            "id": f"aud-{slugify(display_name)[:60]}",
            "categoria": "audiencia",
            "nome": display_name,
            "anuncio": anuncio,
            "campanha": campanha,
            "tipo": tipo,
            "periodo": fmt_periodo(start, end),
            "inicioRelatorio": fmt_date_iso(start),
            "fimRelatorio": fmt_date_iso(end),
            "alcance": safe_int(reach),
            "impressoes": safe_int(impr),
            "cliquesLink": safe_int(clicks),
            "visitasPerfil": safe_int(visitas),
            "investido": round(spend, 2),
            "ctr": round(ctr, 2),
            "cpc": round(cpc, 2) if cpc is not None else None,
            "custoVisita": round(custo_visita, 2) if custo_visita is not None else None,
            "influenciador": influenciador,
            "instagramUrl": ig_post.url if ig_post else None,
            "instagramShortcode": ig_post.shortcode if ig_post else None,
            "thumbSrc": f"/ads/mm-ig-{ig_post.shortcode}.jpg"
            if ig_post and ig_post.shortcode
            else None,
        }
        out.append(record)

    # ordena por CTR desc (para inspeção humana)
    out.sort(key=lambda x: x["ctr"], reverse=True)
    ensure_unique_ids(out)
    return out


def generate_messages_creatives(posts_by_date: dict[str, list[InstagramPost]]) -> list[dict[str, Any]]:
    rows = read_sheet_rows(DATA_DIR / "meta-mensagens-mensal.xlsx", "Raw Data Report")

    grouped: dict[str, list[dict[str, Any]]] = defaultdict(list)
    for row in rows:
        anuncio = row.get("Anúncios")
        if not anuncio:
            continue
        anuncio = str(anuncio).strip()
        if not anuncio:
            continue
        grouped[anuncio].append(row)

    out: list[dict[str, Any]] = []
    for anuncio, items in grouped.items():
        spend = sum(as_float(r.get("Valor usado (BRL)")) for r in items)
        reach = sum(as_float(r.get("Alcance")) for r in items)
        impr = sum(as_float(r.get("Impressões")) for r in items)
        clicks = sum(as_float(r.get("Cliques no link")) for r in items)
        conversas = sum(as_float(r.get("Conversas por mensagem iniciadas")) for r in items)

        # datas
        starts = [parse_date(r.get("Início dos relatórios")) for r in items]
        ends = [parse_date(r.get("Término dos relatórios")) for r in items]
        start = min(d for d in starts if d is not None)
        end = max(d for d in ends if d is not None)

        # campanha dominante por gasto
        campanhas = defaultdict(float)
        for r in items:
            campanhas[str(r.get("Nome da campanha") or "").strip()] += as_float(r.get("Valor usado (BRL)"))
        campanha = dominant_value([(k, v) for k, v in campanhas.items() if k])

        display_name = re.sub(r"^Ad\s+\d+\s+-\s+", "", anuncio).strip()
        tipo = infer_tipo(display_name)
        influenciador = infer_influenciador(display_name) or infer_influenciador(campanha)

        ig_post = find_instagram_post_for_creative(
            anuncio=display_name,
            report_start=start,
            tipo=tipo,
            campanha=campanha,
            influenciador=influenciador,
            posts_by_date=posts_by_date,
        )

        ctr = (clicks / impr * 100.0) if impr else 0.0
        cpc = (spend / clicks) if clicks else None
        custo_conversa = (spend / conversas) if conversas else None

        record: dict[str, Any] = {
            "id": f"msg-{slugify(display_name)[:60]}",
            "categoria": "mensagens",
            "nome": display_name,
            "anuncio": anuncio,
            "campanha": campanha,
            "tipo": tipo,
            "periodo": fmt_periodo(start, end),
            "inicioRelatorio": fmt_date_iso(start),
            "fimRelatorio": fmt_date_iso(end),
            "alcance": safe_int(reach),
            "impressoes": safe_int(impr),
            "cliquesLink": safe_int(clicks),
            "conversas": safe_int(conversas),
            "investido": round(spend, 2),
            "ctr": round(ctr, 2),
            "cpc": round(cpc, 2) if cpc is not None else None,
            "custoConversa": round(custo_conversa, 2) if custo_conversa is not None else None,
            "influenciador": influenciador,
            "instagramUrl": ig_post.url if ig_post else None,
            "instagramShortcode": ig_post.shortcode if ig_post else None,
            "thumbSrc": f"/ads/mm-ig-{ig_post.shortcode}.jpg"
            if ig_post and ig_post.shortcode
            else None,
        }
        out.append(record)

    # ordena por custo/conversa asc (nulos por último)
    out.sort(
        key=lambda x: (
            x["custoConversa"] is None,
            x["custoConversa"] if x["custoConversa"] is not None else 0,
        )
    )
    ensure_unique_ids(out)
    return out


def ts_literal(value: Any) -> str:
    if value is None:
        return "null"
    if isinstance(value, bool):
        return "true" if value else "false"
    if isinstance(value, (int, float)):
        if isinstance(value, bool):
            return "true" if value else "false"
        if isinstance(value, float) and value.is_integer():
            return str(int(value))
        return str(value)
    return json.dumps(value, ensure_ascii=False)


def write_ts_file(out_path: Path, aud: list[dict[str, Any]], msg: list[dict[str, Any]]) -> None:
    lines: list[str] = []
    lines.append("// Arquivo gerado automaticamente a partir dos exports em data/")
    lines.append(
        "// Fonte: data/meta-audiencia-mensal.xlsx, data/meta-mensagens-mensal.xlsx, data/instagram-organico-mensal.csv, data/creative_overrides.json"
    )
    lines.append("// Edite via scripts/generate_creatives.py; não altere manualmente este arquivo.\n")

    lines.append("export type CriativoCategoria = \"audiencia\" | \"mensagens\";")
    lines.append("export type CriativoTipo = \"reel\" | \"video\" | \"carrossel\" | \"imagem\";\n")

    lines.append("export type CriativoAmostra = \"ok\" | \"baixa\";\n")

    lines.append("export interface CriativoBase {")
    lines.append("  id: string;")
    lines.append("  categoria: CriativoCategoria;")
    lines.append("  nome: string;")
    lines.append("  anuncio: string;")
    lines.append("  campanha: string;")
    lines.append("  tipo: CriativoTipo;")
    lines.append("  periodo: string;")
    lines.append("  inicioRelatorio: string;")
    lines.append("  fimRelatorio: string;")
    lines.append("  alcance: number;")
    lines.append("  impressoes: number;")
    lines.append("  cliquesLink: number;")
    lines.append("  investido: number;")
    lines.append("  ctr: number;")
    lines.append("  cpc: number | null;")
    lines.append("  influenciador: string | null;")
    lines.append("  instagramUrl: string | null;")
    lines.append("  instagramShortcode: string | null;")
    lines.append("  thumbSrc: string | null;")
    lines.append("}")
    lines.append("")

    lines.append("export interface CriativoAudiencia extends CriativoBase {")
    lines.append("  categoria: \"audiencia\";")
    lines.append("  visitasPerfil: number;")
    lines.append("  custoVisita: number | null;")
    lines.append("}")
    lines.append("")

    lines.append("export interface CriativoMensagens extends CriativoBase {")
    lines.append("  categoria: \"mensagens\";")
    lines.append("  conversas: number;")
    lines.append("  custoConversa: number | null;")
    lines.append("}")
    lines.append("")

    def emit_array(name: str, items: list[dict[str, Any]]) -> None:
        lines.append(f"export const {name} = [")
        for item in items:
            lines.append("  {")
            for key in item.keys():
                lines.append(f"    {key}: {ts_literal(item[key])},")
            lines.append("  },")
        lines.append("] as const;\n")

    emit_array("criativosAudienciaTodos", aud)
    emit_array("criativosMensagensTodos", msg)

    out_path.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> int:
    parser = argparse.ArgumentParser(description="Gera lista completa de criativos a partir dos exports.")
    parser.add_argument(
        "--out",
        default=str(LIB_DIR / "creatives.generated.ts"),
        help="Caminho de saída (TypeScript).",
    )
    args = parser.parse_args()

    posts_by_date = load_instagram_posts(DATA_DIR / "instagram-organico-mensal.csv")
    overrides = load_manual_overrides(DATA_DIR / "creative_overrides.json")
    aud = generate_audience_creatives(posts_by_date)
    msg = generate_messages_creatives(posts_by_date)

    for record in aud:
        override = overrides["audiencia"].get(record.get("anuncio") or "") or overrides["audiencia"].get(
            record.get("nome") or ""
        )
        if override:
            apply_instagram_override(record, override)

    for record in msg:
        override = overrides["mensagens"].get(record.get("anuncio") or "") or overrides["mensagens"].get(
            record.get("nome") or ""
        )
        if override:
            apply_instagram_override(record, override)

    out_path = Path(args.out)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    write_ts_file(out_path, aud, msg)

    print(f"Wrote: {out_path.relative_to(PROJECT_ROOT)}")
    print(f"- Audiencia: {len(aud)} criativos")
    print(f"- Mensagens: {len(msg)} criativos")
    mapped = sum(1 for x in aud if x.get('instagramUrl')) + sum(1 for x in msg if x.get('instagramUrl'))
    print(f"- Com instagramUrl mapeado (data/overrides): {mapped}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
