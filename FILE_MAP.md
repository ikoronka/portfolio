# File Map

Annotated directory listing for agentic tooling. See [AGENTS.md](./AGENTS.md) for architecture and conventions.

```
.
├── index.html                  # Vite entry HTML, mounts #root
├── vite.config.ts              # Vite + Vitest config (jsdom, plugin-react)
├── tsconfig.json               # TS project references root
├── tsconfig.app.json           # TS config for app source (src/)
├── tsconfig.node.json          # TS config for Vite/tooling files
├── netlify.toml                # Netlify build config (npm run build -> dist)
├── .nvmrc                      # pinned Node version (22)
│
├── public/                     # static assets copied as-is to dist/
│   ├── favicon.png
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt / sitemap.xml
│
└── src/
    ├── main.tsx                 # app entry point: renders <App/>, imports i18n config
    ├── App.tsx                  # root component, renders all sections in order
    │
    ├── pages/                   # one component per full-page section
    │   ├── Home.tsx              # intro + animated text (react-typed)
    │   ├── About.tsx             # profile/skills section
    │   ├── Projects.tsx          # renders src/data/projectsData.ts
    │   └── Contact.tsx           # contact section
    │
    ├── components/
    │   ├── TopBar.tsx            # fixed header (logo + language selector)
    │   ├── Navigation.tsx        # desktop bottom nav + mobile hamburger overlay
    │   └── LanguageSelector.tsx  # i18n language switcher
    │
    ├── data/
    │   └── projectsData.ts       # typed list of portfolio projects (Project[])
    │
    ├── types/
    │   └── project.ts            # Project interface used by data + Projects page
    │
    ├── i18n/
    │   ├── config.ts             # i18next + react-i18next setup (en/cs/de)
    │   ├── en.json                # English strings
    │   ├── cs.json                # Czech strings
    │   └── de.json                # German strings
    │
    ├── styles/                   # one CSS file per page/component
    │   ├── index.css             # global resets, .fullPage layout
    │   ├── App.css                # app-level layout
    │   ├── Navigation.css
    │   ├── About.css
    │   └── Contact.css
    │
    ├── assets/
    │   ├── profilePic.png
    │   ├── ikoronka.svg
    │   └── projects/             # images referenced by projectsData.ts
    │       ├── crm.png
    │       ├── figma.png
    │       ├── hackathon.png
    │       ├── javafx.png
    │       └── ziz.png
    │
    └── test/
        ├── setup.ts               # Vitest setup (jest-dom matchers)
        └── App.test.tsx           # smoke test for App
```
