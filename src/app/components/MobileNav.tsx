'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from './nav-config';

export default function MobileNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-muted/95 backdrop-blur-sm border-t border-border safe-area-bottom">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          const className = `flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
            active
              ? 'text-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`;
          // For drums, force a full reload to reset game state
          if (item.href === '/drums') {
            return (
              <a key={item.href} href={item.href} className={className}>
                <Icon
                  className={`w-6 h-6 ${active ? 'stroke-[2.5px]' : 'stroke-[1.5px]'}`}
                />
                <span className={`text-[10px] ${active ? 'font-medium' : ''}`}>
                  {item.shortLabel || item.label}
                </span>
              </a>
            );
          }
          return (
            <Link key={item.href} href={item.href} className={className}>
              <Icon
                className={`w-6 h-6 ${active ? 'stroke-[2.5px]' : 'stroke-[1.5px]'}`}
              />
              <span className={`text-[10px] ${active ? 'font-medium' : ''}`}>
                {item.shortLabel || item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
