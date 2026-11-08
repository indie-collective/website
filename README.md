<a name="readme-top"></a>

<div align="center">
  <a href="https://indieco.xyz">
    <img src="img/logos/logo.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Indie Collective</h3>

  <p align="center">
    French indie game collective based in Rennes, France.
    <br />
    <a href="https://indieco.xyz"><strong>indieco.xyz</strong></a>
    <br />
    <br />
    <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/IndieColle?style=social">
    <img alt="Discord" src="https://img.shields.io/discord/84687138729259008?label=discord">
  </p>
</div>

## Working on the site

The site is a static [Astro](https://astro.build) site, deployed to GitHub Pages. It needs Node 24 (see `.nvmrc`).

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # into dist/
```

### Where things are

- `src/i18n/`: the interface text, one file per language. French (`fr.ts`) is the source: anything missing from `en.ts` or `br.ts` shows in French. `npm run i18n:missing` lists what Breton still lacks.
- `src/data/`: the jams and Stunfest (`jams.ts`), the podcast, the team and links. Long texts carry their own translations, with French as the fallback.
- `src/components/`: one component per section of the page.
- `src/styles/tokens.css`: colours, type and radii, shared with [Community](https://community.indieco.xyz) (`app/theme.js` in indie-collective/community). Change both together.
- `src/assets/`: photos, resized by Astro at build time. `public/`: files served as-is (logos, documents' icons, `CNAME`).

### The agenda comes from Community

Upcoming events are read at build time from the association's calendar on Community, `https://community.indieco.xyz/org/indie-collective/calendar.ics`. To add an event to the site, add it to Community with Indie Collective as organiser. The site is rebuilt every morning, or on demand from the Actions tab.

Each jam's and Stunfest's past editions (`editions` in `src/data/jams.ts`) link to their pages on Community; add the new one each year. A jam's next edition, and the next Stunfest, show by themselves once Community lists them.

The podcast's latest episodes are read at build time from its RSS feed.

### Member counts come from HelloAsso

The "Adhérez à l'asso" section shows how many people joined this calendar year, and how many have joined since the first membership. They're counted at build time from the HelloAsso API (`src/lib/helloasso.ts`), as distinct people among the memberships paid through the membership form; only the two numbers reach the page.

This needs a HelloAsso API client with access to transactions: create one in the HelloAsso back office, then add its ID and secret as the repository secrets `HELLOASSO_CLIENT_ID` and `HELLOASSO_CLIENT_SECRET` (Settings → Secrets and variables → Actions). Locally, copy `.env.example` to `.env` and fill them in. Without them, or if HelloAsso doesn't answer, the counts are simply not shown.

### Deploying

Every push to `master` builds and deploys the site through GitHub Actions (`.github/workflows/deploy.yml`), to GitHub Pages, whose source is set to **GitHub Actions**. The site is also rebuilt every morning, and can be rebuilt by hand from the Actions tab.
