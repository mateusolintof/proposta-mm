"use client";

import NumberFlow from "@number-flow/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface NumberTickerProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
  delay?: number;
  duration?: number;
}

export function NumberTicker({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
  delay = 0,
  duration = 1500,
}: NumberTickerProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayValue(value);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return (
    <span className={cn("font-mono tabular-nums", className)}>
      {prefix}
      <NumberFlow
        value={displayValue}
        format={{
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        }}
        transformTiming={{
          duration: duration,
          easing: "ease-out",
        }}
        spinTiming={{
          duration: duration,
          easing: "ease-out",
        }}
        opacityTiming={{
          duration: duration / 2,
          easing: "ease-out",
        }}
      />
      {suffix}
    </span>
  );
}

interface CurrencyTickerProps {
  value: number;
  className?: string;
  delay?: number;
}

export function CurrencyTicker({ value, className, delay = 0 }: CurrencyTickerProps) {
  return (
    <NumberTicker
      value={value}
      prefix="R$ "
      decimals={2}
      className={className}
      delay={delay}
    />
  );
}

interface PercentTickerProps {
  value: number;
  className?: string;
  delay?: number;
}

export function PercentTicker({ value, className, delay = 0 }: PercentTickerProps) {
  return (
    <NumberTicker
      value={value}
      suffix="%"
      decimals={2}
      className={className}
      delay={delay}
    />
  );
}
