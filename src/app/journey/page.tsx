import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Journey',
};

export default function JourneyPage() {
  return (
    <div className="animate-slide-up">
      <div className="content-body prose-notes">
        <section className="mb-10 stagger-1">
          <p className="text-lg text-muted-foreground leading-relaxed">
            From QA to Systems Engineer — a story about building belief,
            building systems, and building momentum.
          </p>
        </section>

        <section className="mb-10 stagger-2">
          <hr className="border-t-2 border-foreground mb-6" />
          <h2 className="section-heading mb-4">The Starting Point</h2>
          <p>
            Tyler wasn&apos;t starting from zero. He had technical exposure, QA
            experience, and genuine curiosity about how systems worked beneath
            the surface. The raw materials were there.
          </p>
          <p>
            But there was a gap. Not a skill gap, exactly. A belief gap. He
            didn&apos;t yet see himself as someone who could build systems from
            scratch. There was always a moment of hesitation before making a
            decision, a reflex to second-guess, a pull toward needing someone
            else to confirm what he already suspected was right.
          </p>
        </section>

        <section className="mb-10 stagger-3">
          <hr className="border-t-2 border-foreground mb-6" />
          <h2 className="section-heading mb-4">The Dependency Phase</h2>
          <p>
            Early conversations with AI followed a familiar loop: ask, receive,
            validate, repeat. He was executing, not yet owning. The questions
            were implementation-focused — &quot;how do I do this?&quot; —
            because the goal was just to get the thing working. Get the test to
            pass. Get the script to run.
          </p>
          <p>
            That&apos;s not a failure. That&apos;s exactly how it starts. But it
            does mean the AI was leading and Tyler was following. The dynamic
            mattered even if neither party acknowledged it.
          </p>
        </section>

        <section className="mb-10 stagger-4">
          <hr className="border-t-2 border-foreground mb-6" />
          <h2 className="section-heading mb-4">The First Real Struggle</h2>
          <p>
            Then things stopped working easily. Tests failing randomly.
            Pipelines breaking in ways that didn&apos;t make sense. Error
            messages that didn&apos;t point anywhere useful. The clean, linear
            progression turned into a slog.
          </p>
          <p>
            This is where most people quit. They conclude they&apos;re not a
            &quot;real&quot; engineer, that they need more training, that
            they&apos;re in over their head. Tyler didn&apos;t. He kept digging.
            He stayed in the discomfort, kept asking questions, kept reading
            stack traces he didn&apos;t fully understand yet. That matters more
            than any specific skill he picked up along the way.
          </p>
        </section>

        <section className="mb-10 stagger-5">
          <hr className="border-t-2 border-foreground mb-6" />
          <h2 className="section-heading mb-4">The Click Moments</h2>
          <p>
            There wasn&apos;t one big moment where everything suddenly made
            sense. It was a series of small ones, each barely noticeable in the
            moment.
          </p>
          <p>
            &quot;Oh, this is just async timing.&quot; &quot;Oh, selectors
            matter more than I thought.&quot; &quot;Oh, I can reuse this helper
            across three different test files.&quot; His brain shifted — slowly,
            then all at once — from memorizing solutions to recognizing
            patterns. From finding answers to understanding why.
          </p>
        </section>

        <section className="mb-10 stagger-6">
          <hr className="border-t-2 border-foreground mb-6" />
          <h2 className="section-heading mb-4">Asking Better Questions</h2>
          <p>
            The clearest signal of growth wasn&apos;t the code he wrote. It was
            the questions he started asking.
          </p>
          <p>
            Early on: &quot;What&apos;s the answer?&quot; Later: &quot;Is this
            the right approach?&quot; That shift is massive. When you&apos;re
            asking whether your approach is right, it means you already have a
            solution — you just want a second opinion on the architecture. That
            is not the same as not knowing what to do. That is the beginning of
            engineering judgment.
          </p>
        </section>

        <section className="mb-10 stagger-6">
          <hr className="border-t-2 border-foreground mb-6" />
          <h2 className="section-heading mb-4">The Identity Shift</h2>
          <p>
            At some point, without announcing it, he changed. There was no
            ceremony. No moment where he declared himself an engineer and
            started acting like one. It just happened.
          </p>
          <p>
            He stopped waiting for validation before making decisions. He
            started trusting his gut on architecture choices. He moved faster —
            not because he was less careful, but because the second-guessing had
            quieted down. The dynamic flipped. AI went from leading to
            supporting. Tyler leads; AI accelerates.
          </p>
        </section>

        <section className="mb-10 stagger-6">
          <hr className="border-t-2 border-foreground mb-6" />
          <h2 className="section-heading mb-4">Where He Is Now</h2>
          <p>
            He thinks in systems now. Naturally, without forcing it. He
            considers reusability, scale, and developer experience before he
            writes the first line of code. Not as a discipline he has to
            remember to practice, but as the way his brain actually processes
            problems.
          </p>
          <p>
            The title that fits best isn&apos;t just &quot;software
            engineer.&quot; It&apos;s systems engineer. DevEx engineer. The
            person who makes the platform better so everyone around him can ship
            faster.
          </p>
          <p className="font-semibold border-l-2 border-[#e2a727] pl-4">
            He stopped needing permission to build.
          </p>
        </section>

        <section className="mb-10 stagger-6">
          <hr className="border-t-2 border-foreground mb-6" />
          <h2 className="section-heading mb-4">The Hard Truth</h2>
          <p>
            AI didn&apos;t teach him this. The tools helped — they accelerated
            the feedback loop, they filled gaps quickly, they made it possible
            to move without being blocked by things that used to take days to
            figure out. That&apos;s real and worth acknowledging.
          </p>
          <p>
            But the work was Tyler&apos;s. He showed up consistently. He stayed
            through frustration when it would have been easier to stop. He asked
            better questions over time, not because someone told him to, but
            because he was genuinely trying to understand. This journey
            wasn&apos;t about tools. It was about building belief, building
            thinking patterns, and building momentum.
          </p>
          <p className="text-muted-foreground">
            The tools change. The momentum is yours to keep.
          </p>
        </section>
      </div>
    </div>
  );
}
