import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { STARTUPS } from '../../data/startups';
import { StartupCard } from '../../components/cards/StartupCard';
import { ButtonSecondary } from '../../components/ui/Buttons';
import { useAppActions } from '../../hooks/useAppActions';

export default function InvestorWatchlist() {
  const { manageAlerts } = useAppActions();
  const watchlist = STARTUPS.slice(2);

  return (
    <DashboardLayout title="My Watchlist">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-headline-md text-white">Tracking {watchlist.length} Startups</h3>
        <ButtonSecondary icon="notifications_active" onClick={manageAlerts}>Manage Alerts</ButtonSecondary>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {watchlist.map((startup) => (
          <StartupCard key={startup.id} startup={startup} />
        ))}
      </div>
    </DashboardLayout>
  );
}
