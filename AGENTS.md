# AGENTS.md

Instructions for AI coding agents working in this repository.

## Project

Bilingual (EN/CS/DE) single-page portfolio site. React 18 + TypeScript, built with Vite, tested with Vitest.

## Setup & Commands

```bash
pnpm install        # install dependencies (Node >=22, see .nvmrc)
pnpm dev            # start Vite dev server
pnpm build          # type-check (tsc -b) then production build to dist/
pnpm preview        # preview the production build
pnpm test           # run the Vitest suite
```

## Architecture

- Single page, no router. `src/App.tsx` renders all sections (`Home`, `About`, `Projects`, `Contact`) in order inside one scroll container; navigation is anchor/hash-based (`#home`, `#about`, ...).
- `src/main.tsx` is the entry point: mounts `App` and imports `src/i18n/config.ts` once for side effects.
- `src/pages/` — one component per section, matched by `id` to its nav anchor.
- `src/components/` — `TopBar`, `Navigation` (desktop bar + mobile hamburger overlay), `LanguageSelector`.
- `src/data/projectsData.ts` — typed project list (`src/types/project.ts`) consumed by `Projects.tsx`; each entry references an image from `src/assets/projects/` and a translation key rather than inline text.
- `src/styles/` — one CSS file per page/component, plus `index.css` for global resets and `App.css` for layout.

## Internationalization

- i18next + react-i18next, configured in `src/i18n/config.ts`. Languages: `en` (default/fallback), `cs`, `de`.
- Translation strings live in `src/i18n/{en,cs,de}.json` as parallel hierarchical keys (e.g. `navigation.home`, `projects.itSchool`).
- When adding or changing copy, update all three JSON files with matching keys — never hardcode user-facing text in a component.
- For any non-trivial translation (more than a short label), consult the repo owner before writing the change to make sure the tone is right.

## Conventions

- Components are function components with hooks; no class components.
- New sections/pages get `id="<section>"` for anchor navigation and should read strings via `useTranslation()`, not literals.
- Keep styling colocated: a new component/page gets its own file in `src/styles/`.
- Commit messages use [gitmoji](https://gitmoji.dev/) (e.g. `📝 Add file map`), subject line only, no body.
- Documentation (README, AGENTS.md, comments) should be concise — favor short bullets over prose, and avoid restating what's already obvious from the code.

## Testing

- Vitest + React Testing Library + jsdom (`vite.config.ts`, setup in `src/test/setup.ts`).
- Test files live under `src/test/`.
- Run `pnpm test` before committing changes to components or app logic.

## Reference

See [FILE_MAP.md](./FILE_MAP.md) for a full annotated directory listing.
