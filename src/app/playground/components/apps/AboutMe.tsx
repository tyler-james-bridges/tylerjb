'use client';

export default function AboutMe() {
  return (
    <div className="p-6 h-full overflow-auto">
      <div className="max-w-2xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            TJB
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Tyler James-Bridges
            </h1>
            <p className="text-gray-600">
              Quality Engineer → Software Engineer
            </p>
          </div>
        </div>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3 text-gray-800">
            Background
          </h2>
          <p className="text-gray-700 leading-relaxed">
            I spent a decade in quality assurance before moving into software
            development. That background still shapes how I work: I think
            about failure modes early, test as I build, and care about how
            things behave for real users, not just in the happy path.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3 text-gray-800">
            What I&apos;m Good At
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Finding the edge cases everyone else missed
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Debugging methodically until I know the actual root cause
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Building test automation with Playwright
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Writing code that is easy to test and easy to operate
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3 text-gray-800">
            Technical Stack
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Frontend</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>React & Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Testing</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Playwright</li>
                <li>Jest & Testing Library</li>
                <li>Manual & exploratory testing</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3 text-gray-800">Projects</h2>
          <div className="space-y-3">
            <div className="border-l-4 border-teal-500 pl-4">
              <h3 className="font-medium">TylerOS</h3>
              <p className="text-sm text-gray-600">
                Browser-based desktop environment built with React
              </p>
            </div>
            <div className="border-l-4 border-emerald-500 pl-4">
              <h3 className="font-medium">Portfolio Website</h3>
              <p className="text-sm text-gray-600">
                Personal site built with Next.js, TypeScript, and Tailwind
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
