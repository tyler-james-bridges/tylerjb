import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const experiments = [
  {
    title: 'TylerOS',
    status: 'Archived experiment',
    description:
      'A browser desktop built to explore window management, app state, terminal interactions, and the limits of desktop metaphors on the web.',
    tags: ['React', 'State machines', 'Browser UI'],
  },
  {
    title: 'Mobile development workflow',
    status: 'Field note',
    description:
      'A practical setup using an iPhone, Termius, Tailscale, and Claude Code to work on the site away from a desk.',
    tags: ['SSH', 'Tailscale', 'Developer experience'],
  },
  {
    title: 'Audio and rhythm interfaces',
    status: 'Ongoing research',
    description:
      'Small studies at the intersection of browser audio, tempo mapping, percussion education, and interaction design.',
    tags: ['Web Audio', 'React Native', 'Music tools'],
  },
];

export default function PlaygroundPage() {
  return (
    <div className="page-shell">
      <header className="page-intro">
        <p className="kicker reveal">Lab</p>
        <h1 className="page-title reveal reveal-delay-1">
          Experiments without a roadmap.
        </h1>
        <p className="lede reveal reveal-delay-2">
          Interface studies, mobile-development workflows, and music tools that
          do not need to pretend they are products.
        </p>
      </header>

      <section className="section-row" aria-labelledby="experiments-title">
        <div className="section-index">
          <strong>01</strong>
          Experiments
        </div>
        <div className="section-body">
          <h2 id="experiments-title" className="section-title">
            Current and archived studies
          </h2>
          <div className="project-grid">
            {experiments.map((experiment) => (
              <article key={experiment.title} className="project-card">
                <span className="status">{experiment.status}</span>
                <h3>{experiment.title}</h3>
                <p>{experiment.description}</p>
                <div className="project-card-footer">
                  <div className="tag-list">
                    {experiment.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-row" aria-labelledby="lab-source-title">
        <div className="section-index">
          <strong>02</strong>
          Source
        </div>
        <div className="section-body">
          <h2 id="lab-source-title" className="section-title">
            The code is part of the record
          </h2>
          <p className="section-copy">
            The archived TylerOS implementation and the current site history
            remain available in the public repository.
          </p>
          <div className="button-row">
            <a
              href="https://github.com/tyler-james-bridges/tylerjb"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary pressable"
            >
              View source
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link href="/projects" className="button-secondary pressable">
              Shipped projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
