"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface SlideContainerProps {
  children: React.ReactNode;
  isActive: boolean;
  direction: number;
  className?: string;
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

export function SlideContainer({
  children,
  isActive,
  direction,
  className,
}: SlideContainerProps) {
  return (
    <AnimatePresence initial={false} custom={direction} mode="wait">
      {isActive && (
        <motion.div
          key="slide"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className={cn("slide", className)}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface SlideContentProps {
  children: React.ReactNode;
  className?: string;
}

export function SlideContent({ children, className }: SlideContentProps) {
  return (
    <div className={cn("w-full max-w-5xl mx-auto", className)}>
      {children}
    </div>
  );
}

interface SlideHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  className?: string;
}

export function SlideHeader({ title, subtitle, badge, className }: SlideHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("text-center mb-8 md:mb-12", className)}
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block px-3 py-1 mb-4 text-xs font-medium uppercase tracking-wider rounded-full bg-[var(--gold-muted)] text-[var(--gold-primary)] border border-[var(--gold-dark)]/30"
        >
          {badge}
        </motion.span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg md:text-xl text-[var(--text-secondary)]">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
