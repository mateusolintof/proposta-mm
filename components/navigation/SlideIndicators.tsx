"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SlideIndicatorsProps {
  totalSlides: number;
  currentSlide: number;
  onSlideClick: (index: number) => void;
}

export function SlideIndicators({
  totalSlides,
  currentSlide,
  onSlideClick,
}: SlideIndicatorsProps) {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-2">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSlideClick(index)}
          className={cn(
            "w-2 h-2 rounded-full transition-all duration-300",
            currentSlide === index
              ? "bg-[var(--gold-primary)] scale-125 glow-gold-sm"
              : "bg-[var(--text-muted)] hover:bg-[var(--text-secondary)]"
          )}
          aria-label={`Ir para slide ${index + 1}`}
        />
      ))}
    </div>
  );
}

export function SlideIndicatorsMobile({
  totalSlides,
  currentSlide,
  onSlideClick,
}: SlideIndicatorsProps) {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex md:hidden gap-2 p-2 rounded-full glass">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <motion.button
          key={index}
          onClick={() => onSlideClick(index)}
          className={cn(
            "w-2 h-2 rounded-full transition-colors duration-300",
            currentSlide === index
              ? "bg-[var(--gold-primary)]"
              : "bg-[var(--text-muted)]"
          )}
          animate={{
            scale: currentSlide === index ? 1.5 : 1,
          }}
          transition={{ duration: 0.2 }}
          aria-label={`Ir para slide ${index + 1}`}
        />
      ))}
    </div>
  );
}
