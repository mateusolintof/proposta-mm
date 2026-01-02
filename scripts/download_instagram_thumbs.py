#!/usr/bin/env python3
from __future__ import annotations

import argparse
import html
import re
import urllib.request
from pathlib import Path
from urllib.parse import urlparse


PROJECT_ROOT = Path(__file__).resolve().parents[1]


def extract_instagram_urls(ts_path: Path) -> list[str]:
    text = ts_path.read_text(encoding="utf-8")
    urls = re.findall(r'instagramUrl:\s+"(https://www\.instagram\.com/[^"]+)"', text)
    # remove duplicates preserving order
    seen = set()
    out: list[str] = []
    for u in urls:
        if u in seen:
            continue
        seen.add(u)
        out.append(u)
    return out


def extract_shortcode(url: str) -> str | None:
    m = re.search(r"instagram\.com/(?:p|reel)/([^/]+)/", url)
    return m.group(1) if m else None


def fetch_html(url: str) -> str:
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=30) as resp:
        return resp.read().decode("utf-8", "ignore")


def extract_og_image_url(page_html: str) -> str | None:
    m = re.search(r'property="og:image"\s+content="([^"]+)"', page_html)
    if not m:
        return None
    return html.unescape(m.group(1))


def download(url: str, out_path: Path) -> None:
    out_path.parent.mkdir(parents=True, exist_ok=True)
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=60) as resp:
        out_path.write_bytes(resp.read())


def main() -> int:
    parser = argparse.ArgumentParser(description="Baixa thumbs reais (og:image) dos posts IG mapeados.")
    parser.add_argument(
        "--creatives-ts",
        default=str(PROJECT_ROOT / "lib" / "creatives.generated.ts"),
        help="Arquivo TS gerado com instagramUrl/thumbSrc.",
    )
    parser.add_argument(
        "--out-dir",
        default=str(PROJECT_ROOT / "public" / "ads"),
        help="Pasta de saída em public/.",
    )
    parser.add_argument(
        "--limit",
        type=int,
        default=0,
        help="Limite de downloads (0 = sem limite).",
    )
    args = parser.parse_args()

    ts_path = Path(args.creatives_ts)
    out_dir = Path(args.out_dir)

    urls = extract_instagram_urls(ts_path)
    if args.limit and args.limit > 0:
        urls = urls[: args.limit]

    ok = 0
    skipped = 0
    failed = 0

    for idx, page_url in enumerate(urls, 1):
        shortcode = extract_shortcode(page_url)
        if not shortcode:
            print(f"[{idx}/{len(urls)}] skip (no shortcode): {page_url}")
            skipped += 1
            continue

        out_path = out_dir / f"mm-ig-{shortcode}.jpg"
        if out_path.exists() and out_path.stat().st_size > 0:
            print(f"[{idx}/{len(urls)}] exists: {out_path.relative_to(PROJECT_ROOT)}")
            skipped += 1
            continue

        try:
            page_html = fetch_html(page_url)
            og_image = extract_og_image_url(page_html)
            if not og_image:
                print(f"[{idx}/{len(urls)}] fail (no og:image): {page_url}")
                failed += 1
                continue
            # og:image costuma ser JPG, mas ainda assim garantimos saída .jpg
            download(og_image, out_path)
            ext = Path(urlparse(og_image).path).suffix.lower()
            size_kb = out_path.stat().st_size / 1024.0
            print(
                f"[{idx}/{len(urls)}] ok: {out_path.relative_to(PROJECT_ROOT)} ({ext or 'n/a'}, {size_kb:.0f} KB)"
            )
            ok += 1
        except Exception as e:
            print(f"[{idx}/{len(urls)}] error: {page_url} -> {e}")
            failed += 1

    print(f"Done. ok={ok} skipped={skipped} failed={failed}")
    return 0 if failed == 0 else 1


if __name__ == "__main__":
    raise SystemExit(main())
