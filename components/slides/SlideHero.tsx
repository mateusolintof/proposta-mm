"use client";

import { motion } from "framer-motion";
import { SlideContent } from "./SlideContainer";

export function SlideHero() {
  return (
    <SlideContent className="flex flex-col items-center justify-center text-center h-full">
      {/* Linha decorativa superior */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-12 h-px bg-[var(--gold-primary)] mb-12"
      />

      {/* Nome da marca */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-[var(--text-primary)] mb-4"
      >
        Monica Metran
      </motion.h1>

      {/* Subtitulo */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-base md:text-lg text-[var(--text-secondary)] font-light tracking-wider uppercase mb-16"
      >
        Relatorio de Performance
      </motion.p>

      {/* Linha decorativa */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="w-24 h-px bg-[var(--gold-dark)] mb-16"
      />

      {/* Periodo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="text-center"
      >
        <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-2">
          Periodo
        </p>
        <p className="text-lg md:text-xl text-[var(--gold-primary)] font-light tracking-wide">
          Julho — Dezembro 2025
        </p>
      </motion.div>

      {/* Rodape minimalista */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <p className="text-xs text-[var(--text-muted)] tracking-wider">
          Meta Ads + Instagram
        </p>
      </motion.div>
    </SlideContent>
  );
}
