export const FEATURE_CARDS = [
  {
    title: 'AI-first validation',
    description: 'Run idea scoring, SWOT review, and risk flags in minutes before you commit teams or capital.',
    icon: 'psychology',
    accent: 'from-blue-500/20 to-violet-500/20',
  },
  {
    title: 'Founder workspace',
    description: 'Keep plans, milestone updates, documents, and investor conversations in one intelligent hub.',
    icon: 'dashboard_customize',
    accent: 'from-cyan-500/20 to-emerald-500/20',
  },
  {
    title: 'Trusted network',
    description: 'Discover mentors, investors, and startup peers with intelligent recommendations and warm intros.',
    icon: 'hub',
    accent: 'from-orange-500/20 to-rose-500/20',
  },
];

export const PRICING_TIERS = [
  {
    name: 'Pilot',
    price: '$49',
    description: 'For founders testing an idea and building their first traction loop.',
    perks: ['AI validation', 'Startup profile', 'Community access'],
    featured: false,
  },
  {
    name: 'Growth',
    price: '$149',
    description: 'For ambitious teams who want a sharper network and better deal flow.',
    perks: ['Everything in Pilot', 'Investor matching', 'Workspace + analytics'],
    featured: true,
  },
  {
    name: 'Scale',
    price: 'Custom',
    description: 'For incubators, accelerators, and mission-driven programs that need more control.',
    perks: ['White-label workflows', 'Admin analytics', 'Priority support'],
    featured: false,
  },
];

export const SHOWCASE_ITEMS = [
  {
    title: 'Nexus AI',
    description: 'An AI-powered compliance and operations tool for early-stage founders.',
    stage: 'Funding ready',
  },
  {
    title: 'AeroLab',
    description: 'Hardware startup using Nexora to coordinate pilots, mentors, and investor updates.',
    stage: 'Growth',
  },
  {
    title: 'Helio Health',
    description: 'Healthtech team scaling through founder-led roadmaps and mentor engagements.',
    stage: 'Launch',
  },
];

export const FAQ_ITEMS = [
  {
    question: 'Who is Nexora built for?',
    answer: 'Founders, mentors, investors, team members, and operators building the next wave of startups.',
  },
  {
    question: 'Can I use AI without a technical background?',
    answer: 'Yes. Every AI workflow is designed to guide you through the process with structured outputs and clear next steps.',
  },
  {
    question: 'Is the platform suitable for early-stage teams?',
    answer: 'Absolutely. The product covers ideation, validation, fundraising readiness, and execution in one place.',
  },
];

export const MARKETING_CONTENT = {
  about: {
    title: 'From idea to impact',
    description: 'Nexora brings founders, mentors, investors, and operators into one high-trust launch environment.',
    highlights: ['AI-native startup operating system', 'Community-led mentorship', 'Clear investor and milestone tracking'],
    ctaLabel: 'Explore the platform',
    ctaPath: '/founder/dashboard',
  },
  features: {
    title: 'Built for the full startup lifecycle',
    description: 'Everything you need to validate, build, and grow is available in one coherent experience.',
    highlights: ['Idea validation', 'Business planning', 'Team building', 'Investor discovery'],
    ctaLabel: 'See the dashboard',
    ctaPath: '/founder/dashboard',
  },
  pricing: {
    title: 'Flexible plans for every stage',
    description: 'Start lean, expand with your momentum, and bring your program team along the way.',
    highlights: ['Simple pilot onboarding', 'Shared workspace for cohorts', 'Roadmap and reporting tools'],
    ctaLabel: 'Book a demo',
    ctaPath: '/contact',
  },
  showcase: {
    title: 'Teams already building with Nexora',
    description: 'From climate tech to AI copilots, founders are using Nexora to move faster with better signal.',
    highlights: ['Investor-ready updates', 'Mentor coordination', 'Milestone visibility'],
    ctaLabel: 'Join the community',
    ctaPath: '/register',
  },
  contact: {
    title: 'Let’s talk about your next launch',
    description: 'Whether you are a founder, program lead, or investor, we would love to hear what you are building.',
    highlights: ['hello@nexora.app', 'Live onboarding for programs', 'Fast response for pilot teams'],
    ctaLabel: 'Open the help center',
    ctaPath: '/help',
  },
  faq: {
    title: 'Frequently asked questions',
    description: 'Quick answers to the questions founders and collaborators ask most often.',
    highlights: ['Fast setup', 'Role-aware workflows', 'Secure collaboration'],
    ctaLabel: 'Start building',
    ctaPath: '/founder/dashboard',
  },
};
