import React, { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { MentorCard } from '../../components/cards/MentorCard';
import { INVESTORS } from '../../data/investors';
import { ButtonSecondary } from '../../components/ui/Buttons';
import { useAppActions } from '../../hooks/useAppActions';

const TABS = ['Mentors & Investors', 'Fellow Founders'];

export default function MentorInvestorDiscovery() {
  const [activeTab, setActiveTab] = useState('Mentors & Investors');
  const { notify } = useAppActions();

  return (
    <DashboardLayout title="Network Discovery">
      <div className="mb-8 flex flex-wrap gap-4 items-center justify-between">
        <div className="flex gap-2">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-variant text-on-surface-variant hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <ButtonSecondary icon="filter_list" onClick={() => notify('Filter panel opened.')}>Filters</ButtonSecondary>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {INVESTORS.map((investor) => (
          <MentorCard key={investor.id} mentor={investor} />
        ))}
      </div>
    </DashboardLayout>
  );
}
