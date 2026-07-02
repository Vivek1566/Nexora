import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { STARTUPS } from '../../data/startups';
import { GlassPanel } from '../../components/ui/GlassPanel';
import { ButtonPrimary, ButtonSecondary } from '../../components/ui/Buttons';
import { useAppActions } from '../../hooks/useAppActions';

export default function AdminPanel() {
  const { exportReport, createEvent, manageStartup } = useAppActions();

  return (
    <DashboardLayout title="Incubator Admin Panel">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <GlassPanel className="p-6 text-center">
          <p className="text-on-surface-variant text-label-mono mb-2">Total Startups</p>
          <h2 className="text-display-lg-mobile text-white font-medium">{STARTUPS.length * 12}</h2>
        </GlassPanel>
        <GlassPanel className="p-6 text-center">
          <p className="text-on-surface-variant text-label-mono mb-2">Total Funding</p>
          <h2 className="text-display-lg-mobile text-white font-medium">$84M</h2>
        </GlassPanel>
        <GlassPanel className="p-6 text-center">
          <p className="text-on-surface-variant text-label-mono mb-2">Active Mentors</p>
          <h2 className="text-display-lg-mobile text-white font-medium">142</h2>
        </GlassPanel>
        <GlassPanel className="p-6 text-center flex flex-col justify-center">
          <ButtonPrimary icon="add" onClick={createEvent}>New Program</ButtonPrimary>
        </GlassPanel>
      </div>

      <GlassPanel className="overflow-hidden mb-8">
        <div className="p-6 border-b border-outline-variant/20 flex justify-between items-center">
          <h3 className="font-headline-md text-white">Cohort Performance (Q4 2024)</h3>
          <ButtonSecondary icon="download" onClick={exportReport}>Export Report</ButtonSecondary>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-variant/20 border-b border-outline-variant/20">
                <th className="px-6 py-4 text-label-mono text-on-surface-variant font-medium">Startup</th>
                <th className="px-6 py-4 text-label-mono text-on-surface-variant font-medium">Stage</th>
                <th className="px-6 py-4 text-label-mono text-on-surface-variant font-medium">MRR</th>
                <th className="px-6 py-4 text-label-mono text-on-surface-variant font-medium">Growth</th>
                <th className="px-6 py-4 text-label-mono text-on-surface-variant font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {STARTUPS.map((startup) => (
                <tr key={startup.id} className="border-b border-outline-variant/10 hover:bg-surface-variant/10 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-surface-variant flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[16px]">{startup.logo}</span>
                      </div>
                      <p className="font-medium text-white">{startup.name}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-body-sm text-on-surface-variant">{startup.stage}</td>
                  <td className="px-6 py-4 text-body-sm text-white font-medium">{startup.metrics.mrr}</td>
                  <td className="px-6 py-4 text-body-sm text-tertiary">{startup.metrics.growth}</td>
                  <td className="px-6 py-4 text-right">
                    <button
                      type="button"
                      onClick={() => manageStartup(startup.id)}
                      className="text-primary hover:text-white transition-colors text-sm font-medium"
                    >
                      Manage
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassPanel>
    </DashboardLayout>
  );
}
