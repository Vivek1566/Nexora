import React from 'react';
import { JOURNEY_STEPS } from '../../data/landing';
import { useAppActions } from '../../hooks/useAppActions';

const accentMap = {
  primary: { bg: 'bg-primary/10', text: 'text-primary', gradient: 'via-[#2563eb]' },
  secondary: { bg: 'bg-secondary/10', text: 'text-secondary', gradient: 'via-[#8b5cf6]' },
  tertiary: { bg: 'bg-tertiary/10', text: 'text-tertiary', gradient: 'via-[#4ae176]' },
};

export function JourneySection() {
  const { navigate } = useAppActions();

  return (
    <section id="journey" className="py-24 reveal w-full">
      <div className="text-center mb-16">
        <h2 className="font-display-lg text-[36px] text-on-surface mb-4">The Incubation Journey</h2>
        <p className="font-body-base text-on-surface-variant max-w-2xl mx-auto">
          A seamless pathway from concept to massive scale, engineered for high-velocity execution.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-container-max mx-auto">
        {JOURNEY_STEPS.map((step) => {
          const accent = accentMap[step.accent];
          return (
            <button
              key={step.title}
              type="button"
              onClick={() => navigate(step.path)}
              className="glass-panel p-8 rounded-2xl glass-card-hover transition-all duration-300 relative overflow-hidden group text-left"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent ${accent.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className={`w-14 h-14 rounded-xl ${accent.bg} flex items-center justify-center ${accent.text} mb-6`}>
                <span className="material-symbols-outlined text-[32px]">{step.icon}</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">{step.title}</h3>
              <p className="font-body-base text-on-surface-variant">{step.description}</p>
            </button>
          );
        })}
      </div>
    </section>
  );
}
