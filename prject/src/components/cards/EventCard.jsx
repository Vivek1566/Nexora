import React from 'react';
import { GlassPanel } from '../ui/GlassPanel';
import { ButtonSecondary } from '../ui/Buttons';
import { StatusChip } from '../ui/StatusChip';
import { Link } from 'react-router-dom';

export function EventCard({ event }) {
  return (
    <GlassPanel hover className="overflow-hidden flex flex-col h-full">
      <div className="h-48 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent z-10"></div>
        <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
        <div className="absolute top-4 right-4 z-20">
          <StatusChip status={event.status} />
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <div className="flex gap-2 items-center mb-3">
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-label-mono">{event.type}</span>
          <span className="text-on-surface-variant text-label-mono flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">group</span>
            {event.attendees}
          </span>
        </div>
        
        <h3 className="font-headline-md text-white mb-2">{event.title}</h3>
        <p className="text-on-surface-variant mb-6 flex-1">{event.description}</p>
        
        <div className="flex flex-col gap-3 mb-6">
          <div className="flex items-center gap-3 text-on-surface-variant">
            <span className="material-symbols-outlined text-primary">calendar_today</span>
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-3 text-on-surface-variant">
            <span className="material-symbols-outlined text-primary">location_on</span>
            <span>{event.location}</span>
          </div>
        </div>
        
        <Link to={`/events/${event.id}`}>
          <ButtonSecondary className="w-full">View Details</ButtonSecondary>
        </Link>
      </div>
    </GlassPanel>
  );
}
