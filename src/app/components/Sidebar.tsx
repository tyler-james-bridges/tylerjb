'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navItems, socialLinks } from './nav-config';
import { ThemeToggle } from './ThemeToggle';

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => pathname.startsWith(href);
  const closeMenu = () => {
    setOpen(false);
    requestAnimationFrame(() => triggerRef.current?.focus());
  };

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
        return;
      }
      if (event.key !== 'Tab' || !drawerRef.current) return;

      const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      } else if (active && !drawerRef.current.contains(active)) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [open]);

  return (
    <header className="site-header">
      <nav className="site-header-inner" aria-label="Primary navigation">
        <Link
          href="/"
          className="wordmark"
          aria-label="Tyler James-Bridges, home"
        >
          <span className="wordmark-mark" aria-hidden="true">
            TJB
          </span>
          <span className="hidden sm:inline">Tyler James-Bridges</span>
        </Link>

        <div className="desktop-nav">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
              data-active={isActive(item.href)}
              aria-current={isActive(item.href) ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
            ref={triggerRef}
            type="button"
            className="icon-button mobile-menu-trigger"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {open && (
        <>
          <div
            className="mobile-drawer-backdrop opacity-100 md:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />

          <div
            ref={drawerRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="mobile-drawer translate-x-0 md:hidden"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                Navigate
              </span>
              <button
                ref={closeButtonRef}
                type="button"
                className="icon-button"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Mobile menu">
              <Link
                href="/"
                className="mobile-nav-link"
                data-active={pathname === '/'}
                aria-current={pathname === '/' ? 'page' : undefined}
              >
                Home
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="mobile-nav-link"
                  data-active={isActive(item.href)}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="absolute bottom-5 left-4 right-4 border-t border-foreground/20 pt-4">
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
