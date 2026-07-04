import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { GlassPanel } from '../../components/ui/GlassPanel';
import { ButtonPrimary, ButtonSecondary } from '../../components/ui/Buttons';

const milestones = [
  { title: 'Problem validation', status: 'Complete', detail: '3 interviews and 2 founder calls completed.' },
  { title: 'MVP prototype', status: 'In progress', detail: 'UI flow is ready and backend integration is next.' },
  { title: 'Investor ready deck', status: 'Pending', detail: 'Draft deck needs final narrative polish.' },
];

const documents = [
  { name: 'Pitch Deck v3', type: 'PDF', size: '4.8 MB' },
  { name: 'Business Plan', type: 'DOCX', size: '1.2 MB' },
  { name: 'Cap Table Lite', type: 'XLSX', size: '390 KB' },
];

export default function StartupWorkspacePage() {
  return (
    <DashboardLayout title="Startup Workspace">
      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <GlassPanel className="p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-label-mono uppercase tracking-[0.3em] text-primary mb-2">Founder workspace</p>
                <h2 className="text-display-lg-mobile text-white">Nexus AI</h2>
                <p className="text-on-surface-variant mt-2">AI-powered operations layer for early-stage founders building with speed and clarity.</p>
              </div>
              <div className="flex gap-3">
                <ButtonPrimary icon="edit">Edit profile</ButtonPrimary>
                <ButtonSecondary icon="upload_file">Upload docs</ButtonSecondary>
              </div>
            </div>
          </GlassPanel>

          <GlassPanel className="p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-headline-md text-white">Milestone progress</h3>
              <span className="text-tertiary text-sm font-medium">68% complete</span>
            </div>
            <div className="space-y-4">
              {milestones.map((item) => (
                <div key={item.title} className="rounded-2xl border border-outline-variant/20 bg-surface-variant/15 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-white font-medium">{item.title}</p>
                    <span className="text-sm text-primary">{item.status}</span>
                  </div>
                  <p className="text-sm text-on-surface-variant">{item.detail}</p>
                </div>
              ))}
            </div>
          </GlassPanel>
        </div>

        <div className="space-y-6">
          <GlassPanel className="p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-headline-md text-white">Documents</h3>
              <ButtonSecondary icon="add">Add</ButtonSecondary>
            </div>
            <div className="space-y-3">
              {documents.map((doc) => (
                <div key={doc.name} className="flex items-center justify-between rounded-2xl border border-outline-variant/20 bg-surface-variant/10 px-4 py-3">
                  <div>
                    <p className="text-white font-medium">{doc.name}</p>
                    <p className="text-sm text-on-surface-variant">{doc.type} • {doc.size}</p>
                  </div>
                  <span className="material-symbols-outlined text-primary">description</span>
                </div>
              ))}
            </div>
          </GlassPanel>

          <GlassPanel className="p-6">
            <h3 className="text-headline-md text-white mb-4">Next step</h3>
            <p className="text-on-surface-variant mb-5">Prepare a stronger investor narrative and connect with mentors that have prior experience in your category.</p>
            <ButtonPrimary className="w-full justify-center" icon="auto_awesome">Run AI validation</ButtonPrimary>
          </GlassPanel>
        </div>
      </div>
    </DashboardLayout>
  );
}
