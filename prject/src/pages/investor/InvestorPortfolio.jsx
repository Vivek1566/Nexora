import React, { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { STARTUPS } from '../../data/startups';
import { GlassPanel } from '../../components/ui/GlassPanel';
import { ButtonSecondary } from '../../components/ui/Buttons';
import { useAppActions } from '../../hooks/useAppActions';

export default function InvestorPortfolio() {
  const { exportReport, notify, viewPortfolioStartup } = useAppActions();
  const portfolioStartups = STARTUPS.slice(0, 2);

  return (
    <DashboardLayout title="My Portfolio">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <GlassPanel className="p-6">
          <p className="text-on-surface-variant text-label-mono mb-2">Total Invested</p>
          <h2 className="text-display-lg-mobile text-white font-medium">$4.5M</h2>
        </GlassPanel>
        <GlassPanel className="p-6">
          <p className="text-on-surface-variant text-label-mono mb-2">Current Value</p>
          <h2 className="text-display-lg-mobile text-tertiary font-medium">$12.8M</h2>
          <p className="text-tertiary text-body-sm mt-2 flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">trending_up</span>
            2.8x MOIC
          </p>
        </GlassPanel>
        <GlassPanel className="p-6 flex flex-col justify-center gap-3">
          <ButtonSecondary icon="download" className="w-full" onClick={exportReport}>Export Q3 Report</ButtonSecondary>
          <ButtonSecondary icon="add_chart" className="w-full" onClick={() => notify('Add external investment form opened.')}>
            Add External Investment
          </ButtonSecondary>
        </GlassPanel>
      </div>

      <h3 className="font-headline-md text-white mb-6">Active Investments</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {portfolioStartups.map((startup) => (
          <GlassPanel key={startup.id} hover className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-surface-variant flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-2xl">{startup.logo}</span>
              </div>
              <div>
                <h3 className="font-headline-md text-white">{startup.name}</h3>
                <p className="text-body-sm text-on-surface-variant">{startup.stage} • {startup.industry}</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center pb-4 border-b border-outline-variant/20">
                <span className="text-on-surface-variant">Your Investment</span>
                <span className="text-white font-medium">$2.0M</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-outline-variant/20">
                <span className="text-on-surface-variant">Ownership</span>
                <span className="text-white font-medium">15%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-on-surface-variant">Latest MRR</span>
                <span className="text-tertiary font-medium">{startup.metrics.mrr}</span>
              </div>
            </div>

            <ButtonSecondary className="w-full" onClick={() => viewPortfolioStartup(startup.id)}>
              View Founder Updates
            </ButtonSecondary>
          </GlassPanel>
        ))}
      </div>
    </DashboardLayout>
  );
}
