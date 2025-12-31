"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, ArrowRight } from "lucide-react";
import { SlideContent } from "./SlideContainer";
import { proposta } from "@/lib/data";

export function SlideCTA() {
  const whatsappUrl = `https://wa.me/5562998621000?text=${encodeURIComponent(
    "Ola! Vi a proposta de renovacao e gostaria de conversar."
  )}`;

  const emailUrl = `mailto:${proposta.contato.email}?subject=${encodeURIComponent(
    "Proposta de Renovacao - Trafego Pago"
  )}&body=${encodeURIComponent(
    "Ola Mateus,\n\nVi a proposta de renovacao e gostaria de conversar sobre os detalhes.\n\nAguardo seu retorno."
  )}`;

  return (
    <SlideContent className="flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <span className="text-6xl">🤝</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-4"
      >
        Vamos continuar?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-lg text-[var(--text-secondary)] max-w-xl mb-10"
      >
        Os resultados dos ultimos 6 meses sao a base para escalarmos com seguranca.
        Estou a disposicao para alinharmos os proximos passos.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col sm:flex-row gap-4 mb-8"
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[var(--gold-primary)] text-[var(--bg-primary)] font-semibold text-lg transition-all duration-300 hover:scale-105 animate-pulse-gold"
        >
          <MessageCircle className="w-5 h-5" />
          Falar no WhatsApp
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </a>

        <a
          href={emailUrl}
          className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border-2 border-[var(--gold-dark)] text-[var(--text-primary)] font-semibold text-lg transition-all duration-300 hover:border-[var(--gold-primary)] hover:bg-[var(--gold-muted)]"
        >
          <Mail className="w-5 h-5" />
          Enviar Email
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-[var(--text-muted)] text-sm"
      >
        <p>
          <strong className="text-[var(--text-secondary)]">WhatsApp:</strong>{" "}
          {proposta.contato.whatsapp}
        </p>
        <p>
          <strong className="text-[var(--text-secondary)]">Email:</strong>{" "}
          {proposta.contato.email}
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 text-xs text-[var(--text-muted)]"
      >
        MM Renovacao 2025 | Dados de Jul-Dez/2025
      </motion.p>
    </SlideContent>
  );
}
