---
title: "Migrating from Codefresh to GitHub Actions with Claude Code"
date: "2024-11-26"
description: "How I used Claude Code to accelerate our CI/CD migration from Codefresh indicator pipelines to GitHub Actions, and what I learned along the way."
tags: ["CI/CD", "GitHub Actions", "Claude Code", "DevOps"]
---

## The Challenge

At Weedmaps, we had been running our indicator pipelines on Codefresh for years. They worked, but maintaining them had become increasingly painful. The YAML was sprawling, debugging was a nightmare, and onboarding new team members meant hours of explaining tribal knowledge.

When the decision came down to migrate to GitHub Actions, I saw an opportunity to not just port the pipelines, but to rethink how we approach CI/CD entirely.

## Enter Claude Code

I'd been experimenting with Claude Code for smaller tasks - writing tests, debugging edge cases, explaining unfamiliar codebases. But this migration was different. This was a project that would normally take weeks of careful work.

Here's what I learned using Claude Code as my pair programmer for this migration.

## What Worked Well

### Understanding the Existing System

The first thing I did was point Claude Code at our existing Codefresh pipelines and ask it to explain what they were doing. Within minutes, I had a clear breakdown of:

- The build stages and their dependencies
- Environment variables and secrets being used
- The actual flow of data between steps
- Edge cases and error handling patterns

This would have taken me hours to piece together manually, especially for pipelines I hadn't touched in months.

### Translating Concepts

Codefresh and GitHub Actions have different mental models. Codefresh uses steps and stages, GitHub Actions uses jobs and steps. The naming is similar but the semantics differ.

Claude Code helped me map concepts between the two:

```yaml
# Codefresh style
steps:
  build:
    image: node:18
    commands:
      - npm ci
      - npm run build

# GitHub Actions equivalent
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
```

### Catching Edge Cases

The QA engineer in me was worried about edge cases. What happens when a step fails? How do we handle timeouts? What about conditional execution?

Claude Code helped me think through these scenarios systematically, suggesting patterns I wouldn't have thought of:

- Using `continue-on-error` for non-critical steps
- Setting up proper timeout limits
- Implementing retry logic for flaky integration tests
- Caching strategies to speed up builds

## What I Had to Guide

### Business Context

Claude Code doesn't know our specific deployment requirements, compliance needs, or team preferences. I had to provide context about:

- Which environments we deploy to and in what order
- Our approval workflows and who needs to sign off
- Secrets management and how we handle sensitive data
- Team conventions and naming standards

### Verification

Every generated workflow needed testing. Claude Code can write syntactically correct YAML, but it can't know if the workflow actually does what we need without running it. I set up a test repository to validate each workflow before moving to production.

## The Results

What would have been a 3-4 week project turned into about a week of focused work. More importantly:

- **Documentation improved**: Claude Code helped me write clear comments explaining each step
- **Consistency increased**: All our workflows now follow the same patterns
- **Onboarding got easier**: New team members can understand the pipelines faster

## Lessons Learned

1. **Start with understanding**: Before writing any code, use Claude Code to understand the existing system thoroughly
2. **Provide context**: The more business context you give, the better the suggestions
3. **Verify everything**: AI-generated code is a starting point, not a finished product
4. **Iterate quickly**: Use Claude Code to explore multiple approaches before committing to one

## What's Next

We're now looking at using similar patterns for other infrastructure migrations. The combination of deep system understanding and rapid prototyping that Claude Code enables has changed how I approach these projects.

---

*Have questions about the migration or want to share your own experience? [Reach out](/contact) - I'd love to hear from you.*
