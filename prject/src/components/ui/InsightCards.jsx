import React from 'react';
import { GlassPanel } from './GlassPanel';

const cards = [
  { label: 'Funding signal', value: '3 warm leads', note: 'Investors recently engaged in your category.' },
  { label: 'Grant readiness', value: '82%', note: 'Your startup profile is highly aligned with public programs.' },
  { label: 'Mentor matches', value: '14', note: 'New mentor introductions available this week.' },
];

export function InsightCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {cards.map((card) => (
        <GlassPanel key={card.label} className="p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/30">
          <p className="text-sm text-slate-400">{card.label}</p>
          <p className="mt-3 text-2xl font-semibold text-white">{card.value}</p>
          <p className="mt-2 text-sm text-slate-400">{card.note}</p>
        </GlassPanel>
      ))}
    </div>
  );
}
