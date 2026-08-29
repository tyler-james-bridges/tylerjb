import Link from 'next/link';

const experiments = [
  {
    title: 'TylerOS',
    status: 'Archived experiment',
    description:
      'Browser desktop with window management, app state, and terminal interactions.',
    tags: ['React', 'State machines', 'Browser UI'],
  },
  {
    title: 'Mobile development workflow',
    status: 'Field note',
    description:
      'iPhone development setup using Termius, Tailscale, and Claude Code.',
    tags: ['SSH', 'Tailscale', 'Developer experience'],
  },
  {
    title: 'Audio and rhythm interfaces',
    status: 'Ongoing research',
    description:
      'Browser audio, tempo mapping, percussion education, and interaction-design studies.',
    tags: ['Web Audio', 'React Native', 'Music tools'],
  },
];

export default function PlaygroundPage() {
  return (
    <div className="page-shell">
      <header className="page-intro">
        <h1>Lab</h1>
        <p className="lede">
          Interface experiments · Mobile development workflows · Music tools
        </p>
      </header>

      <section className="content-section" aria-labelledby="experiments-title">
        <div className="section-heading">
          <h2 id="experiments-title">Experiments</h2>
        </div>
        <div className="record-list">
          {experiments.map((experiment) => (
            <article key={experiment.title} className="record-row system-row">
              <div>
                <h3>{experiment.title}</h3>
                <p className="record-meta">{experiment.status}</p>
              </div>
              <div>
                <p>{experiment.description}</p>
                <p className="record-meta record-tech">
                  {experiment.tags.join(' · ')}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" aria-labelledby="lab-source-title">
        <div className="section-heading">
          <h2 id="lab-source-title">Source</h2>
        </div>
        <p>
          The public repository contains the archived TylerOS implementation and
          current site history.
        </p>
        <div className="inline-links source-links">
          <a
            href="https://github.com/tyler-james-bridges/tylerjb"
            target="_blank"
            rel="noopener noreferrer"
          >
            View source <span aria-hidden="true">↗</span>
          </a>
          <Link href="/projects">Projects</Link>
        </div>
      </section>
    </div>
  );
}
