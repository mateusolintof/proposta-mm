"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Target } from "lucide-react";
import { SlideContent, SlideHeader } from "./SlideContainer";
import { audienciaTotal, benchmarks } from "@/lib/data";
import { NumberTicker } from "../animated/NumberTicker";

interface BenchmarkCompareProps {
  label: string;
  ourValue: number;
  benchmarkMin: number;
  benchmarkMax: number;
  unit: string;
  isLowerBetter: boolean;
  delay: number;
}

function BenchmarkCompare({
  label,
  ourValue,
  benchmarkMin,
  benchmarkMax,
  unit,
  isLowerBetter,
  delay,
}: BenchmarkCompareProps) {
  const isBetter = isLowerBetter
    ? ourValue < benchmarkMin
    : ourValue > benchmarkMax;

  const improvement = isLowerBetter
    ? ((benchmarkMin - ourValue) / benchmarkMin) * 100
    : ((ourValue - benchmarkMax) / benchmarkMax) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="card-gold p-6"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-semibold text-[var(--text-primary)]">{label}</h3>
        {isBetter ? (
          <div className="p-2 rounded-lg bg-[var(--success-muted)]">
            <TrendingUp className="w-5 h-5 text-[var(--success)]" />
          </div>
        ) : (
          <div className="p-2 rounded-lg bg-[var(--gold-muted)]">
            <Target className="w-5 h-5 text-[var(--gold-primary)]" />
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">
            Nosso resultado
          </p>
          <p className="text-2xl md:text-3xl font-bold text-[var(--gold-primary)]">
            {unit === "R$" ? "R$ " : ""}
            <NumberTicker value={ourValue} decimals={2} delay={delay * 1000 + 300} />
            {unit === "%" ? "%" : ""}
          </p>
        </div>

        <div>
          <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">
            Benchmark mercado
          </p>
          <p className="text-2xl md:text-3xl font-medium text-[var(--text-secondary)]">
            {unit === "R$" ? "R$ " : ""}{benchmarkMin.toFixed(2)} - {benchmarkMax.toFixed(2)}{unit === "%" ? "%" : ""}
          </p>
        </div>
      </div>

      {isBetter && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 0.3 }}
          className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--success-muted)] border border-[var(--success)]/30"
        >
          <span className="text-sm font-medium text-[var(--success)]">
            {improvement > 0 ? `${improvement.toFixed(0)}% ${isLowerBetter ? "abaixo" : "acima"} do mercado` : "No benchmark"}
          </span>
        </motion.div>
      )}
    </motion.div>
  );
}

export function SlideBenchmarks() {
  return (
    <SlideContent>
      <SlideHeader
        badge="Comparativo"
        title="Performance vs Mercado"
        subtitle="Nossos resultados comparados aos benchmarks do setor Fashion/Beauty"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BenchmarkCompare
          label="CTR (Taxa de Cliques)"
          ourValue={audienciaTotal.ctrLink}
          benchmarkMin={benchmarks.ctr.min}
          benchmarkMax={benchmarks.ctr.max}
          unit="%"
          isLowerBetter={false}
          delay={0.2}
        />

        <BenchmarkCompare
          label="CPC (Custo por Clique)"
          ourValue={audienciaTotal.cpcLink}
          benchmarkMin={benchmarks.cpc.min}
          benchmarkMax={benchmarks.cpc.max}
          unit="R$"
          isLowerBetter={true}
          delay={0.4}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-8 p-6 rounded-xl bg-gradient-to-r from-[var(--gold-muted)] to-transparent border border-[var(--gold-dark)]/30"
      >
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-full bg-[var(--gold-primary)]">
            <TrendingUp className="w-6 h-6 text-[var(--bg-primary)]" />
          </div>
          <div>
            <p className="text-lg font-semibold text-[var(--text-primary)]">
              Performance muito acima do mercado
            </p>
            <p className="text-sm text-[var(--text-secondary)]">
              CTR 3x maior e CPC 85% menor que a media do setor
            </p>
          </div>
        </div>
      </motion.div>
    </SlideContent>
  );
}
