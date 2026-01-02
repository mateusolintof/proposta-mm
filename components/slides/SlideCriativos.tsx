"use client";

import { motion } from "framer-motion";
import { SlideContent, SlideHeader } from "./SlideContainer";
import {
  criativosAudienciaTodos,
  criativosMensagensTodos,
  estatisticasHero,
  formatCurrency,
  formatNumber,
  formatPercent,
  type CriativoAudiencia,
  type CriativoMensagens,
} from "@/lib/data";
import {
  Play,
  Image as ImageIcon,
  Users,
  MessageCircle,
  Star,
  TrendingUp,
  Link as LinkIcon,
  ShieldAlert,
} from "lucide-react";
import { useMemo, useState } from "react";

type FeaturedCategoria = "audiencia" | "mensagens";

type FeaturedMetrica = {
  label: string;
  valor: number;
  format: "currency" | "percent" | "number";
};

type FeaturedCriativo = {
  id: string;
  categoria: FeaturedCategoria;
  nome: string;
  tipo: string;
  periodo: string;
  inicioRelatorio: string;
  fimRelatorio: string;
  imagem: string | null;
  instagramUrl: string | null;
  amostra: "ok" | "baixa";
  metricaPrincipal: FeaturedMetrica;
  metricaSecundaria: FeaturedMetrica;
  volumeLinha: string;
  destaque: string | null;
};

const formatMetrica = (valor: number, format: FeaturedMetrica["format"]) => {
  switch (format) {
    case "currency":
      return formatCurrency(valor);
    case "percent":
      return formatPercent(valor);
    default:
      return formatNumber(valor);
  }
};

const formatRangeDDMM = (startIso: string, endIso: string) => {
  const [sy, sm, sd] = startIso.split("-").map(Number);
  const [ey, em, ed] = endIso.split("-").map(Number);
  if (!sy || !sm || !sd || !ey || !em || !ed) return "";
  const s = `${String(sd).padStart(2, "0")}/${String(sm).padStart(2, "0")}`;
  const e = `${String(ed).padStart(2, "0")}/${String(em).padStart(2, "0")}`;
  return s === e ? s : `${s}–${e}`;
};

const amostraAudiencia = (c: CriativoAudiencia): "ok" | "baixa" => {
  if (c.investido < 50) return "baixa";
  if (c.impressoes < 2000) return "baixa";
  if (c.cliquesLink < 100) return "baixa";
  return "ok";
};

const amostraMensagens = (c: CriativoMensagens): "ok" | "baixa" => {
  if (c.conversas < 10) return "baixa";
  if (c.investido < 50) return "baixa";
  return "ok";
};

const uniqueById = <T extends { id: string }>(items: T[]) => {
  const seen = new Set<string>();
  return items.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
};

type FilterType = "todos" | "audiencia" | "mensagens";

