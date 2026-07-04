import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { GlassPanel } from '../../components/ui/GlassPanel';
import { ButtonSecondary, ButtonPrimary } from '../../components/ui/Buttons';
import { FOUNDER_METRICS, RECENT_ACTIVITY, QUICK_ACTIONS } from '../../data/activity';
import { useAppActions } from '../../hooks/useAppActions';
import { AnimatedChart } from '../../components/ui/AnimatedChart';
import { InsightCards } from '../../components/ui/InsightCards';

export default function FounderDashboard() {
  const actions = useAppActions();

  return (
    <DashboardLayout title="Founder Dashboard">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
        <GlassPanel className="p-6 transition duration-300 hover:-translate-y-1">
          <p className="mb-2 text-sm uppercase tracking-[0.24em] text-slate-400">Total funding</p>
          <h2 className="text-display-lg-mobile font-medium text-white">{FOUNDER_METRICS.totalFunding}</h2>
          <p className="mt-2 flex items-center gap-1 text-emerald-300 text-sm">
            <span className="material-symbols-outlined text-[16px]">trending_up</span>
            {FOUNDER_METRICS.fundingChange}
          </p>
        </GlassPanel>

        <GlassPanel className="p-6 transition duration-300 hover:-translate-y-1">
          <p className="mb-2 text-sm uppercase tracking-[0.24em] text-slate-400">Profile views</p>
          <h2 className="text-display-lg-mobile font-medium text-white">{FOUNDER_METRICS.profileViews}</h2>
          <p className="mt-2 flex items-center gap-1 text-emerald-300 text-sm">
            <span className="material-symbols-outlined text-[16px]">trending_up</span>
            {FOUNDER_METRICS.viewsChange}
          </p>
        </GlassPanel>

        <GlassPanel className="p-6 transition duration-300 hover:-translate-y-1">
          <p className="mb-2 text-sm uppercase tracking-[0.24em] text-slate-400">Next milestone</p>
          <h2 className="text-headline-md font-medium text-white">{FOUNDER_METRICS.nextMilestone}</h2>
          <p className="mt-2 flex items-center gap-1 text-cyan-300 text-sm">
            <span className="material-symbols-outlined text-[16px]">schedule</span>
            {FOUNDER_METRICS.daysRemaining} days remaining
          </p>
        </GlassPanel>
      </div>

      <div className="mb-8">
        <InsightCards />
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <GlassPanel className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-headline-md text-white">Quick actions</h3>
            <ButtonPrimary icon="bolt" onClick={() => actions.navigate('/ai')}>Open AI flow</ButtonPrimary>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {QUICK_ACTIONS.map((action) => (
              <ButtonSecondary key={action.label} className="flex h-auto flex-col gap-2 py-6 transition duration-300 hover:-translate-y-0.5" onClick={() => actions[action.action]()}> 
                <span className="material-symbols-outlined text-[32px]">{action.icon}</span>
                {action.label}
              </ButtonSecondary>
            ))}
          </div>
        </GlassPanel>

        <div className="space-y-6">
          <AnimatedChart data={[{ label: 'Mon', value: 54 }, { label: 'Tue', value: 78 }, { label: 'Wed', value: 62 }, { label: 'Thu', value: 88 }, { label: 'Fri', value: 92 }]} label="Momentum" />

          <GlassPanel className="p-6">
            <h3 className="mb-6 text-headline-md text-white">Recent activity</h3>
            <div className="flex flex-col gap-4">
              {RECENT_ACTIVITY.map((item) => (
                <button key={item.id} type="button" onClick={() => actions.navigate(item.path)} className="flex w-full gap-4 rounded-2xl border border-white/10 bg-slate-900/40 p-4 text-left transition duration-300 hover:bg-white/10">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div>
                    <p className="mb-1 font-medium text-white">{item.title}</p>
                    <p className="text-sm text-slate-400">{item.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </GlassPanel>
        </div>
      </div>
    </DashboardLayout>
  );
}
