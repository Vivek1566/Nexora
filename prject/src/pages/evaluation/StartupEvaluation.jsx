import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { STARTUPS } from '../../data/startups';
import { GlassPanel } from '../../components/ui/GlassPanel';
import { ButtonPrimary, ButtonSecondary } from '../../components/ui/Buttons';
import { useAppActions } from '../../hooks/useAppActions';

const RUBRIC = [
  { label: 'Market Potential', score: 8, notes: 'TAM is massive but highly competitive.' },
  { label: 'Team Capability', score: 9, notes: 'Strong technical founders. Need GTM hire.' },
  { label: 'Product Innovation', score: 7, notes: 'Solid MVP, defendability unclear.' },
];

export default function StartupEvaluation() {
  const { id } = useParams();
  const { approveStartup, rejectStartup, requestMoreInfo } = useAppActions();
  const startup = STARTUPS.find((s) => s.id === id) || STARTUPS[0];

  return (
    <DashboardLayout title="Evaluation Workflow">
      <Link to="/admin" className="text-primary hover:text-white flex items-center gap-1 mb-6 transition-colors">
        <span className="material-symbols-outlined text-[18px]">arrow_back</span>
        Back to Admin
      </Link>

      <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-surface-variant flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-2xl">{startup.logo}</span>
          </div>
          <div>
            <h2 className="text-display-lg-mobile text-white font-medium mb-1">{startup.name}</h2>
            <p className="text-on-surface-variant">{startup.stage} Candidate</p>
          </div>
        </div>
        <div className="px-4 py-2 bg-error/10 text-error border border-error/20 rounded-full font-medium">
          Pending Review
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <GlassPanel className="p-6">
            <h3 className="font-headline-md text-white mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">assessment</span>
              Scoring Rubric
            </h3>
            <div className="space-y-6">
              {RUBRIC.map((item) => (
                <div key={item.label} className="pb-6 border-b border-outline-variant/20 last:border-0 last:pb-0">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium">{item.label}</span>
                    <span className="text-tertiary font-medium bg-tertiary/10 px-3 py-1 rounded-full">{item.score}/10</span>
                  </div>
                  <p className="text-body-sm text-on-surface-variant">{item.notes}</p>
                </div>
              ))}
            </div>
          </GlassPanel>

          <GlassPanel className="p-6">
            <h3 className="font-headline-md text-white mb-4">Reviewer Comments</h3>
            <textarea
              className="w-full bg-surface-variant/30 border border-outline-variant/30 rounded-xl p-4 text-white focus:outline-none focus:border-primary/50 min-h-[120px]"
              placeholder="Add your final evaluation notes here..."
            />
          </GlassPanel>
        </div>

        <div className="space-y-6">
          <GlassPanel className="p-6">
            <h3 className="font-headline-md text-white mb-6">Final Decision</h3>
            <p className="text-on-surface-variant text-sm mb-6">
              Based on the aggregate score of 24/30 (80%), this startup meets the minimum threshold for incubation.
            </p>
            <div className="flex flex-col gap-3">
              <ButtonPrimary className="w-full bg-tertiary hover:shadow-[0_0_15px_rgba(74,225,118,0.4)]" onClick={approveStartup}>
                Approve for Incubation
              </ButtonPrimary>
              <ButtonSecondary className="w-full text-error border-error/30 hover:bg-error/10 hover:border-error/50" onClick={rejectStartup}>
                Reject Candidate
              </ButtonSecondary>
              <ButtonSecondary className="w-full mt-4" onClick={requestMoreInfo}>
                Request More Info
              </ButtonSecondary>
            </div>
          </GlassPanel>
        </div>
      </div>
    </DashboardLayout>
  );
}
