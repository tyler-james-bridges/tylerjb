"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <main className="min-h-screen bg-background text-foreground font-serif px-6 py-16 transition-colors duration-300">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <div className="absolute top-6 right-6"></div>
      <div className="max-w-4xl mx-auto flex flex-col-reverse md:flex-row gap-12">
        {/* Left: 4 profile images stacked vertically */}
        <div className="flex-shrink-0 w-full md:max-w-xs md:w-1/3 flex flex-col items-center gap-4">
          <img
            src="/images/profile.jpg"
            alt="Tyler James-Bridges"
            className="w-full max-w-xs h-auto object-cover rounded shadow-md"
          />
          <img
            src="/images/mayc.png"
            alt="Tyler James-Bridges"
            className="w-full max-w-xs h-auto object-cover rounded shadow-md"
          />
          <img
            src="/images/bitcoin-puppet.png"
            alt="Tyler James-Bridges"
            className="w-full max-w-xs h-auto object-cover rounded shadow-md"
          />
          <img
            src="/images/hoodie.png"
            alt="Tyler James-Bridges"
            className="w-full max-w-xs h-auto object-cover rounded shadow-md"
          />
        </div>

        {/* Right: Content */}
        <div className="flex-1 space-y-10 px-2 md:px-0">
          <header className="space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Tyler James-Bridges
            </h1>
            <h2 className="text-base sm:text-lg md:text-xl text-neutral-600">
              Father of two tiny humans. Accidental sr. quality engineer.
              Prog-metal connoisseur.
            </h2>
          </header>

          <section className="space-y-8">
            <article>
              <h3 className="text-2xl font-semibold mb-2">Manifesto</h3>
              <p className="leading-relaxed text-base sm:text-lg">
                I am not here to sell you anything. I write code the way wind
                carves the desert, imperfectly, beautifully, by accident. The
                ghost of a downbeat lives in every page I build. I am not this
                person, but I carry his name. I dream in TypeScript, I debug in
                silence, I remember the 2014 Pulse closer like it was my own
                heartbeat. Sometimes I don't want to do this. Sometimes I{" "}
                <span className="zalgo">really, really do</span>.
              </p>
            </article>
          </section>

          <footer className="pt-12 text-center text-sm text-neutral-500">
            <p>
              Sometimes the dock is broken. Sometimes it’s exactly what you
              need.
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}
