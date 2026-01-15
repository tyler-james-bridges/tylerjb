import { Metadata } from "next";
import Link from "next/link";
import { Github, ExternalLink, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects",
};

type ProjectStatus = "production" | "beta" | "internal" | "in-progress" | "side-project";

interface Project {
  title: string;
  description: string;
  tech: string[];
  status: ProjectStatus;
  github?: string;
  live?: string;
  featured?: boolean;
}

const statusConfig: Record<ProjectStatus, { label: string; className: string }> = {
  production: {
    label: "Production",
    className: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
  },
  beta: {
    label: "Beta",
    className: "bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border-cyan-500/30",
  },
  internal: {
    label: "Internal",
    className: "bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30",
  },
  "in-progress": {
    label: "In Progress",
    className: "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30",
  },
  "side-project": {
    label: "Side Project",
    className: "bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/30",
  },
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with Next.js 15, featuring interactive elements like a Matrix-style flip card, theme switching, and responsive design with a macOS-inspired sidebar.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    status: "production",
    github: "https://github.com/tyler-james-bridges/tylerjb",
    live: "/",
    featured: true,
  },
  {
    title: "Tempo",
    description:
      "Upload sheet music and get tempo maps. A tool for musicians to analyze and visualize tempo changes in musical scores.",
    tech: ["Next.js", "Web Audio API"],
    status: "beta",
    github: "https://github.com/tyler-james-bridges/tempo",
    live: "https://tempomap.app",
    featured: true,
  },
  {
    title: "Playwright Test CLI",
    description:
      "Internal CLI tool for orchestrating Playwright test execution across multiple codebases and environments. Replaced hardcoded shell/YAML logic with unified test orchestration.",
    tech: ["Playwright", "Node.js"],
    status: "internal",
    featured: true,
  },
  {
    title: "AI QA Engineer",
    description:
      "AI-powered QA testing for any website. Multi-provider AI support (Claude, GPT-4, Gemini), multi-viewport testing, network monitoring, and Playwright integration for unified reporting.",
    tech: ["npm package", "Playwright", "AI"],
    status: "in-progress",
    github: "https://github.com/tyler-james-bridges/ai-qa-engineer",
    live: "https://www.npmjs.com/package/ai-qa-engineer",
    featured: true,
  },
  {
    title: "Mobile Dev Terminal Widget",
    description:
      "Interactive terminal component built entirely from iPhone using Termius, Tailscale, and Claude Code. Features typewriter animation, macOS terminal chrome, and demonstrates the mobile-first development workflow.",
    tech: ["React", "Claude Code", "Tailscale"],
    status: "production",
    live: "/#terminal",
    featured: true,
  },
  {
    title: "Onchain Kudos",
    description:
      "A blockchain-based kudos tracking application that allows users to register X/Twitter handles and give kudos to other users with permanent onchain records using Abstract Global Wallet.",
    tech: ["Next.js", "Web3"],
    status: "side-project",
    github: "https://github.com/tyler-james-bridges/onchain-kudos-app",
  },
  {
    title: "PR Log Sync",
    description:
      "Sync GitHub PRs and code reviews to Obsidian markdown files. Automatically creates a searchable archive of your code review history.",
    tech: ["Shell", "GitHub API"],
    status: "side-project",
    github: "https://github.com/tyler-james-bridges/pr-log-sync",
  },
  {
    title: "x402 Indexer",
    description:
      "TypeScript CLI that crawls and indexes x402-enabled APIs from the Bazaar ecosystem. Discover and catalog payment-enabled web services.",
    tech: ["Node.js", "x402"],
    status: "side-project",
    github: "https://github.com/tyler-james-bridges/x402-indexer",
  },
];

function StatusBadge({ status }: { status: ProjectStatus }) {
  const config = statusConfig[status];
  return (
    <span
      className={`px-2.5 py-1 text-xs font-medium rounded-full border ${config.className}`}
    >
      {config.label}
    </span>
  );
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <div
      className={`rounded-2xl border border-border bg-card card-lift ${
        featured ? "p-8" : "p-6"
      }`}
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 flex-wrap mb-1">
            <h3 className={`font-semibold ${featured ? "text-xl" : "text-lg"}`}>
              {project.title}
            </h3>
            <StatusBadge status={project.status} />
          </div>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {project.live && (
            project.live.startsWith("/") ? (
              <Link
                href={project.live}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={`View ${project.title} live`}
              >
                <Home className="w-5 h-5" />
              </Link>
            ) : (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={`View ${project.title} live`}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )
          )}
        </div>
      </div>
      <p className={`text-muted-foreground mb-5 leading-relaxed ${featured ? "text-base" : "text-sm"}`}>
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1.5 text-xs font-medium rounded-full bg-muted border border-border badge-hover"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="animate-slide-up">
      {/* Header */}
      <header className="content-header">
        <h1 className="text-2xl font-bold">🚀 Projects</h1>
      </header>

      {/* Content */}
      <div className="content-body">
        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <section className="mb-12 stagger-1">
            <h2 className="text-lg font-semibold mb-5 text-muted-foreground">Featured</h2>
            <div className="space-y-6">
              {featuredProjects.map((project, index) => (
                <div key={project.title} className={`stagger-${Math.min(index + 2, 6)}`}>
                  <ProjectCard project={project} featured />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <section className="stagger-3">
            <h2 className="text-lg font-semibold mb-5 text-muted-foreground">More Projects</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {otherProjects.map((project, index) => (
                <div key={project.title} className={`stagger-${Math.min(index + 4, 6)}`}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
