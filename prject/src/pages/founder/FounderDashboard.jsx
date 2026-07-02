import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { GlassPanel } from '../../components/ui/GlassPanel';
import { ButtonSecondary } from '../../components/ui/Buttons';
import { FOUNDER_METRICS, RECENT_ACTIVITY, QUICK_ACTIONS } from '../../data/activity';
import { useAppActions } from '../../hooks/useAppActions';

export default function FounderDashboard() {
  const actions = useAppActions();

  return (
    <DashboardLayout title="Founder Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <GlassPanel className="p-6">
          <p className="text-on-surface-variant text-label-mono mb-2">Total Funding</p>
          <h2 className="text-display-lg-mobile text-white font-medium">{FOUNDER_METRICS.totalFunding}</h2>
          <p className="text-tertiary text-body-sm mt-2 flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">trending_up</span>
            {FOUNDER_METRICS.fundingChange}
          </p>
        </GlassPanel>

        <GlassPanel className="p-6">
          <p className="text-on-surface-variant text-label-mono mb-2">Profile Views</p>
          <h2 className="text-display-lg-mobile text-white font-medium">{FOUNDER_METRICS.profileViews}</h2>
          <p className="text-tertiary text-body-sm mt-2 flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">trending_up</span>
            {FOUNDER_METRICS.viewsChange}
          </p>
        </GlassPanel>

        <GlassPanel className="p-6">
          <p className="text-on-surface-variant text-label-mono mb-2">Next Milestone</p>
          <h2 className="text-headline-md text-white font-medium">{FOUNDER_METRICS.nextMilestone}</h2>
          <p className="text-primary text-body-sm mt-2 flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">schedule</span>
            {FOUNDER_METRICS.daysRemaining} days remaining
          </p>
        </GlassPanel>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <GlassPanel className="p-6">
          <h3 className="font-headline-md text-white mb-6">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            {QUICK_ACTIONS.map((action) => (
              <ButtonSecondary
                key={action.label}
                className="flex flex-col gap-2 py-6 h-auto"
                onClick={() => actions[action.action]()}
              >
                <span className="material-symbols-outlined text-[32px]">{action.icon}</span>
                {action.label}
              </ButtonSecondary>
            ))}
          </div>
        </GlassPanel>

        <GlassPanel className="p-6">
          <h3 className="font-headline-md text-white mb-6">Recent Activity</h3>
          <div className="flex flex-col gap-4">
            {RECENT_ACTIVITY.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => actions.navigate(item.path)}
                className="flex gap-4 p-4 rounded-lg bg-surface-variant/30 border border-outline-variant/10 hover:bg-surface-variant/50 transition-colors text-left w-full"
              >
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <div>
                  <p className="text-white font-medium mb-1">{item.title}</p>
                  <p className="text-on-surface-variant text-body-sm">{item.description}</p>
                </div>
              </button>
            ))}
          </div>
        </GlassPanel>
      </div>
    </DashboardLayout>
  );
}
