import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const professionalWork = [
  {
    title: 'Developer platform and CI systems',
    meta: 'Developer experience · GitHub Actions · TypeScript',
    description:
      'I build service templates, reusable workflows, and delivery interfaces that give teams a more consistent path from local development to production.',
  },
  {
    title: 'Test infrastructure at product scale',
    meta: 'Playwright · API testing · Accessibility · Pre-merge confidence',
    description:
      'I moved from executing tests by hand to building Playwright systems, shared helpers, and CI affordances used across multiple product surfaces.',
  },
  {
    title: 'A single interface for smoke testing',
    meta: 'CLI design · Node.js · Environment-aware execution',
    description:
      'I replaced scattered shell and YAML orchestration with a TypeScript CLI that runs the same smoke tests locally and in CI.',
  },
  {
    title: 'Agent infrastructure with guardrails',
    meta: 'MCP · Scheduled agents · Auditable automation',
    description:
      'I work on internal agent tooling designed around explicit capabilities, repeatable workflows, and observable execution.',
  },
];

const independentProjects = [
  {
    title: 'ACK Protocol',
    description:
      'An ERC-8004 reputation layer for AI agents, with onchain kudos, agent discovery, and a TypeScript SDK.',
    tags: ['Next.js', 'Solidity', 'ERC-8004', 'Abstract'],
    href: 'https://ack-onchain.dev',
    status: 'Live app',
    featured: true,
  },
  {
    title: 'qai-cli',
    description:
      'A published CLI combining Playwright and AI for visual scans, console and network checks, pull-request review, and test generation.',
    tags: ['Playwright', 'TypeScript', 'CLI'],
    href: 'https://www.npmjs.com/package/qai-cli',
    status: 'Published package',
  },
  {
    title: 'Agent Tool Index',
    description:
      'A Rust service that indexes onchain agent tools and exposes discovery and call-planning APIs.',
    tags: ['Rust', 'Indexing', 'APIs'],
    href: 'https://agenttoolindex.xyz',
    status: 'Live service',
  },
];

const careerArc = [
  {
    period: '2016–2020',
    title: 'Quality Engineer Analyst',
    description:
      'Manual and exploratory testing, test planning, API testing, and cross-functional release quality at Weedmaps.',
  },
  {
    period: '2020–2025',
    title: 'Senior Quality Engineer',
    description:
      'Playwright automation, reusable test systems, CI integration, and developer enablement.',
  },
  {
    period: '2025–Now',
    title: 'Software Engineer III',
    description:
      'Developer tooling, CI/CD interfaces, internal APIs, platform systems, and agent infrastructure.',
  },
];

export default function HomePage() {
  return (
    <div className="page-shell">
      <section className="page-intro" aria-labelledby="home-title">
        <p className="kicker reveal">Software Engineer III · Arizona</p>
        <h1 id="home-title" className="display-heading reveal reveal-delay-1">
          Tools that help engineers <em>ship.</em>
        </h1>
        <p className="lede reveal reveal-delay-2">
          <strong>
            I build developer tooling, test infrastructure, and agent systems.
          </strong>{' '}
          At Weedmaps since 2016, I moved from manual QA to Playwright
          automation to developer experience. Outside work, I build open-source
          infrastructure for AI agents on Ethereum L2s.
        </p>
        <div className="button-row reveal reveal-delay-3">
          <Link href="/experience" className="button-primary pressable">
            See professional work
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link href="/projects" className="button-secondary pressable">
            Explore projects
          </Link>
        </div>

        <div
          className="ledger reveal reveal-delay-3"
          aria-label="Career summary"
        >
          <div className="ledger-cell">
            <div className="ledger-value tabular">2016</div>
            <div className="ledger-label">
              Started in hands-on quality assurance
            </div>
          </div>
          <div className="ledger-cell">
            <div className="ledger-value tabular">2020</div>
            <div className="ledger-label">Senior quality engineer</div>
          </div>
          <div className="ledger-cell">
            <div className="ledger-value tabular">2025</div>
            <div className="ledger-label">Software Engineer III</div>
          </div>
          <div className="ledger-cell">
            <div className="ledger-value">Now</div>
            <div className="ledger-label">
              Developer experience and agent infrastructure
            </div>
          </div>
        </div>
      </section>

      <section
        className="section-row"
        aria-labelledby="professional-work-title"
      >
        <div className="section-index">
          <strong>01</strong>
          Professional work
        </div>
        <div className="section-body">
          <h2 id="professional-work-title" className="section-title">
            Quality is the throughline.
          </h2>
          <p className="section-copy">
            I started by finding failures manually, then automated the search
            for them, and now build the tools and platforms that help
            engineering teams prevent them.
          </p>

          <div className="work-list">
            {professionalWork.map((item, index) => (
              <article key={item.title} className="work-item">
                <span className="work-number tabular">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p className="work-meta mt-2">{item.meta}</p>
                </div>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <Link href="/experience" className="text-link mt-6">
            Full experience
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="section-row" aria-labelledby="independent-work-title">
        <div className="section-index">
          <strong>02</strong>
          Independent work
        </div>
        <div className="section-body">
          <h2 id="independent-work-title" className="section-title">
            Public systems, shipped in the open.
          </h2>
          <p className="section-copy">
            Onchain reputation, AI-assisted quality engineering, and protocol
            tooling built outside my role at Weedmaps.
          </p>

          <div className="project-grid project-grid-featured">
            {independentProjects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`project-card ${
                  project.featured ? 'project-card-featured' : ''
                }`}
              >
                <span className="status">{project.status}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-card-footer">
                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight
                    className="h-5 w-5 shrink-0"
                    aria-hidden="true"
                  />
                </div>
              </a>
            ))}
          </div>

          <Link href="/projects" className="text-link mt-6">
            View the project archive
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="section-row" aria-labelledby="career-title">
        <div className="section-index">
          <strong>03</strong>
          Career arc
        </div>
        <div className="section-body">
          <h2 id="career-title" className="section-title">
            Test, automate, enable.
          </h2>
          <p className="section-copy">
            The title changed. The job stayed focused on making software more
            reliable and the people building it more effective.
          </p>
          <div className="timeline">
            {careerArc.map((item) => (
              <article key={item.period} className="timeline-item">
                <div className="timeline-period tabular">{item.period}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p className="mt-2">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
          <Link href="/journey" className="text-link mt-6">
            Read the transition story
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="section-row" aria-labelledby="outside-title">
        <div className="section-index">
          <strong>04</strong>
          Outside the editor
        </div>
        <div className="section-body">
          <h2 id="outside-title" className="section-title">
            Reps, feedback, precision.
          </h2>
          <p className="section-copy">
            I am also a percussion educator and former Pulse Percussion
            snareline member. Marching arts taught me to value repetition,
            precise feedback, and performing reliably under pressure.
          </p>
          <div className="button-row">
            <Link href="/about" className="button-secondary pressable">
              More about me
            </Link>
            <Link href="/drums" className="button-secondary pressable">
              Performance archive
            </Link>
          </div>
        </div>
      </section>

      <section className="section-row" aria-labelledby="contact-title">
        <div className="section-index">
          <strong>05</strong>
          Contact
        </div>
        <div className="section-body">
          <h2 id="contact-title" className="section-title">
            Want to compare notes?
          </h2>
          <p className="section-copy">
            I am always interested in conversations about developer tooling,
            quality infrastructure, agent systems, and the teams building them.
          </p>
          <div className="button-row">
            <Link href="/contact" className="button-primary pressable">
              Get in touch
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
