import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { SIDEBAR_NAV_ITEMS, SETTINGS_NAV_ITEMS } from '../../data/navigation';
import { GlassPanel } from '../ui/GlassPanel';
import { useAppActions } from '../../hooks/useAppActions';

export function SideNavBar() {
  const { notify } = useAppActions();

  return (
    <GlassPanel className="w-64 h-[calc(100vh-48px)] sticky top-6 hidden lg:flex flex-col border-r border-outline-variant/20 p-4">
      <div className="mb-8 px-4">
        <Link to="/" className="text-display-lg-mobile font-display-lg-mobile text-primary tracking-tighter">
          LaunchNest
        </Link>
      </div>

      <nav className="flex-1 flex flex-col gap-1 overflow-y-auto custom-scrollbar">
        {SIDEBAR_NAV_ITEMS.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-primary/10 text-primary border border-primary/20'
                  : 'text-on-surface-variant hover:bg-surface-variant hover:text-white border border-transparent'
              }`
            }
          >
            <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
            <span className="font-medium text-body-sm font-body-sm">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto border-t border-outline-variant/20 pt-4 flex flex-col gap-1">
        {SETTINGS_NAV_ITEMS.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-primary/10 text-primary border border-primary/20'
                  : 'text-on-surface-variant hover:bg-surface-variant hover:text-white border border-transparent'
              }`
            }
          >
            <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
            <span className="font-medium text-body-sm font-body-sm">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </GlassPanel>
  );
}
