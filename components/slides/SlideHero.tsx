"use client";

import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { SlideContent } from "./SlideContainer";

export function SlideHero() {
  return (
    <SlideContent className="flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
          <Sparkles className="w-4 h-4 text-[var(--gold-primary)]" />
          <span className="text-sm text-[var(--text-secondary)]">Jul - Dez 2025</span>
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
      >
        <span className="text-[var(--text-primary)]">6 meses de</span>
        <br />
        <span className="text-gradient-gold glow-gold-text">resultados</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mb-12"
      >
        Eficiencia e previsibilidade para escalar demanda via Meta Ads.
        <br className="hidden md:block" />
        Foco em visitas ao perfil, conversas no WhatsApp e construcao de marca.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center gap-2 text-[var(--text-muted)]"
        >
          <span className="text-sm hidden md:block">Pressione espaco ou use as setas</span>
          <span className="text-sm md:hidden">Deslize para continuar</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </SlideContent>
  );
}
