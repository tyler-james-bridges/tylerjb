"use client";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-serif px-6 py-16 transition-colors duration-300 rounded-xl">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Experience
          </h1>
          <p className="text-lg text-neutral-500 max-w-3xl">
            Professional journey and technical background
          </p>
        </header>

        <section className="space-y-8">
          <article>
            <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-teal-400 via-green-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">Work Experience</h3>
            <ul className="space-y-6">
              <li>
                <div className="flex justify-between text-sm font-medium">
                  <span>Weedmaps</span>
                  <span>Jan 2016–Present</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">Sr. Quality Engineer <span className="text-neutral-500 font-normal">(Feb 2020 - Present)</span></p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-base text-neutral-100">
                      <li>
                        Built and maintained a CLI for Playwright test execution
                        across different codebases and environments.
                      </li>
                      <li>
                        Replaced hardcoded shell/YAML logic with unified CLI-based
                        test orchestration.
                      </li>
                      <li>
                        Enabled pre-merge testing workflows within CI pipelines for
                        improved reliability.
                      </li>
                      <li>
                        Developed documentation and onboarding materials for local
                        and CI test affordances.
                      </li>
                      <li>
                        Created Playwright API tests for cart integrations (Dutchie,
                        Treez, Flowhub) and job orchestration.
                      </li>
                      <li>
                        Advised engineering teams on test structure, automation
                        reliability, and developer enablement.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium">Quality Engineer Analyst <span className="text-neutral-500 font-normal">(Jan 2016 - Jan 2020)</span></p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-base text-neutral-100">
                      <li>
                        Working cross-functionally with multiple teams designing
                        the end-to-end test solution in CI/CD for existing integrations.
                      </li>
                      <li>
                        Working with Engineering, Infrastructure, and Product
                        implementing multiple levels of coverage for platform minimizing risk of outages.
                      </li>
                      <li>
                        Designing effective and sustainable solutions to support
                        multiple 3rd party integrations.
                      </li>
                      <li>
                        Optimizing existing delivery pipeline by integrating
                        regression and smoke tests in CI/CD.
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex justify-between text-sm font-medium">
                  <span>Bonfire</span>
                  <span>Sep 2015–Feb 2016</span>
                </div>
                <p>Operations Manager</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-base text-neutral-100">
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
                <div className="flex justify-between text-sm font-medium">
                  <span>Mocan Media</span>
                  <span>Jan 2014–Sep 2015</span>
                </div>
                <p>Quality Assurance Manager</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-base text-neutral-100">
                  <li>
                    Performed call monitoring and provided trend data to management team.
                  </li>
                  <li>
                    Managed proper quality assurance policies and procedures.
                  </li>
                  <li>
                    Prepared and analyzed internal/external quality reports
                    for management staff review.
                  </li>
                </ul>
              </li>

              <li>
                <div className="flex justify-between text-sm font-medium">
                  <span>Madera Produce</span>
                  <span>Oct 2012–Sep 2013</span>
                </div>
                <p>Warehouse Laborer</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-base text-neutral-100">
                  <li>
                    Monitored inventory for coolers and storage rooms.
                  </li>
                  <li>
                    Operated bobtail/flat bed deliveries to local stores
                    and restaurants.
                  </li>
                  <li>
                    Organized pallets and prepared produce for storage.
                  </li>
                </ul>
              </li>

              <li>
                <div className="flex justify-between text-sm font-medium">
                  <span>Various High Schools</span>
                  <span>2010–2015</span>
                </div>
                <p>Percussion & Visual Tech</p>
                <p className="text-sm text-neutral-400 mt-1">
                  University HS, Mater Dei HS, Beyer HS, Madera HS, Sanger HS
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-base text-neutral-100">
                  <li>
                    Instructed percussion sections and visual programs.
                  </li>
                  <li>
                    Developed young musicians through technique coaching.
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between text-sm font-medium">
                  <span>Highland High School</span>
                  <span>2023–Present</span>
                </div>
                <p>
                  Percussion Volunteer. Developing young musicians and future
                  leaders.
                </p>
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
          <p>
            Sometimes the dock is broken. Sometimes it's exactly what you need.
          </p>
        </footer>
      </div>
    </main>
  );
}
