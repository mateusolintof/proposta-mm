"use client";

import { motion } from "framer-motion";
import { SlideContent, SlideHeader } from "./SlideContainer";
import { criativosAudiencia, criativosMensagens, formatCurrency, formatPercent } from "@/lib/data";
import { Play, Image as ImageIcon, Users, MessageCircle, Star, TrendingUp } from "lucide-react";
import { useState } from "react";

// Mapeamento de criativos para imagens disponíveis
const imagensDisponiveis = [
  { id: "diamonds-1", src: "/ads/mm-diamonds-01.jpg", colecao: "MM Diamonds" },
  { id: "diamonds-2", src: "/ads/mm-diamonds-02.jpg", colecao: "MM Diamonds" },
  { id: "diamonds-3", src: "/ads/mm-diamonds-03.jpg", colecao: "MM Diamonds" },
  { id: "anel-1", src: "/ads/mm-anel-01.jpg", colecao: "AURA" },
  { id: "colar-1", src: "/ads/mm-colar-01.jpg", colecao: "Origem" },
  { id: "esmeraldas-1", src: "/ads/mm-esmeraldas-01.jpg", colecao: "Mix" },
];

// Top 6 criativos para exibição (3 audiência + 3 mensagens)
const topCriativos = [
  {
    ...criativosAudiencia[0],
    categoria: "audiencia" as const,
    imagem: imagensDisponiveis[3].src, // AURA
    metricaPrincipal: { label: "CTR", valor: criativosAudiencia[0].ctr, format: "percent" },
    metricaSecundaria: { label: "CPC", valor: criativosAudiencia[0].cpc, format: "currency" },
  },
  {
    ...criativosMensagens[4],
    categoria: "mensagens" as const,
    imagem: imagensDisponiveis[3].src, // AURA
    metricaPrincipal: { label: "Conversas", valor: criativosMensagens[4].conversas, format: "number" },
    metricaSecundaria: { label: "Custo", valor: criativosMensagens[4].custoConversa, format: "currency" },
  },
  {
    ...criativosAudiencia[2],
    categoria: "audiencia" as const,
    imagem: imagensDisponiveis[0].src, // Diamonds
    metricaPrincipal: { label: "CTR", valor: criativosAudiencia[2].ctr, format: "percent" },
    metricaSecundaria: { label: "Visitas", valor: criativosAudiencia[2].visitasPerfil, format: "number" },
  },
  {
    ...criativosMensagens[1],
    categoria: "mensagens" as const,
    imagem: imagensDisponiveis[1].src,
    metricaPrincipal: { label: "CTR", valor: criativosMensagens[1].ctr, format: "percent" },
    metricaSecundaria: { label: "Custo", valor: criativosMensagens[1].custoConversa, format: "currency" },
  },
  {
    ...criativosAudiencia[5],
    categoria: "audiencia" as const,
    imagem: imagensDisponiveis[4].src, // Origem
    metricaPrincipal: { label: "CTR", valor: criativosAudiencia[5].ctr, format: "percent" },
    metricaSecundaria: { label: "CPC", valor: criativosAudiencia[5].cpc, format: "currency" },
  },
  {
    ...criativosMensagens[0],
    categoria: "mensagens" as const,
    imagem: imagensDisponiveis[4].src, // Origem
    metricaPrincipal: { label: "Custo", valor: criativosMensagens[0].custoConversa, format: "currency" },
    metricaSecundaria: { label: "CTR", valor: criativosMensagens[0].ctr, format: "percent" },
  },
];

const formatMetrica = (valor: number, format: string) => {
  switch (format) {
    case "currency":
      return formatCurrency(valor);
    case "percent":
      return formatPercent(valor);
    default:
      return valor.toLocaleString("pt-BR");
  }
};

type FilterType = "todos" | "audiencia" | "mensagens";

export function SlideCriativos() {
  const [filter, setFilter] = useState<FilterType>("todos");

  const criativosFiltrados = filter === "todos"
    ? topCriativos
    : topCriativos.filter(c => c.categoria === filter);

  return (
    <SlideContent className="overflow-y-auto h-full py-8 px-4 md:px-8">
      <SlideHeader
        badge="74 Criativos Analisados"
        title="Top Performers"
        subtitle="Os criativos com melhor desempenho no periodo"
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
          descricao="CTR 7.45% - maior do periodo"
        />
      </motion.div>
    </SlideContent>
  );
}

interface CriativoCardProps {
  criativo: typeof topCriativos[0];
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
        style={{ backgroundImage: `url(${criativo.imagem})` }}
      />

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
          {criativo.campanha}
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
      </div>

      {/* Tipo badge */}
      <div className="absolute bottom-4 right-4">
        {criativo.tipo === "reel" || criativo.tipo === "video" ? (
          <Play className="w-5 h-5 text-white/60" />
        ) : (
          <ImageIcon className="w-5 h-5 text-white/60" />
        )}
      </div>
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
