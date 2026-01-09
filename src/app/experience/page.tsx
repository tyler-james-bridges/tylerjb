import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
};

interface Job {
  company: string;
  period: string;
  roles: {
    title: string;
    period: string;
    bullets: string[];
  }[];
}

const jobs: Job[] = [
  {
    company: "Weedmaps",
    period: "Jan 2016–Present",
    roles: [
      {
        title: "Software Engineer III",
        period: "Aug 2025 - Present",
        bullets: [
          "Transitioned to Developer Tools and Services team, building internal software that accelerates development velocity.",
          "Create developer tools enabling teams to ship code quickly and efficiently across the platform.",
          "Design test environments and CI/CD pipeline interfaces with Infrastructure and Application Development teams.",
          "Deliver solutions from consumer-facing platforms to internal tooling, owning features from design through deployment.",
          "Champion engineering excellence through pair programming, code reviews, and documentation.",
          "Build internal APIs enhancing the consumer eCommerce experience on weedmaps.com.",
        ],
      },
      {
        title: "Sr. Quality Engineer",
        period: "Feb 2020 - Aug 2025",
        bullets: [
          "Built and maintained a CLI for Playwright test execution across different codebases and environments.",
          "Replaced hardcoded shell/YAML logic with unified CLI-based test orchestration.",
          "Enabled pre-merge testing workflows within CI pipelines for improved reliability.",
          "Developed documentation and onboarding materials for local and CI test affordances.",
          "Created Playwright API tests for cart integrations (Dutchie, Treez, Flowhub) and job orchestration.",
          "Advised engineering teams on test structure, automation reliability, and developer enablement.",
        ],
      },
      {
        title: "Quality Engineer Analyst",
        period: "Jan 2016 - Feb 2020",
        bullets: [
          "Performed rigorous manual black box testing to identify defects and ensure product quality.",
          "Created and managed test suites from ground zero for regression, functionality, performance, and API testing.",
          "Reviewed product specifications to understand QA acceptance criteria and deliverables.",
          "Facilitated test plan reviews with cross-functional teams to ensure comprehensive coverage.",
          "Acted as liaison between development, product management, and customer support teams.",
        ],
      },
    ],
  },
  {
    company: "Bonfire",
    period: "Sep 2015–Feb 2016",
    roles: [
      {
        title: "Operations Manager",
        period: "Sep 2015 - Feb 2016",
        bullets: [
          "Operations and Hiring Manager for customer service contact center specializing in Local SEO.",
          "Day-to-day management of Local SEO, PPC & Social Media campaigns.",
          "Organized clientele through SalesForce to ensure quality of customer relations management.",
        ],
      },
    ],
  },
];

const musicExperience = [
  { org: "Highland High School", period: "2023–Present", role: "Percussion Volunteer" },
  { org: "Flux Indoor Percussion", period: "2024–Present", role: "Battery Consultant" },
  { org: "POW Percussion", period: "2015–2022", role: "Battery & Ensemble Coordinator" },
  { org: "Blue Stars", period: "2014–2018", role: "Snareline Tech" },
  { org: "Pulse Percussion", period: "2012–2014", role: "Snareline" },
];

export default function ExperiencePage() {
  return (
    <div className="animate-slide-up">
      {/* Header */}
      <header className="content-header">
        <h1 className="text-2xl font-bold">💼 Experience</h1>
      </header>

      {/* Content */}
      <div className="content-body prose-notes">
        <section className="mb-10 stagger-1">
          <h2 className="text-2xl">Work Experience</h2>
          {jobs.map((job, jobIndex) => (
            <div key={job.company} className={`mb-8 stagger-${Math.min(jobIndex + 2, 6)}`}>
              <div className="flex justify-between items-baseline mb-3">
                <h3 className="font-semibold text-lg">{job.company}</h3>
                <span className="text-sm text-muted-foreground">{job.period}</span>
              </div>
              {job.roles.map((role) => (
                <div key={role.title} className="mb-4 pl-4 border-l-2 border-border hover:border-[hsl(38,92%,50%)] transition-colors">
                  <div className="flex justify-between items-baseline">
                    <span className="font-medium">{role.title}</span>
                    <span className="text-xs text-muted-foreground">{role.period}</span>
                  </div>
                  <ul className="mt-2 space-y-1.5">
                    {role.bullets.map((bullet, i) => (
                      <li key={i} className="text-sm text-muted-foreground">{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </section>

        <section className="stagger-4">
          <h2 className="text-2xl">Music & Education</h2>
          <p className="text-muted-foreground mb-4">
            Teaching and performing across the marching arts world.
          </p>
          <div className="space-y-2">
            {musicExperience.map((exp) => (
              <div key={exp.org} className="flex justify-between items-baseline py-2.5 border-b border-border last:border-0 hover:bg-muted/50 -mx-2 px-2 rounded transition-colors">
                <div>
                  <span className="font-medium">{exp.org}</span>
                  <span className="text-muted-foreground ml-2">· {exp.role}</span>
                </div>
                <span className="text-sm text-muted-foreground">{exp.period}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
