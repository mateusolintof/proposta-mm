"use client";

import { motion } from "framer-motion";
import { SlideContent, SlideHeader } from "./SlideContainer";
import {
  estatisticasHero,
  evolucaoMensal,
  benchmarks,
  formatCurrency,
  formatPercent,
} from "@/lib/data";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { TrendingUp, Users, MessageCircle, Target } from "lucide-react";

const kpis = [
  {
    label: "Investimento Total",
    value: estatisticasHero.totalInvestido,
    format: "currency",
    icon: Target,
    sublabel: "6 meses de campanhas",
  },
  {
    label: "Visitas ao Perfil",
    value: estatisticasHero.visitasPerfil,
    format: "number",
    icon: Users,
    sublabel: "R$ 0,34 por visita",
  },
  {
    label: "Conversas WhatsApp",
    value: estatisticasHero.conversasWhatsApp,
    format: "number",
    icon: MessageCircle,
    sublabel: "R$ 18,73 por conversa",
  },
  {
    label: "CTR Medio",
    value: estatisticasHero.ctrMedio,
    format: "percent",
    icon: TrendingUp,
    sublabel: "vs benchmark 0,7-1,2%",
  },
];

const formatValue = (value: number, format: string) => {
  switch (format) {
    case "currency":
      return formatCurrency(value);
    case "percent":
      return formatPercent(value);
    default:
      return value.toLocaleString("pt-BR");
  }
};

