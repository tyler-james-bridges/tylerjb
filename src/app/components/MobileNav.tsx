'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from './nav-config';
import { ThemeToggle } from './ThemeToggle';

export default function MobileNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav className="md:hidden sticky top-0 z-50 bg-background border-b-2 border-foreground safe-area-bottom">
      <div className="flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-sm font-bold tracking-widest uppercase">
          TJB
        </Link>

        <div className="flex items-center gap-1 overflow-x-auto scrollbar-none">
          {navItems.map((item) => {
            const active = isActive(item.href);
            const sharedClass = `whitespace-nowrap px-2 py-1 text-[10px] uppercase tracking-[0.08em] font-medium transition-colors ${
              active
                ? 'text-foreground underline underline-offset-4'
                : 'text-muted-foreground'
            }`;

            if (item.href === '/drums') {
              return (
                <a key={item.href} href={item.href} className={sharedClass}>
                  {item.shortLabel || item.label}
                </a>
              );
            }

            return (
              <Link key={item.href} href={item.href} className={sharedClass}>
                {item.shortLabel || item.label}
              </Link>
            );
          })}
        </div>

        <ThemeToggle />
      </div>
    </nav>
  );
}
