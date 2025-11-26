"use client";

import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";

interface SidebarLayoutProps {
  children: React.ReactNode;
}

export default function SidebarLayout({ children }: SidebarLayoutProps) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Show loading state while detecting viewport
  if (isMobile === null) {
    return (
      <div className="h-dvh flex items-center justify-center">
        <div className="spinner w-6 h-6 border-2 border-muted-foreground border-t-foreground rounded-full" />
      </div>
    );
  }

  // Mobile: bottom tab bar + full-width content
  if (isMobile) {
    return (
      <div className="h-dvh flex flex-col">
        <main className="flex-1 overflow-y-auto pb-20">
          {children}
        </main>
        <MobileNav />
      </div>
    );
  }

  // Desktop: sidebar + content side by side
  return (
    <div className="h-dvh flex">
      <Sidebar isMobile={false} />
      <main className="flex-1 h-dvh overflow-y-auto scrollbar-thin">
        {children}
      </main>
    </div>
  );
}
