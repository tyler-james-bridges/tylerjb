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
      {/* Desktop nav */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Mobile nav — above content so sticky top-0 works */}
      <MobileNav />

      <main className="flex-1 w-full max-w-4xl mx-auto px-4 md:px-8 py-6">
        {children}
        <AISummary />
      </main>
    </div>
  );
}
