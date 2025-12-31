"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface SlideNavProps {
  onPrev: () => void;
  onNext: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export function SlideNav({ onPrev, onNext, isFirst, isLast }: SlideNavProps) {
  return (
    <>
      {/* Desktop navigation arrows */}
      <div className="hidden md:block">
        <AnimatePresence>
          {!isFirst && (
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onClick={onPrev}
              className={cn(
                "fixed left-4 top-1/2 -translate-y-1/2 z-50",
                "w-12 h-12 rounded-full",
                "flex items-center justify-center",
                "bg-[var(--bg-secondary)] border border-[var(--gold-dark)]/30",
                "text-[var(--text-secondary)] hover:text-[var(--gold-primary)]",
                "hover:border-[var(--gold-primary)]/50 hover:glow-gold-sm",
                "transition-all duration-300"
              )}
              aria-label="Slide anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {!isLast && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={onNext}
              className={cn(
                "fixed right-16 top-1/2 -translate-y-1/2 z-50",
                "w-12 h-12 rounded-full",
                "flex items-center justify-center",
                "bg-[var(--bg-secondary)] border border-[var(--gold-dark)]/30",
                "text-[var(--text-secondary)] hover:text-[var(--gold-primary)]",
                "hover:border-[var(--gold-primary)]/50 hover:glow-gold-sm",
                "transition-all duration-300"
              )}
              aria-label="Proximo slide"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile swipe hint - only on first slide */}
      {isFirst && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 md:hidden"
        >
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex items-center gap-2 text-[var(--text-muted)] text-sm"
          >
            <span>Deslize para navegar</span>
            <ChevronRight className="w-4 h-4" />
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
