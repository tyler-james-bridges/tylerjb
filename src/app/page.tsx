export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-6 flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold mb-2">Tyler James-Bridges</h1>
        <p className="text-lg mb-2">Senior Quality Engineer · Percussion Educator</p>
        <p className="text-base text-gray-700 mb-4">
          I build scalable testing infrastructure and developer tools for web and mobile apps. I’ve led CI/CD automation, Playwright API test orchestration, and created custom CLIs to improve test pipelines.
        </p>
        <p className="text-base text-gray-700 mb-6">
          Recently launched a unified CLI testing suite for Smoke + Moonshot systems, integrated with GitHub Actions and Codefresh CI, plus telemetry for usage tracking.
        </p>
        <button
          disabled
          className="inline-block bg-gray-400 text-white px-6 py-3 rounded-lg text-sm font-semibold cursor-not-allowed"
        >
          Resume Coming Soon
        </button>
      </div>
    </main>
  );
}
