import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FEATURE_CARDS, PRICING_TIERS, SHOWCASE_ITEMS, FAQ_ITEMS, MARKETING_CONTENT } from '../../data/marketing';
import { GlassPanel } from '../ui/GlassPanel';
import { ButtonPrimary, ButtonSecondary } from '../ui/Buttons';

function SectionHeading({ eyebrow, title, description, alignment = 'center' }) {
  return (
    <div className={alignment === 'center' ? 'text-center max-w-3xl mx-auto mb-10' : 'max-w-3xl mb-10'}>
      <p className="text-primary text-label-mono uppercase tracking-[0.3em] mb-3">{eyebrow}</p>
      <h2 className="text-display-lg-mobile md:text-[34px] font-semibold text-white mb-4">{title}</h2>
      <p className="text-body-base text-on-surface-variant">{description}</p>
    </div>
  );
}

export function MarketingSections() {
  const [openQuestion, setOpenQuestion] = useState(0);

  return (
    <div className="w-full space-y-24">
      <section id="features" className="reveal">
        <SectionHeading eyebrow="Platform" title={MARKETING_CONTENT.features.title} description={MARKETING_CONTENT.features.description} />
        <div className="grid gap-6 md:grid-cols-3">
          {FEATURE_CARDS.map((feature) => (
            <GlassPanel key={feature.title} hover className="p-8 h-full">
              <div className={`rounded-2xl bg-gradient-to-br ${feature.accent} p-4 w-fit mb-6`}>
                <span className="material-symbols-outlined text-[28px] text-white">{feature.icon}</span>
              </div>
              <h3 className="text-headline-md text-white mb-3">{feature.title}</h3>
              <p className="text-body-base text-on-surface-variant">{feature.description}</p>
            </GlassPanel>
          ))}
        </div>
      </section>

      <section id="about" className="reveal">
        <GlassPanel className="grid gap-8 p-8 md:p-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeading eyebrow="Why Nexora" title={MARKETING_CONTENT.about.title} description={MARKETING_CONTENT.about.description} alignment="left" />
            <div className="space-y-3">
              {MARKETING_CONTENT.about.highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-outline-variant/20 bg-surface-variant/20 p-6">
            <p className="text-label-mono uppercase tracking-[0.3em] text-primary mb-4">Built to accelerate momentum</p>
            <div className="space-y-4">
              <div className="rounded-xl bg-surface/80 p-4">
                <p className="text-body-sm text-on-surface-variant">Validation score</p>
                <p className="text-display-lg-mobile text-white">87/100</p>
              </div>
              <div className="rounded-xl bg-surface/80 p-4">
                <p className="text-body-sm text-on-surface-variant">Recommended mentors</p>
                <p className="text-display-lg-mobile text-white">14 warm matches</p>
              </div>
              <div className="rounded-xl bg-surface/80 p-4">
                <p className="text-body-sm text-on-surface-variant">Next milestone</p>
                <p className="text-display-lg-mobile text-white">Investor prep</p>
              </div>
            </div>
          </div>
        </GlassPanel>
      </section>

      <section id="pricing" className="reveal">
        <SectionHeading eyebrow="Pricing" title={MARKETING_CONTENT.pricing.title} description={MARKETING_CONTENT.pricing.description} />
        <div className="grid gap-6 lg:grid-cols-3">
          {PRICING_TIERS.map((tier) => (
            <GlassPanel key={tier.name} hover className={`p-8 ${tier.featured ? 'ring-1 ring-primary/40' : ''}`}>
              {tier.featured && <p className="text-primary text-label-mono uppercase tracking-[0.3em] mb-3">Most popular</p>}
              <h3 className="text-headline-md text-white mb-2">{tier.name}</h3>
              <p className="text-body-base text-on-surface-variant mb-6">{tier.description}</p>
              <div className="text-display-lg-mobile text-white mb-6">{tier.price}</div>
              <ul className="space-y-3 mb-8">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-3 text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary">check</span>
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
              <ButtonPrimary className="w-full justify-center">Choose plan</ButtonPrimary>
            </GlassPanel>
          ))}
        </div>
      </section>

      <section id="showcase" className="reveal">
        <SectionHeading eyebrow="Showcase" title={MARKETING_CONTENT.showcase.title} description={MARKETING_CONTENT.showcase.description} />
        <div className="grid gap-6 lg:grid-cols-3">
          {SHOWCASE_ITEMS.map((item) => (
            <GlassPanel key={item.title} hover className="p-8">
              <p className="text-label-mono uppercase tracking-[0.3em] text-tertiary mb-3">{item.stage}</p>
              <h3 className="text-headline-md text-white mb-3">{item.title}</h3>
              <p className="text-body-base text-on-surface-variant">{item.description}</p>
            </GlassPanel>
          ))}
        </div>
      </section>

      <section id="faq" className="reveal">
        <SectionHeading eyebrow="FAQ" title={MARKETING_CONTENT.faq.title} description={MARKETING_CONTENT.faq.description} />
        <div className="max-w-3xl mx-auto space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openQuestion === index;
            return (
              <GlassPanel key={item.question} className="overflow-hidden">
                <button type="button" className="w-full flex items-center justify-between p-5 text-left" onClick={() => setOpenQuestion(isOpen ? -1 : index)}>
                  <span className="text-white font-medium">{item.question}</span>
                  <span className="material-symbols-outlined text-primary">{isOpen ? 'remove' : 'add'}</span>
                </button>
                {isOpen && <p className="px-5 pb-5 text-on-surface-variant">{item.answer}</p>}
              </GlassPanel>
            );
          })}
        </div>
      </section>

      <section id="contact" className="reveal">
        <GlassPanel className="p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-primary text-label-mono uppercase tracking-[0.3em] mb-3">Contact</p>
            <h2 className="text-display-lg-mobile md:text-[32px] text-white mb-3">{MARKETING_CONTENT.contact.title}</h2>
            <p className="text-body-base text-on-surface-variant">{MARKETING_CONTENT.contact.description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonPrimary as={Link} to={MARKETING_CONTENT.contact.ctaPath}>Contact sales</ButtonPrimary>
            <ButtonSecondary as={Link} to={MARKETING_CONTENT.helpCenterPath || '/help'}>Open help center</ButtonSecondary>
          </div>
        </GlassPanel>
      </section>
    </div>
  );
}
