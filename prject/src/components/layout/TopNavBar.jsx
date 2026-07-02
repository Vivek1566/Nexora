import React from 'react';
import { Avatar } from '../ui/Avatar';
import { Link } from 'react-router-dom';
import { useAppActions } from '../../hooks/useAppActions';

export function TopNavBar({ title = 'Dashboard', showSearch = true }) {
  const { notify } = useAppActions();

  return (
    <header className="flex items-center justify-between py-4 mb-8">
      <div className="flex items-center gap-4">
        <h1 className="text-display-lg-mobile font-display-lg-mobile text-white tracking-tight">{title}</h1>
      </div>

      <div className="flex items-center gap-6">
        {showSearch && (
          <div className="relative hidden md:block">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
            <input
              type="text"
              placeholder="Search startups, investors..."
              className="bg-surface-variant/50 border border-outline-variant/30 rounded-full py-2 pl-12 pr-4 text-white focus:outline-none focus:border-primary/50 w-64 transition-all"
            />
          </div>
        )}

        <button
          type="button"
          onClick={() => notify('You have 3 new notifications.')}
          className="relative text-on-surface-variant hover:text-white transition-colors"
        >
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full" />
        </button>

        <div className="flex items-center gap-3 border-l border-outline-variant/30 pl-6">
          <div className="text-right hidden sm:block">
            <p className="text-body-sm font-medium text-white">Alex Founder</p>
            <p className="text-label-mono text-on-surface-variant">Nexus AI</p>
          </div>
          <Link to="/">
            <Avatar src="https://ui-avatars.com/api/?name=Alex+Founder&background=b4c5ff&color=002a78" alt="Profile" />
          </Link>
        </div>
      </div>
    </header>
  );
}
