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

This is Tyler James-Bridges' personal portfolio website (tylerjb.dev) built with Next.js 15, Tailwind CSS, and TypeScript, in a liquid-glass design (translucent blurred panels over an ambient gradient backdrop) with Geist Mono. The site presents Tyler as a Software Engineer III on the DevEx team at Weedmaps — a decade of quality engineering, now building developer tooling and agent infrastructure on Ethereum L2s — plus the drum corps/percussion-educator side.

**Content rules:** zero emojis anywhere in the codebase or copy (non-negotiable). No marketing slop ("passionate about", "leveraging", manifesto poetry). Every claim factual — no fake metrics, no inflated contribution claims (say "built tooling for the x402 ecosystem", not "x402 contributor").

## Project-Specific Commands

### Build & Development

```bash
npm install                 # Install dependencies
npm run dev                 # Start development server with Turbopack
npm run build              # Build for production
npm start                  # Start production server
npm run lint               # Run ESLint
```

### Testing

```bash
npm test                   # Playwright e2e suite (tests/, chromium + mobile viewport)
npm run test:e2e           # Same as npm test
```

The Playwright config boots a production build (`npm run build && npm start`). CI runs lint + tests before deploy (`.github/workflows/deploy.yml`, Node 22).

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
│   ├── components/         # Sidebar, MobileNav, SidebarLayout, TerminalWidget, nav-config
│   ├── api/contact/        # Contact form handling (Resend)
│   ├── about/              # About page
│   ├── blog/               # Markdown blog (posts via src/lib/blog.ts)
│   ├── contact/            # Contact page (+ layout.tsx for metadata)
│   ├── drums/              # Performance videos
│   ├── experience/         # Experience/resume page
│   ├── journey/            # QA-to-DevEx story page
│   ├── playground/         # TylerOS desktop-style sandbox (+ layout.tsx for metadata)
│   ├── projects/           # Projects showcase (the centerpiece page)
│   ├── layout.tsx          # Root layout, metadata, JSON-LD Person schema
│   ├── opengraph-image.tsx # Generated 1200x630 OG image (twitter-image re-exports it)
│   ├── sitemap.ts          # Sitemap (includes blog posts)
│   ├── page.tsx            # Homepage: hero, featured work, terminal widget
│   └── globals.css         # Global styles and Tailwind imports
└── lib/                    # Blog utilities
tests/                      # Playwright e2e suite
```

### Key Features

- **Navigation**: Desktop sidebar + mobile nav, both driven by `components/nav-config.ts`, responsive via CSS breakpoints
- **Terminal widget**: the one signature interactive element; plays once, respects prefers-reduced-motion
- **Social Integration**: GitHub, LinkedIn, and X links from nav-config
- **Contact System**: API route for contact form submissions using Resend

### Configuration Notes

- Turbopack enabled for development
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
5. Client-component pages get metadata via a sibling `layout.tsx` (see contact/, playground/)

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

- `RESEND_API_KEY` - Required for contact form functionality (Resend integration)

## Important Instruction Reminders

- Do what has been asked; nothing more, nothing less
- NEVER create files unless they're absolutely necessary for achieving your goal
- ALWAYS prefer editing an existing file to creating a new one
- NEVER proactively create documentation files (\*.md) or README files. Only create documentation files if explicitly requested by the User

---

_This configuration combines the SuperClaude framework with QA-to-SWE transition guidance, tailored specifically for Tyler James-Bridges' portfolio website development._
