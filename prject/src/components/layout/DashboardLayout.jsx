import React, { useState } from 'react';
import { SideNavBar } from './SideNavBar';
import { TopNavBar } from './TopNavBar';
import { MobileSidebar } from '../ui/MobileSidebar';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export function DashboardLayout({ children, title }) {
  useScrollReveal();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex max-w-container-max mx-auto px-gutter py-6 gap-8 relative z-10">
      <SideNavBar />
      <MobileSidebar open={mobileOpen} onClose={() => setMobileOpen(false)} />

      <main className="flex-1 min-w-0 flex flex-col">
        <TopNavBar title={title} onMenuClick={() => setMobileOpen(true)} />
        <div className="flex-1 reveal active pb-12">
          {children}
        </div>
      </main>
    </div>
  );
}
