"use client";

import { useSlideNavigation } from "@/hooks/useSlideNavigation";
import { useSwipe } from "@/hooks/useSwipe";
import { ProgressBar } from "@/components/navigation/ProgressBar";
import { SlideNav } from "@/components/navigation/SlideNav";
import {
  SlideIndicators,
  SlideIndicatorsMobile,
} from "@/components/navigation/SlideIndicators";
import { SlideContainer } from "@/components/slides/SlideContainer";

// Slides - Nova estrutura consolidada (5 slides)
import { SlideHero } from "@/components/slides/SlideHero";
import { SlideResultados } from "@/components/slides/SlideResultados";
import { SlideCriativos } from "@/components/slides/SlideCriativos";
import { SlideInsights } from "@/components/slides/SlideInsights";
import { SlideProposta } from "@/components/slides/SlideProposta";

const SLIDES = [
  { id: "hero", component: SlideHero },           // 0: Capa minimalista
  { id: "resultados", component: SlideResultados }, // 1: KPIs + Evolucao + Benchmarks
  { id: "criativos", component: SlideCriativos }, // 2: Grid visual com imagens
  { id: "insights", component: SlideInsights },   // 3: Padroes + Recomendacoes
  { id: "proposta", component: SlideProposta },   // 4: Plano 30/60/90 + Pricing + CTA
];

export default function Home() {
  const {
    currentSlide,
    direction,
    goToSlide,
    goNext,
    goPrev,
    isFirst,
    isLast,
    progress,
  } = useSlideNavigation({ totalSlides: SLIDES.length });

  // Enable swipe navigation on mobile
  useSwipe({
    onSwipeLeft: goNext,
    onSwipeRight: goPrev,
    threshold: 50,
  });

  const CurrentSlideComponent = SLIDES[currentSlide].component;

  return (
    <div className="relative w-full h-screen h-[100dvh] overflow-hidden bg-[var(--bg-primary)]">
      {/* Progress bar */}
      <ProgressBar progress={progress} />

      {/* Navigation arrows (desktop) */}
      <SlideNav
        onPrev={goPrev}
        onNext={goNext}
        isFirst={isFirst}
        isLast={isLast}
      />

      {/* Slide indicators */}
      <SlideIndicators
        totalSlides={SLIDES.length}
        currentSlide={currentSlide}
        onSlideClick={goToSlide}
      />
      <SlideIndicatorsMobile
        totalSlides={SLIDES.length}
        currentSlide={currentSlide}
        onSlideClick={goToSlide}
      />

      {/* Current slide */}
      <SlideContainer isActive={true} direction={direction}>
        <CurrentSlideComponent />
      </SlideContainer>
    </div>
  );
}
