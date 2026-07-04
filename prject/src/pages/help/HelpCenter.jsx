import React from 'react';
import { Link } from 'react-router-dom';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { GlassPanel } from '../../components/ui/GlassPanel';
import { ButtonPrimary, ButtonSecondary } from '../../components/ui/Buttons';
import { useAppActions } from '../../hooks/useAppActions';

const HELP_TOPICS = [
  {
    title: 'Funding support',
    description: 'Connect with our investment team and review the latest incubation opportunities.',
    icon: 'payments',
  },
  {
    title: 'Product onboarding',
    description: 'Get guided help for launching your startup profile, dashboard, and workspace.',
    icon: 'rocket_launch',
  },
  {
    title: 'Community access',
    description: 'Join office hours, mentor sessions, and founder networking events.',
    icon: 'groups',
  },
];

const FAQ_ITEMS = [
  {
    question: 'How do I start with LaunchNest?',
    answer: 'Use the dashboard to explore your workspace, connect with mentors, and activate your startup journey.',
  },
  {
    question: 'Can I update my startup profile later?',
    answer: 'Yes. You can revise your profile, milestones, and investor materials from the main dashboard at any time.',
  },
  {
    question: 'What support channels are available?',
    answer: 'You can reach out via email, join the live office hours, or request a guided onboarding call.',
  },
];

export default function HelpCenter() {
  const { notify, login } = useAppActions();

  return (
    <DashboardLayout title="Help Center">
      <div className="space-y-8">
        <GlassPanel className="rounded-2xl p-8 md:p-10 border border-primary/20 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-secondary/10" />
          <div className="relative z-10 max-w-3xl">
            <p className="text-primary font-label-mono text-label-mono uppercase tracking-[0.3em] mb-3">
              Support hub
            </p>
            <h2 className="text-3xl md:text-4xl font-display-lg text-white mb-4">
              Everything you need to move faster with LaunchNest.
            </h2>
            <p className="text-on-surface-variant text-body-base leading-relaxed mb-6">
              Our support team, onboarding guides, and investor relations desk are ready to help you with funding readiness, dashboard setup, and community access.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonPrimary onClick={() => notify('Support request opened. Our team will contact you shortly.')}>Request support</ButtonPrimary>
              <ButtonSecondary onClick={login}>Open dashboard</ButtonSecondary>
            </div>
          </div>
        </GlassPanel>

        <div className="grid gap-6 lg:grid-cols-3">
          {HELP_TOPICS.map((topic) => (
            <GlassPanel key={topic.title} className="rounded-2xl p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                <span className="material-symbols-outlined">{topic.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{topic.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{topic.description}</p>
            </GlassPanel>
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <GlassPanel className="rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-6">Frequently asked questions</h3>
            <div className="space-y-4">
              {FAQ_ITEMS.map((item) => (
                <div key={item.question} className="border border-outline-variant/20 rounded-xl p-4">
                  <p className="text-white font-medium mb-2">{item.question}</p>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </GlassPanel>

          <GlassPanel className="rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Contact us</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              Reach out to our support desk for onboarding, funding guidance, and platform assistance.
            </p>
            <div className="space-y-3">
              <a href="mailto:support@launchnest.io" className="flex items-center gap-3 text-sm text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined">mail</span>
                support@launchnest.io
              </a>
              <a href="tel:+18005550199" className="flex items-center gap-3 text-sm text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined">call</span>
                +1 (800) 555-0199
              </a>
              <Link to="/events" className="flex items-center gap-3 text-sm text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined">event</span>
                Join live office hours
              </Link>
            </div>
          </GlassPanel>
        </div>
      </div>
    </DashboardLayout>
  );
}
