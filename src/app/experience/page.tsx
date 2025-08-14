"use client";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-serif px-4 sm:px-6 py-8 sm:py-16 transition-colors duration-300 rounded-xl">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
        <header className="space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Experience
          </h1>
          <p className="text-lg text-neutral-500 max-w-3xl">
            Professional journey and technical background
          </p>
        </header>

        <section className="space-y-6 sm:space-y-8">
          <article>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 bg-gradient-to-r from-teal-400 via-green-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Work Experience
            </h3>
            <ul className="space-y-8 sm:space-y-6">
              <li>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 text-sm font-medium">
                  <span>Weedmaps</span>
                  <span className="text-neutral-400 sm:text-foreground">
                    Jan 2016–Present
                  </span>
                </div>
                <div className="space-y-6 sm:space-y-4 mt-3 sm:mt-2">
                  <div>
                    <p className="font-medium text-base sm:text-base">
                      Software Engineer III{" "}
                      <span className="text-neutral-500 font-normal">
                        (Aug 2025 - Present)
                      </span>
                    </p>
                    <ul className="list-disc list-inside mt-3 sm:mt-2 space-y-2 sm:space-y-1 text-sm sm:text-base text-neutral-100 leading-relaxed sm:leading-normal">
                      <li>
                        Transitioned to Developer Tools and Services team,
                        building internal software that accelerates development
                        velocity.
                      </li>
                      <li>
                        Create developer tools enabling teams to ship code
                        quickly and efficiently across the platform.
                      </li>
                      <li>
                        Design test environments and CI/CD pipeline interfaces
                        with Infrastructure and Application Development teams.
                      </li>
                      <li>
                        Deliver solutions from consumer-facing platforms to
                        internal tooling, owning features from design through
                        deployment.
                      </li>
                      <li>
                        Champion engineering excellence through pair
                        programming, code reviews, and documentation.
                      </li>
                      <li>
                        Build internal APIs enhancing the consumer eCommerce
                        experience on weedmaps.com.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-base sm:text-base">
                      Sr. Quality Engineer{" "}
                      <span className="text-neutral-500 font-normal">
                        (Feb 2020 - Aug 2025)
                      </span>
                    </p>
                    <ul className="list-disc list-inside mt-3 sm:mt-2 space-y-2 sm:space-y-1 text-sm sm:text-base text-neutral-100 leading-relaxed sm:leading-normal">
                      <li>
                        Built and maintained a CLI for Playwright test execution
                        across different codebases and environments.
                      </li>
                      <li>
                        Replaced hardcoded shell/YAML logic with unified
                        CLI-based test orchestration.
                      </li>
                      <li>
                        Enabled pre-merge testing workflows within CI pipelines
                        for improved reliability.
                      </li>
                      <li>
                        Developed documentation and onboarding materials for
                        local and CI test affordances.
                      </li>
                      <li>
                        Created Playwright API tests for cart integrations
                        (Dutchie, Treez, Flowhub) and job orchestration.
                      </li>
                      <li>
                        Advised engineering teams on test structure, automation
                        reliability, and developer enablement.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-base sm:text-base">
                      Quality Engineer Analyst{" "}
                      <span className="text-neutral-500 font-normal">
                        (Jan 2016 - Feb 2020)
                      </span>
                    </p>
                    <ul className="list-disc list-inside mt-3 sm:mt-2 space-y-2 sm:space-y-1 text-sm sm:text-base text-neutral-100 leading-relaxed sm:leading-normal">
                      <li>
                        Performed rigorous manual black box testing to identify
                        defects and ensure product quality.
                      </li>
                      <li>
                        Created and managed test suites from ground zero for
                        regression, functionality, performance, and API testing.
                      </li>
                      <li>
                        Reviewed product specifications to understand QA
                        acceptance criteria and deliverables.
                      </li>
                      <li>
                        Facilitated test plan reviews with cross-functional
                        teams to ensure comprehensive coverage.
                      </li>
                      <li>
                        Acted as liaison between development, product
                        management, and customer support teams.
                      </li>
                      <li>
                        Identified and escalated quality issues promptly to
                        drive continuous improvements.
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 text-sm font-medium">
                  <span>Bonfire</span>
                  <span className="text-neutral-400 sm:text-foreground">
                    Sep 2015–Feb 2016
                  </span>
                </div>
                <p className="font-medium text-base sm:text-base mt-2 sm:mt-1">
                  Operations Manager
                </p>
                <ul className="list-disc list-inside mt-3 sm:mt-2 space-y-2 sm:space-y-1 text-sm sm:text-base text-neutral-100 leading-relaxed sm:leading-normal">
                  <li>
                    Operations and Hiring Manager for customer service contact
                    center specializing in Local SEO.
                  </li>
                  <li>
                    Day-to-day management of Local SEO, PPC & Social Media
                    campaigns.
                  </li>
                  <li>
                    Organized clientele through SalesForce to ensure quality of
                    customer relations management.
                  </li>
                </ul>
              </li>

              <li>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 text-sm font-medium">
                  <span>Mocan Media</span>
                  <span className="text-neutral-400 sm:text-foreground">
                    Jan 2014–Sep 2015
                  </span>
                </div>
                <p className="font-medium text-base sm:text-base mt-2 sm:mt-1">
                  Quality Assurance Manager
                </p>
                <ul className="list-disc list-inside mt-3 sm:mt-2 space-y-2 sm:space-y-1 text-sm sm:text-base text-neutral-100 leading-relaxed sm:leading-normal">
                  <li>
                    Performed call monitoring and provided trend data to
                    management team.
                  </li>
                  <li>
                    Managed proper quality assurance policies and procedures.
                  </li>
                  <li>
                    Prepared and analyzed internal/external quality reports for
                    management staff review.
                  </li>
                </ul>
              </li>

              <li>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 text-sm font-medium">
                  <span>Madera Produce</span>
                  <span className="text-neutral-400 sm:text-foreground">
                    Oct 2012–Sep 2013
                  </span>
                </div>
                <p className="font-medium text-base sm:text-base mt-2 sm:mt-1">
                  Warehouse Laborer
                </p>
                <ul className="list-disc list-inside mt-3 sm:mt-2 space-y-2 sm:space-y-1 text-sm sm:text-base text-neutral-100 leading-relaxed sm:leading-normal">
                  <li>Monitored inventory for coolers and storage rooms.</li>
                  <li>
                    Operated bobtail/flat bed deliveries to local stores and
                    restaurants.
                  </li>
                  <li>Organized pallets and prepared produce for storage.</li>
                </ul>
              </li>

              <li>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 text-sm font-medium">
                  <span>Various High Schools</span>
                  <span className="text-neutral-400 sm:text-foreground">
                    2010–2015
                  </span>
                </div>
                <p className="font-medium text-base sm:text-base mt-2 sm:mt-1">
                  Percussion & Visual Tech
                </p>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-relaxed">
                  University HS, Mater Dei HS, Beyer HS, Madera HS, Sanger HS
                </p>
                <ul className="list-disc list-inside mt-3 sm:mt-2 space-y-2 sm:space-y-1 text-sm sm:text-base text-neutral-100 leading-relaxed sm:leading-normal">
                  <li>Instructed percussion sections and visual programs.</li>
                  <li>Developed young musicians through technique coaching.</li>
                </ul>
              </li>
              <li>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 text-sm font-medium">
                  <span>Highland High School</span>
                  <span className="text-neutral-400 sm:text-foreground">
                    2023–Present
                  </span>
                </div>
                <p className="text-sm sm:text-base mt-2 sm:mt-1 leading-relaxed sm:leading-normal">
                  Percussion Volunteer. Developing young musicians and future
                  leaders.
                </p>
              </li>

              <li>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 text-sm font-medium">
                  <span>Flux Indoor Percussion</span>
                  <span className="text-neutral-400 sm:text-foreground">
                    2024–Present
                  </span>
                </div>
                <p className="text-sm sm:text-base mt-2 sm:mt-1 leading-relaxed sm:leading-normal">
                  Battery consultant. A new chapter. Feels right.
                </p>
              </li>

              <li>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 text-sm font-medium">
                  <span>POW Percussion</span>
                  <span className="text-neutral-400 sm:text-foreground">
                    2015–2022
                  </span>
                </div>
                <p className="text-sm sm:text-base mt-2 sm:mt-1 leading-relaxed sm:leading-normal">
                  Battery & ensemble coordinator. Legacy builder.
                </p>
              </li>

              <li>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 text-sm font-medium">
                  <span>Blue Stars</span>
                  <span className="text-neutral-400 sm:text-foreground">
                    2014–2018
                  </span>
                </div>
                <p className="text-sm sm:text-base mt-2 sm:mt-1 leading-relaxed sm:leading-normal">
                  Snareline tech. Tour life and hard truths.
                </p>
              </li>

              <li>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 text-sm font-medium">
                  <span>Pulse Percussion</span>
                  <span className="text-neutral-400 sm:text-foreground">
                    2012–2014
                  </span>
                </div>
                <div className="mt-2 sm:mt-1">
                  <p className="text-sm sm:text-base leading-relaxed sm:leading-normal">
                    Snareline. Peak performance, peak identity crisis.
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                    lmaooo.
                  </p>
                </div>
              </li>
            </ul>
          </article>
        </section>

        <footer className="pt-12 text-center text-sm text-neutral-500">
          <p>
            Sometimes the dock is broken. Sometimes it's exactly what you need.
          </p>
        </footer>
      </div>
    </main>
  );
}
