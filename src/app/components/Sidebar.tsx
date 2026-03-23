'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems, socialLinks } from './nav-config';
import { ThemeToggle } from './ThemeToggle';

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b-2 border-foreground">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Wordmark */}
        <Link
          href="/"
          className="text-base font-bold tracking-widest uppercase"
        >
          TJB
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xs uppercase tracking-[0.08em] font-medium transition-colors ${
                  active
                    ? 'text-foreground underline underline-offset-4'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.shortLabel || item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side: social + theme */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.08em] text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
