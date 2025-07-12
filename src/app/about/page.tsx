'use client';

import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-serif px-6 py-16 transition-colors duration-300">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <div className="max-w-4xl mx-auto space-y-10 px-2 md:px-0">
        <nav className="mb-6 flex gap-4 text-sm font-medium">
          <Link
            href="/"
            className="px-3 py-1 rounded-md bg-neutral-100 text-neutral-800 hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-400 transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="px-3 py-1 rounded-md bg-neutral-100 text-neutral-800 hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-400 transition"
          >
            About me
          </Link>
        </nav>

        <header className="space-y-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">About me</h1>
        </header>

        <section className="space-y-8">
          <article>
            <h3 className="text-2xl font-semibold mb-2">Experience</h3>
            <ul className="space-y-6">
              <li>
                <div className="flex justify-between text-sm font-medium">
                  <span>WM Technology</span>
                  <span>2016–Present</span>
                </div>
                <p>Sr. Quality Engineer</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-neutral-100">
                  <li>Built and maintained a CLI for Playwright test execution across different codebases and environments.</li>
                  <li>Replaced hardcoded shell/YAML logic with unified CLI-based test orchestration.</li>
                  <li>Enabled pre-merge testing workflows within CI pipelines for improved reliability.</li>
                  <li>Developed documentation and onboarding materials for local and CI test affordances.</li>
                  <li>Implemented GitHub PR branching strategy for dependent features and rebasing flow.</li>
                  <li>Created Playwright API tests for cart integrations (Dutchie, Treez, Flowhub) and job orchestration.</li>
                  <li>Advised engineering teams on test structure, automation reliability, and developer enablement.</li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between text-sm font-medium">
                  <span>Highland High School</span>
                  <span>2023–Present</span>
                </div>
                <p>Percussion Volunteer. Developing young musicians and future leaders.</p>
              </li>

              <li>
                <div className="flex justify-between text-sm font-medium">
                  <span>Flux Indoor Percussion</span>
                  <span>2024–Present</span>
                </div>
                <p>Battery consultant. A new chapter. Feels right.</p>
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
                <div>
                  <p>Snareline. Peak performance, peak identity crisis.</p>
                  <p className="text-sm text-neutral-500">lmaooo.</p>
                </div>
              </li>
            </ul>
          </article>
        </section>

        <footer className="pt-12 text-center text-sm text-neutral-500">
          <p>Sometimes the dock is broken. Sometimes it’s exactly what you need.</p>
        </footer>
      </div>
    </main>
  );
}