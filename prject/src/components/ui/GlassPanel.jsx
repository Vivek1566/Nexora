import React from 'react';

export function GlassPanel({ children, className = '', hover = false, ...props }) {
  const baseClass = 'glass-panel rounded-xl';
  const hoverClass = hover ? 'glass-card-hover transition-all duration-300' : '';
  
  return (
    <div className={`${baseClass} ${hoverClass} ${className}`} {...props}>
      {children}
    </div>
  );
}
