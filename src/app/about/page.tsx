import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/metadata';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const description =
  'About Tyler James-Bridges: software engineer, former quality engineer, percussion educator, and father in Arizona.';

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
          Hi, I&apos;m Tyler.
        </h1>
        <p className="lede reveal reveal-delay-2">
          I&apos;m a software engineer, former quality engineer, percussion
          educator, and dad in Arizona. I like building tools that remove an
          annoying problem for more than one person.
        </p>
      </header>

      <section className="section-row" aria-labelledby="about-now">
        <div className="section-index">Now</div>
        <div className="section-body editorial-prose">
          <h2 id="about-now">Work</h2>
          <p>
            I am a Software Engineer III at Weedmaps, working on developer
            tooling and services. I build the interfaces other engineers use to
            test, review, and ship software: CLI tools, CI workflows, internal
            APIs, and agent infrastructure.
          </p>
          <p>
            I joined Weedmaps in 2016 in manual QA. From there I moved into
            Playwright automation, then developer experience, and finally a
            software engineering role. The title changed; the habit of looking
            for failure modes did not.
          </p>
          <blockquote>
            If I have to solve the same problem twice, I start wondering whether
            it should be a tool.
          </blockquote>
        </div>
      </section>

      <section
        id="journey"
        className="section-row"
        aria-labelledby="about-path"
      >
        <div className="section-index">The path</div>
        <div className="section-body editorial-prose">
          <h2 id="about-path">From QA to software engineering</h2>
          <p>
            Manual QA trained me to notice the gap between what a system
            promises and what a person actually experiences. Automation taught
            me to turn that observation into repeatable feedback. Developer
            experience work widened the scope again: the build, the pipeline,
            local setup, and debugging are part of the product too.
          </p>
          <p>
            That is still how I approach engineering: start with the person
            using the tool, make errors useful, and leave the next engineer with
            fewer surprises.
          </p>
          <Link href="/journey" className="text-link">
            Read the full transition story
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="section-row" aria-labelledby="about-independent">
        <div className="section-index">Independent work</div>
        <div className="section-body editorial-prose">
          <h2 id="about-independent">Open-source side projects</h2>
          <p>
            Outside work, I build open-source infrastructure for AI agents on
            Ethereum L2s. That includes ACK Protocol, ERC-8004 tooling, x402
            compliance and monitoring tools, MCP servers, and experiments that
            connect software agents to verifiable onchain state.
          </p>
          <p>
            This work is separate from my job. It is where I learn in public,
            try ideas quickly, and occasionally turn an experiment into
            something other people use.
          </p>
          <Link href="/projects" className="text-link">
            Explore public projects
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="section-row" aria-labelledby="about-percussion">
        <div className="section-index">Percussion</div>
        <div className="section-body editorial-prose">
          <h2 id="about-percussion">Drums came first</h2>
          <p>
            I am a former Pulse Percussion snareline member and a longtime
            percussion educator. Marching arts made repetition, precise
            feedback, and performing under pressure feel normal long before I
            wrote code.
          </p>
          <p>
            I marched with Pulse Percussion from 2012 to 2014 and taught the
            Blue Stars snareline for several seasons. I still teach and consult
            when I can.
          </p>
          <Link href="/drums" className="text-link">
            Watch the performance archive
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="section-row" aria-labelledby="about-life">
        <div className="section-index">Life</div>
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
