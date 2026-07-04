import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { GlassPanel } from '../../components/ui/GlassPanel';
import { ButtonPrimary, ButtonSecondary } from '../../components/ui/Buttons';

const insights = [
  { title: 'Idea validation', description: 'Your concept scores highly for clarity, urgency, and execution readiness.' },
  { title: 'Market signal', description: 'Demand is rising in your category and investor interest is warming.' },
  { title: 'Recommended next step', description: 'Share a founder update and schedule a mentorship session before the next round.' },
];

export default function AIAssistantPage() {
  return (
    <DashboardLayout title="AI Assistant">
      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <GlassPanel className="p-6">
          <p className="text-label-mono uppercase tracking-[0.3em] text-primary mb-3">Smart recommendations</p>
          <h2 className="text-display-lg-mobile text-white mb-4">Your next best move is clear</h2>
          <p className="text-on-surface-variant mb-8">Nexora surfaces the most useful next steps for your startup based on your progress, network activity, and market signals.</p>
          <div className="space-y-4">
            {insights.map((item) => (
              <div key={item.title} className="rounded-2xl border border-outline-variant/20 bg-surface-variant/10 p-4">
                <h3 className="text-white font-medium mb-2">{item.title}</h3>
                <p className="text-on-surface-variant">{item.description}</p>
              </div>
            ))}
          </div>
        </GlassPanel>

        <div className="space-y-6">
          <GlassPanel className="p-6">
            <h3 className="text-headline-md text-white mb-4">AI tools</h3>
            <div className="space-y-3">
              <ButtonPrimary className="w-full justify-center" icon="auto_awesome">Validate idea</ButtonPrimary>
              <ButtonSecondary className="w-full justify-center" icon="timeline">Generate roadmap</ButtonSecondary>
              <ButtonSecondary className="w-full justify-center" icon="insights">Show market feed</ButtonSecondary>
            </div>
          </GlassPanel>

          <GlassPanel className="p-6">
            <h3 className="text-headline-md text-white mb-4">Market insights feed</h3>
            <p className="text-on-surface-variant">A personalized feed is ready to surface startup news, grants, investor activity, accelerator programs, and trend alerts.</p>
          </GlassPanel>
        </div>
      </div>
    </DashboardLayout>
  );
}
