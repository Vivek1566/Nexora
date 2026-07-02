import React from 'react';
import { SideNavBar } from './SideNavBar';
import { TopNavBar } from './TopNavBar';

export function DashboardLayout({ children, title }) {
  return (
    <div className="min-h-screen flex max-w-container-max mx-auto px-gutter py-6 gap-8 relative z-10">
      <SideNavBar />
      
      <main className="flex-1 min-w-0 flex flex-col">
        <TopNavBar title={title} />
        <div className="flex-1 reveal active pb-12">
          {children}
        </div>
      </main>
    </div>
  );
}
