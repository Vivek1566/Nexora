import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { GlassPanel } from '../../components/ui/GlassPanel';
import { ButtonPrimary, ButtonSecondary } from '../../components/ui/Buttons';
import {
  CALENDAR_MONTH,
  CALENDAR_EVENTS,
  UPCOMING_WEEK,
  CALENDAR_LEGEND,
} from '../../data/calendar';
import { useAppActions } from '../../hooks/useAppActions';

const colorClasses = {
  primary: 'bg-primary-container/20 border-primary/30 text-primary hover:bg-primary-container/30',
  secondary: 'bg-secondary-container/20 border-secondary/30 text-secondary hover:bg-secondary-container/30',
  tertiary: 'bg-tertiary-container/20 border-tertiary/30 text-tertiary hover:bg-tertiary-container/30',
};

function buildCalendarDays(year, month) {
  const firstDay = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();
  const daysInPrevMonth = new Date(year, month - 1, 0).getDate();
  const cells = [];

  for (let i = firstDay - 1; i >= 0; i--) {
    cells.push({ day: daysInPrevMonth - i, current: false });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, current: true });
  }
  while (cells.length % 7 !== 0) {
    cells.push({ day: cells.length - daysInMonth - firstDay + 2, current: false });
  }
  return cells;
}

export default function EventCalendar() {
  const { navigate, viewAllUpcoming } = useAppActions();
  const days = buildCalendarDays(CALENDAR_MONTH.year, CALENDAR_MONTH.month);
  const today = 8;

  const getEventsForDay = (day) => CALENDAR_EVENTS.filter((e) => e.day === day);

  return (
    <DashboardLayout title="Event Calendar">
      <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
        <div>
          <h2 className="font-headline-md text-white">{CALENDAR_MONTH.label}</h2>
          <p className="text-on-surface-variant text-body-sm">Full calendar view of all incubator events</p>
        </div>
        <div className="flex gap-3">
          <ButtonSecondary icon="chevron_left" onClick={() => navigate('/events')}>
            List View
          </ButtonSecondary>
          <ButtonPrimary icon="add" onClick={() => navigate('/events')}>
            Create Event
          </ButtonPrimary>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-8">
        <div className="flex-1">
          <GlassPanel className="overflow-hidden">
            <div className="grid grid-cols-7 border-b border-outline-variant/20">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
                <div key={d} className="p-3 text-center font-label-mono text-label-mono text-on-surface-variant text-xs">
                  {d}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7">
              {days.map((cell, idx) => {
                const events = cell.current ? getEventsForDay(cell.day) : [];
                const isToday = cell.current && cell.day === today;
                return (
                  <div
                    key={idx}
                    className={`border-r border-b border-white/5 p-2 min-h-[100px] relative group transition-colors ${
                      cell.current ? 'hover:bg-white/5' : 'opacity-50'
                    } ${isToday ? 'bg-surface-variant/20' : ''}`}
                  >
                    {isToday ? (
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-on-primary font-body-sm text-body-sm font-bold">
                        {cell.day}
                      </span>
                    ) : (
                      <span className={`font-body-sm text-body-sm ${cell.current ? 'text-on-surface' : 'text-on-surface-variant'}`}>
                        {cell.day}
                      </span>
                    )}
                    {events.map((event) => (
                      <button
                        key={`${event.day}-${event.title}`}
                        type="button"
                        onClick={() => navigate(`/events/${event.eventId}`)}
                        className={`mt-1 w-full border rounded px-1.5 py-1 flex items-center gap-1 cursor-pointer transition-colors text-left ${colorClasses[event.color]}`}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          event.color === 'primary' ? 'bg-primary' : event.color === 'secondary' ? 'bg-secondary' : 'bg-tertiary'
                        }`} />
                        <span className="font-label-mono text-[10px] leading-tight truncate">{event.title}</span>
                      </button>
                    ))}
                  </div>
                );
              })}
            </div>
          </GlassPanel>

          <div className="mt-6 flex flex-wrap gap-6 items-center">
            <span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-wider">Legend:</span>
            {CALENDAR_LEGEND.map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-sm border ${item.color}`} />
                <span className="font-body-sm text-body-sm text-on-surface">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="w-full xl:w-[320px] flex flex-col gap-6">
          <GlassPanel className="p-5">
            <h3 className="font-headline-md text-headline-md text-on-surface mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">upcoming</span>
              Upcoming This Week
            </h3>
            <div className="space-y-4">
              {UPCOMING_WEEK.map((item) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => navigate(`/events/${item.eventId}`)}
                  className="group relative pl-4 border-l-2 border-secondary hover:border-secondary-fixed transition-colors text-left w-full"
                >
                  <div className={`absolute -left-[5px] top-1.5 w-2 h-2 rounded-full ${
                    item.color === 'primary' ? 'bg-primary' : item.color === 'secondary' ? 'bg-secondary' : 'bg-tertiary'
                  }`} />
                  <div className={`font-label-mono text-[10px] mb-1 ${
                    item.color === 'primary' ? 'text-primary' : item.color === 'secondary' ? 'text-secondary' : 'text-tertiary'
                  }`}>{item.date}</div>
                  <h4 className="font-body-base text-body-base font-semibold text-on-surface group-hover:text-primary-fixed transition-colors">
                    {item.title}
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-1">{item.description}</p>
                  {item.location && (
                    <div className="mt-2 flex items-center gap-1 font-label-mono text-[10px] text-on-surface-variant">
                      <span className="material-symbols-outlined text-[14px]">location_on</span>
                      {item.location}
                    </div>
                  )}
                </button>
              ))}
            </div>
            <ButtonSecondary className="w-full mt-6" onClick={viewAllUpcoming}>
              View All Upcoming
            </ButtonSecondary>
          </GlassPanel>

          <GlassPanel className="p-5 hidden xl:block">
            <h3 className="font-body-base text-body-base font-semibold text-on-surface mb-3">Quick Jump</h3>
            <div className="grid grid-cols-3 gap-2">
              {['AUG', 'SEP', 'OCT', 'NOV', 'DEC', 'JAN'].map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => navigate('/events/calendar')}
                  className={`text-center py-2 rounded font-label-mono text-[10px] transition-colors ${
                    m === 'OCT'
                      ? 'bg-primary/20 border border-primary/30 text-primary'
                      : 'bg-white/5 text-on-surface-variant hover:bg-white/10'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </GlassPanel>
        </aside>
      </div>
    </DashboardLayout>
  );
}
