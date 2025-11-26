import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
};

export default function AboutPage() {
  return (
    <div className="animate-slide-up">
      {/* Header */}
      <header className="content-header">
        <h1 className="text-2xl font-bold">👤 About Me</h1>
      </header>

      {/* Content */}
      <div className="content-body prose-notes">
        <section className="mb-8">
          <h2>The Human Behind the Code</h2>
          <p>
            I&apos;m a father of two tiny humans who remind me daily that the best
            debugging happens at 3 AM when you&apos;re running on coffee fumes and
            pure determination.
          </p>
          <p>
            By day, I transition from software engineering, building tools that
            accelerate how teams ship code. By night, I dream in TypeScript and
            wake up humming polyrhythms.
          </p>
        </section>

        <section className="mb-8">
          <h2>Rhythm & Algorithms</h2>
          <p>
            The percussion world shaped who I am long before I touched my first
            keyboard. There&apos;s something about the discipline of marching drum
            corps, the precision of indoor percussion, and the controlled chaos of
            tour life that translates perfectly to quality assurance and
            engineering.
          </p>
          <p>
            Both require obsessive attention to detail, the ability to perform
            under pressure, and an understanding that sometimes the most beautiful
            moments happen in the spaces between the notes, or between test runs.
          </p>
        </section>

        <section className="mb-8">
          <h2>The Journey</h2>
          <p>
            My percussion journey began in 2009 with Santa Clara Vanguard Cadets,
            where I learned that peak performance and peak identity crisis can
            coexist beautifully. The path led me through Santa Clara Vanguard,
            Vanguard Winter Percussion, and the Blue Stars, before culminating with
            Pulse Percussion in 2014.
          </p>
          <p>
            Each group, each season, each show was a masterclass in precision,
            teamwork, and the pursuit of something greater than yourself.
          </p>
        </section>

        <section className="mb-8">
          <h2>Beyond the Screen</h2>
          <p>
            When I&apos;m not writing tests or teaching paradiddles, you&apos;ll
            find me deep in the progressive metal rabbit hole (Animals As Leaders,
            Protest the Hero, Chon), exploring the latest crypto projects, or
            adding another NFT to the collection that my wife pretends not to
            judge.
          </p>
          <p>
            I believe in building things that matter, whether it&apos;s reliable
            software that helps businesses grow, young musicians who will carry the
            art forward, or just a really solid groove that makes people move.
          </p>
        </section>

        <section>
          <h2>Performance Videos</h2>
          <p className="text-muted-foreground mb-4">
            Some moments from the field that shaped who I became.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-video rounded-lg overflow-hidden border border-border">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/-gapbxJ4BFk?si=-daNqFpi5AZmqt-X"
                title="Performance video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="aspect-video rounded-lg overflow-hidden border border-border">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/62fP_00dHig?si=RNOOy0d6hArguG91"
                title="Performance video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="aspect-video rounded-lg overflow-hidden border border-border">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/9LZSvRP6gKQ?si=yBMltF7mFnpseBLo"
                title="Performance video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="aspect-video rounded-lg overflow-hidden border border-border">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/uQX_WrVjrXs?si=EvX_yTJXj4BYgO1N"
                title="Performance video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
