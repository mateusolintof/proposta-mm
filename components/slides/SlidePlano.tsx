"use client";

import { motion } from "framer-motion";
import { Zap, TrendingUp, Target, CheckCircle2 } from "lucide-react";
import { SlideContent, SlideHeader } from "./SlideContainer";

const plano = [
  {
    periodo: "30 dias",
    titulo: "Quick Wins",
    icon: Zap,
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
    itens: [
      "Auditoria completa das campanhas",
      "Testes A/B de criativos",
      "Refinamento de publicos",
      "Otimizacao de lances",
    ],
  },
  {
    periodo: "60 dias",
    titulo: "Escala",
    icon: TrendingUp,
    color: "text-[var(--gold-primary)]",
    bgColor: "bg-[var(--gold-muted)]",
    itens: [
      "Remarketing em camadas",
      "Escala de campanhas vencedoras",
      "Criativos sazonais",
      "Testes de Advantage+",
    ],
  },
  {
    periodo: "90 dias",
    titulo: "Consolidacao",
    icon: Target,
    color: "text-[var(--success)]",
    bgColor: "bg-[var(--success-muted)]",
    itens: [
      "Estrutura evergreen",
      "Playbook de criativos",
      "Sistema de monitoramento",
      "Projecao trimestral",
    ],
  },
];

export function SlidePlano() {
  return (
    <SlideContent>
      <SlideHeader
        badge="Estrategia"
        title="Plano 30/60/90 Dias"
        subtitle="Roadmap de crescimento estruturado"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {plano.map((fase, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.15 }}
            className="card p-5 md:p-6 relative overflow-hidden"
          >
            {/* Decorative gradient */}
            <div className={`absolute top-0 left-0 right-0 h-1 ${fase.bgColor}`} />

            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded-lg ${fase.bgColor}`}>
                <fase.icon className={`w-5 h-5 ${fase.color}`} />
              </div>
              <div>
                <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider">
                  {fase.periodo}
                </p>
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  {fase.titulo}
                </h3>
              </div>
            </div>

            <ul className="space-y-2">
              {fase.itens.map((item, itemIndex) => (
                <motion.li
                  key={itemIndex}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.15 + itemIndex * 0.05 }}
                  className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                >
                  <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${fase.color}`} />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-8 text-center"
      >
        <p className="text-sm text-[var(--text-muted)]">
          Estrategia focada em eficiencia, escala e previsibilidade de resultados
        </p>
      </motion.div>
    </SlideContent>
  );
}
