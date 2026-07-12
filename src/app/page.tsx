import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const professionalWork = [
  {
    title: 'Developer tooling and CI',
    meta: 'Developer experience · GitHub Actions · TypeScript',
    description:
      'Service templates, reusable workflows, and internal tools that make it easier to move from a local change to production.',
  },
  {
    title: 'Playwright at product scale',
    meta: 'Playwright · API testing · Accessibility',
    description:
      'Shared test infrastructure for browser, API, accessibility, smoke, and pre-merge coverage across multiple products.',
  },
  {
    title: 'One CLI for smoke tests',
    meta: 'Node.js · Playwright · CI/CD',
    description:
      'A TypeScript CLI that replaced scattered shell and YAML logic with the same test commands locally and in CI.',
  },
];

const independentProjects = [
  {
    title: 'ACK Protocol',
    description:
      'Onchain reputation for AI agents: kudos, discovery, trust scoring, and a TypeScript SDK.',
    tags: ['Next.js', 'Solidity', 'ERC-8004', 'Abstract'],
    href: 'https://ack-onchain.dev',
    status: 'Live app',
  },
  {
    title: 'qai-cli',
    description:
      'A Playwright-based CLI for visual checks, console and network errors, PR review, and test generation.',
    tags: ['Playwright', 'TypeScript', 'CLI'],
    href: 'https://www.npmjs.com/package/qai-cli',
    status: 'Published package',
  },
  {
    title: 'Agent Tool Index',
    description:
      'A Rust index of onchain agent tools, with APIs for discovery and call planning.',
    tags: ['Rust', 'ERC-8257', 'APIs'],
    href: 'https://agenttoolindex.xyz',
    status: 'Live service',
  },
];

export default function HomePage() {
  return (
    <div className="page-shell">
      <section className="page-intro" aria-labelledby="home-title">
        <p className="kicker reveal">Tyler James-Bridges · Software engineer</p>
        <h1 id="home-title" className="display-heading reveal reveal-delay-1">
          I build tools for people who build software.
        </h1>
        <p className="lede reveal reveal-delay-2">
          I&apos;m a Software Engineer III at Weedmaps. I started there in
          manual QA in 2016, spent years building Playwright automation, and now
          work on developer tooling, internal services, and agent workflows.
          Outside work, I build open-source onchain tools and teach percussion
          in Arizona.
        </p>
        <div className="button-row reveal reveal-delay-3">
          <Link href="/experience" className="button-primary pressable">
            Work experience
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link href="/projects" className="button-secondary pressable">
            Projects
          </Link>
        </div>
      </section>

      <section
        className="section-row"
        aria-labelledby="professional-work-title"
      >
        <div className="section-index">At work</div>
        <div className="section-body">
          <h2 id="professional-work-title" className="section-title">
            From QA to developer experience
          </h2>
          <p className="section-copy">
            I know the testing side of software because I did it by hand. The
            work now is building better paths for the engineers doing the
            building, reviewing, testing, and shipping.
          </p>

          <div className="work-list">
            {professionalWork.map((item) => (
              <article key={item.title} className="work-item">
                <div>
                  <h3>{item.title}</h3>
                  <p className="work-meta mt-2">{item.meta}</p>
                </div>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <Link href="/experience" className="text-link mt-6">
            Full work history
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="section-row" aria-labelledby="independent-work-title">
        <div className="section-index">Outside work</div>
        <div className="section-body">
          <h2 id="independent-work-title" className="section-title">
            Things I&apos;ve shipped
          </h2>
          <p className="section-copy">
            Most of my public work is somewhere between developer tooling,
            quality engineering, AI agents, and Ethereum.
          </p>

          <div className="project-grid project-grid-featured">
            {independentProjects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
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
            All projects
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="section-row" aria-labelledby="outside-title">
        <div className="section-index">Also me</div>
        <div className="section-body">
          <h2 id="outside-title" className="section-title">
            Drums, teaching, and two kids
          </h2>
          <p className="section-copy">
            Before software, I marched snare with Pulse Percussion. I still
            teach and consult with percussion programs in Arizona, listen to far
            too much progressive metal, and start more side projects than I
            finish.
          </p>
          <div className="button-row">
            <Link href="/about" className="button-secondary pressable">
              About me
            </Link>
            <Link href="/drums" className="button-secondary pressable">
              Watch performances
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
