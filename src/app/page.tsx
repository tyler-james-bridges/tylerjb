import Image from 'next/image';
import Link from 'next/link';
import { identity, percussionCredits, projects, workRoles } from './site-data';

export default function HomePage() {
  return (
    <div className="page-shell">
      <section className="profile-intro" aria-labelledby="home-title">
        <div className="profile-copy">
          <h1 id="home-title">{identity.name}</h1>
          <p className="profile-role">
            {identity.title} · {identity.company}
          </p>
          <p className="profile-scope">
            Developer tooling · Test infrastructure · CI · Internal services
          </p>
          <p className="muted-text">{identity.location}</p>
          <div className="inline-links" aria-label="Direct links">
            <a href={identity.github} target="_blank" rel="noopener noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a
              href={identity.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a href={`mailto:${identity.email}`}>Email</a>
          </div>
        </div>

        <Image
          src="/images/profile-current.jpg"
          alt={identity.name}
          width={400}
          height={400}
          sizes="(max-width: 720px) 180px, 220px"
          priority
          className="profile-portrait"
        />
      </section>

      <section id="work" className="content-section">
        <div className="section-heading">
          <h2>Work</h2>
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

      <section id="projects" className="content-section">
        <div className="section-heading">
          <h2>Projects</h2>
          <Link href="/projects">Project archive</Link>
        </div>
        <div className="record-list">
          {projects.slice(0, 3).map((project) => (
            <article key={project.title} className="record-row project-row">
              <div>
                <h3>{project.title}</h3>
                <p className="record-meta">{project.status}</p>
              </div>
              <p>{project.description}</p>
              <div className="row-links">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit <span aria-hidden="true">↗</span>
                  </a>
                )}
                {project.source && (
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" aria-labelledby="percussion-title">
        <div className="section-heading">
          <h2 id="percussion-title">Percussion</h2>
          <Link href="/drums">Videos</Link>
        </div>
        <div className="record-list">
          {percussionCredits.slice(0, 3).map(([period, organization, role]) => (
            <article
              key={`${organization}-${period}`}
              className="record-row detail-row"
            >
              <time>{period}</time>
              <strong>{organization}</strong>
              <span className="record-meta">{role}</span>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
