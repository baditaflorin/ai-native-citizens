# Starter Kits

v0.1 is description-only. Actual starter-kit code repositories are deferred to v0.2 so the movement can ship the playbook before pretending to have production templates. This scope decision is intentional: public draft now, tested code after the first sprint feedback.

## Next.js + Supabase Civic App

A full-stack civic prototype base with authentication optional, public submissions, moderation states, and Supabase tables. It should be useful for issue maps, project submissions, and lightweight civic directories.

## Static Landing Page

A no-build HTML/CSS starter for teams that need a public page in under 30 minutes. It should include problem, user, prototype link, source link, team credits, limits, and build-log link.

## Local Issue Reporting Map

A map-based starter for collecting and displaying civic issues by category and location. It should support manual review and export so teams do not trap reports in a demo database.

## PDF Upload + Extraction

A starter for uploading public PDFs, extracting tables or sections, flagging uncertain cells, and exporting CSV/JSON. Human correction must be part of the flow.

## Chatbot Over Public Documents

A retrieval-based assistant over a small set of public documents. It must cite sources, show uncertainty, and avoid giving legal or administrative advice beyond the documents.

## Budget Dashboard

A starter for budget CSVs or extracted tables with category search, year comparison, plain-language summaries, and source links. It should make the numbers inspectable instead of hiding them behind charts.

## FOIA Generator

A guided form that turns a user goal into a public-information request. It should include jurisdiction-specific notes, delivery checklist, and a way to save the request text.

## Simple Admin Dashboard

A tiny internal dashboard for reviewing submissions, marking status, assigning follow-up, and exporting data. It should be boring, fast, and easy to delete after the sprint.

## Project Submission Form

A starter for collecting team name, problem, user, demo link, repo link, build log, screenshots, and consent to publish. It should export a public project index.

## AI Build Log Generator

A helper that asks teams for required build-log fields and writes clean Markdown. It should preserve prompts verbatim and refuse to hide what did not work.

