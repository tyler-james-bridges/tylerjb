'use client';

import Link from 'next/link';
import TerminalWidget from './components/TerminalWidget';

export default function HomePage() {
  return (
    <div className="animate-slide-up">
      <div className="content-body">
        {/* Vertical text running down the right side of entire content */}
        <div className="hidden md:block absolute right-4 top-24 pointer-events-none select-none opacity-10">
          <div className="text-[9px] font-mono text-muted-foreground writing-vertical tracking-[0.4em] leading-none">
            SOFTWARE・ENGINEER・QA・PERCUSSION・FATHER・BUILDER・DEBUGGER・TYPESCRIPT・PLAYWRIGHT
          </div>
        </div>

        {/* Hero Section */}
        <section className="text-center mb-10 relative">
          <h2 className="text-4xl sm:text-5xl font-bold mb-1 stagger-1">
            Tyler
          </h2>
          <h2 className="text-4xl sm:text-5xl font-light text-muted-foreground mb-5 stagger-1">
            James-Bridges
          </h2>

          <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed mb-3 stagger-2">
            Software engineer with a decade of QA experience. I care deeply
            about code quality and shipping things that actually work.
          </p>

          <p className="text-base font-semibold max-w-md mx-auto leading-relaxed mb-6 stagger-2">
            I build and scale systems that improve developer productivity across
            the organization.
          </p>

          {/* Credibility Badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-6 stagger-3">
            <span className="px-3 py-1.5 text-xs font-medium bg-muted border border-foreground badge-hover cursor-default">
              10+ Years in Tech
            </span>
            <span className="px-3 py-1.5 text-xs font-medium bg-muted border border-foreground badge-hover cursor-default">
              Playwright / Test Automation
            </span>
            <span className="px-3 py-1.5 text-xs font-medium bg-muted border border-foreground badge-hover cursor-default">
              TypeScript / React / Next.js
            </span>
          </div>

          <p className="text-sm text-muted-foreground stagger-3">
            Currently Software Engineer III @ Weedmaps
          </p>
        </section>

        {/* Featured Work */}
        <section className="mb-12 stagger-4 max-w-xl mx-auto">
          <h3 className="section-heading mb-5">Featured Work</h3>

          {/* ACK - Hero Card */}
          <a
            href="https://ack-onchain.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="block border-2 border-foreground p-6 mb-4 card-lift group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-[#e2a727]" />
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-base font-bold group-hover:text-[#e2a727] transition-colors">
                ACK Protocol
              </h4>
              <span className="px-2 py-0.5 text-[10px] font-medium bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                Production
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-1">
              Peer-driven reputation layer for AI agents. Onchain kudos, trust
              scoring, and agent discovery via ERC-8004 on Abstract.
            </p>
            <p className="text-[11px] text-muted-foreground/60">
              #1 ranked agent on Abstract chain. 35+ onchain reviews across 3
              chains.
            </p>
          </a>

          {/* Two-column grid for secondary projects */}
          <div className="grid grid-cols-2 gap-4 mb-5">
            <a
              href="https://www.npmjs.com/package/qai-cli"
              target="_blank"
              rel="noopener noreferrer"
              className="block border-2 border-foreground p-4 card-lift group"
            >
              <h4 className="text-sm font-bold mb-2 group-hover:text-[#e2a727] transition-colors">
                qai-cli
              </h4>
              <p className="text-[11px] text-muted-foreground leading-relaxed mb-2">
                AI-powered PR review and test generation. A decade of QA,
                packaged as a CLI.
              </p>
              <span className="text-[10px] text-muted-foreground/60">
                npm v3.3.0
              </span>
            </a>

            <a
              href="https://claw-council.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block border-2 border-foreground p-4 card-lift group"
            >
              <h4 className="text-sm font-bold mb-2 group-hover:text-[#e2a727] transition-colors">
                The Claw Council
              </h4>
              <p className="text-[11px] text-muted-foreground leading-relaxed mb-2">
                Multi-agent AI system. Three agents running research,
                engineering, and ops autonomously.
              </p>
              <span className="text-[10px] text-muted-foreground/60">
                OpenClaw + Discord
              </span>
            </a>
          </div>

          <Link
            href="/projects"
            className="block text-center px-4 py-2.5 border-2 border-foreground text-sm font-medium hover:bg-muted transition-colors btn-lift"
          >
            All Projects &rarr;
          </Link>
        </section>

        {/* Dual CTAs */}
        <section className="max-w-xl mx-auto mb-14 stagger-5">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/experience"
              className="px-6 py-3 bg-foreground text-background font-medium text-center text-sm uppercase tracking-wider btn-lift"
            >
              View My Experience
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border-2 border-foreground font-medium text-center text-sm uppercase tracking-wider btn-lift hover:bg-muted"
            >
              Let&apos;s Work Together
            </Link>
          </div>
        </section>

        {/* Journey Callout */}
        <section className="max-w-xl mx-auto mb-10 stagger-6">
          <div className="border-2 border-foreground p-5 transition-colors">
            <p className="text-sm text-muted-foreground mb-2">
              From QA analyst to systems engineer — the story of building
              belief, building tools, and building momentum.
            </p>
            <Link
              href="/journey"
              className="text-sm font-medium hover:text-[#e2a727] transition-colors"
            >
              Read the story of how I got here &rarr;
            </Link>
          </div>
        </section>

        {/* Manifesto */}
        <section className="max-w-xl mx-auto text-center stagger-6">
          <hr className="border-t-2 border-foreground mb-6" />
          <h3 className="section-heading mb-3">Manifesto</h3>
          <p className="text-muted-foreground leading-relaxed text-sm border-l-2 border-border pl-4 text-left">
            I am not here to sell you anything. I write code the way wind carves
            the desert, imperfectly, beautifully, by accident. The ghost of a
            downbeat lives in every page I build. I am not this person, but I
            carry his name. I dream in TypeScript, I debug in silence, I
            remember the 2014 Pulse closer like it was my own heartbeat.
            Sometimes I don&apos;t want to do this. Sometimes I{' '}
            <span className="italic">really, really do</span>.
          </p>
        </section>

        {/* Mobile Dev Terminal */}
        <section id="terminal" className="max-w-xl mx-auto mt-14 stagger-6">
          <hr className="border-t-2 border-foreground mb-6" />
          <h3 className="section-heading mb-3 text-center">
            Built from iPhone
          </h3>
          <p className="text-sm text-muted-foreground text-center mb-4">
            This widget was built via mobile dev stack: iPhone → Termius →
            Tailscale → Claude Code
          </p>
          <TerminalWidget />
        </section>
      </div>
    </div>
  );
}
