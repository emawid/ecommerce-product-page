# Copilot instructions (this repo)

## Project overview

- Vite + React (React 19) single-page app.
- The codebase is currently close to the default Vite React template (no custom routing/state libraries yet).

## Key files / structure

- `index.html` provides the `#root` mount point and loads `/src/main.jsx`.
- `src/main.jsx` bootstraps React via `createRoot(...).render(<StrictMode><App /></StrictMode>)`.
- `src/App.jsx` is the top-level component.
- Styling is plain CSS:
  - `src/index.css` is global/base styles imported by `src/main.jsx`.
  - `src/App.css` is component-level styles imported by `src/App.jsx`.
- Static assets live under `src/assets/` and can be imported from JS/JSX.

## Tooling and workflows

- Package manager: use the scripts in `package.json`:
  - `npm run dev` (local dev server)
  - `npm run build` (production build to `dist/`)
  - `npm run preview` (serve `dist/` locally)
  - `npm run lint` (ESLint)
- ESM project: `package.json` sets `"type": "module"`.

## Linting conventions (ESLint flat config)

- ESLint is configured via `eslint.config.js` (flat config).
- Applies to `**/*.{js,jsx}` and includes:
  - `@eslint/js` recommended rules
  - `eslint-plugin-react-hooks` recommended
  - `eslint-plugin-react-refresh` Vite rules
- Notable rule: unused vars error, but allows uppercase-prefixed ignores: `varsIgnorePattern: '^[A-Z_]'`.

## Coding style already used

- Prefer React function components and hooks (see `src/App.jsx`).
- Keep imports explicit and relative (no custom path aliases configured in Vite).

## When making changes

- Keep changes consistent with the current minimal setup: plain React + CSS, no extra framework assumptions.
- If you introduce new folders/components, keep them under `src/` and update imports accordingly.


## Project instructions
“Coach mode: user writes all code; Copilot gives step-by-step guidance + reviews.”
“Non-negotiables: mobile-first, responsive, accessibility-first, WCAG-ish keyboard behavior, React, BEM, GitHub Pages.”
“Do not introduce new libraries unless asked.”
“Prefer semantic HTML; no div/span as buttons.”
“When suggesting UI, include keyboard/focus behavior.”
