import type { Metadata } from 'next';
import Link from 'next/link';
import { buildPageMetadata } from '@/lib/metadata';
import { identity, percussionCredits, workRoles } from '../site-data';

const description =
  'Tyler James-Bridges: Software Engineer III at Weedmaps, percussion educator, and father in Arizona.';

export const metadata: Metadata = buildPageMetadata({
  title: 'About',
  description,
  path: '/about',
});

export default function AboutPage() {
  return (
    <div className="page-shell">
      <header className="page-intro">
        <h1>{identity.name}</h1>
        <p className="lede">
          {identity.title} · {identity.company} · {identity.location}
        </p>
      </header>

      <section className="content-section" aria-labelledby="about-work">
        <div className="section-heading">
          <h2 id="about-work">Work</h2>
          <Link href="/experience">Full history</Link>
        </div>
        <div className="record-list">
          {workRoles.slice(0, 3).map((role) => (
            <article key={role.period} className="record-row record-row-work">
              <time>{role.period}</time>
              <div>
                <h3>{role.title}</h3>
                <p className="record-meta">{role.company}</p>
              </div>
              <p>{role.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section">
        <div>
          <div className="section-heading">
            <h2>Independent projects</h2>
            <Link href="/projects">Project archive</Link>
          </div>
          <p>
            ACK Protocol · Agent Tool Index · qai-cli · x402 tooling · ERC-8004
            tooling · MCP servers
          </p>
        </div>

        <aside aria-labelledby="about-percussion">
          <div className="section-heading">
            <h2 id="about-percussion">Percussion</h2>
            <Link href="/drums">Videos</Link>
          </div>
          <div className="credit-list">
            {percussionCredits
              .slice(0, 3)
              .map(([period, organization, role]) => (
                <div key={`${organization}-${period}`}>
                  <time>{period}</time>
                  <strong>{organization}</strong>
                  <span>{role}</span>
                </div>
              ))}
          </div>
        </aside>
      </section>

      <section className="content-section" aria-labelledby="personal-title">
        <div className="section-heading">
          <h2 id="personal-title">Personal</h2>
        </div>
        <p>Arizona · Father of two</p>
      </section>
    </div>
  );
}
