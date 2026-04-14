'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { navItems, socialLinks } from './nav-config';
import { ThemeToggle } from './ThemeToggle';

export default function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Top bar */}
      <nav className="md:hidden sticky top-0 z-50 bg-background border-b-2 border-foreground">
        <div className="flex items-center justify-between px-4 py-3">
          <Link
            href="/"
            className="text-sm font-bold tracking-widest uppercase"
          >
            TJB
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setOpen(true)}
              className="p-2 text-foreground"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        className={`md:hidden fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`md:hidden fixed top-0 right-0 bottom-0 z-[70] w-[75%] max-w-[300px] bg-background border-l-2 border-foreground transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-3 border-b-2 border-foreground">
          <span className="text-xs uppercase tracking-[0.12em] font-medium text-muted-foreground">
            Menu
          </span>
          <button
            onClick={() => setOpen(false)}
            className="p-2 text-foreground"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col py-2">
          {navItems.map((item) => {
            const active = isActive(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-5 py-3.5 text-sm uppercase tracking-[0.1em] font-medium transition-colors ${
                  active
                    ? 'text-foreground bg-foreground/5'
                    : 'text-muted-foreground active:bg-foreground/5'
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-5 py-4 border-t-2 border-foreground">
          <div className="flex items-center gap-4">
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
        </div>
      </div>
    </>
  );
}
