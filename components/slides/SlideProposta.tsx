"use client";

import { motion } from "framer-motion";
import { Check, Star, MessageCircle, Mail } from "lucide-react";
import { SlideContent, SlideHeader } from "./SlideContainer";
import { proposta, formatCurrency } from "@/lib/data";

interface PriceCardProps {
  title: string;
  price: number;
  period: string;
  equivalent?: string;
  savings?: string;
  footnote: string;
  highlighted?: boolean;
  delay: number;
}

function PriceCard({
  title,
  price,
  period,
  equivalent,
  savings,
  footnote,
  highlighted = false,
  delay,
}: PriceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`relative p-5 sm:p-6 md:p-8 rounded-2xl flex flex-col ${
        highlighted
          ? "bg-gradient-to-br from-[var(--gold-muted)] to-[var(--bg-secondary)] border-2 border-[var(--gold-primary)]"
          : "bg-[var(--bg-secondary)] border border-[var(--gold-dark)]/30"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-full bg-[var(--gold-primary)] text-[var(--bg-primary)]">
            <Star className="w-3.5 h-3.5" />
            Recomendado
          </span>
        </div>
      )}

      <h3 className="text-base sm:text-lg md:text-xl font-bold text-[var(--text-primary)] mb-3 sm:mb-4">
        {title}
      </h3>

      <div className="mb-4">
        <span className="text-3xl sm:text-3xl md:text-4xl font-bold text-[var(--gold-primary)]">
          {formatCurrency(price)}
        </span>
        <span className="text-[var(--text-muted)] ml-2 text-sm">{period}</span>
      </div>

      {equivalent && (
        <p className="text-sm text-[var(--text-secondary)] mb-2">
          Equivale a {equivalent}
        </p>
      )}

      {savings && (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--success-muted)] text-[var(--success)] text-xs font-medium mb-4 w-fit">
          <Check className="w-3 h-3" />
          {savings}
        </div>
      )}

      <div className="mt-auto pt-4 border-t border-[var(--gold-dark)]/20">
        <p className="text-xs text-[var(--text-muted)] italic">
          {footnote}
        </p>
      </div>
    </motion.div>
  );
}

// Itens inclusos no servico
const servicosInclusos = [
  "Gestao Meta Ads",
  "Otimizacao de publicos e criativos",
  "Testes A/B",
  "Relatorios e Analises Mensais",
  "Reports Semanais",
];

export function SlideProposta() {
  const whatsappUrl = `https://wa.me/5562998621000?text=${encodeURIComponent(
    "Ola! Vi a proposta de renovacao e gostaria de conversar."
  )}`;

  const emailUrl = `mailto:${proposta.contato.email}?subject=${encodeURIComponent(
    "Proposta de Renovacao - Trafego Pago"
  )}&body=${encodeURIComponent(
    "Ola Mateus,\n\nVi a proposta de renovacao e gostaria de conversar sobre os detalhes.\n\nAguardo seu retorno."
  )}`;

  return (
    <SlideContent className="overflow-y-auto h-full pt-6 pb-24 px-4 md:py-8 md:px-8">
      <SlideHeader
        badge="Proximos Passos"
        title="Proposta"
        subtitle="Investimento para gestao de trafego pago em 2026"
      />

      {/* Pricing cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-10"
      >
        <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-6">
          Investimento
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          <PriceCard
            title="Mensal"
            price={proposta.mensal}
            period="/mes"
            footnote="* Contrato semestral"
            delay={0.3}
          />

          <PriceCard
            title="Trimestral"
            price={proposta.trimestral}
            period="a vista"
            equivalent="R$ 1.300/mes"
            savings="Economia de 13%"
            footnote="* Contrato trimestral"
            delay={0.4}
          />

          <PriceCard
            title="Semestral"
            price={proposta.semestral}
            period="a vista"
            equivalent="R$ 1.000/mes"
            savings="Economia de 33%"
            footnote="* Contrato semestral"
            highlighted
            delay={0.5}
          />
        </div>
      </motion.div>

      {/* Incluso */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-10"
      >
        <div className="bg-[var(--bg-secondary)] border border-[var(--gold-dark)]/30 rounded-2xl p-6 md:p-8">
          <h4 className="flex items-center gap-2 text-lg font-bold text-[var(--success)] mb-5">
            <Check className="w-5 h-5" />
            Incluso
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {servicosInclusos.map((servico, index) => (
              <motion.li
                key={servico}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-center gap-3 text-sm md:text-base text-[var(--text-secondary)]"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold-primary)]" />
                {servico}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* CTA Buttons - menor destaque */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="flex flex-col sm:flex-row gap-3 justify-center"
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[var(--gold-primary)]/80 text-[var(--bg-primary)] text-sm font-medium transition-all duration-300 hover:bg-[var(--gold-primary)]"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          WhatsApp
        </a>

        <a
          href={emailUrl}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-[var(--gold-dark)]/50 text-[var(--text-secondary)] text-sm font-medium transition-all duration-300 hover:border-[var(--gold-primary)] hover:text-[var(--text-primary)]"
        >
          <Mail className="w-3.5 h-3.5" />
          Email
        </a>
      </motion.div>

      {/* Contato info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-4 text-center text-xs text-[var(--text-muted)]"
      >
        <span>{proposta.contato.whatsapp}</span>
        <span className="mx-2">|</span>
        <span>{proposta.contato.email}</span>
      </motion.div>
    </SlideContent>
  );
}
