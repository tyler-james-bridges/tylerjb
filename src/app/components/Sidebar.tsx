'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from './nav-config';

export default function SiteHeader() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="site-header">
      <nav className="site-header-inner" aria-label="Primary navigation">
        <Link
          href="/"
          className="wordmark"
          aria-label="Tyler James-Bridges, home"
        >
          Tyler James-Bridges
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
      </nav>
    </header>
  );
}
