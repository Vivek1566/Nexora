export const CALENDAR_MONTH = { year: 2024, month: 10, label: 'October 2024' };

export const CALENDAR_EVENTS = [
  { day: 4, title: 'Web3 Hackathon', type: 'hackathon', eventId: 'winter-hackathon-2024', color: 'primary' },
  { day: 5, title: 'Day 2', type: 'hackathon', eventId: 'winter-hackathon-2024', color: 'primary' },
  { day: 8, title: 'AI Founder Bootcamp', type: 'bootcamp', eventId: 'pitch-night-q4', color: 'secondary' },
  { day: 8, title: 'Investor Mixer', type: 'networking', eventId: 'pitch-night-q4', color: 'tertiary' },
  { day: 15, title: 'Global AI Hackathon', type: 'hackathon', eventId: 'winter-hackathon-2024', color: 'primary' },
  { day: 28, title: 'Demo Day Q4', type: 'demo', eventId: 'pitch-night-q4', color: 'tertiary' },
];

export const UPCOMING_WEEK = [
  {
    date: 'TUE, OCT 8 · 10:00 AM',
    title: 'AI Founder Bootcamp',
    description: 'Intensive session on scaling LLM infrastructure for early-stage startups.',
    color: 'secondary',
    eventId: 'pitch-night-q4',
  },
  {
    date: 'TUE, OCT 8 · 6:00 PM',
    title: 'Investor Mixer',
    description: 'Networking event with Tier 1 VC partners at the downtown loft.',
    color: 'tertiary',
    location: 'Downtown Hub',
    eventId: 'pitch-night-q4',
  },
  {
    date: 'NOV 28 · 9:00 AM',
    title: 'LaunchNest Demo Day Q4',
    description: 'Top 10 cohort startups pitch to 100+ tier-1 venture capitalists.',
    color: 'primary',
    eventId: 'pitch-night-q4',
  },
];

export const CALENDAR_LEGEND = [
  { label: 'Hackathons', color: 'bg-primary border-primary/50' },
  { label: 'Bootcamps', color: 'bg-secondary border-secondary/50' },
  { label: 'Networking', color: 'bg-tertiary border-tertiary/50' },
  { label: 'Other', color: 'bg-outline border-outline/50' },
];
