# Bhumika Chopra · Personal Website

React portfolio for my work in systems for machine learning, graduate study at Georgia Tech, and public projects. Setu is the featured contribution.

## Develop

```sh
npm ci
npm start
```

## Validate and deploy

```sh
npm run build
npm run deploy
```

Deployment publishes the production build to this repository's `gh-pages` branch. Configure GitHub Pages to serve that branch.

## Projects and content

- `src/components/portfolio/Menu.jsx`: reviewed project snapshot, with Setu first.
- `npm run sync:projects`: refresh languages and append newly described original public repositories using GitHub's API. Review additions before deployment. Requires Node 18+.
- `src/components/resume/WorkExperience.jsx`: career and education entries. Dates remain unspecified where unconfirmed; the startup stays unnamed.
- `profile/README.md`: GitHub profile README for the separate `Bhumika-Chopra/Bhumika-Chopra` repository.
- `profile/PUBLISH.md`: exact commands to publish the profile README.

## Theme

One `data-theme` attribute on the document root controls all colors. The initial theme loads before React renders, and changes share a 300 ms easing curve. Reduced-motion preferences disable transitions and decorative animation. Colors use shared tokens in `src/index.css`.

Career updates follow the supplied biography because LinkedIn blocked automated access. Public project links and descriptions were checked against the GitHub API. The existing PDF resume was not refreshed; the website links to LinkedIn instead.

Based on the original template by [Greg Sithole](https://github.com/GregSithole).
