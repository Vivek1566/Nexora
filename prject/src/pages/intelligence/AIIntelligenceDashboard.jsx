import React from 'react';
import { Link } from 'react-router-dom';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { GlassPanel } from '../../components/ui/GlassPanel';
import { ButtonPrimary, ButtonSecondary } from '../../components/ui/Buttons';
import { ScoreGauge } from '../../components/intelligence/ScoreGauge';
import { InsightCard } from '../../components/intelligence/InsightCard';
import {
  INTELLIGENCE_SCORE,
  INTELLIGENCE_INSIGHTS,
  COMPETITIVE_POSITION,
} from '../../data/intelligence';
import { useAppActions } from '../../hooks/useAppActions';

export default function AIIntelligenceDashboard() {
  const { runIntelligenceReport, navigate } = useAppActions();
  const score = INTELLIGENCE_SCORE;

  return (
    <DashboardLayout title="AI Startup Intelligence">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
        <div>
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-2">
            {score.startupName}
          </h2>
          <p className="font-body-base text-on-surface-variant max-w-2xl">
            AI Readiness Assessment & Growth Trajectory Analysis. Nexus AI demonstrates strong
            product-market fit indicators with exceptional technical defensibility.
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {score.tags.map((tag) => (
            <span
              key={tag}
              className="bg-tertiary-container/20 text-tertiary px-3 py-1 rounded-full font-label-mono text-label-mono border border-tertiary/30"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <GlassPanel className="glass-panel-elevated rounded-xl p-8 relative overflow-hidden mb-8">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
          <ScoreGauge score={score.overall} />
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="font-headline-md text-headline-md text-primary">{score.trajectory}</h3>
            <p className="text-on-surface-variant font-body-base leading-relaxed">{score.summary}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {[
                { label: 'Valuation Est.', value: score.valuation },
                { label: 'Burn Rate', value: score.burnRate, highlight: true },
                { label: 'TAM', value: score.tam },
                { label: 'Founder Fit', value: score.founderFit },
              ].map((item) => (
                <div key={item.label} className="flex flex-col">
                  <span className="font-label-mono text-label-mono text-outline mb-1">{item.label}</span>
                  <span className={`font-body-base font-semibold ${item.highlight ? 'text-tertiary' : 'text-on-surface'}`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </GlassPanel>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {INTELLIGENCE_INSIGHTS.map((insight) => (
          <InsightCard key={insight.title} insight={insight} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <GlassPanel className="lg:col-span-2 p-6 border-t border-outline-variant/20">
          <h3 className="font-headline-md text-headline-md text-on-surface mb-6">Competitive Positioning</h3>
          <div className="space-y-5">
            {COMPETITIVE_POSITION.map((item) => (
              <div key={item.label}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-on-surface-variant">{item.label}</span>
                  <span className="text-primary font-medium">{item.nexus}% vs {item.industry}% avg</span>
                </div>
                <div className="h-2 bg-surface-variant rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-700"
                    style={{ width: `${item.nexus}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </GlassPanel>

        <GlassPanel className="p-6 border-t border-outline-variant/20 flex flex-col">
          <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Recommended Actions</h3>
          <div className="flex flex-col gap-3 flex-1">
            <ButtonPrimary className="w-full" onClick={() => navigate(`/investor/startup/${score.startupId}`)}>
              View Investment Profile
            </ButtonPrimary>
            <ButtonSecondary className="w-full" onClick={() => navigate('/documents')}>
              Open Data Room
            </ButtonSecondary>
            <ButtonSecondary className="w-full" onClick={runIntelligenceReport}>
              Generate Full Report
            </ButtonSecondary>
            <Link to="/evaluation/nexus-ai" className="text-primary text-sm hover:text-white transition-colors mt-auto pt-4">
              Run Evaluation Workflow →
            </Link>
          </div>
        </GlassPanel>
      </div>
    </DashboardLayout>
  );
}
