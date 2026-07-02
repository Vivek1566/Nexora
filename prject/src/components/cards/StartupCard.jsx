import React from 'react';
import { GlassPanel } from '../ui/GlassPanel';
import { ButtonSecondary } from '../ui/Buttons';
import { StatusChip } from '../ui/StatusChip';
import { Link } from 'react-router-dom';

export function StartupCard({ startup }) {
  return (
    <GlassPanel hover className="p-6 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-surface-variant flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-2xl">{startup.logo}</span>
          </div>
          <div>
            <h3 className="font-headline-md text-white">{startup.name}</h3>
            <p className="text-body-sm text-primary">{startup.industry} • {startup.stage}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-tertiary bg-tertiary/10 px-3 py-1 rounded-full border border-tertiary/20">
          <span className="material-symbols-outlined text-[16px]">bolt</span>
          <span className="font-medium">{startup.matchScore}% Match</span>
        </div>
      </div>
      
      <p className="text-on-surface-variant mb-6 flex-1">{startup.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {startup.tags.map(tag => (
          <span key={tag} className="px-3 py-1 bg-surface-container rounded-full text-label-mono text-on-surface-variant">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-6 pt-6 border-t border-outline-variant/20">
        <div>
          <p className="text-label-mono text-on-surface-variant mb-1">Growth</p>
          <p className="font-medium text-tertiary">{startup.metrics.growth}</p>
        </div>
        <div>
          <p className="text-label-mono text-on-surface-variant mb-1">MRR</p>
          <p className="font-medium text-white">{startup.metrics.mrr}</p>
        </div>
        <div>
          <p className="text-label-mono text-on-surface-variant mb-1">Funding</p>
          <p className="font-medium text-white">{startup.funding}</p>
        </div>
      </div>
      
      <Link to={`/investor/startup/${startup.id}`} className="w-full">
        <ButtonSecondary className="w-full">View Profile</ButtonSecondary>
      </Link>
    </GlassPanel>
  );
}
