import type { Metadata } from 'next';
import Link from 'next/link';
import { buildPageMetadata } from '@/lib/metadata';
import { workRoles } from '../site-data';

const description =
  'Role history for Tyler James-Bridges at Weedmaps from quality engineering through software engineering.';

export const metadata: Metadata = buildPageMetadata({
  title: 'Role history',
  description,
  path: '/journey',
});

export default function JourneyPage() {
  return (
    <div className="page-shell">
      <header className="page-intro">
        <h1>Role history</h1>
        <p className="lede">Weedmaps · 2016–present</p>
      </header>

      <section className="content-section" aria-labelledby="timeline-title">
        <div className="section-heading">
          <h2 id="timeline-title">Roles and responsibilities</h2>
          <Link href="/experience">Full work history</Link>
        </div>
        <div className="record-list">
          {workRoles.slice(0, 3).map((role) => (
            <article key={role.period} className="record-row detail-row">
              <time>{role.period}</time>
              <div>
                <h3>{role.title}</h3>
                <p className="record-meta">{role.company}</p>
              </div>
              <div>
                <p>{role.summary}</p>
                <ul className="fact-list">
                  {role.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
