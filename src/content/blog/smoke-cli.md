---
title: "Building the Smoke CLI: Making E2E Testing Actually Usable"
date: "2024-10-15"
description: "How a frustrating 2 AM debugging session led to a CLI that simplified E2E testing across the entire org."
tags: ["Developer Experience", "CLI", "Testing", "TypeScript"]
---

## The Problem

It was 2 AM on a Tuesday. I was staring at my terminal, trying to debug why our Playwright tests were failing in CI but passing locally. The command I needed to run looked like this:

```bash
docker run --rm \
  -v $(pwd):/app \
  -v /var/run/docker.sock:/var/run/docker.sock \
  --env-file .env.test \
  --env NODE_ENV=test \
  --env TEST_URL=${TEST_URL:-http://localhost:3000} \
  --network host \
  --cap-add=SYS_ADMIN \
  registry.example.com/playwright:latest \
  npm run test:e2e -- --workers=1 --project=chromium
```

I had to copy this from a team chat. Again. For the third time that week.

On the DevEx team at Weedmaps, I'd seen this pattern play out constantly. Developers across the org were struggling with the same problem: our testing infrastructure was powerful but painfully complex. Every team had their own variation of these Docker commands, passed down through tribal knowledge.

---

## What I Observed

I spent a week shadowing different teams, watching them run tests. The patterns were rough:

**The new developer experience:**
- Week 1: "How do I run tests?"
- Week 2: "Why don't the tests work on my machine?"
- Week 3: "I'll just push and see if CI passes"

**The reality:**
- 15 different test scripts across repositories
- No consistency in command structure
- Environment variables scattered across multiple .env files
- Docker networking issues that only appeared in CI

The problem wasn't our testing tools. Playwright, Jest, Docker: all excellent. The problem was that we had no abstraction layer. Every developer was forced to understand the entire stack just to run a simple test.

---

## The Solution

What if we had a single command that just worked?

```bash
smoke test
```

No Docker flags. No environment variables. No network configuration. The CLI would detect your environment, configure Docker automatically, set up networking, and handle all the complexity invisibly.

I started with a proof of concept. The first version was just 200 lines of TypeScript that wrapped our most common Docker commands.

**Before:**
```dockerfile
RUN npm run test:build && \
    npm run test:integration && \
    npm run test:e2e
```

**After:**
```dockerfile
RUN npm install -g @company/smoke-cli
RUN smoke test ci
```

---

## The Killer Feature

The `@isolated` notation became our killer feature:

```bash
smoke test ci @isolated
```

Smoke would:
1. Detect if the test environment was running
2. Start it if needed
3. Wait for all services to be healthy
4. Discover ports automatically
5. Configure the test environment
6. Run tests
7. Clean up afterwards

What used to be 50+ lines of bash scripts became a single command.

---

## The Philosophy

Building Smoke taught me something fundamental about developer experience: **the best tools are invisible.**

Developers shouldn't need to understand Docker networking modes, environment variable precedence, or service discovery protocols. They should just run their tests.

This drove every design decision:

**Progressive disclosure:**
```bash
# Simple case, just works
smoke test

# Need more control? Add options
smoke test --workers=4

# Need full control? Everything is configurable
smoke test --env=staging --suite=integration --timeout=600
```

**Helpful error messages:**
```bash
$ smoke test
Error: No test files found

Looks like you haven't set up tests yet. Here's how to get started:

1. Create a test file:
   mkdir -p tests && echo "test('hello', () => {})" > tests/hello.test.js

2. Or generate a test suite:
   smoke init --template=e2e

Need help? Run: smoke test --help
```

---

## The Results

Six months after launching Smoke CLI:

**Developer Experience:**
- Time to first test: 45 min to 5 min for new developers
- Test command memorization: 0% (nobody needs to memorize Docker commands)
- Support tickets: 80% reduction in test-related issues

**Engineering:**
- CI failure rate: dropped from 18% to 11%
- Test execution time: 30% faster through optimal configuration
- Flaky test detection: 60% improvement through consistent execution

**Adoption:**
- Week 1: 3 teams adopted Smoke
- Week 2: QE team standardized on it for all E2E tests
- Week 3: Platform team integrated it into deployment pipelines
- Month 1: 40% reduction in test-related CI failures

---

## What I Learned

**What worked:**
- Starting small: the MVP was just Docker command wrapping
- Dogfooding: I used Smoke for my own work first
- Documentation as marketing: great docs drove adoption

**What I'd do differently:**
- Earlier telemetry to understand usage patterns sooner
- Plugin system from day 1 (teams wanted extensibility immediately)

The most rewarding part wasn't the technical achievement. It was hearing from a junior developer: "Smoke CLI was the first thing that made me feel like I could actually contribute. I didn't need to understand everything to run tests."

---

## The Takeaway

The journey from that frustrating 2 AM Docker command to a unified testing platform taught me that the best developer tools don't add features. They remove friction. They don't showcase complexity. They hide it.

Today, across our repositories, developers just type:

```bash
smoke test
```

And it works.

---

*Questions about building developer tools or CLI design? [Reach out](/contact). I love talking about this stuff.*
