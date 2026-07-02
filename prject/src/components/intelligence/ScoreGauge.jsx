import React from 'react';
import { INTELLIGENCE_SCORE } from '../../data/intelligence';

export function ScoreGauge({ score = INTELLIGENCE_SCORE.overall }) {
  const circumference = 2 * Math.PI * 100;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative w-48 h-48 flex-shrink-0">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 220 220">
        <circle cx="110" cy="110" r="100" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="12" />
        <circle
          cx="110"
          cy="110"
          r="100"
          fill="none"
          stroke="url(#scoreGradient)"
          strokeLinecap="round"
          strokeWidth="12"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-1000 ease-out"
        />
        <defs>
          <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#571bc1" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">{score}</span>
        <span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest">Score</span>
      </div>
    </div>
  );
}
