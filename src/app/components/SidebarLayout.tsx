'use client';

import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';
import MobileNav from './MobileNav';
import AISummary from './AISummary';

interface SidebarLayoutProps {
  children: React.ReactNode;
}

export default function SidebarLayout({ children }: SidebarLayoutProps) {
  const pathname = usePathname();
  const isPlayground = pathname === '/playground';

  if (isPlayground) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-dvh flex flex-col">
      {/* Top nav — hidden on mobile, MobileNav handles small screens */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      <main className="flex-1 w-full max-w-4xl mx-auto px-4 md:px-8 py-6">
        {children}
        <AISummary />
      </main>

      {/* Mobile nav */}
      <MobileNav />
    </div>
  );
}
