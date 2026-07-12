import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { socialLinks } from './nav-config';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div>
          <Link
            href="/"
            className="font-display text-2xl font-semibold tracking-[-0.03em]"
          >
            Tyler James-Bridges<em className="text-accent">.</em>
          </Link>
          <p className="footer-note mt-2">
            Software engineer, quality systems builder, percussion educator.
          </p>
        </div>

        <div className="sm:text-right">
          <div className="footer-links sm:justify-end">
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
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ))}
            <a
              href="mailto:tylerjamesbridges@gmail.com"
              className="footer-link"
            >
              Email
            </a>
          </div>
          <p className="footer-note mt-2 tabular">
            © {new Date().getFullYear()} Tyler James-Bridges · Arizona
          </p>
        </div>
      </div>
    </footer>
  );
}
