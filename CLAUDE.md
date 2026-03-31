# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## About

Personal portfolio website and blog for Alex Titarenko, built with Next.js (Pages Router) and deployed as a static export to GitHub Pages.

## Commands

- `npm run dev` — Start dev server (Turbopack)
- `npm run build` — Production build (static export to `/out`)
- `npm run lint` — ESLint via Next.js (extends `next/core-web-vitals` and `next/typescript`)

No test framework is configured.

## Architecture

- **Next.js 15 with Pages Router** — static export (`output: 'export'` in `next.config.ts`), no API routes
- **React 19 + TypeScript** (strict mode)
- **Styling**: React-JSS for component-scoped styles + global CSS (`styles/site.css`) with CSS variables for light/dark themes
- **Blog system**: Markdown files in `data/posts/` with YAML frontmatter, parsed via `gray-matter` and rendered with `react-markdown`. Posts use `<!--more-->` as excerpt marker.
- **Data layer**: `repositories/BlogRepository.ts` singleton with lazy loading — reads posts from filesystem at build time via `getStaticProps`/`getStaticPaths`
- **Post attachments**: Webpack CopyPlugin copies `data/posts/**/.attachments/*` into `public/posts/.attachments/` at build time
- **Site config**: `app.config.json` holds brand name, social links, analytics ID, and canonical URL

## Key Conventions

### JSX Text Content Escaping

Always escape special characters in JSX text content to avoid `react/no-unescaped-entities` lint errors:
- Apostrophes: `&apos;` instead of `'`
- Double quotes: `&quot;` instead of `"`
- Greater than: `&gt;` instead of `>`
- Left curly brace: `{'{}'}` instead of `{`

### Imports

TypeScript `baseUrl` is set to `.`, so imports use absolute paths from project root (e.g., `import Layout from 'components/Layout'`).
