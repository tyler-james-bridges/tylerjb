import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/metadata';
import { ArrowUpRight } from 'lucide-react';

const description =
  'Public work by Tyler James-Bridges across onchain agent reputation, AI-assisted quality engineering, protocol tooling, and developer experience.';

export const metadata: Metadata = buildPageMetadata({
  title: 'Projects',
  description,
  path: '/projects',
});

type Project = {
  title: string;
  description: string;
  tech: string[];
  status: string;
  live?: string;
  github?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: 'ACK Protocol',
    description:
      'An ERC-8004 reputation layer for AI agents, with onchain kudos, agent discovery, trust scoring, and a TypeScript SDK.',
    tech: ['Next.js', 'Solidity', 'ERC-8004', 'Abstract'],
    status: 'Live app',
    live: 'https://ack-onchain.dev',
    github: 'https://github.com/tyler-james-bridges/ack-protocol',
    featured: true,
  },
  {
    title: 'qai-cli',
    description:
      'A published CLI combining Playwright and AI for visual scans, console and network checks, pull-request review, and test generation.',
    tech: ['TypeScript', 'Playwright', 'CLI', 'AI'],
    status: 'Published package',
    live: 'https://www.npmjs.com/package/qai-cli',
    github: 'https://github.com/tyler-james-bridges/qai-cli',
    featured: true,
  },
  {
    title: 'Agent Tool Index',
    description:
      'A Rust service that indexes onchain agent tools and exposes discovery and call-planning APIs across multiple networks.',
    tech: ['Rust', 'Indexing', 'APIs', 'Onchain'],
    status: 'Live service',
    live: 'https://agenttoolindex.xyz',
    github: 'https://github.com/tyler-james-bridges/agent-tool-index',
    featured: true,
  },
  {
    title: 'etch',
    description:
      'Typed onchain records with optional soulbound behavior, deterministic generative art, and an MCP package for agent access.',
    tech: ['Solidity', 'Next.js', 'MCP', 'Base'],
    status: 'Mainnet contracts',
    live: 'https://etch.ack-onchain.dev',
    github: 'https://github.com/tyler-james-bridges/etch',
    featured: true,
  },
  {
    title: 'x402 tooling',
    description:
      'A collection of compliance, monitoring, indexing, and discovery tools for x402-enabled services.',
    tech: ['x402', 'TypeScript', 'Monitoring', 'CLI'],
    status: 'Tool suite',
    live: 'https://0x402.sh',
    github: 'https://github.com/tyler-james-bridges/x402-lint',
  },
  {
    title: 'abstract-skills',
    description:
      'A Claude Code plugin that packages Abstract-specific development knowledge, patterns, and workflows.',
    tech: ['Claude Code', 'Abstract', 'Developer tools'],
    status: 'Published plugin',
    github: 'https://github.com/tyler-james-bridges/abstract-skills',
  },
  {
    title: 'abstrack',
    description:
      'A blockchain rhythm game that translates Abstract block data into interactive music.',
    tech: ['Next.js', 'Web Audio API', 'Abstract'],
    status: 'Live experiment',
    live: 'https://www.abstrack.live',
    github: 'https://github.com/tyler-james-bridges/abstrack',
  },
  {
    title: 'Solana DevEx Platform',
    description:
      'A set of integrated Solana developer tools built for the February 2026 Colosseum Agent Hackathon.',
    tech: ['Next.js', 'Solana', 'TypeScript'],
    status: 'Hackathon project',
    github: 'https://github.com/tyler-james-bridges/solana-devex-platform',
  },
  {
    title: 'tempo',
    description:
      'A marching-arts tempo tool that turns uploaded sheet music into usable tempo maps.',
    tech: ['React Native', 'Expo', 'Next.js'],
    status: 'In development',
    github: 'https://github.com/tyler-james-bridges/tempo',
  },
  {
    title: 'recipe-to-reality',
    description:
      'An iOS experiment that extracts recipes from URLs and turns them into structured grocery lists.',
    tech: ['React Native', 'Expo', 'AI'],
    status: 'Prototype',
    github: 'https://github.com/tyler-james-bridges/recipe-to-reality',
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <span className="status">{project.status}</span>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-card-footer">
        <div className="tag-list">
          {project.tech.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1 border-t border-foreground/15 pt-3">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Visit
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Source
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  const featuredProjects = projects.filter((project) => project.featured);
  const archiveProjects = projects.filter((project) => !project.featured);

  return (
    <div className="page-shell">
      <header className="page-intro">
        <p className="kicker reveal">Projects</p>
        <h1 className="page-title reveal reveal-delay-1">
          Things I&apos;ve built
        </h1>
        <p className="lede reveal reveal-delay-2">
          Open-source tools, experiments, and small products. Most sit somewhere
          between quality engineering, AI agents, Ethereum, and music.
        </p>
      </header>

      <section className="section-row" aria-labelledby="featured-title">
        <div className="section-index">Featured</div>
        <div className="section-body">
          <h2 id="featured-title" className="section-title">
            Projects I&apos;m proud of
          </h2>
          <div className="project-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-row" aria-labelledby="archive-title">
        <div className="section-index">Archive</div>
        <div className="section-body">
          <h2 id="archive-title" className="section-title">
            More experiments and tools
          </h2>
          <div className="project-grid">
            {archiveProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
