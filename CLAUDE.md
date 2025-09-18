# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Developer Context

**Background:** Software engineer with 10 years QA/manual testing and Playwright automation expertise, recently transitioned to development role.

**Strengths to Leverage:**
- Edge case identification and systematic thinking
- User empathy and real-world behavior understanding
- Quality-first development approach
- Systematic debugging and root cause analysis
- Test automation and testability design

**Apply QA-to-SWE Framework:**
- Quality mindset in code design and architecture decisions
- Testability patterns for maintainable, robust code
- Production debugging strategies beyond unit testing
- User-centric perspective in feature development

## Project Overview

This is Tyler James-Bridges' personal portfolio website built with Next.js 15, featuring a modern design with Tailwind CSS and TypeScript. The site showcases Tyler's work as a senior quality engineer, educator, and musician with interactive elements and responsive design.

## Project-Specific Commands

### Build & Development
```bash
npm install                 # Install dependencies
npm run dev                 # Start development server with Turbopack
npm run build              # Build for production
npm start                  # Start production server
npm run lint               # Run ESLint (disabled during builds via next.config.ts)
```

### Testing Strategy
```bash
# Tests to be implemented following QA-first approach
npm run test:unit          # Unit tests (to be added)
npm run test:integration   # Integration tests (to be added)
npm run test:e2e          # E2E tests with Playwright (to be added)
npm run test:coverage     # Coverage reporting (to be added)
```

## Architecture Overview

### Core Technologies
- **Next.js 15** with App Router architecture
- **TypeScript** for type safety
- **Tailwind CSS** for styling with custom configurations
- **React 19** with modern hooks and patterns
- **Vercel Analytics** for performance monitoring

### Project Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── components/         # Reusable React components
│   │   └── MobileNav.tsx   # Mobile navigation component
│   ├── api/               # API routes
│   │   └── contact/       # Contact form handling
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── experience/        # Experience/resume page
│   ├── services/          # Services page (feature-flagged)
│   ├── layout.tsx         # Root layout with footer and analytics
│   ├── page.tsx           # Homepage with hero section and manifesto
│   └── globals.css        # Global styles and Tailwind imports
└── middleware.ts          # Next.js middleware for feature flags
```

### Key Features
- **Feature Flagging**: The `/services` route is controlled by the `FEATURE_SERVICES` environment variable via middleware
- **Interactive Elements**: Homepage includes a flippable profile card with Matrix-style animation
- **Responsive Design**: Mobile-first approach with custom breakpoints
- **Custom Animations**: CSS animations for Matrix rain effect, bouncing elements, and hover states
- **Social Integration**: Direct links to GitHub, LinkedIn, and X (Twitter)
- **Contact System**: API route for handling contact form submissions using Resend

### Configuration Notes
- ESLint is configured but disabled during builds for faster deployment
- Image optimization disabled for `img` elements (uses regular `<img>` tags instead of Next.js Image component)
- Turbopack enabled for development for faster build times
- TypeScript strict mode enabled via tsconfig.json

## Quality Guidelines

### Code Review Focus Areas
- [ ] Edge case handling and input validation
- [ ] Error scenarios and graceful degradation
- [ ] Logging and debugging information
- [ ] Performance implications
- [ ] Security considerations
- [ ] Testability and maintainability

### Development Workflow
1. **Understand requirements** - Ask QA-style clarifying questions
2. **Plan with quality in mind** - Consider edge cases upfront
3. **Implement defensively** - Handle errors and edge cases
4. **Test systematically** - Unit, integration, and E2E coverage
5. **Debug systematically** - Use structured investigation approach

### Quality Gates
- All tests pass before code review
- Lint/type checking passes
- Security scan (if applicable) passes
- Performance within acceptable bounds
- Manual testing of happy path and key edge cases

## Development Guidelines

1. Content updates are primarily made in `src/app/page.tsx` for homepage changes
2. New pages follow the App Router convention in `src/app/[page-name]/page.tsx`
3. Shared components go in `src/app/components/`
4. API routes follow the pattern `src/app/api/[endpoint]/route.ts`
5. Feature flags are managed through middleware.ts for conditional routing

## Team Integration

### Contributing to Technical Discussions
- Apply user impact perspective to architectural decisions
- Ask system reliability and debugging questions
- Suggest edge cases and failure scenarios
- Advocate for observability and monitoring

### Mentorship and Learning
- Seek code review feedback on architectural decisions
- Ask questions about business context and domain knowledge
- Share QA insights about system behavior and user patterns
- Focus on building full-stack understanding

## Quick Reference

### QA-Mindset Development Questions
- "What edge cases could break this feature?"
- "How will we debug this in production?"
- "What happens when external services fail?"
- "How will users experience errors or failures?"
- "What performance impact should we expect?"

### Testability Checklist
- [ ] Functions are pure when possible
- [ ] Dependencies are injected/mockable
- [ ] Error conditions are specific and testable
- [ ] Side effects are isolated and observable
- [ ] Complex logic is broken into testable units

### Production Readiness
- [ ] Comprehensive error handling
- [ ] Structured logging with correlation IDs
- [ ] Monitoring and alerting hooks
- [ ] Performance considerations addressed
- [ ] Security best practices followed
- [ ] Documentation for operations and debugging

## Environment Variables
- `FEATURE_SERVICES` - Controls visibility of services page (boolean)
- `RESEND_API_KEY` - Required for contact form functionality (Resend integration)

## Important Instruction Reminders
- Do what has been asked; nothing more, nothing less
- NEVER create files unless they're absolutely necessary for achieving your goal
- ALWAYS prefer editing an existing file to creating a new one
- NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User

---

*This configuration combines the SuperClaude framework with QA-to-SWE transition guidance, tailored specifically for Tyler James-Bridges' portfolio website development.*