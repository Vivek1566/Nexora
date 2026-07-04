import React from 'react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { GlassPanel } from '../components/ui/GlassPanel';
import { ButtonPrimary, ButtonSecondary } from '../components/ui/Buttons';

const skills = ['AI product strategy', 'Investor storytelling', 'Go-to-market', 'Product design'];

export default function ProfilePage() {
  return (
    <DashboardLayout title="Profile">
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <GlassPanel className="p-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 text-2xl font-semibold text-white">AF</div>
              <div>
                <h2 className="text-display-lg-mobile text-white">Alex Founder</h2>
                <p className="text-on-surface-variant">Founder • Nexus AI • San Francisco</p>
              </div>
            </div>
            <div className="flex gap-3">
              <ButtonPrimary icon="edit">Edit profile</ButtonPrimary>
              <ButtonSecondary icon="share">Share</ButtonSecondary>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-outline-variant/20 bg-surface-variant/10 p-4">
              <p className="text-sm text-on-surface-variant">Role</p>
              <p className="text-white font-medium">Founder / Mentor</p>
            </div>
            <div className="rounded-2xl border border-outline-variant/20 bg-surface-variant/10 p-4">
              <p className="text-sm text-on-surface-variant">Focus</p>
              <p className="text-white font-medium">AI infrastructure</p>
            </div>
            <div className="rounded-2xl border border-outline-variant/20 bg-surface-variant/10 p-4">
              <p className="text-sm text-on-surface-variant">Location</p>
              <p className="text-white font-medium">Remote • UTC-8</p>
            </div>
          </div>
        </GlassPanel>

        <GlassPanel className="p-6">
          <h3 className="text-headline-md text-white mb-4">Skills & interests</h3>
          <div className="flex flex-wrap gap-3 mb-6">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary">{skill}</span>
            ))}
          </div>
          <h3 className="text-headline-md text-white mb-4">Bio</h3>
          <p className="text-on-surface-variant">Building tools that help early-stage founders move from insight to execution with less friction and more confidence.</p>
        </GlassPanel>
      </div>
    </DashboardLayout>
  );
}
