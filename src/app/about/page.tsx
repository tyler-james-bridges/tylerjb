import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/metadata';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const description =
  'About Tyler James-Bridges: software engineer, quality systems builder, percussion educator, and Arizona-based father.';

export const metadata: Metadata = buildPageMetadata({
  title: 'About',
  description,
  path: '/about',
});

export default function AboutPage() {
  return (
    <div className="page-shell">
      <header className="page-intro">
        <p className="kicker reveal">About</p>
        <h1 className="page-title reveal reveal-delay-1">
          Engineering with a quality engineer&apos;s memory.
        </h1>
        <p className="lede reveal reveal-delay-2">
          I have spent my career moving closer to the systems behind software
          quality: from manual testing, to automation, to developer platforms.
        </p>
      </header>

      <section className="section-row" aria-labelledby="about-now">
        <div className="section-index">
          <strong>01</strong>
          Now
        </div>
        <div className="section-body editorial-prose">
          <h2 id="about-now">What I do</h2>
          <p>
            I am a Software Engineer III at Weedmaps, working on developer
            tooling and services. I build the interfaces other engineers use to
            test, review, and ship software: CLI tools, CI workflows, internal
            APIs, and agent infrastructure.
          </p>
          <p>
            I joined Weedmaps in 2016 in hands-on quality assurance. I spent the
            next decade learning where software fails, how teams experience
            those failures, and which tools actually reduce friction. Moving
            into software engineering felt like a deepening of quality, not a
            departure from it.
          </p>
          <blockquote>
            I would rather build the tool that solves a problem a hundred times
            than solve it once.
          </blockquote>
        </div>
      </section>

      <section
        id="journey"
        className="section-row"
        aria-labelledby="about-path"
      >
        <div className="section-index">
          <strong>02</strong>
          The path
        </div>
        <div className="section-body editorial-prose">
          <h2 id="about-path">From test cases to systems</h2>
          <p>
            Manual QA trained me to notice the gap between what a system
            promises and what a person actually experiences. Automation taught
            me to turn that observation into repeatable feedback. Developer
            experience work widened the lens again: the product is also the
            build, the pipeline, the local setup, and the debugging path.
          </p>
          <p>
            That is still how I approach engineering. Start with the person
            using the system. Make failure states legible. Remove unnecessary
            choices. Leave the next engineer with a path they can trust.
          </p>
          <Link href="/journey" className="text-link">
            Read the full transition story
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="section-row" aria-labelledby="about-independent">
        <div className="section-index">
          <strong>03</strong>
          Independent work
        </div>
        <div className="section-body editorial-prose">
          <h2 id="about-independent">Agent systems and onchain tools</h2>
          <p>
            Outside work, I build open-source infrastructure for AI agents on
            Ethereum L2s. That includes ACK Protocol, ERC-8004 tooling, x402
            compliance and monitoring tools, MCP servers, and experiments that
            connect software agents to verifiable onchain state.
          </p>
          <p>
            The professional and independent tracks are separate, but the same
            engineering concerns show up in both: clear interfaces, observable
            behavior, safe defaults, and trust that can be inspected rather than
            assumed.
          </p>
          <Link href="/projects" className="text-link">
            Explore public projects
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="section-row" aria-labelledby="about-percussion">
        <div className="section-index">
          <strong>04</strong>
          Percussion
        </div>
        <div className="section-body editorial-prose">
          <h2 id="about-percussion">The other discipline</h2>
          <p>
            I am a former Pulse Percussion snareline member and a longtime
            percussion educator. Marching arts made repetition, precise
            feedback, and performing under pressure feel normal long before I
            wrote code.
          </p>
          <p>
            I still think about software in terms of reps, cleaning, and locking
            in with the rest of the line. Good individual execution matters. A
            system only works when the whole group can move together.
          </p>
          <Link href="/drums" className="text-link">
            Watch the performance archive
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="section-row" aria-labelledby="about-life">
        <div className="section-index">
          <strong>05</strong>
          Life
        </div>
        <div className="section-body editorial-prose">
          <h2 id="about-life">Arizona, family, loud music</h2>
          <p>
            I am based in Arizona and am a father of two. Away from engineering
            and teaching, I am usually listening to progressive metal, working
            through another side project, or finding a reason to make a normal
            household task more automated than it needs to be.
          </p>
        </div>
      </section>
    </div>
  );
}
