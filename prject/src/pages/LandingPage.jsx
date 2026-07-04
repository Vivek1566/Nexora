import React from 'react';
import { PublicLayout } from '../components/layout/PublicLayout';
import { HeroSection } from '../components/landing/HeroSection';
import { StatsSection } from '../components/landing/StatsSection';
import { JourneySection } from '../components/landing/JourneySection';
import { MarketingSections } from '../components/landing/MarketingSections';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function LandingPage() {
  useScrollReveal();

  return (
    <PublicLayout>
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 lg:py-24 w-full">
        <HeroSection />
        <StatsSection />
        <JourneySection />
        <div className="mt-16 lg:mt-24">
          <MarketingSections />
        </div>
      </main>
    </PublicLayout>
  );
}
