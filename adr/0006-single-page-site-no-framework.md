# ADR-0006: Build the Public Site as a Single Page With No Framework

## Context

The v0.1 site needs to ship fast, load quickly, work on GitHub Pages, and remain easy to inspect in a terminal. A framework would add dependencies, build steps, and maintenance before the project has enough complexity to justify them.

## Decision

The public site is a single static page in `site/index.html` with one stylesheet in `site/styles.css`, one favicon, Google Fonts, and no external JavaScript. Smooth scrolling may be handled by CSS. The site is designed around the manifesto, kit, hosting call, identity statement, and colophon.

## Consequences

The site is cheap to host, easy to fork, and resistant to dependency churn. Performance and accessibility are easier to verify. The trade-off is that future features such as searchable challenges, build-log archives, and chapter forms will need either careful static enhancement or a later architectural decision.

## Alternatives Considered

Next.js, Astro, and Eleventy were considered. All are reasonable later, but each adds build machinery that distracts from the v0.1 proof of method.

