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

// Slides
import { SlideHero } from "@/components/slides/SlideHero";
import { SlideKPIs } from "@/components/slides/SlideKPIs";
import { SlideAudiencia } from "@/components/slides/SlideAudiencia";
import { SlideMensagens } from "@/components/slides/SlideMensagens";
import { SlideBenchmarks } from "@/components/slides/SlideBenchmarks";
import { SlideOrganico } from "@/components/slides/SlideOrganico";
import { SlideConquistas } from "@/components/slides/SlideConquistas";
import { SlidePlano } from "@/components/slides/SlidePlano";
import { SlideProposta } from "@/components/slides/SlideProposta";
import { SlideCTA } from "@/components/slides/SlideCTA";

const SLIDES = [
  { id: "hero", component: SlideHero },
  { id: "kpis", component: SlideKPIs },
  { id: "audiencia", component: SlideAudiencia },
  { id: "mensagens", component: SlideMensagens },
  { id: "benchmarks", component: SlideBenchmarks },
  { id: "organico", component: SlideOrganico },
  { id: "conquistas", component: SlideConquistas },
  { id: "plano", component: SlidePlano },
  { id: "proposta", component: SlideProposta },
  { id: "cta", component: SlideCTA },
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
