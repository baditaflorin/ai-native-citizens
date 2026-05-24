# ADR-0007: Deploy With GitHub Pages on ainativecitizens.badita.org

## Context

The movement needs a public URL that is stable, cheap, and close to the repository. The v0.1 site is static and has no backend requirement. The owner controls the `badita.org` domain and the GitHub repository.

## Decision

Deploy the site through GitHub Pages from the `site/` directory on the `main` branch. Use `ainativecitizens.badita.org` as the custom domain. The repository includes a root `CNAME` file with that domain, and Pages is configured to use HTTPS once DNS resolves.

## Consequences

The site can be updated through ordinary commits. Releases, docs, and source stay in one public place. GitHub provides HTTPS automatically after DNS propagation. The main operational dependency is correct DNS: `ainativecitizens` must point to `baditaflorin.github.io`.

## Alternatives Considered

A VPS or Docker host would work but adds server maintenance. Netlify and Vercel were rejected for v0.1 because GitHub Pages is enough and does not add another platform.

