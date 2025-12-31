"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
  delay?: number;
}

export function GlowCard({
  children,
  className,
  highlight = false,
  delay = 0,
}: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "relative p-6 rounded-2xl",
        "bg-[var(--bg-card)] border",
        highlight
          ? "border-[var(--gold-primary)]/30 glow-gold"
          : "border-white/5",
        className
      )}
    >
      {highlight && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--gold-primary)]/5 to-transparent pointer-events-none" />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
