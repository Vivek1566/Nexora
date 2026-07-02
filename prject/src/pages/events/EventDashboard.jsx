import React, { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { EventCard } from '../../components/cards/EventCard';
import { EVENTS } from '../../data/events';
import { ButtonPrimary, ButtonSecondary } from '../../components/ui/Buttons';
import { useAppActions } from '../../hooks/useAppActions';

const TABS = ['Upcoming', 'Past Events', 'My Registrations'];

export default function EventDashboard() {
  const [activeTab, setActiveTab] = useState('Upcoming');
  const { createEvent, navigate } = useAppActions();

  const filteredEvents = EVENTS.filter((e) => {
    if (activeTab === 'Past Events') return e.status === 'Past';
    if (activeTab === 'My Registrations') return e.registered;
    return e.status === 'Upcoming';
  });

  return (
    <DashboardLayout title="Events & Sessions">
      <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
        <div className="flex gap-2 flex-wrap">
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

        <div className="flex gap-3">
          <ButtonSecondary icon="calendar_month" onClick={() => navigate('/events/calendar')}>
            Calendar View
          </ButtonSecondary>
          <ButtonPrimary icon="add" onClick={createEvent}>Create Event</ButtonPrimary>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => <EventCard key={event.id} event={event} />)
        ) : (
          <p className="text-on-surface-variant col-span-full text-center py-12">No events in this category.</p>
        )}
      </div>
    </DashboardLayout>
  );
}