export function SlideResultados() {
  return (
    <SlideContent className="overflow-y-auto h-full py-8 px-4 md:px-8">
      <SlideHeader
        badge="Jul-Dez 2025"
        title="Resultados"
        subtitle="Performance consolidada das campanhas Meta Ads"
      />

      {/* KPIs Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
      >
        {kpis.map((kpi, index) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="bg-[var(--bg-secondary)] border border-[var(--gold-dark)]/20 rounded-xl p-4 md:p-6"
          >
            <div className="flex items-center gap-2 mb-2">
              <kpi.icon className="w-4 h-4 text-[var(--gold-primary)]" />
              <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider">
                {kpi.label}
              </span>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-1">
              {formatValue(kpi.value, kpi.format)}
            </p>
            <p className="text-xs text-[var(--text-secondary)]">{kpi.sublabel}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Evolucao Mensal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-12"
      >
        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
          Evolucao do Custo por Resultado
        </h3>
        <div className="bg-[var(--bg-secondary)] border border-[var(--gold-dark)]/20 rounded-xl p-4 md:p-6">
          <ResponsiveContainer width="100%" height={280}>
            <ComposedChart data={evolucaoMensal} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <XAxis
                dataKey="mes"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "var(--text-muted)", fontSize: 12 }}
              />
              <YAxis
                yAxisId="left"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "var(--text-muted)", fontSize: 12 }}
                tickFormatter={(v) => `R$${v}`}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "var(--text-muted)", fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--gold-dark)",
                  borderRadius: "8px",
                }}
                labelStyle={{ color: "var(--text-primary)" }}
              />
              <Bar
                yAxisId="right"
                dataKey="visitasPerfil"
                fill="var(--gold-muted)"
                radius={[4, 4, 0, 0]}
                name="Visitas ao Perfil"
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="custoVisita"
                stroke="var(--gold-primary)"
                strokeWidth={3}
                dot={{ fill: "var(--gold-primary)", r: 4 }}
                name="Custo/Visita"
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="custoConversa"
                stroke="var(--success)"
                strokeWidth={3}
                dot={{ fill: "var(--success)", r: 4 }}
                name="Custo/Conversa"
                connectNulls
              />
            </ComposedChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[var(--gold-primary)]" />
              <span className="text-xs text-[var(--text-secondary)]">Custo/Visita</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[var(--success)]" />
              <span className="text-xs text-[var(--text-secondary)]">Custo/Conversa</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-[var(--gold-muted)]" />
              <span className="text-xs text-[var(--text-secondary)]">Visitas</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Benchmarks Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mb-8"
      >
        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
          Comparativo com Mercado
        </h3>
        <div className="space-y-4">
          <BenchmarkBar
            label="CTR (Click-Through Rate)"
            value={3.33}
            benchmarkMin={benchmarks.ctr.min}
            benchmarkMax={benchmarks.ctr.max}
            suffix="%"
            isAbove={true}
          />
          <BenchmarkBar
            label="CPC (Custo por Clique)"
            value={0.34}
            benchmarkMin={benchmarks.cpc.min}
            benchmarkMax={benchmarks.cpc.max}
            prefix="R$ "
            isAbove={false}
          />
          <BenchmarkBar
            label="CPM (Custo por Mil)"
            value={11.42}
            benchmarkMin={benchmarks.cpm.valor}
            benchmarkMax={benchmarks.cpm.valor}
            prefix="R$ "
            isAbove={false}
          />
        </div>
      </motion.div>

      {/* Highlight */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="bg-gradient-to-r from-[var(--gold-muted)] to-transparent border border-[var(--gold-dark)]/30 rounded-xl p-6 text-center"
      >
        <p className="text-sm text-[var(--text-secondary)] mb-2">Destaque do Periodo</p>
        <p className="text-xl md:text-2xl font-bold text-[var(--gold-primary)]">
          Custo por conversa reduziu {estatisticasHero.reducaoCusto}%
        </p>
        <p className="text-sm text-[var(--text-muted)] mt-2">
          De R$ 24,42 para R$ 12,99 no segundo trimestre
        </p>
      </motion.div>
    </SlideContent>
  );
}

interface BenchmarkBarProps {
  label: string;
  value: number;
  benchmarkMin: number;
  benchmarkMax: number;
  prefix?: string;
  suffix?: string;
  isAbove: boolean;
}

function BenchmarkBar({
  label,
  value,
  benchmarkMin,
  benchmarkMax,
  prefix = "",
  suffix = "",
  isAbove,
}: BenchmarkBarProps) {
  // Calculate position relative to benchmark range
  const maxValue = Math.max(value, benchmarkMax) * 1.2;
  const valuePercent = (value / maxValue) * 100;
  const benchmarkMinPercent = (benchmarkMin / maxValue) * 100;
  const benchmarkMaxPercent = (benchmarkMax / maxValue) * 100;

  return (
    <div className="bg-[var(--bg-secondary)] border border-[var(--gold-dark)]/20 rounded-xl p-4">
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm text-[var(--text-secondary)]">{label}</span>
        <span className="text-sm font-semibold text-[var(--text-primary)]">
          {prefix}{value.toFixed(2).replace(".", ",")}{suffix}
        </span>
      </div>
      <div className="relative h-4 bg-[var(--bg-primary)] rounded-full overflow-hidden">
        {/* Benchmark range */}
        <div
          className="absolute h-full bg-[var(--text-muted)]/20"
          style={{
            left: `${benchmarkMinPercent}%`,
            width: `${benchmarkMaxPercent - benchmarkMinPercent}%`,
          }}
        />
        {/* Value bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${valuePercent}%` }}
          transition={{ duration: 1, delay: 0.5 }}
          className={`h-full rounded-full ${
            isAbove ? "bg-[var(--success)]" : "bg-[var(--gold-primary)]"
          }`}
        />
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-xs text-[var(--text-muted)]">
          Benchmark: {prefix}{benchmarkMin.toFixed(2).replace(".", ",")}{suffix}
          {benchmarkMin !== benchmarkMax && ` - ${prefix}${benchmarkMax.toFixed(2).replace(".", ",")}${suffix}`}
        </span>
        <span className={`text-xs font-medium ${isAbove ? "text-[var(--success)]" : "text-[var(--gold-primary)]"}`}>
          {isAbove ? "Acima do mercado" : "Abaixo do mercado"}
        </span>
      </div>
    </div>
  );
}
