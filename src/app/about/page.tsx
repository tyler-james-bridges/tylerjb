"use client";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-serif px-6 py-16 transition-colors duration-300 rounded-xl">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            About Me
          </h1>
          <p className="text-lg text-neutral-500 max-w-3xl">
            The intersection of code and rhythm. Father, engineer, and eternal
            student of the perfect downbeat.
          </p>
        </header>

        <section className="space-y-12">
          <article className="space-y-6">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-teal-400 via-green-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              The Human Behind the Code
            </h3>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                I'm a father of two tiny humans who remind me daily that the
                best debugging happens at 3 AM when you're running on coffee
                fumes and pure determination. By day, I'm transitioning from
                quality engineering to software development, building tools
                that accelerate how teams ship code. By night, I dream in
                TypeScript and wake up humming polyrhythms.
              </p>
              <p>
                The percussion world shaped who I am long before I touched my
                first keyboard. There's something about the discipline of
                marching drum corps, the precision of indoor percussion, and the
                controlled chaos of tour life that translates perfectly to
                quality engineering. Both require obsessive attention to detail,
                the ability to perform under pressure, and an understanding that
                sometimes the most beautiful moments happen in the spaces
                between the notes—or between test runs.
              </p>
            </div>
          </article>

          <article className="space-y-6">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-teal-400 via-green-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">Rhythm & Algorithms</h3>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                My percussion journey began in 2009 with Santa Clara Vanguard
                Cadets, where I learned that peak performance and peak identity
                crisis can coexist beautifully. The path led me through Santa
                Clara Vanguard, Vanguard Winter Percussion, and the Blue Stars,
                before culminating with Pulse Percussion in 2014. Each group,
                each season, each show was a masterclass in precision, teamwork,
                and the pursuit of something greater than yourself.
              </p>
              <p>
                Now I channel that same energy into building software that
                empowers developers and mentoring the next generation of musicians.
                Whether I'm architecting developer tools or teaching a high schooler
                proper stick technique, it's all about finding the pattern, respecting
                the process, and never settling for "good enough."
              </p>
            </div>
          </article>

          <article className="space-y-6">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-teal-400 via-green-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">Beyond the Screen</h3>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                When I'm not writing tests or teaching paradiddles, you'll find
                me deep in the progressive metal rabbit hole (Animals As
                Leaders, Protest the Hero, Chon), exploring the latest crypto
                projects, or adding another NFT to the collection that my wife
                pretends not to judge.
              </p>
              <p>
                I believe in building things that matter, whether it's reliable
                software that helps businesses grow, young musicians who will
                carry the art forward, or just a really solid groove that makes
                people move. The details matter. The process matters. And
                sometimes, the most important thing you can do is just show up
                and do the work.
              </p>
            </div>
          </article>
        </section>
        <article className="space-y-6">
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-teal-400 via-green-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">Performance Videos</h3>
          <p className="text-lg text-neutral-600">
            Some moments from the field that shaped who I became. The precision,
            the pressure, the pure joy of nailing that perfect run.
          </p>

          {/* YouTube Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Video 1 */}
            <div className="aspect-video rounded-xl overflow-hidden border border-neutral-700 hover:border-neutral-600 transition-colors duration-300">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/-gapbxJ4BFk?si=-daNqFpi5AZmqt-X"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video 2 */}
            <div className="aspect-video rounded-xl overflow-hidden border border-neutral-700 hover:border-neutral-600 transition-colors duration-300">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/62fP_00dHig?si=RNOOy0d6hArguG91"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video 3 */}
            <div className="aspect-video rounded-xl overflow-hidden border border-neutral-700 hover:border-neutral-600 transition-colors duration-300">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/9LZSvRP6gKQ?si=yBMltF7mFnpseBLo"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video 4 */}
            <div className="aspect-video rounded-xl overflow-hidden border border-neutral-700 hover:border-neutral-600 transition-colors duration-300">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/uQX_WrVjrXs?si=EvX_yTJXj4BYgO1N"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video 5 */}
            <div className="aspect-video rounded-xl overflow-hidden border border-neutral-700 hover:border-neutral-600 transition-colors duration-300">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Ghmgn0CpLYU?si=SSeQfC3AF2yjODgs"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video 6 */}
            <div className="aspect-video rounded-xl overflow-hidden border border-neutral-700 hover:border-neutral-600 transition-colors duration-300">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/cl61LM7qMG8?si=2zGBBYkAEyGXyW6S"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video 7 */}
            <div className="aspect-video rounded-xl overflow-hidden border border-neutral-700 hover:border-neutral-600 transition-colors duration-300 md:col-span-2">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/aaUwLmkb-IE?si=3tVyMrJALilK3y9l"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </article>

        <footer className="pt-12 text-center text-sm text-neutral-500">
          <p>
            Sometimes the dock is broken. Sometimes it's exactly what you need.
          </p>
        </footer>
      </div>
    </main>
  );
}
