'use client';

import { useEffect, useState } from 'react';

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <main className="min-h-screen bg-background text-foreground font-serif px-6 py-16 transition-colors duration-300">
      <div className="absolute top-6 right-6">
      </div>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left: Placeholder profile image */}
        <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
          <img
            src="/images/profile.jpg"
            alt="Tyler James-Bridges"
            className="w-48 h-64 object-cover rounded shadow-md"
          />
        </div>

        {/* Right: Content */}
        <div className="flex-1 space-y-10">
          <header className="space-y-2">
            <h1 className="text-5xl font-bold">Tyler James-Bridges</h1>
            <h2 className="text-xl text-neutral-600">
              Snareline dad. Software realist. Design romantic.
            </h2>
          </header>

          <section className="space-y-8">
            <article>
              <h3 className="text-2xl font-semibold mb-2">Manifesto</h3>
              <p className="leading-relaxed text-lg">
                I am not here to sell you anything. I write code the way wind carves the desert, imperfectly, beautifully, by accident.
                The ghost of a downbeat lives in every page I build. I am not this person, but I carry his name.
                I dream in TypeScript, I debug in silence, I remember the 2014 Pulse closer like it was my own heartbeat.
                Sometimes I don't want to do this. Sometimes I <span className="zalgo">really, really do</span>.
              </p>
            </article>

            <article>
              <h3 className="text-2xl font-semibold mb-2">Experience</h3>
              <ul className="space-y-6">
                <li>
                  <div className="flex justify-between text-sm font-medium">
                    <span>WM Technology</span>
                    <span>2016–Present</span>
                  </div>
                  <p>Sr. Quality Engineer working on Weedmaps platform & infrastructure.</p>
                </li>

                <li>
                  <div className="flex justify-between text-sm font-medium">
                    <span>Highland High School</span>
                    <span>2022–Present</span>
                  </div>
                  <p>Percussion Director. Developing young musicians and future leaders.</p>
                </li>

                <li>
                  <div className="flex justify-between text-sm font-medium">
                    <span>Flux Indoor Percussion</span>
                    <span>2024–Present</span>
                  </div>
                  <p>Snare tech. A new chapter. Feels right.</p>
                </li>

                <li>
                  <div className="flex justify-between text-sm font-medium">
                    <span>POW Percussion</span>
                    <span>2015–2022</span>
                  </div>
                  <p>Battery & ensemble coordinator. Legacy builder.</p>
                </li>

                <li>
                  <div className="flex justify-between text-sm font-medium">
                    <span>Blue Stars</span>
                    <span>2014–2018</span>
                  </div>
                  <p>Snareline tech. Tour life and hard truths.</p>
                </li>

                <li>
                  <div className="flex justify-between text-sm font-medium">
                    <span>Pulse Percussion</span>
                    <span>2012–2014</span>
                  </div>
                  <p>Snareline. Peak performance, peak identity crisis.</p>
                </li>
              </ul>
            </article>
          </section>

          <footer className="pt-12 text-center text-sm text-neutral-500">
            <p>Sometimes the dock is broken. Sometimes it’s exactly what you need.</p>
          </footer>
        </div>
      </div>
    </main>
  );
}