import React from 'react';
import { LANDING_STATS } from '../../data/landing';

export function StatsSection() {
  return (
    <section className="py-16 border-y border-outline-variant/10 reveal w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-container-max mx-auto">
        {LANDING_STATS.map((stat) => (
          <div key={stat.label}>
            <div className={`font-display-lg text-[40px] ${stat.color} mb-2`}>{stat.value}</div>
            <div className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
