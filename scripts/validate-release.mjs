import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, statSync } from "node:fs";
import { basename, join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const args = new Set(process.argv.slice(2));
const mode = args.has("--v01") ? "v01" : args.has("--v02") ? "v02" : "all";
const failures = [];

function fail(message) {
  failures.push(message);
}

function read(path) {
  return readFileSync(join(root, path), "utf8");
}

function json(path) {
  return JSON.parse(read(path));
}

function requireFile(path) {
  if (!existsSync(join(root, path))) fail(`Missing file: ${path}`);
}

function wordCount(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function listFiles(path) {
  return execFileSync("find", [join(root, path), "-maxdepth", "1", "-type", "f"], { encoding: "utf8" })
    .trim()
    .split("\n")
    .filter(Boolean)
    .map((file) => basename(file));
}

function validateV01() {
  [
    "README.md",
    "LICENSE",
    "CODE_OF_CONDUCT.md",
    "CONTRIBUTING.md",
    "CNAME",
    "manifesto.md",
    "docs/01-manifesto.md",
    "docs/02-organizer-playbook.md",
    "docs/03-brand-kit.md",
    "docs/04-challenge-bank.md",
    "docs/05-ai-workflow-cards.md",
    "docs/06-starter-kits.md",
    "docs/07-mentor-manual.md",
    "docs/08-judge-rubric.md",
    "docs/09-demo-day-kit.md",
    "docs/10-post-event-continuation.md",
    "site/index.html",
    "site/styles.css",
    "site/assets/favicon.svg",
    "translations/ro/manifesto.md"
  ].forEach(requireFile);

  const templates = listFiles("templates").filter((file) => file.endsWith(".md"));
  if (templates.length !== 7) fail(`Expected 7 templates, found ${templates.length}`);

  const adrs = listFiles("adr").filter((file) => file.endsWith(".md"));
  if (adrs.length !== 8) fail(`Expected 8 ADRs, found ${adrs.length}`);

  const manifest = read("manifesto.md");
  const locked = "AI-Native Citizens are humans. Citizens who refuse to be passive consumers of AI built by others.";
  if (!manifest.includes(locked)) fail("Manifesto missing locked first line");
  const manifestWords = wordCount(manifest.replace(/^# Manifesto/m, ""));
  if (manifestWords < 400 || manifestWords > 700) fail(`Manifesto word count outside 400-700: ${manifestWords}`);
  if (read("docs/01-manifesto.md") !== manifest) fail("docs/01-manifesto.md must mirror manifesto.md");
  if (read("CNAME").trim() !== "ainativecitizens.badita.org") fail("CNAME value is wrong");

  const forbidden = /\b(empower|disrupt|reimagine|unlock|leverage|ecosystem|transformative|journey|mission-driven|stakeholders)\b/i;
  for (const path of ["manifesto.md", "docs/01-manifesto.md", "site/index.html"]) {
    if (forbidden.test(read(path))) fail(`Forbidden corporate word found in ${path}`);
  }

  const siteBytes = statSync(join(root, "site/index.html")).size + statSync(join(root, "site/styles.css")).size + statSync(join(root, "site/assets/favicon.svg")).size;
  if (siteBytes > 60_000) fail(`v0.1 page weight over 60KB excluding fonts: ${siteBytes}`);
}

function validateV02() {
  [
    "package.json",
    "data/challenges.json",
    "data/workflow-cards.json",
    "data/starter-kits.json",
    "schemas/challenge.schema.json",
    "schemas/workflow-card.schema.json",
    "schemas/ai-build-log.schema.json",
    "site/challenges.html",
    "site/challenge-browser.css",
    "site/challenge-browser.js",
    "site/data/challenges.json",
    "site/data/workflow-cards.json",
    "starter-kits/static-landing-page/index.html",
    "starter-kits/foia-generator/index.html",
    "starter-kits/ai-build-log-generator/bin/generate-build-log.mjs"
  ].forEach(requireFile);

  const challenges = json("data/challenges.json");
  const workflows = json("data/workflow-cards.json");
  const starterKits = json("data/starter-kits.json");
  if (challenges.length !== 10) fail(`Expected 10 structured challenges, found ${challenges.length}`);
  if (workflows.length !== 12) fail(`Expected 12 workflow cards, found ${workflows.length}`);
  if (starterKits.length < 3) fail("Expected at least 3 starter-kit scaffolds");

  const workflowIds = new Set(workflows.map((workflow) => workflow.id));
  for (const challenge of challenges) {
    for (const workflowId of challenge.workflow_cards) {
      if (!workflowIds.has(workflowId)) fail(`${challenge.id} references missing ${workflowId}`);
    }
  }

  const siteChallenges = json("site/data/challenges.json");
  const siteWorkflows = json("site/data/workflow-cards.json");
  if (siteChallenges.length !== challenges.length) fail("Site challenge data is out of sync by count");
  if (siteWorkflows.length !== workflows.length) fail("Site workflow data is out of sync by count");

  const sampleOutput = execFileSync(
    "node",
    ["starter-kits/ai-build-log-generator/bin/generate-build-log.mjs", "starter-kits/ai-build-log-generator/examples/sample-input.json"],
    { cwd: root, encoding: "utf8" }
  );
  if (!sampleOutput.includes("## 5 Key Prompts")) fail("Build Log generator output missing prompt section");
}

if (mode === "v01" || mode === "all") validateV01();
if (mode === "v02" || mode === "all") validateV02();

if (failures.length) {
  console.error(failures.map((failure) => `- ${failure}`).join("\n"));
  process.exit(1);
}

console.log(`AI-Native Citizens validation passed (${mode}).`);

