"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { SlideContent, SlideHeader } from "./SlideContainer";
import { proposta } from "@/lib/data";
import { CurrencyTicker } from "../animated/NumberTicker";

interface PriceCardProps {
  title: string;
  price: number;
  period: string;
  equivalent?: string;
  savings?: string;
  highlighted?: boolean;
  delay: number;
}

function PriceCard({
  title,
  price,
  period,
  equivalent,
  savings,
  highlighted = false,
  delay,
}: PriceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`relative p-6 rounded-2xl ${
        highlighted
          ? "card-gold glow-gold scale-105"
          : "card"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full bg-[var(--gold-primary)] text-[var(--bg-primary)]">
            <Star className="w-3 h-3" />
            Recomendado
          </span>
        </div>
      )}

      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
        {title}
      </h3>

      <div className="mb-4">
        <span className="text-3xl md:text-4xl font-bold text-[var(--gold-primary)]">
          <CurrencyTicker value={price} delay={delay * 1000 + 300} />
        </span>
        <span className="text-[var(--text-muted)] ml-2">{period}</span>
      </div>

      {equivalent && (
        <p className="text-sm text-[var(--text-secondary)] mb-2">
          Equivale a {equivalent}
        </p>
      )}

      {savings && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 0.3 }}
          className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-[var(--success-muted)] text-[var(--success)] text-sm font-medium"
        >
          <Check className="w-3 h-3" />
          {savings}
        </motion.div>
      )}
    </motion.div>
  );
}

export function SlideProposta() {
  return (
    <SlideContent>
      <SlideHeader
        badge="Investimento"
        title="Proposta de Renovacao"
        subtitle="Opcoes flexiveis para continuidade do trabalho"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <PriceCard
          title="Mensal"
          price={proposta.mensal}
          period="/mes"
          delay={0.2}
        />

        <PriceCard
          title="Trimestral"
          price={proposta.trimestral}
          period="em 3x"
          equivalent="R$ 1.300/mes"
          savings="Economia de 13%"
          highlighted
          delay={0.35}
        />

        <PriceCard
          title="Semestral"
          price={proposta.semestral}
          period="em 6x"
          equivalent="R$ 1.000/mes"
          savings="Economia de 33%"
          delay={0.5}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="card p-5">
          <h4 className="flex items-center gap-2 text-sm font-semibold text-[var(--success)] mb-3">
            <Check className="w-4 h-4" />
            O que esta incluso
          </h4>
          <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 mt-0.5 text-[var(--gold-dark)]" />
              Gestao completa de campanhas Meta Ads
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 mt-0.5 text-[var(--gold-dark)]" />
              Criacao e otimizacao de publicos
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 mt-0.5 text-[var(--gold-dark)]" />
              Testes A/B de criativos e copy
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 mt-0.5 text-[var(--gold-dark)]" />
              Relatorios mensais + reunioes quinzenais
            </li>
          </ul>
        </div>

        <div className="card p-5">
          <h4 className="text-sm font-semibold text-[var(--text-muted)] mb-3">
            Nao incluso
          </h4>
          <ul className="space-y-2 text-sm text-[var(--text-muted)]">
            <li>• Producao de fotos/videos</li>
            <li>• Budget de midia (pago ao Meta)</li>
            <li>• Outras plataformas (Google, TikTok)</li>
            <li>• Landing pages / desenvolvimento web</li>
          </ul>
        </div>
      </motion.div>
    </SlideContent>
  );
}
