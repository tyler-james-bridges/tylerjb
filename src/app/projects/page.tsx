import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/metadata';
import { projects, type Project } from '../site-data';

const description =
  'Public projects by Tyler James-Bridges across developer tooling, testing, onchain systems, and music.';

export const metadata: Metadata = buildPageMetadata({
  title: 'Projects',
  description,
  path: '/projects',
});

function ProjectRow({ project }: { project: Project }) {
  return (
    <article className="record-row project-row">
      <div>
        <h3>{project.title}</h3>
        <p className="record-meta">{project.status}</p>
      </div>
      <div>
        <p>{project.description}</p>
        <p className="record-meta record-tech">{project.tech.join(' · ')}</p>
      </div>
      <div className="row-links">
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer">
            Visit <span aria-hidden="true">↗</span>
          </a>
        )}
        {project.source && (
          <a href={project.source} target="_blank" rel="noopener noreferrer">
            Source <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  const selectedProjects = projects.filter((project) => project.featured);
  const archiveProjects = projects.filter((project) => !project.featured);

  return (
    <div className="page-shell">
      <header className="page-intro">
        <h1>Projects</h1>
        <p className="lede">
          Open-source tools · Packages · Services · Experiments
        </p>
      </header>

      <section className="content-section" aria-labelledby="selected-title">
        <div className="section-heading">
          <h2 id="selected-title">Selected projects</h2>
        </div>
        <div className="record-list">
          {selectedProjects.map((project) => (
            <ProjectRow key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="content-section" aria-labelledby="archive-title">
        <div className="section-heading">
          <h2 id="archive-title">Project archive</h2>
        </div>
        <div className="record-list">
          {archiveProjects.map((project) => (
            <ProjectRow key={project.title} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
