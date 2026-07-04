import React from 'react';
import { Avatar } from '../ui/Avatar';
import { Link } from 'react-router-dom';
import { useAppActions } from '../../hooks/useAppActions';

export function TopNavBar({ title = 'Dashboard', showSearch = true, onMenuClick }) {
  const { notify } = useAppActions();

  return (
    <header className="mb-8 flex items-center justify-between py-4">
      <div className="flex items-center gap-4">
        <button type="button" onClick={onMenuClick} className="rounded-full border border-white/10 p-2 text-slate-300 lg:hidden">
          <span className="material-symbols-outlined">menu</span>
        </button>
        <h1 className="text-display-lg-mobile font-display-lg-mobile tracking-tight text-white">{title}</h1>
      </div>

      <div className="flex items-center gap-6">
        {showSearch && (
          <div className="relative hidden md:block">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">search</span>
            <input
              type="text"
              placeholder="Search startups, investors..."
              className="w-64 rounded-full border border-white/10 bg-slate-900/70 py-2 pl-12 pr-4 text-white transition-all focus:border-primary/50 focus:outline-none"
            />
          </div>
        )}

        <button type="button" onClick={() => notify('You have 3 new notifications.')} className="relative text-slate-400 transition hover:text-white">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-rose-400" />
        </button>

        <div className="flex items-center gap-3 border-l border-white/10 pl-6">
          <div className="hidden text-right sm:block">
            <p className="text-sm font-medium text-white">Alex Founder</p>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Nexus AI</p>
          </div>
          <Link to="/profile">
            <Avatar src="https://ui-avatars.com/api/?name=Alex+Founder&background=b4c5ff&color=002a78" alt="Profile" />
          </Link>
        </div>
      </div>
    </header>
  );
}
