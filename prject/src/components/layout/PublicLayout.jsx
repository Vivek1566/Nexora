import React from 'react';
import { Link } from 'react-router-dom';
import { PUBLIC_NAV_LINKS } from '../../data/navigation';
import { useAppActions } from '../../hooks/useAppActions';

export function PublicLayout({ children }) {
  const { login, getStarted, notify } = useAppActions();

  return (
    <div className="min-h-screen flex flex-col relative z-10">
      <nav className="bg-surface/80 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant/10 shadow-sm flex justify-between items-center px-gutter py-4 w-full">
        <div className="max-w-container-max mx-auto w-full flex justify-between items-center">
          <Link to="/" className="font-display-lg text-display-lg-mobile tracking-tighter text-primary">
            LaunchNest
          </Link>
          <ul className="hidden md:flex gap-8 items-center">
            {PUBLIC_NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.path}
                  className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-4">
            <button type="button" onClick={login} className="btn-secondary px-6 py-2 rounded-full text-white font-medium">
              Log In
            </button>
            <button
              type="button"
              onClick={getStarted}
              className="btn-primary px-6 py-2 rounded-full text-white font-medium hidden sm:block"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <div className="flex-1 flex flex-col items-center w-full">
        {children}
      </div>

      <footer className="bg-surface-container-lowest border-t border-outline-variant/20 py-12 mt-20 w-full px-gutter">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <div className="font-headline-md text-headline-md text-primary">LaunchNest</div>
            <div className="font-body-sm text-body-sm text-on-surface-variant">
              © 2024 LaunchNest Startup Incubation. All rights reserved.
            </div>
          </div>
          <ul className="flex flex-wrap justify-center gap-6 font-label-mono text-label-mono">
            <li><button type="button" onClick={() => notify('Privacy Policy')} className="text-on-surface-variant hover:text-tertiary transition-colors">Privacy Policy</button></li>
            <li><button type="button" onClick={() => notify('Terms of Service')} className="text-on-surface-variant hover:text-tertiary transition-colors">Terms of Service</button></li>
            <li><button type="button" onClick={() => notify('Cookie Policy')} className="text-on-surface-variant hover:text-tertiary transition-colors">Cookie Policy</button></li>
            <li><button type="button" onClick={() => notify('Contact support at help@launchnest.io')} className="text-on-surface-variant hover:text-tertiary transition-colors">Contact Support</button></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
