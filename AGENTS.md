# Repository Guidelines

## Project Type

Nuxt 3 application (compatibility version 4) with TypeScript strict mode.

## Commands

- `pnpm dev` - Dev server (port 5679, not default 3000)
- `pnpm dev:pwa` - Dev server with PWA support
- `pnpm build` - Production build
- `pnpm test` - Run Vitest
- `pnpm lint` / `pnpm lint:fix` - ESLint
- `pnpm type:check` - Nuxt typecheck
- `pnpm cz` - Interactive commit (czg with commitlint)
- `pnpm commit` - Pull, add all, commit, push
- `pnpm release` - Pull main + build

## Pre-commit Hook

Runs automatically: `pnpm lint-staged && pnpm type:check`. Lint-staged runs `pnpm lint:fix` on staged .js/.jsx/.ts/.tsx files.

## Package Manager

pnpm only (enforced via `preinstall` script). Uses `shamefully-hoist=true`.

## Code Style

- ESLint with `@antfu/eslint-config` (includes UnoCSS and formatters plugins)
- Vue components must use PascalCase in templates (`vue/component-name-in-template-casing`)
- TypeScript: prefer `type` for type definitions (`ts/consistent-type-definitions`)

## Directory Structure

- `app/` - Client-side code (pages, components, composables, layouts, stores, plugins, utils)
- `server/api/` - Nitro server API routes
- `config/` - PWA and app config
- `.agents/skills/` - Nuxt/Vue skill references

## Key Stack

- UnoCSS (Wind3 preset + attributify + icons + typography + webfonts)
- Nuxt UI v4 (theme prefix: `tw`)
- Pinia with persisted state
- VueUse
- i18n (default: zh-CN)
- Naive UI (via nuxtjs-naive-ui)
- Notivue for notifications
- PWA via @vite-pwa/nuxt

## Conventions

- Pages: `02_about.vue` prefix pattern for ordering
- Server API: simple `defineEventHandler` functions
- Composables: `use*` naming convention
- Stores: Pinia with persisted state plugin
- CSS: Global styles in `~/assets/style/index.css`

## TypeScript

- Strict mode enabled
- Path aliases: `~/` for app directory
- Auto-imports enabled (no explicit imports needed for Vue/Nuxt APIs)
