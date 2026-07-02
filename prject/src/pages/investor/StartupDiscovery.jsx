import React, { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { StartupCard } from '../../components/cards/StartupCard';
import { STARTUPS } from '../../data/startups';
import { ButtonSecondary } from '../../components/ui/Buttons';
import { useAppActions } from '../../hooks/useAppActions';

export default function StartupDiscovery() {
  const [filter, setFilter] = useState('All');
  const { notify } = useAppActions();
  
  const industries = ['All', 'Artificial Intelligence', 'HealthTech', 'ClimateTech', 'DeepTech'];
  
  const filteredStartups = filter === 'All' 
    ? STARTUPS 
    : STARTUPS.filter(s => s.industry === filter);

  return (
    <DashboardLayout title="Startup Discovery">
      <div className="mb-8 flex flex-wrap gap-4 items-center justify-between">
        <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
          {industries.map(ind => (
            <button
              key={ind}
              onClick={() => setFilter(ind)}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
                filter === ind 
                  ? 'bg-primary text-on-primary' 
                  : 'bg-surface-variant text-on-surface-variant hover:text-white'
              }`}
            >
              {ind}
            </button>
          ))}
        </div>
        
        <ButtonSecondary icon="filter_list" onClick={() => notify('Advanced filters panel opened.')}>More Filters</ButtonSecondary>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredStartups.map(startup => (
          <StartupCard key={startup.id} startup={startup} />
        ))}
      </div>
    </DashboardLayout>
  );
}
