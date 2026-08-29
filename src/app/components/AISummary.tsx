import Link from 'next/link';
import { socialLinks } from './nav-config';
import { ThemeToggle } from './ThemeToggle';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <nav className="footer-links" aria-label="Footer navigation">
          <Link href="/" className="footer-link">
            Home
          </Link>
          <Link href="/playground" className="footer-link">
            Lab
          </Link>
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              {link.label}
            </a>
          ))}
          <a href="mailto:tylerjamesbridges@gmail.com" className="footer-link">
            Email
          </a>
        </nav>

        <div className="footer-meta">
          <ThemeToggle />
          <p className="footer-note tabular">
            © {new Date().getFullYear()} Tyler James-Bridges · Arizona
          </p>
        </div>
      </div>
    </footer>
  );
}
