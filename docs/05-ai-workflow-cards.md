# AI Workflow Cards

These cards are scored as part of the AI-native build process. Teams should use them, adapt them, and cite the relevant card IDs in their build logs.

## WF-01: Turn a Complaint Into a Product Brief

What it does: Converts a raw complaint into a focused user, problem, scope, and demo target.

When to use it: At sprint start, before choosing features.

Tools that work: ChatGPT, Claude, Gemini, local LLMs.

Prompt skeleton: "Turn this civic complaint into a product brief. Include user, problem, stakes, 48h MVP, non-goals, risks, and demo scenario. Complaint: [text]."

Common failure modes: Makes the problem too broad, invents users, hides political constraints.

How to verify: Ask a real person with the problem whether the brief feels true.

## WF-02: Generate User Flows From a Brief

What it does: Produces step-by-step flows for the main user path.

When to use it: After the brief, before wireframes or code.

Tools that work: ChatGPT, Claude, FigJam AI, Miro AI.

Prompt skeleton: "From this brief, produce 3 user flows: first-time user, returning user, and failure path. Keep each to 6 steps. Brief: [text]."

Common failure modes: Skips error states, assumes login, adds unnecessary dashboards.

How to verify: Walk through the flow with a timer and a non-team participant.

## WF-03: Critique Your Own Idea

What it does: Red-teams the concept before the team falls in love with it.

When to use it: Before committing to the MVP and again before demo.

Tools that work: ChatGPT, Claude, Gemini.

Prompt skeleton: "Act as a skeptical civic technologist. Find the top 10 ways this prototype could fail, mislead users, exclude people, or waste public attention. Then rank the risks by severity."

Common failure modes: Produces generic concerns, misses local politics, sounds moralistic.

How to verify: Convert at least 3 risks into concrete changes or disclaimers.

## WF-04: Build a Prototype With Lovable, v0, or Bolt

What it does: Turns a scoped brief and flow into a fast interface prototype.

When to use it: When the team needs a working clickable or coded surface quickly.

Tools that work: Lovable, v0, Bolt, Replit Agent.

Prompt skeleton: "Build a single-page prototype for [user] to [task]. Use these sections, states, and constraints. Avoid auth. Use accessible HTML. Include sample civic data only."

Common failure modes: Adds fake SaaS polish, invents integrations, hides errors.

How to verify: Run the prototype locally, click every path, and replace fake claims with labels.

## WF-05: Debug With Cursor or Claude Code

What it does: Uses an AI coding agent to inspect, patch, and test a bug.

When to use it: When the prototype breaks or behavior does not match the demo script.

Tools that work: Cursor, Claude Code, Codex, GitHub Copilot.

Prompt skeleton: "Read the repo, identify why [bug] happens, make the smallest fix, and run the relevant test or manual verification. Do not refactor unrelated code."

Common failure modes: Large refactors, dependency churn, hidden behavior changes.

How to verify: Review the diff, rerun the broken flow, and write the fix in the build log.

## WF-06: PDFs to Structured Data

What it does: Extracts tables, entities, or sections from public PDFs.

When to use it: For budgets, decisions, procurement documents, reports, and annexes.

Tools that work: GPT-4.1/5-class vision, Claude, Gemini, Tabula, OCR tools.

Prompt skeleton: "Extract this PDF section into CSV with these columns: [columns]. Mark uncertain cells with NEEDS_REVIEW. Do not guess missing values."

Common failure modes: Hallucinates rows, drops footnotes, merges columns, loses units.

How to verify: Sample 10 rows against the original PDF and record corrections.

## WF-07: Landing Page in 30 Minutes

What it does: Produces a simple public page for the project.

When to use it: After the prototype has a name, user, and demo.

Tools that work: v0, Bolt, Cursor, Codex, static HTML.

Prompt skeleton: "Create a static landing page for this civic prototype. Include problem, user, demo link, source link, limits, and team credits. No analytics or trackers."

Common failure modes: Marketing fluff, fake metrics, inaccessible contrast.

How to verify: Open on mobile width, check links, and run an accessibility pass.

## WF-08: Prepare a 5-Minute Demo

What it does: Creates a tight demo script with one live path.

When to use it: Before finalist selection and public pitch.

Tools that work: ChatGPT, Claude, Gemini.

Prompt skeleton: "Write a 5-minute demo script for this prototype. Include problem, user, live path, what works, what does not, and next ask. No hype."

Common failure modes: Too much backstory, no live interaction, hides limitations.

How to verify: Rehearse once with a timer and cut 30 percent.

## WF-09: Documentation Pass

What it does: Turns rough notes into a readable README or build log.

When to use it: Before submission.

Tools that work: ChatGPT, Claude, Codex.

Prompt skeleton: "Clean this build log without changing facts. Keep uncertainty visible. Preserve prompt excerpts exactly. Output Markdown."

Common failure modes: Smooths over failure, changes prompt text, invents next steps.

How to verify: Compare against raw notes and confirm all failures remain visible.

## WF-10: Hallucination Check

What it does: Finds unsupported claims, invented citations, and overconfident summaries.

When to use it: Before demo, especially for law, money, health, education, or procurement.

Tools that work: ChatGPT, Claude, Gemini, manual source review.

Prompt skeleton: "List every factual claim in this answer. For each, mark whether it is directly supported by the provided sources. Flag unsupported claims."

Common failure modes: Treats plausible claims as true, misses date changes, accepts broken links.

How to verify: Click sources, compare text, and mark unsupported claims in the UI.

## WF-11: Non-Technical User Testing Simulation

What it does: Simulates confusion from a realistic non-technical user.

When to use it: After a working flow exists.

Tools that work: ChatGPT, Claude, Gemini.

Prompt skeleton: "Pretend you are [specific user]. Try to use this flow from screenshots/text. Where do you get confused? What words do you not understand?"

Common failure modes: Too polite, misses local language, assumes digital confidence.

How to verify: Test with one real person if possible.

## WF-12: Ship-Ready Accessibility Pass

What it does: Checks structure, labels, keyboard paths, contrast, and plain-language errors.

When to use it: Before demo and before publishing.

Tools that work: Browser DevTools, Lighthouse, axe, ChatGPT for checklist review.

Prompt skeleton: "Review this HTML/CSS for accessibility issues. Focus on semantics, labels, focus, contrast, keyboard navigation, and mobile readability."

Common failure modes: Only checks color, ignores focus, ignores error messages.

How to verify: Use keyboard only, run Lighthouse, and fix visible blockers.

