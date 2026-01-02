"use client";

import { motion } from "framer-motion";
import { Check, Star, MessageCircle, Mail, ArrowRight, Calendar, Target, Rocket, Trophy } from "lucide-react";
import { SlideContent, SlideHeader } from "./SlideContainer";
import { proposta, formatCurrency } from "@/lib/data";

// Plano 30/60/90 dias
const roadmap = [
  {
    periodo: "30 dias",
    titulo: "Otimizacao",
    icon: Target,
    acoes: [
      "Reativar campanhas AURA",
      "Expandir Reels com influenciadoras",
      "Ajustar publicos por regiao (SP, SC, PR)",
    ],
    meta: "Reduzir custo/conversa em 20%",
  },
  {
    periodo: "60 dias",
    titulo: "Escala",
    icon: Rocket,
    acoes: [
      "Lancar Stories Origem",
      "Testar novos influenciadores",
      "Remarketing dinamico",
    ],
    meta: "Aumentar conversas em 30%",
  },
  {
    periodo: "90 dias",
    titulo: "Consolidacao",
    icon: Trophy,
    acoes: [
      "Preparar campanhas Dia das Maes",
      "Consolidar aprendizados",
      "Definir estrategia 2o semestre",
    ],
    meta: "ROI positivo consolidado",
  },
];

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
      className={`relative p-4 rounded-xl ${
        highlighted
          ? "bg-gradient-to-br from-[var(--gold-muted)] to-[var(--bg-secondary)] border-2 border-[var(--gold-primary)]"
          : "bg-[var(--bg-secondary)] border border-[var(--gold-dark)]/20"
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

      <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-2">
        {title}
      </h3>

      <div className="mb-2">
        <span className="text-2xl font-bold text-[var(--gold-primary)]">
          {formatCurrency(price)}
        </span>
        <span className="text-[var(--text-muted)] ml-1 text-xs">{period}</span>
      </div>

      {equivalent && (
        <p className="text-xs text-[var(--text-secondary)] mb-1">
          Equivale a {equivalent}
        </p>
      )}

      {savings && (
        <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[var(--success-muted)] text-[var(--success)] text-[10px] font-medium">
          <Check className="w-2.5 h-2.5" />
          {savings}
        </div>
      )}
    </motion.div>
  );
}

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
    <SlideContent className="overflow-y-auto h-full py-8 px-4 md:px-8">
      <SlideHeader
        badge="Proximos Passos"
        title="Proposta"
        subtitle="Plano de acao e investimento para 2026"
      />

      {/* Roadmap 30/60/90 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-10"
      >
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-5 h-5 text-[var(--gold-primary)]" />
          <h3 className="text-lg font-semibold text-[var(--text-primary)]">
            Plano 30/60/90 Dias
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {roadmap.map((fase, index) => (
            <motion.div
              key={fase.periodo}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-[var(--bg-secondary)] border border-[var(--gold-dark)]/20 rounded-xl p-4"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded-lg bg-[var(--gold-muted)]">
                  <fase.icon className="w-4 h-4 text-[var(--gold-primary)]" />
                </div>
                <div>
                  <p className="text-xs text-[var(--gold-primary)] uppercase tracking-wider">
                    {fase.periodo}
                  </p>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">
                    {fase.titulo}
                  </p>
                </div>
              </div>

              <ul className="space-y-2 mb-3">
                {fase.acoes.map((acao, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                    <Check className="w-3 h-3 mt-0.5 text-[var(--success)] flex-shrink-0" />
                    {acao}
                  </li>
                ))}
              </ul>

              <div className="pt-3 border-t border-[var(--gold-dark)]/10">
                <p className="text-xs text-[var(--text-muted)]">Meta:</p>
                <p className="text-sm font-medium text-[var(--gold-primary)]">
                  {fase.meta}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Pricing cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-8"
      >
        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
          Investimento
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <PriceCard
            title="Mensal"
            price={proposta.mensal}
            period="/mes"
            delay={0.6}
          />

          <PriceCard
            title="Trimestral"
            price={proposta.trimestral}
            period="em 3x"
            equivalent="R$ 1.300/mes"
            savings="Economia de 13%"
            highlighted
            delay={0.7}
          />

          <PriceCard
            title="Semestral"
            price={proposta.semestral}
            period="em 6x"
            equivalent="R$ 1.000/mes"
            savings="Economia de 33%"
            delay={0.8}
          />
        </div>
      </motion.div>

      {/* Incluso / Nao incluso - versao compacta */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="grid grid-cols-2 gap-4 mb-8"
      >
        <div className="bg-[var(--bg-secondary)] border border-[var(--gold-dark)]/20 rounded-xl p-4">
          <h4 className="flex items-center gap-2 text-xs font-semibold text-[var(--success)] mb-2">
            <Check className="w-3 h-3" />
            Incluso
          </h4>
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>Gestao Meta Ads</li>
            <li>Otimizacao de publicos</li>
            <li>Testes A/B</li>
            <li>Relatorios mensais</li>
          </ul>
        </div>

        <div className="bg-[var(--bg-secondary)] border border-[var(--gold-dark)]/20 rounded-xl p-4">
          <h4 className="text-xs font-semibold text-[var(--text-muted)] mb-2">
            Nao incluso
          </h4>
          <ul className="space-y-1 text-xs text-[var(--text-muted)]">
            <li>Producao de fotos/videos</li>
            <li>Budget de midia</li>
            <li>Google/TikTok Ads</li>
            <li>Landing pages</li>
          </ul>
        </div>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="flex flex-col sm:flex-row gap-3 justify-center"
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[var(--gold-primary)] text-[var(--bg-primary)] font-semibold transition-all duration-300 hover:scale-105"
        >
          <MessageCircle className="w-4 h-4" />
          Falar no WhatsApp
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>

        <a
          href={emailUrl}
          className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-[var(--gold-dark)] text-[var(--text-primary)] font-semibold transition-all duration-300 hover:border-[var(--gold-primary)] hover:bg-[var(--gold-muted)]"
        >
          <Mail className="w-4 h-4" />
          Enviar Email
        </a>
      </motion.div>

      {/* Contato info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-6 text-center text-xs text-[var(--text-muted)]"
      >
        <span>{proposta.contato.whatsapp}</span>
        <span className="mx-2">|</span>
        <span>{proposta.contato.email}</span>
      </motion.div>
    </SlideContent>
  );
}
