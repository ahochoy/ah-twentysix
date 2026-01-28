# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development commands

All commands are run from the repository root.

- Start the development server (recommended): `pnpm dev`
- Build for production: `pnpm build`
- Start the production server (after a build): `pnpm start`
- Run linting: `pnpm lint`

Notes:
- The repo is configured as a `pnpm` workspace via `pnpm-workspace.yaml`; prefer `pnpm` over other package managers.
- There is currently **no test runner configured** (no `test` script in `package.json`), so there is no canonical command for running all tests or a single test yet.

## Project architecture

### Framework and entrypoints

- This is a **Next.js App Router** project living at the workspace root.
- Primary entrypoints:
  - `app/layout.tsx`: global HTML shell and metadata.
    - Loads Geist and Geist Mono via `next/font/google` and exposes them as CSS variables used across the app.
    - Wraps all routes in a minimal `<html>`/`<body>` structure with font variables applied.
  - `app/page.tsx`: the root (`/`) route.
    - Uses `next/image` and Tailwind-style utility classes to render the default landing page.
    - This is the main place to start when changing the UI; hot reload will update the page as you edit this file.

### Styling and theming

- Global styles live in `app/globals.css`:
  - Imports Tailwind v4 via `@import "tailwindcss";` and configures an inline `@theme` block.
  - Defines light/dark background and foreground color CSS variables and maps them to Tailwind theme tokens.
  - Sets the default body background, text color, and font-family.
- Tailwind is wired through PostCSS via `postcss.config.mjs`, which enables the `@tailwindcss/postcss` plugin.
- Static assets (e.g., SVGs used on the landing page) are stored under `public/` and are served by Next at the same path.

### TypeScript and module resolution

- TypeScript configuration is defined in `tsconfig.json`:
  - `strict` mode is enabled and `noEmit` is true (type-check only).
  - Uses `moduleResolution: "bundler"` with `jsx: "react-jsx"`, aligning with modern Next.js/React setups.
  - Defines a path alias `@/*` that maps to the repo root (`./*`), which you can use for future shared modules (e.g., `@/lib/foo`).

### Linting

- Linting is configured via the flat config `eslint.config.mjs`:
  - Extends `eslint-config-next` core web vitals and TypeScript presets.
  - Overrides default ignore patterns via `globalIgnores`, explicitly ignoring build artifacts like `.next/**`, `out/**`, and `build/**`, plus `next-env.d.ts`.
- Run `pnpm lint` from the repo root to lint the project using this configuration.

## Additional notes for agents

- There is currently a single Next.js app in this workspace; no additional packages or apps are defined beyond the root in `pnpm-workspace.yaml`.
- When adding new routes or features, follow the Next.js App Router conventions under `app/` (e.g., nested `page.tsx` files for routes, optional layouts, etc.).
- If you introduce testing, document the chosen test runner and commands here (including how to run a single test) so future Warp agents can invoke them correctly.
