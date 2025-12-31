"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, TrendingDown, Target, Zap, Users } from "lucide-react";
import { SlideContent, SlideHeader } from "./SlideContainer";

const conquistas = [
  {
    icon: TrendingUp,
    text: "CTR de 3,33% - 3x acima do benchmark de mercado (0,7-1,2%)",
    highlight: "3x acima",
  },
  {
    icon: TrendingDown,
    text: "CPC de R$ 0,34 - 85% abaixo do benchmark (R$ 2,17-6,51)",
    highlight: "85% abaixo",
  },
  {
    icon: Target,
    text: "Custo por conversa reduzido em 47% no 2o semestre",
    highlight: "-47%",
  },
  {
    icon: Zap,
    text: "Dezembro com melhor performance: R$ 8,22 por conversa",
    highlight: "R$ 8,22",
  },
  {
    icon: Users,
    text: "Crescimento de 266% em seguidores organicos no 2o tri",
    highlight: "+266%",
  },
  {
    icon: CheckCircle2,
    text: "494 conversas iniciadas no WhatsApp em 5 meses",
    highlight: "494 conversas",
  },
];

export function SlideConquistas() {
  return (
    <SlideContent>
      <SlideHeader
        badge="Conquistas"
        title="O que Melhorou"
        subtitle="Principais resultados alcancados no periodo"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {conquistas.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="card-gold p-4 flex items-start gap-4"
          >
            <div className="p-2 rounded-lg bg-[var(--gold-muted)] shrink-0">
              <item.icon className="w-5 h-5 text-[var(--gold-primary)]" />
            </div>
            <div>
              <p className="text-sm md:text-base text-[var(--text-secondary)]">
                {item.text.split(item.highlight)[0]}
                <span className="text-[var(--gold-primary)] font-semibold">
                  {item.highlight}
                </span>
                {item.text.split(item.highlight)[1]}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="mt-8 text-center"
      >
        <p className="text-lg text-[var(--text-secondary)]">
          Resultados consistentes que demonstram{" "}
          <span className="text-[var(--gold-primary)] font-semibold">
            eficiencia e previsibilidade
          </span>
        </p>
      </motion.div>
    </SlideContent>
  );
}
