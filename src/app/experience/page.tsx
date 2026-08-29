import type { Metadata } from 'next';
import Link from 'next/link';
import { buildPageMetadata } from '@/lib/metadata';
import {
  percussionCredits,
  selectedSystems,
  toolGroups,
  workRoles,
} from '../site-data';

const description =
  'Work history for Tyler James-Bridges across developer tooling, test infrastructure, CI, and internal services.';

export const metadata: Metadata = buildPageMetadata({
  title: 'Work',
  description,
  path: '/experience',
});

export default function ExperiencePage() {
  return (
    <div className="page-shell">
      <header className="page-intro">
        <h1>Work</h1>
        <p className="lede">Weedmaps · 2016–present</p>
      </header>

      <section className="content-section" aria-labelledby="roles-title">
        <div className="section-heading">
          <h2 id="roles-title">Role history</h2>
        </div>
        <div className="record-list">
          {workRoles.map((role) => (
            <article
              key={`${role.company}-${role.period}`}
              className="record-row detail-row"
            >
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

      <section className="content-section" aria-labelledby="systems-title">
        <div className="section-heading">
          <h2 id="systems-title">Selected systems</h2>
          <span className="section-note">Internal details generalized.</span>
        </div>
        <div className="record-list">
          {selectedSystems.map((system) => (
            <article key={system.title} className="record-row system-row">
              <div>
                <h3>{system.title}</h3>
                <p className="record-meta">{system.stack}</p>
              </div>
              <p>{system.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section">
        <div>
          <div className="section-heading">
            <h2>Tools</h2>
          </div>
          <dl className="definition-list">
            {toolGroups.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <aside aria-labelledby="music-title">
          <div className="section-heading">
            <h2 id="music-title">Percussion</h2>
            <Link href="/drums">Videos</Link>
          </div>
          <div className="credit-list">
            {percussionCredits.map(([period, organization, role]) => (
              <div key={`${organization}-${period}`}>
                <time>{period}</time>
                <strong>{organization}</strong>
                <span>{role}</span>
              </div>
            ))}
          </div>
        </aside>
      </section>
    </div>
  );
}
