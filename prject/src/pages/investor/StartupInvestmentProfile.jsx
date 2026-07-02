import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { STARTUPS } from '../../data/startups';
import { GlassPanel } from '../../components/ui/GlassPanel';
import { ButtonPrimary, ButtonSecondary } from '../../components/ui/Buttons';
import { useAppActions } from '../../hooks/useAppActions';

export default function StartupInvestmentProfile() {
  const { id } = useParams();
  const { investNow, watchStartup, downloadDoc, navigate } = useAppActions();
  const startup = STARTUPS.find((s) => s.id === id) || STARTUPS[0];

  return (
    <DashboardLayout title={startup.name}>
      <div className="flex justify-between items-start mb-8 flex-wrap gap-4">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-xl bg-surface-variant flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-4xl">{startup.logo}</span>
          </div>
          <div>
            <h1 className="text-display-lg-mobile text-white font-medium mb-1">{startup.name}</h1>
            <p className="text-on-surface-variant text-lg">{startup.tagline}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <ButtonSecondary icon="favorite_border" onClick={watchStartup}>Watch</ButtonSecondary>
          <ButtonPrimary icon="payments" onClick={investNow}>Invest Now</ButtonPrimary>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <GlassPanel className="p-6">
            <h3 className="font-headline-md text-white mb-4">About</h3>
            <p className="text-on-surface-variant leading-relaxed">{startup.description}</p>
            <div className="flex flex-wrap gap-2 mt-6">
              {startup.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-surface-container rounded-full text-label-mono text-on-surface-variant">
                  {tag}
                </span>
              ))}
            </div>
          </GlassPanel>

          <GlassPanel className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-headline-md text-white">Data Room</h3>
              <Link to="/documents">
                <ButtonSecondary className="text-sm py-1.5 px-4 h-auto">View All</ButtonSecondary>
              </Link>
            </div>
            <div className="space-y-4">
              {['Pitch Deck Q4', 'Financial Projections'].map((doc) => (
                <div key={doc} className="flex items-center justify-between p-4 rounded-lg bg-surface-variant/30 border border-outline-variant/10">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-error">picture_as_pdf</span>
                    <span className="text-white font-medium">{doc}</span>
                  </div>
                  <button type="button" onClick={() => downloadDoc(doc)} className="text-primary hover:text-white transition-colors">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </GlassPanel>
        </div>

        <div className="space-y-8">
          <GlassPanel className="p-6">
            <h3 className="font-headline-md text-white mb-6">Investment Details</h3>
            <div className="space-y-4">
              <div>
                <p className="text-label-mono text-on-surface-variant mb-1">Stage</p>
                <p className="font-medium text-white">{startup.stage}</p>
              </div>
              <div>
                <p className="text-label-mono text-on-surface-variant mb-1">Total Raised</p>
                <p className="font-medium text-white">{startup.funding}</p>
              </div>
              <div className="pt-4 border-t border-outline-variant/20">
                <p className="text-label-mono text-on-surface-variant mb-1">Current Round Size</p>
                <p className="font-medium text-primary text-xl">$5.0M</p>
              </div>
            </div>
          </GlassPanel>

          <GlassPanel className="p-6">
            <h3 className="font-headline-md text-white mb-6">Key Metrics</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-label-mono text-on-surface-variant mb-1">MoM Growth</p>
                <p className="font-medium text-tertiary">{startup.metrics.growth}</p>
              </div>
              <div>
                <p className="text-label-mono text-on-surface-variant mb-1">MRR</p>
                <p className="font-medium text-white">{startup.metrics.mrr}</p>
              </div>
              <div className="col-span-2 mt-2">
                <p className="text-label-mono text-on-surface-variant mb-1">Active Users</p>
                <p className="font-medium text-white">{startup.metrics.users}</p>
              </div>
            </div>
            <ButtonSecondary className="w-full mt-6" onClick={() => navigate('/intelligence')}>
              View AI Intelligence
            </ButtonSecondary>
          </GlassPanel>
        </div>
      </div>
    </DashboardLayout>
  );
}
