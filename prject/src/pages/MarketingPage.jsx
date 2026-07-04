import React from 'react';
import { PublicLayout } from '../components/layout/PublicLayout';
import { GlassPanel } from '../components/ui/GlassPanel';
import { ButtonPrimary } from '../components/ui/Buttons';
import { MARKETING_CONTENT } from '../data/marketing';
import { Link } from 'react-router-dom';

export default function MarketingPage({ section = 'about' }) {
  const content = MARKETING_CONTENT[section] || MARKETING_CONTENT.about;

  return (
    <PublicLayout>
      <main className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 lg:py-24">
        <GlassPanel className="p-8 md:p-12">
          <p className="text-primary text-label-mono uppercase tracking-[0.3em] mb-4">Nexora</p>
          <h1 className="text-display-lg-mobile md:text-[42px] text-white mb-4">{content.title}</h1>
          <p className="text-body-base text-on-surface-variant max-w-2xl mb-8">{content.description}</p>
          <div className="flex flex-wrap gap-3 mb-10">
            <ButtonPrimary as={Link} to={content.ctaPath}>{content.ctaLabel}</ButtonPrimary>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {content.highlights.map((highlight) => (
              <div key={highlight} className="rounded-2xl border border-outline-variant/20 bg-surface-variant/20 p-5">
                <p className="text-white font-medium">{highlight}</p>
              </div>
            ))}
          </div>
        </GlassPanel>
      </main>
    </PublicLayout>
  );
}
