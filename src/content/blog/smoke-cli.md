---
title: "Building the Smoke CLI: From QA Automation to SWE"
date: "2025-06-15"
description: "How building a testing CLI marked my transition from QA automation engineer to software engineer, and why that background became my superpower."
tags: ["Developer Experience", "CLI", "Testing", "Career"]
---

## My QA Automation Roots

Before becoming a SWE 3 on the DevEx team at Weedmaps, I was part of the QA automation team. I knew those bash scripts intimately because I helped write and maintain them. Scripts like `run-playwright-acceptance.sh` weren't mysterious to me. They were my daily tools:

```bash
if [ $# -eq 0 ]; then
  echo "No tags provided. Running all tests."
  TAGS=""
else
  IFS="|"
  TAGS="$*"
fi

PLAYWRIGHT_CMD=(./node_modules/.bin/playwright test /playwright/tests)
if [ -n "$TAGS" ]; then
  PLAYWRIGHT_CMD+=(--grep "$TAGS")
fi
```

I understood the complexity because I had created it. Every grep, every pipe, every environment variable made sense in the context of QA automation. But I also saw the problem: this knowledge was siloed within our team.

---

## The Transition

As the organization evolved and I moved into a SWE 3 role on the DevEx team, I carried a unique perspective: I understood both worlds. I knew the intricacies of test automation, but I was also starting to see the bigger picture of developer experience.

The QA automation team was downsizing, and I watched developers struggle with the tools we had built. They were copying commands from Slack, asking the same questions repeatedly, and often just pushing code to "see if CI passes."

I realized I could be the bridge between these worlds.

---

## The Shift in Mindset

Building Smoke CLI became my transitional project. The challenge was clear:

**As QA**: I had built complex, powerful test automation
**As SWE**: I needed to build simple, accessible developer tools

Instead of asking "How do I make this test suite comprehensive?" I was now asking "How do I make this test suite runnable by anyone?"

---

## Drawing from Both Skillsets

I knew exactly what patterns developers struggled with because I had implemented them:

```yaml
# The old Codefresh commands I maintained as QA
commands:
  - TESTS_FAILED=$(scripts/run-playwright-acceptance.sh @pr @regression | grep "TESTS_FAILED=" | cut -d '=' -f 2)
  - echo "Exporting TESTS_FAILED=$TESTS_FAILED"
  - cf_export TESTS_FAILED=$TESTS_FAILED
```

With my SWE hat on, I reimagined it:

```yaml
# The new approach
commands:
  - TESTS_FAILED=false
  - smoke test cron || TESTS_FAILED=true
```

The difference wasn't just syntactic. It represented a fundamental shift in how I approached tool building.

---

## Key Design Decisions

**The "Cron" Pattern**

As QA, I knew we always ran `@pr` and `@regression` tags together in scheduled jobs. As SWE, I abstracted this:

```typescript
const isCron = rawArgs.includes("cron");
if (isCron && tagArgs.length === 0) {
  tagArgs = ["@pr", "@regression"];
}
```

**Tag System Simplification**

My QA background taught me how developers actually wanted to filter tests. My SWE role let me implement it cleanly:

```bash
smoke test @auth          # Just works
smoke test local @orders  # Environment + tags
smoke test cron           # Automatic tag expansion
```

---

## What I Learned

**Technical growth:**
- From Bash to TypeScript: moved from scripting to proper software development
- From scripts to CLI: learned to build distributable npm packages
- From procedural to modular: created reusable, testable components

**Mindset evolution:**
- QA mindset: "How do we test everything?"
- SWE mindset: "How do we make testing accessible?"
- DevEx mindset: "How do we remove friction from development?"

---

## The Impact

**For the org:**
- My QA expertise didn't leave with the QA team. It was encoded into tools
- No testing capability was lost despite team restructuring
- 50+ developers could now run tests independently

**For me:**
- Proved I could build developer tools, not just test scripts
- Demonstrated unique value as someone who understood both QA and development
- Solidified my position as SWE 3

---

## QA Experience as a Superpower

My journey taught me that QA experience is invaluable for DevEx engineering. Who better to build developer tools than someone who has seen where developers struggle? Who better to simplify testing than someone who built the complex version?

The Smoke CLI succeeded because it was built by someone who knew the pain points from personal experience, understood the technical requirements deeply, and could bridge the gap between QA complexity and developer simplicity.

---

## The Code That Tells My Story

This function encapsulates my entire transition:

```typescript
export async function test(argv: any) {
  // My QA knowledge: I know how tags work
  let tagArgs = rawArgs.filter((arg: string) => arg.startsWith("@"));

  // My QA knowledge: I know about our cron patterns
  const isCron = rawArgs.includes("cron");
  if (isCron) {
    tagArgs = ["@pr", "@regression"];
  }

  // My SWE growth: Clean abstraction
  validateEnv();
  const pwArgs = buildArgs(passThroughFlags, hasUserDefinedProject);

  // My DevEx focus: Make it just work
  runPlaywright(pwArgs, env);
}
```

It's not just code. It's my career transition in 30 lines.

---

## The Bottom Line

Smoke CLI wasn't just a tool I built. It was my bridge from QA to SWE. It proved that QA automation experience is valuable in software engineering roles, that understanding both perspectives creates better tools, and that career transitions can create unique value.

Today, when developers run `smoke test`, they're using a tool built by someone who lived in both worlds.

---

*Questions about career transitions or building developer tools? [Reach out](/contact). Happy to chat about it.*
