import React from 'react';
import { NavLink } from 'react-router-dom';
import { SIDEBAR_NAV_ITEMS, SETTINGS_NAV_ITEMS } from '../../data/navigation';

export function MobileSidebar({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] lg:hidden">
      <div className="absolute inset-0 bg-slate-950/75" onClick={onClose} />
      <div className="absolute left-0 top-0 h-full w-72 border-r border-white/10 bg-slate-950/95 p-5 backdrop-blur-xl">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-lg font-semibold text-white">Nexora</p>
          <button type="button" onClick={onClose} className="rounded-full border border-white/10 p-2 text-slate-300">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="space-y-2">
          {[...SIDEBAR_NAV_ITEMS, ...SETTINGS_NAV_ITEMS].map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) => `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition ${isActive ? 'bg-white/10 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
