import React from 'react';
import { ButtonPrimary, ButtonSecondary } from '../ui/Buttons';
import { FLOATING_STATS } from '../../data/landing';
import { useAppActions } from '../../hooks/useAppActions';

export function HeroSection() {
  const { launchStartup, joinAsMentor } = useAppActions();

  return (
    <section className="relative min-h-[600px] flex flex-col justify-center items-center text-center reveal">
      <h1 className="font-display-lg text-[48px] md:text-[72px] leading-tight tracking-tighter text-on-surface mb-6 max-w-4xl">
        Accelerate Your Vision in the{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#8b5cf6]">
          LaunchNest
        </span>
      </h1>
      <p className="font-body-base text-[18px] md:text-[22px] text-on-surface-variant max-w-2xl mb-10">
        The ultimate incubation portal connecting visionary founders with elite mentors and high-impact capital.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <ButtonPrimary
          className="px-8 py-4 rounded-xl text-lg h-auto"
          icon="rocket_launch"
          onClick={launchStartup}
        >
          Launch Your Startup
        </ButtonPrimary>
        <ButtonSecondary
          className="px-8 py-4 rounded-xl text-lg h-auto"
          icon="handshake"
          onClick={joinAsMentor}
        >
          Join as Mentor/Investor
        </ButtonSecondary>
      </div>

      {FLOATING_STATS.map((stat, i) => (
        <div
          key={stat.label}
          className={`absolute glass-panel p-4 rounded-xl hidden lg:flex items-center gap-3 ${
            i === 0 ? 'top-[20%] left-[10%] animate-[float_6s_ease-in-out_infinite]' : 'bottom-[30%] right-[10%] animate-[float_8s_ease-in-out_infinite_reverse]'
          }`}
        >
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-on-primary-container ${
            stat.color === 'primary-container' ? 'bg-primary-container' : 'bg-secondary-container'
          }`}>
            <span className="material-symbols-outlined">{stat.icon}</span>
          </div>
          <div className="text-left">
            <div className="font-label-mono text-[10px] text-on-surface-variant uppercase">{stat.label}</div>
            <div className="font-bold text-on-surface">{stat.value}</div>
          </div>
        </div>
      ))}
    </section>
  );
}
