export const FOUNDER_METRICS = {
  totalFunding: '$2.4M',
  fundingChange: '+12% from last round',
  profileViews: 842,
  viewsChange: '+5% this week',
  nextMilestone: 'Beta Launch',
  daysRemaining: 14,
};

export const RECENT_ACTIVITY = [
  {
    id: 'act-1',
    icon: 'visibility',
    title: 'Your pitch deck was viewed',
    description: 'Vertex Ventures reviewed your document.',
    path: '/documents',
  },
  {
    id: 'act-2',
    icon: 'chat',
    title: 'New message from Sarah Jenkins',
    description: 'Interested in scheduling a follow-up call.',
    path: '/network/messages',
  },
  {
    id: 'act-3',
    icon: 'event',
    title: 'Demo Day registration confirmed',
    description: 'LaunchNest Demo Day Q4 — Nov 28, 2024.',
    path: '/events/pitch-night-q4',
  },
];

export const QUICK_ACTIONS = [
  { icon: 'upload_file', label: 'Upload Pitch Deck', action: 'uploadPitchDeck' },
  { icon: 'calendar_month', label: 'Book Mentor Session', action: 'bookMentorSession' },
  { icon: 'campaign', label: 'Apply for Program', action: 'applyForProgram' },
  { icon: 'analytics', label: 'Update Metrics', action: 'updateMetrics' },
];
