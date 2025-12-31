"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { NumberTicker, CurrencyTicker, PercentTicker } from "./NumberTicker";
import { cn } from "@/lib/utils";

interface AnimatedKPIProps {
  value: number;
  label: string;
  sublabel?: string;
  type?: "number" | "currency" | "percent";
  icon?: LucideIcon;
  change?: {
    value: string;
    positive: boolean;
  };
  secondary?: boolean;
  delay?: number;
  className?: string;
}

export function AnimatedKPI({
  value,
  label,
  sublabel,
  type = "number",
  icon: Icon,
  change,
  secondary = false,
  delay = 0,
  className,
}: AnimatedKPIProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className={cn(
        "card p-6 flex flex-col gap-3",
        secondary && "opacity-80",
        !secondary && "card-gold",
        className
      )}
    >
      {secondary && (
        <span className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider">
          Indicador secundario
        </span>
      )}

      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="text-3xl md:text-4xl font-bold text-[var(--gold-primary)]">
            {type === "currency" && <CurrencyTicker value={value} delay={delay * 100 + 300} />}
            {type === "percent" && <PercentTicker value={value} delay={delay * 100 + 300} />}
            {type === "number" && (
              <NumberTicker
                value={value}
                prefix={value > 0 && !sublabel?.includes("total") ? "+" : ""}
                delay={delay * 100 + 300}
              />
            )}
          </div>

          <p className="text-sm md:text-base text-[var(--text-secondary)] mt-1">
            {label}
          </p>

          {sublabel && (
            <p className="text-xs text-[var(--text-muted)] mt-0.5">
              {sublabel}
            </p>
          )}
        </div>

        {Icon && (
          <div className={cn(
            "p-2 rounded-lg",
            secondary ? "bg-[var(--bg-elevated)]" : "bg-[var(--gold-muted)]"
          )}>
            <Icon className={cn(
              "w-5 h-5",
              secondary ? "text-[var(--text-muted)]" : "text-[var(--gold-primary)]"
            )} />
          </div>
        )}
      </div>

      {change && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay * 0.1 + 0.5 }}
          className={cn(
            "inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium w-fit",
            change.positive
              ? "bg-[var(--success-muted)] text-[var(--success)]"
              : "bg-red-900/30 text-red-400"
          )}
        >
          {change.value}
        </motion.div>
      )}
    </motion.div>
  );
}
