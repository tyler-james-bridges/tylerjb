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
            <h1 className="text-2xl font-bold text-gray-800">Tyler James-Bridges</h1>
            <p className="text-gray-600">Quality Engineer → Software Engineer</p>
          </div>
        </div>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3 text-gray-800">Background</h2>
          <p className="text-gray-700 leading-relaxed">
            With over 10 years of experience in quality assurance and manual testing, 
            I&apos;ve transitioned into software development while maintaining my quality-first mindset. 
            I specialize in building robust, well-tested applications with a focus on user experience.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3 text-gray-800">Core Strengths</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Edge case identification and systematic thinking
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              User empathy and real-world behavior understanding
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Test automation with Playwright and modern frameworks
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Quality-first development approach
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3 text-gray-800">Technical Stack</h2>
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
                <li>Cypress</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3 text-gray-800">Projects</h2>
          <div className="space-y-3">
            <div className="border-l-4 border-teal-500 pl-4">
              <h3 className="font-medium">TylerOS</h3>
              <p className="text-sm text-gray-600">Browser-based operating system built with React</p>
            </div>
            <div className="border-l-4 border-emerald-500 pl-4">
              <h3 className="font-medium">Portfolio Website</h3>
              <p className="text-sm text-gray-600">Personal site with Matrix animations and interactive elements</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}