import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { GlassPanel } from '../../components/ui/GlassPanel';
import { ButtonPrimary, ButtonSecondary } from '../../components/ui/Buttons';

const posts = [
  {
    author: 'Mina Chen',
    role: 'Founder',
    title: 'Built a more useful founder dashboard for early-stage operators',
    body: 'I shared a lightweight workflow for organizing investor updates and milestone progress in a single place.',
    likes: 24,
  },
  {
    author: 'Darren Lee',
    role: 'Mentor',
    title: 'How to structure your first investor outreach sequence',
    body: 'The best outreach is short, specific, and rooted in a real signal from the startup’s traction.',
    likes: 18,
  },
];

export default function CommunityPage() {
  return (
    <DashboardLayout title="Community">
      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <GlassPanel className="p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-label-mono uppercase tracking-[0.3em] text-primary mb-2">Discussion forum</p>
                <h2 className="text-headline-md text-white">What’s happening now</h2>
              </div>
              <ButtonPrimary icon="add_circle">New post</ButtonPrimary>
            </div>
            <div className="space-y-4">
              {posts.map((post) => (
                <div key={post.title} className="rounded-2xl border border-outline-variant/20 bg-surface-variant/10 p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-white font-medium">{post.author}</p>
                      <p className="text-sm text-on-surface-variant">{post.role}</p>
                    </div>
                    <span className="text-sm text-primary">{post.likes} likes</span>
                  </div>
                  <h3 className="text-white font-medium mb-2">{post.title}</h3>
                  <p className="text-on-surface-variant">{post.body}</p>
                  <div className="mt-4 flex gap-3">
                    <ButtonSecondary icon="thumb_up">Like</ButtonSecondary>
                    <ButtonSecondary icon="comment">Comment</ButtonSecondary>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </div>

        <div className="space-y-6">
          <GlassPanel className="p-6">
            <h3 className="text-headline-md text-white mb-4">Trending topics</h3>
            <div className="space-y-3">
              {['AI-native startup operations', 'Investor outreach templates', 'Grant readiness', 'Founder-led communities'].map((topic) => (
                <div key={topic} className="rounded-2xl border border-outline-variant/20 bg-surface-variant/10 px-4 py-3 text-on-surface-variant">
                  {topic}
                </div>
              ))}
            </div>
          </GlassPanel>

          <GlassPanel className="p-6">
            <h3 className="text-headline-md text-white mb-4">Connect with builders</h3>
            <p className="text-on-surface-variant mb-5">Follow founders, mentors, and investors who are moving in the same category.</p>
            <ButtonPrimary className="w-full justify-center" icon="hub">Explore network</ButtonPrimary>
          </GlassPanel>
        </div>
      </div>
    </DashboardLayout>
  );
}