export function SlideCriativos() {
  const [filter, setFilter] = useState<FilterType>("todos");

  const featured = useMemo(() => {
    const audienciaOrdenado = [...criativosAudienciaTodos].sort((a, b) => b.ctr - a.ctr);
    const audienciaComAmostra = audienciaOrdenado.map((c) => ({ c, amostra: amostraAudiencia(c) }));
    const audienciaOk = audienciaComAmostra.filter((x) => x.amostra === "ok").map((x) => x.c);
    const audienciaDestaques = (audienciaOk.length >= 3 ? audienciaOk : audienciaOrdenado).slice(0, 3);

    const mensagensOrdenado = [...criativosMensagensTodos]
      .filter((c) => c.custoConversa !== null && c.conversas > 0)
      .sort((a, b) => (a.custoConversa ?? Infinity) - (b.custoConversa ?? Infinity));

    const mensagensVolume = mensagensOrdenado.filter((c) => amostraMensagens(c) === "ok");

    const melhorCustoVolume = mensagensVolume[0] ?? mensagensOrdenado[0];
    const maiorVolume = [...mensagensOrdenado].sort((a, b) => b.conversas - a.conversas)[0];
    const melhorCTRVolume = [...mensagensVolume].sort((a, b) => b.ctr - a.ctr)[0] ?? mensagensOrdenado[0];

    const mensagensDestaques = uniqueById(
      [melhorCustoVolume, maiorVolume, melhorCTRVolume].filter(Boolean) as CriativoMensagens[]
    ).slice(0, 3);

    const mensagensRotulos = new Map<string, string[]>();
    const pushRotulo = (c: CriativoMensagens | undefined, label: string) => {
      if (!c) return;
      const existing = mensagensRotulos.get(c.id) ?? [];
      mensagensRotulos.set(c.id, [...existing, label]);
    };

    pushRotulo(melhorCustoVolume, "Melhor custo (volume)");
    pushRotulo(maiorVolume, "Maior volume");
    pushRotulo(melhorCTRVolume, "Melhor CTR (volume)");

    const audienciaCards: FeaturedCriativo[] = [
      {
        id: audienciaDestaques[0].id,
        categoria: "audiencia",
        nome: audienciaDestaques[0].nome,
        tipo: audienciaDestaques[0].tipo,
        periodo: audienciaDestaques[0].periodo,
        inicioRelatorio: audienciaDestaques[0].inicioRelatorio,
        fimRelatorio: audienciaDestaques[0].fimRelatorio,
        imagem: audienciaDestaques[0].thumbSrc,
        instagramUrl: audienciaDestaques[0].instagramUrl,
        amostra: amostraAudiencia(audienciaDestaques[0]),
        destaque: "Maior CTR",
        metricaPrincipal: { label: "CTR", valor: audienciaDestaques[0].ctr, format: "percent" },
        metricaSecundaria: { label: "CPC", valor: audienciaDestaques[0].cpc ?? 0, format: "currency" },
        volumeLinha: `Impr ${formatNumber(audienciaDestaques[0].impressoes)} · Cliques ${formatNumber(audienciaDestaques[0].cliquesLink)} · Visitas ${formatNumber(audienciaDestaques[0].visitasPerfil)}`,
      },
      {
        id: audienciaDestaques[1].id,
        categoria: "audiencia",
        nome: audienciaDestaques[1].nome,
        tipo: audienciaDestaques[1].tipo,
        periodo: audienciaDestaques[1].periodo,
        inicioRelatorio: audienciaDestaques[1].inicioRelatorio,
        fimRelatorio: audienciaDestaques[1].fimRelatorio,
        imagem: audienciaDestaques[1].thumbSrc,
        instagramUrl: audienciaDestaques[1].instagramUrl,
        amostra: amostraAudiencia(audienciaDestaques[1]),
        destaque: "Top CTR",
        metricaPrincipal: { label: "CTR", valor: audienciaDestaques[1].ctr, format: "percent" },
        metricaSecundaria: { label: "CPC", valor: audienciaDestaques[1].cpc ?? 0, format: "currency" },
        volumeLinha: `Impr ${formatNumber(audienciaDestaques[1].impressoes)} · Cliques ${formatNumber(audienciaDestaques[1].cliquesLink)} · Visitas ${formatNumber(audienciaDestaques[1].visitasPerfil)}`,
      },
      {
        id: audienciaDestaques[2].id,
        categoria: "audiencia",
        nome: audienciaDestaques[2].nome,
        tipo: audienciaDestaques[2].tipo,
        periodo: audienciaDestaques[2].periodo,
        inicioRelatorio: audienciaDestaques[2].inicioRelatorio,
        fimRelatorio: audienciaDestaques[2].fimRelatorio,
        imagem: audienciaDestaques[2].thumbSrc,
        instagramUrl: audienciaDestaques[2].instagramUrl,
        amostra: amostraAudiencia(audienciaDestaques[2]),
        destaque: "Top CTR",
        metricaPrincipal: { label: "CTR", valor: audienciaDestaques[2].ctr, format: "percent" },
        metricaSecundaria: { label: "CPC", valor: audienciaDestaques[2].cpc ?? 0, format: "currency" },
        volumeLinha: `Impr ${formatNumber(audienciaDestaques[2].impressoes)} · Cliques ${formatNumber(audienciaDestaques[2].cliquesLink)} · Visitas ${formatNumber(audienciaDestaques[2].visitasPerfil)}`,
      },
    ];

    const mensagensCards: FeaturedCriativo[] = mensagensDestaques.map((c) => ({
      id: c.id,
      categoria: "mensagens",
      nome: c.nome,
      tipo: c.tipo,
      periodo: c.periodo,
      inicioRelatorio: c.inicioRelatorio,
      fimRelatorio: c.fimRelatorio,
      imagem: c.thumbSrc,
      instagramUrl: c.instagramUrl,
      amostra: amostraMensagens(c),
      destaque: (mensagensRotulos.get(c.id) ?? []).join(" • ") || null,
      metricaPrincipal: { label: "Custo/Conv", valor: c.custoConversa ?? 0, format: "currency" },
      metricaSecundaria: { label: "Conversas", valor: c.conversas, format: "number" },
      volumeLinha: `Impr ${formatNumber(c.impressoes)} · Cliques ${formatNumber(c.cliquesLink)} · Conv ${formatNumber(c.conversas)}`,
    }));

    return {
      audienciaCards,
      mensagensCards,
      allCards: [...audienciaCards, ...mensagensCards],
    };
  }, []);

  const criativosFiltrados = useMemo(() => {
    if (filter === "audiencia") return featured.audienciaCards;
    if (filter === "mensagens") return featured.mensagensCards;
    return featured.allCards;
  }, [featured, filter]);

  const tabelaAudiencia = useMemo(() => {
    return [...criativosAudienciaTodos].sort((a, b) => b.ctr - a.ctr).slice(0, 15);
  }, []);

  const tabelaMensagens = useMemo(() => {
    return [...criativosMensagensTodos]
      .filter((c) => c.custoConversa !== null && c.conversas > 0)
      .sort((a, b) => (a.custoConversa ?? Infinity) - (b.custoConversa ?? Infinity))
      .slice(0, 15);
  }, []);

  return (
    <SlideContent className="overflow-y-auto h-full py-8 px-4 md:px-8">
      <SlideHeader
        badge={`${estatisticasHero.criativosAnalisados} Criativos (${criativosAudienciaTodos.length} audiência + ${criativosMensagensTodos.length} mensagens)`}
        title="Top Performers"
        subtitle="Destaques com contexto de período e volume (evita leitura distorcida por baixa amostra)"
      />

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex justify-center gap-2 mb-8"
      >
        {[
          { key: "todos", label: "Todos", icon: Star },
          { key: "audiencia", label: "Audiencia", icon: Users },
          { key: "mensagens", label: "Mensagens", icon: MessageCircle },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key as FilterType)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all ${
              filter === tab.key
                ? "bg-[var(--gold-primary)] text-[var(--bg-primary)]"
                : "bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)]"
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </motion.div>

      {/* Nota de leitura */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="mb-6"
      >
        <div className="flex items-start gap-3 bg-[var(--bg-secondary)] border border-[var(--gold-dark)]/20 rounded-xl p-4">
          <div className="p-2 rounded-lg bg-[var(--gold-muted)]">
            <ShieldAlert className="w-4 h-4 text-[var(--gold-primary)]" />
          </div>
          <div className="text-sm text-[var(--text-secondary)] leading-relaxed">
            <span className="text-[var(--text-primary)] font-medium">Leitura:</span>{" "}
            CTR e custo podem parecer “campeões” quando o volume é baixo. Por isso, os destaques de mensagens priorizam{" "}
            <span className="text-[var(--text-primary)] font-medium">custo/conversa com volume</span> e cards marcados
            como <span className="text-[var(--gold-primary)] font-medium">baixa amostra</span> aparecem apenas como
            referência.
          </div>
        </div>
      </motion.div>

      {/* Creative Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8"
      >
        {criativosFiltrados.map((criativo, index) => (
          <CriativoCard key={criativo.id} criativo={criativo} index={index} />
        ))}
      </motion.div>

      {/* Tabelas (mais criativos) */}
      {(filter === "todos" || filter === "audiencia") && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mb-10"
        >
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
            Audiência — Top 15 (CTR) com período e volume
          </h3>
          <TabelaAudiencia rows={tabelaAudiencia} />
        </motion.div>
      )}

      {(filter === "todos" || filter === "mensagens") && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mb-10"
        >
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
            Mensagens — Top 15 (custo/conversa) com período e volume
          </h3>
          <TabelaMensagens rows={tabelaMensagens} />
        </motion.div>
      )}

      {/* Insights resumidos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <InsightCard
          icon={Play}
          titulo="Formato Vencedor"
          valor="Reels/Videos"
          descricao="8 de 10 top performers"
        />
        <InsightCard
          icon={TrendingUp}
          titulo="Melhor Colecao"
          valor="AURA Viva"
          descricao="CTR 6.24% e custo R$3-10/conversa"
        />
        <InsightCard
          icon={Users}
          titulo="Influenciadora Destaque"
          valor="Layla Monteiro"
          descricao="Maior CTR do período (com volume)"
        />
      </motion.div>
    </SlideContent>
  );
}

interface CriativoCardProps {
  criativo: FeaturedCriativo;
  index: number;
}

function CriativoCard({ criativo, index }: CriativoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.1 }}
      className="group relative aspect-square rounded-xl overflow-hidden bg-[var(--bg-secondary)] border border-[var(--gold-dark)]/20"
    >
      {/* Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={criativo.imagem ? { backgroundImage: `url(${criativo.imagem})` } : undefined}
      />

      {!criativo.imagem && (
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-elevated)] via-[var(--bg-secondary)] to-black/60" />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      {/* Destaque badge */}
      {criativo.destaque && (
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 text-[10px] font-medium uppercase tracking-wider rounded-full bg-[var(--gold-primary)] text-[var(--bg-primary)]">
            {criativo.destaque}
          </span>
        </div>
      )}

      {/* Baixa amostra */}
      {criativo.amostra === "baixa" && (
        <div className="absolute top-3 left-3 translate-y-7">
          <span className="px-2 py-1 text-[10px] font-medium uppercase tracking-wider rounded-full bg-[var(--gold-muted)] text-[var(--gold-primary)] border border-[var(--gold-dark)]/40">
            Baixa amostra
          </span>
        </div>
      )}

      {/* Category badge */}
      <div className="absolute top-3 right-3">
        {criativo.categoria === "audiencia" ? (
          <Users className="w-4 h-4 text-[var(--gold-light)]" />
        ) : (
          <MessageCircle className="w-4 h-4 text-[var(--success)]" />
        )}
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-xs text-[var(--gold-light)] uppercase tracking-wider mb-1">
          {criativo.periodo} • {formatRangeDDMM(criativo.inicioRelatorio, criativo.fimRelatorio)}
        </p>
        <h4 className="text-sm font-semibold text-white mb-2 line-clamp-2">
          {criativo.nome}
        </h4>

        {/* Metrics */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] text-[var(--text-muted)] uppercase">
              {criativo.metricaPrincipal.label}
            </p>
            <p className="text-lg font-bold text-white">
              {formatMetrica(
                criativo.metricaPrincipal.valor,
                criativo.metricaPrincipal.format
              )}
            </p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-[var(--text-muted)] uppercase">
              {criativo.metricaSecundaria.label}
            </p>
            <p className="text-sm text-[var(--text-secondary)]">
              {formatMetrica(
                criativo.metricaSecundaria.valor,
                criativo.metricaSecundaria.format
              )}
            </p>
          </div>
        </div>

        <p className="mt-2 text-[10px] text-white/70 leading-snug line-clamp-2">
          {criativo.volumeLinha}
        </p>
      </div>

      {/* Tipo badge */}
      <div className="absolute bottom-4 right-4">
        {criativo.tipo === "reel" || criativo.tipo === "video" ? (
          <Play className="w-5 h-5 text-white/60" />
        ) : (
          <ImageIcon className="w-5 h-5 text-white/60" />
        )}
      </div>

      {/* Link (quando houver) */}
      {criativo.instagramUrl && (
        <a
          href={criativo.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="absolute bottom-3 left-3 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 border border-white/10 text-[10px] text-white/80 hover:text-white hover:border-white/20 transition-colors"
        >
          <LinkIcon className="w-3 h-3" />
          Ver post
        </a>
      )}
    </motion.div>
  );
}

interface InsightCardProps {
  icon: React.ComponentType<{ className?: string }>;
  titulo: string;
  valor: string;
  descricao: string;
}

function InsightCard({ icon: Icon, titulo, valor, descricao }: InsightCardProps) {
  return (
    <div className="bg-[var(--bg-secondary)] border border-[var(--gold-dark)]/20 rounded-xl p-4">
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-4 h-4 text-[var(--gold-primary)]" />
        <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider">
          {titulo}
        </span>
      </div>
      <p className="text-lg font-bold text-[var(--text-primary)] mb-1">{valor}</p>
      <p className="text-xs text-[var(--text-secondary)]">{descricao}</p>
    </div>
  );
}

function TabelaAudiencia({ rows }: { rows: CriativoAudiencia[] }) {
  return (
    <div className="bg-[var(--bg-secondary)] border border-[var(--gold-dark)]/20 rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-[900px] w-full text-left">
          <thead className="bg-[var(--bg-card)]/60">
            <tr className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
              <th className="p-3">Criativo</th>
              <th className="p-3">Período</th>
              <th className="p-3">CTR</th>
              <th className="p-3">CPC</th>
              <th className="p-3">Investido</th>
              <th className="p-3">Impr</th>
              <th className="p-3">Cliques</th>
              <th className="p-3">Visitas</th>
              <th className="p-3">Amostra</th>
            </tr>
          </thead>
          <tbody className="text-xs">
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-white/5">
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-[var(--text-primary)]">{r.nome}</span>
                    {r.instagramUrl && (
                      <a
                        href={r.instagramUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[var(--gold-primary)]/80 hover:text-[var(--gold-primary)]"
                        aria-label={`Abrir ${r.nome} no Instagram`}
                      >
                        <LinkIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </td>
                <td className="p-3 text-[var(--text-secondary)]">
                  {r.periodo} • {formatRangeDDMM(r.inicioRelatorio, r.fimRelatorio)}
                </td>
                <td className="p-3 text-white">{formatPercent(r.ctr)}</td>
                <td className="p-3 text-[var(--text-secondary)]">
                  {r.cpc !== null ? formatCurrency(r.cpc) : "—"}
                </td>
                <td className="p-3 text-[var(--text-secondary)]">{formatCurrency(r.investido)}</td>
                <td className="p-3 text-[var(--text-secondary)]">{formatNumber(r.impressoes)}</td>
                <td className="p-3 text-[var(--text-secondary)]">{formatNumber(r.cliquesLink)}</td>
                <td className="p-3 text-[var(--text-secondary)]">{formatNumber(r.visitasPerfil)}</td>
                <td className="p-3">
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] border ${
                      amostraAudiencia(r) === "ok"
                        ? "border-[var(--success)]/30 text-[var(--success)]"
                        : "border-[var(--gold-dark)]/40 text-[var(--gold-primary)]"
                    }`}
                  >
                    {amostraAudiencia(r) === "ok" ? "OK" : "Baixa"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TabelaMensagens({ rows }: { rows: CriativoMensagens[] }) {
  return (
    <div className="bg-[var(--bg-secondary)] border border-[var(--gold-dark)]/20 rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-[980px] w-full text-left">
          <thead className="bg-[var(--bg-card)]/60">
            <tr className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
              <th className="p-3">Criativo</th>
              <th className="p-3">Período</th>
              <th className="p-3">Custo/Conv</th>
              <th className="p-3">Conv</th>
              <th className="p-3">CTR</th>
              <th className="p-3">CPC</th>
              <th className="p-3">Investido</th>
              <th className="p-3">Impr</th>
              <th className="p-3">Cliques</th>
              <th className="p-3">Amostra</th>
            </tr>
          </thead>
          <tbody className="text-xs">
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-white/5">
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-[var(--text-primary)]">{r.nome}</span>
                    {r.instagramUrl && (
                      <a
                        href={r.instagramUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[var(--gold-primary)]/80 hover:text-[var(--gold-primary)]"
                        aria-label={`Abrir ${r.nome} no Instagram`}
                      >
                        <LinkIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </td>
                <td className="p-3 text-[var(--text-secondary)]">
                  {r.periodo} • {formatRangeDDMM(r.inicioRelatorio, r.fimRelatorio)}
                </td>
                <td className="p-3 text-white">
                  {r.custoConversa !== null ? formatCurrency(r.custoConversa) : "—"}
                </td>
                <td className="p-3 text-[var(--text-secondary)]">{formatNumber(r.conversas)}</td>
                <td className="p-3 text-[var(--text-secondary)]">{formatPercent(r.ctr)}</td>
                <td className="p-3 text-[var(--text-secondary)]">{r.cpc !== null ? formatCurrency(r.cpc) : "—"}</td>
                <td className="p-3 text-[var(--text-secondary)]">{formatCurrency(r.investido)}</td>
                <td className="p-3 text-[var(--text-secondary)]">{formatNumber(r.impressoes)}</td>
                <td className="p-3 text-[var(--text-secondary)]">{formatNumber(r.cliquesLink)}</td>
                <td className="p-3">
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] border ${
                      amostraMensagens(r) === "ok"
                        ? "border-[var(--success)]/30 text-[var(--success)]"
                        : "border-[var(--gold-dark)]/40 text-[var(--gold-primary)]"
                    }`}
                  >
                    {amostraMensagens(r) === "ok" ? "OK" : "Baixa"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
