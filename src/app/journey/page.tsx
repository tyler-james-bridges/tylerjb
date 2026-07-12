import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/metadata';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const description =
  'How Tyler James-Bridges moved from manual quality assurance into test automation, developer experience, and software engineering.';

export const metadata: Metadata = buildPageMetadata({
  title: 'From QA to DevEx',
  description,
  path: '/journey',
});

const chapters = [
  {
    period: '2016',
    title: 'Start with the user, not the implementation',
    body: [
      'I entered software through hands-on quality assurance. The job was to understand what a product promised, then use it hard enough to find where that promise broke.',
      'That work taught me to pay attention to the full system: unclear requirements, brittle data, confusing errors, release pressure, and the gap between a passing check and a good user experience.',
    ],
  },
  {
    period: '2020',
    title: 'Turn observation into repeatable feedback',
    body: [
      'Automation let me encode the patterns I had learned manually. I moved from individual test cases into Playwright suites, API helpers, shared abstractions, and CI workflows.',
      'The interesting problem was no longer only whether a test passed. It was whether another engineer could understand the failure, reproduce it locally, and trust the result.',
    ],
  },
  {
    period: '2023–2025',
    title: 'Build the tool around the test',
    body: [
      'As the automation grew, the surrounding developer experience became the constraint. Different environments, shell scripts, pipeline configuration, and one-off commands made reliable testing harder than it needed to be.',
      'I started building the interfaces around the tests: a TypeScript CLI, reusable workflows, documentation, service templates, and clearer debugging paths. The work moved naturally from quality engineering into developer experience before the title changed.',
    ],
  },
  {
    period: '2025–Now',
    title: 'Own systems from design through operation',
    body: [
      'As a Software Engineer III, I work across developer tooling, internal APIs, CI/CD interfaces, and agent infrastructure. I still use the same questions I learned in QA: What can fail? What will the user see? How will we debug it? What path makes the safe action the easy one?',
      'The transition was not a rejection of quality engineering. It was a decision to work earlier in the system, where better interfaces and better defaults can prevent entire classes of problems.',
    ],
  },
];

export default function JourneyPage() {
  return (
    <div className="page-shell">
      <header className="page-intro">
        <p className="kicker reveal">From QA to DevEx</p>
        <h1 className="page-title reveal reveal-delay-1">
          Quality moved upstream. So did I.
        </h1>
        <p className="lede reveal reveal-delay-2">
          The short version of a ten-year transition from testing products by
          hand to building the systems engineers use to test and ship them.
        </p>
      </header>

      <section className="section-row" aria-labelledby="journey-title">
        <div className="section-index">
          <strong>01</strong>
          The progression
        </div>
        <div className="section-body">
          <h2 id="journey-title" className="section-title">
            One discipline, wider scope
          </h2>
          <div className="timeline">
            {chapters.map((chapter) => (
              <article key={chapter.period} className="timeline-item">
                <div className="timeline-period tabular">{chapter.period}</div>
                <div className="editorial-prose">
                  <h3>{chapter.title}</h3>
                  {chapter.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-row" aria-labelledby="journey-now">
        <div className="section-index">
          <strong>02</strong>
          The throughline
        </div>
        <div className="section-body editorial-prose">
          <h2 id="journey-now">Make failure legible</h2>
          <p>
            Tools change. The useful habits do not: understand real behavior,
            design for the person holding the problem, make errors actionable,
            and leave the system easier to operate than you found it.
          </p>
          <blockquote>
            I did not leave quality behind. I changed where I apply it.
          </blockquote>
          <Link href="/experience" className="text-link">
            See the work history
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
