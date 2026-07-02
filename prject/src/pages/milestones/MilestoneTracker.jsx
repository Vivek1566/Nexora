import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { MILESTONES } from '../../data/milestones';
import { GlassPanel } from '../../components/ui/GlassPanel';
import { StatusChip } from '../../components/ui/StatusChip';
import { ButtonPrimary } from '../../components/ui/Buttons';
import { useAppActions } from '../../hooks/useAppActions';

function MilestoneCard({ milestone }) {
  return (
    <GlassPanel hover className="p-4 mb-4 cursor-pointer">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-medium text-white">{milestone.title}</h4>
        <StatusChip status={milestone.status} className="text-[10px] px-2 py-0.5" />
      </div>
      <p className="text-body-sm text-on-surface-variant mb-4 line-clamp-2">{milestone.description}</p>
      <div className="flex justify-between items-center mt-auto pt-3 border-t border-outline-variant/10">
        <div className="flex gap-2">
          {milestone.tags.map((tag) => (
            <span key={tag} className="text-[10px] px-2 py-0.5 bg-surface-container rounded text-on-surface-variant">
              {tag}
            </span>
          ))}
        </div>
        <span className="text-[10px] text-on-surface-variant flex items-center gap-1">
          <span className="material-symbols-outlined text-[12px]">calendar_today</span>
          {milestone.date}
        </span>
      </div>
    </GlassPanel>
  );
}

export default function MilestoneTracker() {
  const { newMilestone } = useAppActions();
  const columns = [
    { id: 'todo', title: 'To Do', items: MILESTONES.filter((m) => m.status === 'todo') },
    { id: 'in-progress', title: 'In Progress', items: MILESTONES.filter((m) => m.status === 'in-progress') },
    { id: 'completed', title: 'Completed', items: MILESTONES.filter((m) => m.status === 'completed') },
  ];

  return (
    <DashboardLayout title="Milestone Tracker">
      <div className="flex justify-end mb-6">
        <ButtonPrimary icon="add" onClick={newMilestone}>New Milestone</ButtonPrimary>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {columns.map((column) => (
          <div key={column.id} className="flex flex-col h-[calc(100vh-200px)]">
            <div className="flex justify-between items-center mb-4 pb-2 border-b border-outline-variant/20">
              <h3 className="font-headline-md text-white">{column.title}</h3>
              <span className="bg-surface-variant text-on-surface-variant px-2 py-0.5 rounded-full text-sm font-medium">
                {column.items.length}
              </span>
            </div>
            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
              {column.items.map((milestone) => (
                <MilestoneCard key={milestone.id} milestone={milestone} />
              ))}
              {column.items.length === 0 && (
                <div className="text-center p-8 border border-dashed border-outline-variant/30 rounded-xl text-on-surface-variant text-sm">
                  No milestones in this stage
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
