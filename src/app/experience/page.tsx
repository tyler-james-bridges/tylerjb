import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/metadata';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const description =
  'Tyler James-Bridges’ progression from hands-on quality assurance to Software Engineer III building developer tooling, CI systems, and agent infrastructure.';

export const metadata: Metadata = buildPageMetadata({
  title: 'Experience',
  description,
  path: '/experience',
});

const roles = [
  {
    period: 'Aug 2025–Present',
    title: 'Software Engineer III',
    company: 'Weedmaps',
    summary:
      'Developer tooling, CI/CD interfaces, internal APIs, platform systems, and agent infrastructure.',
    bullets: [
      'Build tools and services that reduce friction across local development, review, testing, and delivery.',
      'Design CI and test-environment interfaces with infrastructure and application engineering teams.',
      'Ship internal APIs and automation from design through production support.',
      'Contribute to agent workflows built around explicit capabilities, guardrails, and observable execution.',
    ],
  },
  {
    period: 'Feb 2020–Aug 2025',
    title: 'Senior Quality Engineer',
    company: 'Weedmaps',
    summary:
      'Playwright automation, reusable test systems, CI integration, and developer enablement.',
    bullets: [
      'Built and maintained a TypeScript CLI for running Playwright tests across codebases and environments.',
      'Replaced hardcoded shell and YAML orchestration with a consistent local and CI interface.',
      'Built smoke, API, accessibility, and pre-merge testing workflows across multiple product surfaces.',
      'Created documentation and onboarding material for test tooling and debugging paths.',
    ],
  },
  {
    period: 'Jan 2016–Feb 2020',
    title: 'Quality Engineer Analyst',
    company: 'Weedmaps',
    summary:
      'Manual and exploratory testing, test planning, API testing, and cross-functional release quality.',
    bullets: [
      'Built regression and functional test coverage from the ground up.',
      'Reviewed specifications and translated product intent into practical acceptance coverage.',
      'Coordinated release testing across engineering, product, and support teams.',
      'Used production behavior and customer reports to improve test strategy.',
    ],
  },
  {
    period: 'Sep 2015–Feb 2016',
    title: 'Operations Manager',
    company: 'Bonfire',
    summary:
      'Operations and hiring for a customer-service organization focused on local search marketing.',
    bullets: [
      'Managed day-to-day campaign operations and customer relationships.',
      'Built operational processes for hiring, service delivery, and account organization.',
    ],
  },
];

const selectedSystems = [
  {
    title: 'Smoke test CLI',
    description:
      'A TypeScript interface that runs the same Playwright smoke tests from local development through CI, reducing environment-specific orchestration.',
    stack: 'TypeScript · Node.js · Playwright · CI/CD',
  },
  {
    title: 'End-to-end test platform',
    description:
      'Page Object Model suites, shared helpers, API coverage, accessibility checks, and pre-merge workflows across multiple application surfaces.',
    stack: 'Playwright · TypeScript · API testing · Accessibility',
  },
  {
    title: 'Service scaffolding and reusable delivery workflows',
    description:
      'Templates and shared GitHub Actions for security checks, reviewer assignment, pull-request automation, and standardized delivery paths.',
    stack: 'GitHub Actions · Templates · Docker · Developer experience',
  },
  {
    title: 'Internal agent infrastructure',
    description:
      'MCP tools and scheduled agent workflows designed for constrained capabilities, auditable actions, and repeatable execution.',
    stack: 'MCP · Agent systems · GitHub Actions · TypeScript',
  },
];

const musicExperience = [
  ['2024–Present', 'Flux Indoor Percussion', 'Battery Consultant'],
  ['2023–Present', 'Highland High School', 'Percussion Volunteer'],
  ['2015–2022', 'POW Percussion', 'Battery and Ensemble Coordinator'],
  ['2014–2018', 'Blue Stars', 'Snareline Tech'],
  ['2012–2014', 'Pulse Percussion', 'Snareline'],
];

export default function ExperiencePage() {
  return (
    <div className="page-shell">
      <header className="page-intro">
        <p className="kicker reveal">Experience</p>
        <h1 className="page-title reveal reveal-delay-1">
          From finding failures to designing the systems around them.
        </h1>
        <p className="lede reveal reveal-delay-2">
          A decade at Weedmaps across quality assurance, test automation, and
          software engineering. The progression was gradual; quality stayed at
          the center.
        </p>
      </header>

      <section className="section-row" aria-labelledby="roles-title">
        <div className="section-index">
          <strong>01</strong>
          Roles
        </div>
        <div className="section-body">
          <h2 id="roles-title" className="section-title">
            Work history
          </h2>
          <div className="timeline">
            {roles.map((role) => (
              <article
                key={`${role.company}-${role.title}`}
                className="timeline-item"
              >
                <div className="timeline-period tabular">{role.period}</div>
                <div>
                  <p className="work-meta mb-2">{role.company}</p>
                  <h3>{role.title}</h3>
                  <p className="mt-2">{role.summary}</p>
                  <ul className="space-y-1.5">
                    {role.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-row" aria-labelledby="systems-title">
        <div className="section-index">
          <strong>02</strong>
          Selected systems
        </div>
        <div className="section-body">
          <h2 id="systems-title" className="section-title">
            The work behind the title
          </h2>
          <p className="section-copy">
            Internal details are generalized, but the technical shape and my
            role in the work are represented directly.
          </p>
          <div className="work-list">
            {selectedSystems.map((system, index) => (
              <article key={system.title} className="work-item">
                <span className="work-number tabular">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3>{system.title}</h3>
                  <p className="work-meta mt-2">{system.stack}</p>
                </div>
                <p>{system.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-row" aria-labelledby="toolbox-title">
        <div className="section-index">
          <strong>03</strong>
          Toolbox
        </div>
        <div className="section-body">
          <h2 id="toolbox-title" className="section-title">
            Technologies in active use
          </h2>
          <div className="work-list">
            {[
              ['Languages', 'TypeScript · JavaScript · Ruby · Go · Bash'],
              [
                'Testing',
                'Playwright · API testing · Accessibility · E2E systems',
              ],
              ['Platform', 'GitHub Actions · CI/CD · Docker · Terraform'],
              ['Backend', 'Node.js · NestJS · Rails · OpenSearch'],
              ['Frontend', 'React · Next.js · React Native'],
              ['AI systems', 'MCP servers · Agent workflows · LLM tooling'],
            ].map(([label, value], index) => (
              <div key={label} className="work-item">
                <span className="work-number tabular">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{label}</h3>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-row" aria-labelledby="music-title">
        <div className="section-index">
          <strong>04</strong>
          Music and education
        </div>
        <div className="section-body">
          <h2 id="music-title" className="section-title">
            Teaching and performing
          </h2>
          <div className="timeline">
            {musicExperience.map(([period, org, role]) => (
              <div key={`${org}-${role}`} className="timeline-item">
                <div className="timeline-period tabular">{period}</div>
                <div>
                  <h3>{org}</h3>
                  <p className="mt-2">{role}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/drums" className="text-link mt-6">
            Performance archive
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
