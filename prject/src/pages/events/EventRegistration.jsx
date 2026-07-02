import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { EVENTS } from '../../data/events';
import { GlassPanel } from '../../components/ui/GlassPanel';
import { ButtonPrimary, ButtonSecondary } from '../../components/ui/Buttons';
import { useAppActions } from '../../hooks/useAppActions';

const AGENDA = [
  { time: '09:00 AM', title: 'Registration & Breakfast', location: 'Main Lobby' },
  { time: '10:00 AM', title: 'Keynote: The Future of AI Agents', location: 'Main Stage • Dr. Elena Rostova' },
];

export default function EventRegistration() {
  const { id } = useParams();
  const { registerEvent, shareEvent, notify } = useAppActions();
  const event = EVENTS.find((e) => e.id === id) || EVENTS[0];

  return (
    <DashboardLayout title="Event Details">
      <Link to="/events" className="text-primary hover:text-white flex items-center gap-1 mb-6 transition-colors">
        <span className="material-symbols-outlined text-[18px]">arrow_back</span>
        Back to Events
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="h-64 rounded-xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent z-10" />
            <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
            <div className="absolute bottom-6 left-6 z-20">
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-label-mono backdrop-blur-md border border-primary/30 mb-3 inline-block">
                {event.type}
              </span>
              <h1 className="text-display-lg-mobile text-white font-medium">{event.title}</h1>
            </div>
          </div>

          <GlassPanel className="p-6">
            <h3 className="font-headline-md text-white mb-4">About this Event</h3>
            <p className="text-on-surface-variant leading-relaxed">{event.description}</p>
            <h4 className="font-medium text-white mt-8 mb-4">Agenda Overview</h4>
            <div className="space-y-4">
              {AGENDA.map((item) => (
                <div key={item.time} className="flex gap-4 p-4 rounded-lg bg-surface-variant/30 border border-outline-variant/10">
                  <div className="text-primary font-medium shrink-0 w-20">{item.time}</div>
                  <div>
                    <h5 className="text-white font-medium mb-1">{item.title}</h5>
                    <p className="text-body-sm text-on-surface-variant">{item.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </div>

        <div className="space-y-6">
          <GlassPanel className="p-6">
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex items-center gap-3 text-on-surface-variant">
                <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">calendar_today</span>
                </div>
                <div>
                  <p className="font-medium text-white">{event.date}</p>
                  <button type="button" onClick={() => notify('Added to calendar!')} className="text-xs text-primary hover:text-white">
                    Add to Calendar
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-3 text-on-surface-variant">
                <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <p className="font-medium text-white">{event.location}</p>
                  <button type="button" onClick={() => notify('Opening maps...')} className="text-xs text-primary hover:text-white">
                    Get Directions
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-3 text-on-surface-variant">
                <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">group</span>
                </div>
                <div>
                  <p className="font-medium text-white">{event.attendees} Attending</p>
                  <p className="text-xs">3 connections going</p>
                </div>
              </div>
            </div>

            <ButtonPrimary className="w-full mb-3 text-lg py-3" onClick={registerEvent}>
              Register Now
            </ButtonPrimary>
            <ButtonSecondary className="w-full text-sm py-2" onClick={shareEvent}>Share Event</ButtonSecondary>
          </GlassPanel>
        </div>
      </div>
    </DashboardLayout>
  );
}
