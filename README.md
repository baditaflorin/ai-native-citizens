# AI-Native Citizens

AI-Native Citizens is a public movement for local civic AI build sprints. The kit gives cities the playbook, challenge templates, AI workflow cards, judging rubric, mentor guidance, build-log format, and public demo structure needed to turn real public problems into working prototypes fast, openly, and responsibly.

Site: https://ainativecitizens.badita.org  
Repo: https://github.com/baditaflorin/ai-native-citizens  
Release ZIP: https://github.com/baditaflorin/ai-native-citizens/archive/refs/tags/v0.1.0.zip

## What This Is

People do not learn AI from keynotes. They learn AI by building something useful for their community.

AI-Native Citizens treats civic AI literacy as a practical skill: research a public problem, frame it clearly, prototype a tool, test it with users, publish the build log, and show the work in public. The work is local. The archive is global.

## v0.1.0 Includes

- Manifesto in English and Romanian
- 10-section Civic AI Sprint kit in `docs/`
- 7 reusable templates in `templates/`
- 8 architectural decision records in `adr/`
- Single-page static landing site in `site/`
- Mandatory AI Build Log template

## v0.2 First Pass on Main

The `main` branch also carries the first v0.2 pass: structured challenge/workflow data, JSON schemas, a static challenge browser, validation scripts, and three starter-kit scaffolds. The official public release remains `v0.1.0`; the v0.2 work is intentionally marked alpha until tested in a real sprint.

## Repository Map

```text
ai-native-citizens/
├── README.md
├── LICENSE
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── CNAME
├── manifesto.md
├── docs/
├── templates/
├── adr/
├── data/
├── schemas/
├── scripts/
├── starter-kits/
├── site/
└── translations/
```

## The Method

The Civic AI Sprint is a 48-72 hour local build sprint around real civic problems. Teams use AI across research, problem framing, UX, coding, testing, documentation, and demo preparation. The final output is not only the prototype. The output is also the build log: prompts used, errors corrected by humans, verification steps, and what still does not work.

After 20 events, those build logs become a global archive of how people actually build civic technology with AI.

## Local Chapter Model

### Tier 1: Community Edition

Anyone can use the kit. Conditions: use the name "AI-Native Citizens community edition", use the global rubric, publish projects, respect the code of conduct, and make no production-software promises.

### Tier 2: Official Local Sprint

Approved by the central steward team. Adds verified local lead, at least 3 mentors, at least 5 challenges, public demo, published build logs, final report, and correct brand usage.

### Tier 3: Certified City Partner

For municipalities, universities, and large civic organizations. Adds organizer training, custom challenge design support, sponsor deck support, optional international facilitator, global site listing, and eligibility for the AI Natives Summit showcase.

## Governance Shape

The central steward team maintains the playbook, approves official chapters, runs the global site, collects projects, publishes impact reports, runs partnerships, maintains the challenge bank, and organizes the annual AI Natives Summit.

Local leads run the ground game: venue, participants, mentors, local administration, demo day, published projects, and follow-up.

The global community is planned for v0.2+: Discord or Matrix, organizer calls, office hours, shared calendar, mentor pool, and Summit infrastructure.

## Financial Model

Free: playbook, templates, challenge bank, starter-kit specs, rubric, and build-log template.

Paid support: organizer training, custom challenge design, city proposal, sponsor deck, mentor recruitment, facilitation, post-event report, and global showcase eligibility.

Sponsor revenue: AI tools and compute credits, prize pool, global showcase, challenge categories, micro-grants, translation funding, and fellowships.

Municipality or university revenue: local sprint facilitation, challenge design, public demo, impact report, and continuation program.

## v0.2+ Roadmap

- Actual starter-kit code repositories split out from the v0.2 scaffold
- Logo SVG beyond typographic wordmark
- Multi-language site
- Discord or Matrix infrastructure
- Newsletter
- Build-log UI
- Sponsor portal
- Local chapter application form
- Annual Summit branding

## Validation

Run the repository gate from the root:

```bash
npm test
```

The test script checks required v0.1 files, manifesto guardrails, structured v0.2 data, starter-kit scaffolds, and the AI Build Log generator sample.

## License

Documentation is licensed under Creative Commons Attribution 4.0. Code is licensed under MIT. The AI-Native Citizens name and brand are trademark-controlled; open use of the kit does not grant permission to misrepresent unofficial activity as an official sprint.

See `LICENSE` for the combined license notice.
