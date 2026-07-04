import React from 'react';
import { Link } from 'react-router-dom';
import { PUBLIC_NAV_LINKS } from '../../data/navigation';
import { useAppActions } from '../../hooks/useAppActions';

export function PublicLayout({ children }) {
  const { login, getStarted, notify } = useAppActions();

  return (
    <div className="min-h-screen flex flex-col relative z-10">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-container-max items-center justify-between px-gutter py-4">
          <Link to="/" className="text-xl font-semibold tracking-tight text-white">
            Nexora
          </Link>
          <ul className="hidden items-center gap-6 md:flex">
            {PUBLIC_NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link to={link.path} className="text-sm text-slate-300 transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-3">
            <button type="button" onClick={login} className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10">
              Login
            </button>
            <button type="button" onClick={getStarted} className="rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-500/20">
              Get started
            </button>
          </div>
        </div>
      </nav>

      <div className="flex-1 flex flex-col items-center w-full">
        {children}
      </div>

      <footer className="border-t border-white/10 bg-slate-950/80 py-10 mt-16">
        <div className="mx-auto flex max-w-container-max flex-col gap-6 px-gutter text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div>
            <p className="text-white font-semibold">Nexora</p>
            <p className="text-sm text-slate-400">Premium startup operating system for idea to impact.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400 md:justify-end">
            <button type="button" onClick={() => notify('Privacy policy')} className="transition hover:text-white">Privacy</button>
            <button type="button" onClick={() => notify('Terms and conditions')} className="transition hover:text-white">Terms</button>
            <button type="button" onClick={() => notify('Support team')} className="transition hover:text-white">Support</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
