import React from 'react';
import { ButtonPrimary, ButtonSecondary } from '../ui/Buttons';
import { FLOATING_STATS } from '../../data/landing';
import { useAppActions } from '../../hooks/useAppActions';

export function HeroSection() {
  const { launchStartup, joinAsMentor } = useAppActions();

  return (
    <section className="relative min-h-[680px] flex flex-col justify-center items-center text-center reveal overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.28),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.25),_transparent_40%),rgba(255,255,255,0.03)] px-6 py-16 md:px-10 lg:px-16 shadow-[0_20px_80px_rgba(10,16,35,0.35)]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-500/30 via-violet-500/20 to-transparent blur-3xl" />
        <div className="absolute -top-10 left-6 h-32 w-32 rounded-full border border-white/10 bg-white/10 blur-2xl" />
        <div className="absolute bottom-10 right-8 h-24 w-24 rounded-full border border-white/10 bg-cyan-400/10 blur-2xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-200 backdrop-blur">
          <span className="material-symbols-outlined text-primary">auto_awesome</span>
          AI-powered startup operating system for founders, mentors, and investors
        </div>

        <h1 className="font-display-lg text-[46px] md:text-[72px] leading-[0.95] tracking-[-0.03em] text-white mt-7 mb-6 max-w-4xl mx-auto">
          Build, validate, and scale your startup in one premium launch space.
        </h1>
        <p className="font-body-base text-[18px] md:text-[22px] text-slate-300 max-w-3xl mx-auto mb-10">
          Nexora brings idea validation, mentorship, investor discovery, market intelligence, and community momentum into one beautiful operating system.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <ButtonPrimary className="px-8 py-4 rounded-2xl text-lg h-auto" icon="rocket_launch" onClick={launchStartup}>
            Launch your startup
          </ButtonPrimary>
          <ButtonSecondary className="px-8 py-4 rounded-2xl text-lg h-auto" icon="handshake" onClick={joinAsMentor}>
            Join as mentor or investor
          </ButtonSecondary>
        </div>
      </div>

      <div className="relative z-10 mt-10 flex flex-wrap justify-center gap-4">
        {FLOATING_STATS.map((stat, index) => (
          <div key={stat.label} className={`glass-panel rounded-2xl px-5 py-4 flex items-center gap-3 ${index === 0 ? 'animate-[float_6s_ease-in-out_infinite]' : 'animate-[float_8s_ease-in-out_infinite_reverse]'}`}>
            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${stat.color === 'primary-container' ? 'bg-primary/15 text-primary' : 'bg-secondary/15 text-secondary'}`}>
              <span className="material-symbols-outlined text-[22px]">{stat.icon}</span>
            </div>
            <div className="text-left">
              <div className="text-[11px] uppercase tracking-[0.24em] text-slate-400">{stat.label}</div>
              <div className="text-white font-semibold">{stat.value}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 mt-10 hidden lg:block">
        <div className="mx-auto h-56 w-56 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/20 to-white/5 p-4 shadow-[0_20px_60px_rgba(37,99,235,0.25)] backdrop-blur-xl">
          <div className="relative h-full w-full rounded-[1.5rem] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.55),_transparent_25%),linear-gradient(135deg,_rgba(37,99,235,0.95),_rgba(139,92,246,0.9)_45%,_rgba(6,182,212,0.75))] shadow-inner">
            <div className="absolute inset-8 rounded-[1.25rem] border border-white/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur">LaunchNest 3D</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
