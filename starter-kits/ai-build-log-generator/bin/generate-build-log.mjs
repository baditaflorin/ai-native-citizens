#!/usr/bin/env node
import { readFileSync } from "node:fs";

const required = [
  "project",
  "team",
  "sprint_city",
  "date",
  "problem",
  "user",
  "tools_used",
  "key_prompts",
  "what_ai_generated_well",
  "what_was_wrong_and_corrected_manually",
  "what_was_hard",
  "what_works",
  "what_does_not_work",
  "next_steps",
  "repo_link",
  "demo_link"
];

const inputPath = process.argv[2];
if (!inputPath) {
  console.error("Usage: generate-build-log.mjs <input.json>");
  process.exit(2);
}

const input = JSON.parse(readFileSync(inputPath, "utf8"));
const missing = required.filter((key) => input[key] === undefined || input[key] === "");
if (missing.length) {
  console.error(`Missing required fields: ${missing.join(", ")}`);
  process.exit(1);
}

if (!Array.isArray(input.key_prompts) || input.key_prompts.length !== 5) {
  console.error("key_prompts must contain exactly 5 prompts.");
  process.exit(1);
}

function list(items) {
  return items.map((item) => `- ${item}`).join("\n");
}

const prompts = input.key_prompts
  .map((prompt, index) => `### Prompt ${index + 1}\n\n\`\`\`text\n${prompt}\n\`\`\``)
  .join("\n\n");

process.stdout.write(`# AI Build Log

## Project

Project name: ${input.project}

Team: ${input.team}

Sprint city: ${input.sprint_city}

Date: ${input.date}

Repo / demo link: ${input.repo_link} / ${input.demo_link}

## Problem

${input.problem}

## User

${input.user}

## Tools Used

${list(input.tools_used)}

## 5 Key Prompts

${prompts}

## What AI Generated Well

${input.what_ai_generated_well}

## What Was Wrong And Corrected Manually

${input.what_was_wrong_and_corrected_manually}

## What Was Hard

${input.what_was_hard}

## What Works

${input.what_works}

## What Does Not Work

${input.what_does_not_work}

## Next Steps

${input.next_steps}

## Repo / Demo Link

Repo: ${input.repo_link}

Demo: ${input.demo_link}
`);

