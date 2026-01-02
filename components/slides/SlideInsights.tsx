"use client";

import { motion } from "framer-motion";
import { SlideContent, SlideHeader } from "./SlideContainer";
import { padroesIdentificados, insightsConsolidados, estatisticasHero } from "@/lib/data";
import {
  Play,
  Layers,
  Users,
  Calendar,
  ArrowRight,
  Lightbulb,
  Target,
  TrendingUp,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const padraoIcons = {
  formato: Play,
  colecao: Layers,
  influenciador: Users,
  timing: Calendar,
};

export function SlideInsights() {
  return (
    <SlideContent className="overflow-y-auto h-full py-8 px-4 md:px-8">
      <SlideHeader
        badge={`Analise de ${estatisticasHero.criativosAnalisados} Criativos`}
        title="Insights & Padroes"
        subtitle="O que aprendemos e como aplicar em 2026"
      />

      {/* Padroes Identificados */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-10"
      >
        <div className="flex items-center gap-2 mb-6">
          <Lightbulb className="w-5 h-5 text-[var(--gold-primary)]" />
          <h3 className="text-lg font-semibold text-[var(--text-primary)]">
            Padroes Identificados
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(padroesIdentificados).map(([key, padrao], index) => {
            const Icon = padraoIcons[key as keyof typeof padraoIcons];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-[var(--bg-secondary)] border border-[var(--gold-dark)]/20 rounded-xl p-5"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-[var(--gold-muted)]">
                    <Icon className="w-4 h-4 text-[var(--gold-primary)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)]">
                      {padrao.titulo}
                    </h4>
                    <p className="text-sm text-[var(--text-secondary)]">
                      {padrao.descricao}
                    </p>
                  </div>
                </div>
                <div className="pl-11">
                  <p className="text-xs text-[var(--gold-primary)] flex items-center gap-1">
                    <ArrowRight className="w-3 h-3" />
                    {padrao.recomendacao}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* O que Funcionou */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-10"
      >
        <div className="flex items-center gap-2 mb-6">
          <CheckCircle2 className="w-5 h-5 text-[var(--success)]" />
          <h3 className="text-lg font-semibold text-[var(--text-primary)]">
            O que Funcionou
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {insightsConsolidados.oQueFuncionou.map((item, index) => (
            <motion.div
              key={item.titulo}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="bg-gradient-to-br from-[var(--success-muted)]/30 to-transparent border border-[var(--success)]/20 rounded-xl p-4"
            >
              <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">
                {item.titulo}
              </p>
              <p className="text-xl font-bold text-[var(--success)] mb-1">
                {item.metrica}
              </p>
              <p className="text-[10px] text-[var(--text-secondary)]">
                {item.contexto}
              </p>
              <p className="text-xs text-[var(--text-primary)] mt-2 font-medium">
                {item.impacto}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Recomendacoes 2026 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mb-10"
      >
        <div className="flex items-center gap-2 mb-6">
          <Target className="w-5 h-5 text-[var(--gold-primary)]" />
          <h3 className="text-lg font-semibold text-[var(--text-primary)]">
            Recomendacoes para 2026
          </h3>
        </div>

        <div className="space-y-3">
          {insightsConsolidados.recomendacoes2026.map((rec, index) => (
            <motion.div
              key={rec.area}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="flex items-start gap-4 bg-[var(--bg-secondary)] border border-[var(--gold-dark)]/20 rounded-xl p-4"
            >
              <div
                className={`px-2 py-1 rounded text-[10px] font-medium uppercase tracking-wider ${
                  rec.prioridade === "alta"
                    ? "bg-[var(--gold-primary)] text-[var(--bg-primary)]"
                    : "bg-[var(--bg-elevated)] text-[var(--text-secondary)]"
                }`}
              >
                {rec.prioridade}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-[var(--gold-primary)] uppercase tracking-wider">
                    {rec.area}
                  </span>
                </div>
                <p className="text-sm font-medium text-[var(--text-primary)] mb-1">
                  {rec.acao}
                </p>
                <p className="text-xs text-[var(--text-secondary)]">
                  {rec.justificativa}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Oportunidades */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-5 h-5 text-[var(--gold-light)]" />
          <h3 className="text-lg font-semibold text-[var(--text-primary)]">
            Oportunidades a Explorar
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {insightsConsolidados.oportunidades.map((op, index) => (
            <motion.div
              key={op.titulo}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 + index * 0.1 }}
              className="bg-gradient-to-br from-[var(--gold-muted)] to-transparent border border-[var(--gold-dark)]/30 rounded-xl p-4"
            >
              <h4 className="font-semibold text-[var(--text-primary)] mb-2">
                {op.titulo}
              </h4>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                {op.potencial}
              </p>
              <div className="flex items-center gap-2 text-xs text-[var(--gold-primary)]">
                <TrendingUp className="w-3 h-3" />
                {op.acao}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SlideContent>
  );
}
