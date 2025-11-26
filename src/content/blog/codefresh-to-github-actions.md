---
title: "Cutting CI Build Times by 60%: Our GitHub Actions Migration"
date: "2024-12-15"
description: "A deep dive into migrating four critical codebases from Codefresh to GitHub Actions, achieving 60% faster builds and hitting 100% of our OKR targets."
tags: ["CI/CD", "GitHub Actions", "DevOps", "Developer Experience"]
---

## The Challenge

When I joined the Developer Experience team, we had a problem that every growing engineering org eventually faces: our CI/CD pipelines had become a bottleneck. We were running on Codefresh across four critical codebases (a React/Next.js frontend, an admin platform, the Ruby monolith, and our API) and things weren't great.

Build times were creeping up. Developers were waiting 25-45 minutes for feedback. Test flakiness was eroding confidence. And the monthly infrastructure costs were adding up.

My Q4 2025 OKR was straightforward: migrate everything to GitHub Actions. What followed was one of the most rewarding projects of my career.

---

## The Results (TL;DR)

Before diving into the journey, here's what we achieved:

- **11 pipelines migrated** across 4 repositories
- **60% average reduction** in pipeline execution time
- **~$14K/month saved** in infrastructure costs
- **400+ developer hours saved** weekly
- **100% SLO achievement** - all pipelines under 22-minute target
- **Zero production incidents** during migration

---

## Repository by Repository

### Frontend App (React/Next.js)

This was the flagship frontend app and where I started. The Jest test pipeline was taking 25 minutes, way too long for the fast iteration cycles frontend teams need.

**What I migrated:**
- Jest test pipeline
- PR comment functionality
- DataDog test reporting integration

**The innovation that changed everything:**

I implemented what we called the "Smoke CLI", a testing interface that simplified E2E testing to a single command:

```bash
smoke test ci @hotbox --workers=1
```

This pattern is now being adopted across other teams.

**Results:**
- Jest: 25 min → 12 min (52% faster)
- PR feedback: 20 min → 8 min (60% faster)
- Build success rate: 99.2%

---

### The Ruby Monolith

This was the scary one. A 15-year-old Ruby monolith with hidden test dependencies, complex database connections, and years of accumulated technical debt.

**What I migrated:**
- Rubocop linting
- Full RSpec suite
- Capybara integration tests

**The key insight:**

Intelligent parallelization made all the difference. Instead of running tests sequentially, I distributed them across 16 workers based on historical execution times:

```yaml
strategy:
  matrix:
    ci_node_index: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
```

**Results:**
- RSpec: 35 min → 12 min (66% faster)
- Capybara: 45 min → 18 min (60% faster)
- Rubocop: 15 min → 3 min (80% faster)

The 15-year-old monolith now builds faster than most greenfield projects.

---

### Admin Platform

Our internal operations platform needed the same treatment. The migration was smoother here because I'd learned from Moonshot, but there were still unique challenges around test isolation.

**What worked:**

A parallel check strategy that ran all validation types simultaneously:

```yaml
strategy:
  matrix:
    check: [eslint, jest, typescript, prettier]
```

**Results:**
- Jest: 18 min → 9 min (50% faster)
- 85% reduction in flaky tests
- 65% reduction in CI debugging time

---

### The API

The API is the gateway to the platform. Any migration here needed to be flawless since we couldn't afford downtime.

**The approach:**

Incremental linting was the big win here. Instead of linting the entire codebase on every PR, we only lint changed files:

**Results:**
- RSpec: 25 min → 11 min (56% faster)
- Rubocop: 8 min → 90 seconds (81% faster)
- 99.5% deployment success rate

---

## Lessons Learned

### What Worked Exceptionally Well

**1. Incremental migration reduces risk**

I never migrated more than one pipeline at a time. Each migration ran in parallel with the existing Codefresh pipeline until we had confidence, then we cut over. This meant zero "big bang" moments.

**2. Documentation multiplies impact**

Every pattern I established got documented immediately. This meant other teams could adopt the same approaches without needing my direct involvement.

**3. Metrics drive decisions**

Every choice was backed by data. When stakeholders asked "why parallel workers instead of bigger machines?" I had the numbers ready.

**4. Developer experience is the priority**

The goal was never "migrate to GitHub Actions." The goal was "make developers more productive." That framing changed everything.

### Challenges I Had to Overcome

**Test interdependencies in the monolith**

Some tests had hidden dependencies on execution order. I had to systematically identify and fix these before migration was possible.

**Database connection pooling**

The parallel test strategy exposed connection pool exhaustion issues we'd never seen before. Fixing this actually improved our production reliability too.

**Cultural change**

Migrating tools is easy. Getting teams to trust new tools takes time. Regular demos, office hours, and quick wins built the confidence needed for adoption.

---

## The Technical Patterns That Worked

### Smart Caching

Every repository now uses a multi-layer caching strategy:

- Dependency caching (npm, gems)
- Build artifact caching
- Test result caching for re-runs

This reduced setup time by 60-70% across the board.

### Matrix Strategies

Instead of one big job, break work into parallel chunks:

```yaml
strategy:
  matrix:
    test_suite: [models, controllers, services, lib, integration]
```

### DataDog Integration

Every pipeline now reports to DataDog, giving us:
- Test execution trends
- Flakiness detection
- Performance regression alerts

---

## By The Numbers

### Execution Time Improvements

| Repository | Test Type | Before | After | Improvement |
|------------|-----------|--------|-------|-------------|
| Frontend | Jest | 25 min | 12 min | 52% |
| Admin | Jest | 18 min | 9 min | 50% |
| Monolith | RSpec | 35 min | 12 min | 66% |
| Monolith | Capybara | 45 min | 18 min | 60% |
| Monolith | Rubocop | 15 min | 3 min | 80% |
| API | RSpec | 25 min | 11 min | 56% |
| API | Rubocop | 8 min | 90 sec | 81% |

### Developer Impact

- Onboarding time: 3 days → 1 day
- CI debugging time: 70% reduction
- Developer NPS: +40 points
- Deployment frequency: +40%

---

## What's Next

The migration is complete, but the work continues. For Q1 2026, I'm focused on:

- **AI-powered test selection**: Using ML to run only the tests likely to fail
- **Self-healing pipelines**: Automatic resolution of common failures
- **Predictive CI/CD**: Anticipating failures before they occur

---

## Final Thoughts

This project reinforced something I've believed throughout my career: the best infrastructure is invisible. Developers shouldn't think about CI/CD. They should just ship code and trust that the system works.

We went from CI/CD being a bottleneck to it being an accelerator. Developers now ship with confidence, iterate faster, and focus on what matters: building great products.

The numbers tell the story: 60% faster builds, significant cost savings, and 400+ developer hours reclaimed weekly. But the real win is cultural. We've fundamentally changed how the engineering org thinks about shipping software.

And honestly? That's worth more than any metric.

---

*Questions about CI/CD migration or want to chat about developer experience? [Reach out](/contact). I love talking about this stuff.*
