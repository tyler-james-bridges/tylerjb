export const identity = {
  name: 'Tyler James-Bridges',
  title: 'Software Engineer III',
  company: 'Weedmaps',
  location: 'Arizona',
  email: 'tylerjamesbridges@gmail.com',
  github: 'https://github.com/tyler-james-bridges',
  linkedin: 'https://www.linkedin.com/in/tyler-james-bridges-4344abab',
} as const;

export const workRoles = [
  {
    period: 'Aug 2025–present',
    title: 'Software Engineer III',
    company: 'Weedmaps',
    summary: 'Developer tooling · Internal services · CI · Agent systems',
    details: [
      'Developer tooling for local development, review, testing, and delivery.',
      'CI and test-environment tooling with infrastructure and application engineering teams.',
      'Internal APIs and production automation.',
      'Agent workflows · Scoped permissions · Execution logs',
    ],
  },
  {
    period: 'Feb 2020–Aug 2025',
    title: 'Senior Quality Engineer',
    company: 'Weedmaps',
    summary: 'Playwright automation · Shared test systems · CI integration',
    details: [
      'TypeScript CLI for Playwright tests across codebases and environments.',
      'Shared local and CI interface for smoke, API, accessibility, and pre-merge tests.',
      'Reusable test helpers, documentation, and debugging paths.',
    ],
  },
  {
    period: 'Jan 2016–Feb 2020',
    title: 'Quality Engineer Analyst',
    company: 'Weedmaps',
    summary: 'Manual testing · API testing · Release quality · Test planning',
    details: [
      'Regression, functional, exploratory, and API testing.',
      'Acceptance coverage from product specifications.',
      'Release testing across engineering, product, and support.',
    ],
  },
  {
    period: 'Sep 2015–Feb 2016',
    title: 'Operations Manager',
    company: 'Bonfire',
    summary: 'Operations · Hiring · Customer service',
    details: [
      'Campaign operations and customer relationships.',
      'Hiring, service-delivery, and account-organization processes.',
    ],
  },
] as const;

export const selectedSystems = [
  {
    title: 'Smoke test CLI',
    description:
      'Shared TypeScript command for Playwright smoke tests locally and in CI.',
    stack: 'TypeScript · Node.js · Playwright · CI',
  },
  {
    title: 'End-to-end test platform',
    description:
      'Page Object Model suites · Shared helpers · API coverage · Accessibility checks · Pre-merge workflows',
    stack: 'Playwright · TypeScript · API testing · Accessibility',
  },
  {
    title: 'Service scaffolding and delivery workflows',
    description:
      'Service templates and shared GitHub Actions for security checks, reviewer assignment, pull-request automation, and delivery.',
    stack: 'GitHub Actions · Templates · Docker · Developer tooling',
  },
  {
    title: 'Internal agent infrastructure',
    description:
      'MCP tools and scheduled agent workflows with scoped permissions and execution logs.',
    stack: 'MCP · Agent systems · GitHub Actions · TypeScript',
  },
] as const;

export const toolGroups = [
  ['Languages', 'TypeScript · JavaScript · Ruby · Go · Bash'],
  ['Testing', 'Playwright · API testing · Accessibility · E2E systems'],
  ['Platform', 'GitHub Actions · CI · Docker · Terraform'],
  ['Backend', 'Node.js · NestJS · Rails · OpenSearch'],
  ['Frontend', 'React · Next.js · React Native'],
  ['Agent systems', 'MCP servers · Agent workflows · LLM tooling'],
] as const;

export type Project = {
  title: string;
  description: string;
  tech: readonly string[];
  status: string;
  live?: string;
  source?: string;
  featured?: boolean;
};

export const projects: readonly Project[] = [
  {
    title: 'ACK Protocol',
    description:
      'ERC-8004 reputation contracts · Agent discovery · Onchain kudos · TypeScript SDK',
    tech: ['Next.js', 'Solidity', 'ERC-8004', 'Abstract'],
    status: 'Live app',
    live: 'https://ack-onchain.dev',
    source: 'https://github.com/tyler-james-bridges/ack-protocol',
    featured: true,
  },
  {
    title: 'qai-cli',
    description:
      'Playwright visual checks · Console and network checks · Pull-request review · Test generation',
    tech: ['TypeScript', 'Playwright', 'CLI'],
    status: 'Published package',
    live: 'https://www.npmjs.com/package/qai-cli',
    source: 'https://github.com/tyler-james-bridges/qai-cli',
    featured: true,
  },
  {
    title: 'Agent Tool Index',
    description: 'Rust index · Onchain tool discovery · Call-planning APIs',
    tech: ['Rust', 'Indexing', 'APIs', 'Onchain'],
    status: 'Live service',
    live: 'https://agenttoolindex.xyz',
    source: 'https://github.com/tyler-james-bridges/agent-tool-index',
    featured: true,
  },
  {
    title: 'etch',
    description:
      'Typed onchain records · Optional soulbound behavior · Deterministic generative art · MCP access',
    tech: ['Solidity', 'Next.js', 'MCP', 'Base'],
    status: 'Mainnet contracts',
    live: 'https://etch.ack-onchain.dev',
    source: 'https://github.com/tyler-james-bridges/etch',
    featured: true,
  },
  {
    title: 'x402 tooling',
    description:
      'Compliance · Monitoring · Indexing · Discovery for x402-enabled services',
    tech: ['x402', 'TypeScript', 'Monitoring', 'CLI'],
    status: 'Tool suite',
    live: 'https://0x402.sh',
    source: 'https://github.com/tyler-james-bridges/x402-lint',
  },
  {
    title: 'abstract-skills',
    description:
      'Abstract development patterns and workflows packaged as a Claude Code plugin',
    tech: ['Claude Code', 'Abstract', 'Developer tools'],
    status: 'Published plugin',
    source: 'https://github.com/tyler-james-bridges/abstract-skills',
  },
  {
    title: 'abstrack',
    description: 'Browser rhythm game generated from Abstract block data',
    tech: ['Next.js', 'Web Audio API', 'Abstract'],
    status: 'Live experiment',
    live: 'https://www.abstrack.live',
    source: 'https://github.com/tyler-james-bridges/abstrack',
  },
  {
    title: 'Solana DevEx Platform',
    description:
      'Integrated Solana developer tools for the February 2026 Colosseum Agent Hackathon',
    tech: ['Next.js', 'Solana', 'TypeScript'],
    status: 'Hackathon project',
    source: 'https://github.com/tyler-james-bridges/solana-devex-platform',
  },
  {
    title: 'tempo',
    description: 'Tempo maps generated from uploaded marching-arts sheet music',
    tech: ['React Native', 'Expo', 'Next.js'],
    status: 'In development',
    source: 'https://github.com/tyler-james-bridges/tempo',
  },
  {
    title: 'recipe-to-reality',
    description: 'Structured grocery lists extracted from recipe URLs',
    tech: ['React Native', 'Expo'],
    status: 'Prototype',
    source: 'https://github.com/tyler-james-bridges/recipe-to-reality',
  },
] as const;

export const percussionCredits = [
  ['2024–present', 'Flux Indoor Percussion', 'Battery consultant'],
  ['2023–present', 'Highland High School', 'Percussion volunteer'],
  ['2015–2022', 'POW Percussion', 'Battery and ensemble coordinator'],
  ['2014–2018', 'Blue Stars', 'Snareline instructor'],
  ['2012–2014', 'Pulse Percussion', 'Snareline'],
] as const;
