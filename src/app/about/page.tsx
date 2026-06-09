import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me',
  description:
    'Tyler James-Bridges — a decade of quality engineering, now building developer tooling and agent infrastructure. Drum corps alum, percussion educator, father.',
};

export default function AboutPage() {
  return (
    <div className="animate-slide-up">
      <div className="content-body prose-notes">
        <h1 className="sr-only">About Me</h1>
        <section className="mb-10 stagger-1">
          <hr className="border-t-2 border-foreground mb-6" />
          <h2 className="section-heading mb-4">Who I Am</h2>
          <p>
            I&apos;m a father of two, based in Arizona, and a Software Engineer
            III on the Developer Experience team at Weedmaps. I spent a decade
            in quality engineering — manual QA, then Playwright automation —
            before moving into engineering full time. I think of that move as a
            deepening of quality, not a departure from it.
          </p>
          <p>
            Day to day I build the tools other engineers ship with: CI
            pipelines, developer platforms, the unglamorous stuff that makes
            teams faster.
          </p>
        </section>

        <section className="mb-10 stagger-2">
          <hr className="border-t-2 border-foreground mb-6" />
          <h2 className="section-heading mb-4">Rhythm & Algorithms</h2>
          <p>
            The percussion world shaped who I am long before I touched my first
            keyboard. There&apos;s something about the discipline of marching
            drum corps, the precision of indoor percussion, and the controlled
            chaos of tour life that translates perfectly to quality assurance
            and engineering.
          </p>
          <p>
            Both require obsessive attention to detail, the ability to perform
            under pressure, and an understanding that sometimes the most
            beautiful moments happen in the spaces between the notes, or between
            test runs.
          </p>
        </section>

        <section className="mb-10 stagger-3">
          <hr className="border-t-2 border-foreground mb-6" />
          <h2 className="section-heading mb-4">The Journey</h2>
          <p>
            My percussion journey began in 2009 with Santa Clara Vanguard
            Cadets, where I learned that peak performance and peak identity
            crisis can coexist beautifully. The path led me through Santa Clara
            Vanguard, Vanguard Winter Percussion, and the Blue Stars, before
            culminating with Pulse Percussion in 2014.
          </p>
          <p>
            I&apos;ve been teaching as a snare tech since 2014, and I still
            think about software in terms of reps, cleaning, and locking in
            with the rest of the line.
          </p>
        </section>

        <section className="mb-10 stagger-4">
          <hr className="border-t-2 border-foreground mb-6" />
          <h2 className="section-heading mb-4">Beyond the Screen</h2>
          <p>
            Outside work I build agent infrastructure on Ethereum L2s: an
            ERC-8004 reputation protocol (ACK), compliance tooling for the x402
            payment protocol, and MCP servers — with contracts live on Abstract
            and Base. When I&apos;m not shipping or teaching paradiddles,
            you&apos;ll find me deep in the progressive metal rabbit hole
            (Animals As Leaders, Protest the Hero, Chon), or adding another NFT
            to the collection that my wife pretends not to judge.
          </p>
          <p>
            I believe in building things that matter, whether it&apos;s reliable
            software that helps businesses grow, young musicians who will carry
            the art forward, or just a really solid groove that makes people
            move.
          </p>
        </section>
      </div>
    </div>
  );
}
