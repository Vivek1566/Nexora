import React from 'react';

export function StatusChip({ status, className = '' }) {
  const getStatusStyles = () => {
    switch (status.toLowerCase()) {
      case 'completed':
      case 'active':
      case 'verified':
        return 'bg-tertiary/10 text-tertiary border-tertiary/20';
      case 'in-progress':
      case 'upcoming':
      case 'shared':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'todo':
      case 'restricted':
      case 'confidential':
        return 'bg-error/10 text-error border-error/20';
      default:
        return 'bg-surface-variant text-on-surface-variant border-outline-variant/30';
    }
  };

  return (
    <span className={`px-3 py-1 rounded-full text-label-mono font-label-mono border ${getStatusStyles()} ${className}`}>
      {status}
    </span>
  );
}
