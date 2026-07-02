import React from 'react';
import { GlassPanel } from '../ui/GlassPanel';

const colorMap = {
  primary: { bg: 'bg-primary/10', text: 'text-primary' },
  secondary: { bg: 'bg-secondary-container/20', text: 'text-secondary' },
  'inverse-primary': { bg: 'bg-inverse-primary/20', text: 'text-inverse-primary' },
  error: { bg: 'bg-error-container/20', text: 'text-error' },
};

export function InsightCard({ insight }) {
  const colors = colorMap[insight.color] || colorMap.primary;

  return (
    <GlassPanel className="p-6 flex flex-col hover:bg-surface-container-high/50 transition-colors border-t border-outline-variant/20 h-full">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-2 ${colors.bg} rounded-lg`}>
          <span className={`material-symbols-outlined ${colors.text}`}>{insight.icon}</span>
        </div>
        <span className="font-label-mono text-label-mono text-tertiary bg-tertiary/10 px-2 py-1 rounded">
          {insight.score}
        </span>
      </div>
      <h4 className="font-body-base font-semibold text-on-surface mb-2">{insight.title}</h4>
      <p className="font-body-sm text-on-surface-variant flex-1">{insight.description}</p>
    </GlassPanel>
  );
}
