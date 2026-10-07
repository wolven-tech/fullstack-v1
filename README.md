<div align="center">

# fullstack-v1

**Production-ready full-stack SaaS monorepo starter with Next.js and ElysiaJS.**<br>
Complete stack with Supabase, TanStack Query, Resend, Trigger.dev, and integrated monitoring for building enterprise SaaS products.

[![CI](https://github.com/wolven-tech/fullstack-v1/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/wolven-tech/fullstack-v1/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue)](LICENSE.md)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5+-3178c6?logo=typescript&logoColor=white)](#)
[![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=nextdotjs&logoColor=white)](#)
[![Bun](https://img.shields.io/badge/Bun-1.1.26+-f0db4f?logo=bun&logoColor=black)](#)

[![Built with TypeScript, React, Next.js, and ElysiaJS](https://skillicons.dev/icons?i=typescript,react,nextjs,bun)](https://skillicons.dev)

[Docs](docs/README.md) · [Getting Started](docs/guides/GETTING_STARTED.md) · [Architecture](docs/current/ARCHITECTURE.md) · [Install](#install)

</div>

---

A full-stack SaaS template providing everything needed to launch a production application: authentication, database, email delivery, analytics, background jobs, error monitoring, and rate limiting. Built on Next.js for the product UI and marketing site, ElysiaJS for the API, Supabase for data, and Turborepo to manage the monorepo.

This is an evolution of the [Midday V1](https://github.com/midday-ai/v1) starter kit, enhanced with TanStack Query for server state management and additional full-stack infrastructure.

| | |
|---|---|
| **Frontend** | Next.js 15 with React 19, TypeScript, Tailwind CSS, Shadcn UI components |
| **Backend** | ElysiaJS API server running on Bun, PostgreSQL via Supabase |
| **State** | TanStack Query for server state, Redux DevTools integration, type-safe search params (nuqs) |
| **Auth** | Supabase Auth with Google OAuth, row-level security (RLS) |
| **Email** | React Email templates, Resend for transactional delivery |
| **Jobs** | Trigger.dev for background jobs, async task processing |
| **Monitoring** | Sentry for errors, PostHog for product analytics and feature flags |
| **Testing** | Playwright end-to-end tests, TypeScript type checking with Biome |

## Install

```sh
bunx degit wolven-tech/fullstack-v1 my-saas-app       # Scaffold from template
cd my-saas-app
bun install                                            # Install dependencies
bun run setup                                           # Set up environment and services
```

For manual setup or existing projects, see [Getting Started Guide](docs/guides/GETTING_STARTED.md).

## What it does

| | |
|---|---|
| **Scaffold SaaS project** | `bunx degit` clones the template with all directory structure, configs, and shared packages pre-built |
| **Unified development** | `bun dev` starts all three apps (marketing, product, API) with hot-reload; one environment runs the full stack |
| **Database schema and auth** | Supabase provides PostgreSQL, authentication (Google OAuth), and row-level security (RLS) configured per app |
| **Server state management** | TanStack Query (React Query) handles caching, synchronization, and invalidation of server data across the product |
| **Transactional email** | Resend delivers emails templated with React Email; Trigger.dev sends them asynchronously |
| **Type-safe Server Actions** | next-safe-action validates server function arguments; errors surface at build time, not runtime |
| **Analytics and observability** | PostHog tracks product usage and toggles feature flags; Sentry captures errors from frontend and backend |
| **Rate limiting** | Upstash Redis provides cache and rate-limit enforcement for API routes without external backend |

## Architecture

```
fullstack-v1/
├── apps/
│   ├── api/              ElysiaJS API server, Supabase client, auth routes
│   ├── app/              Next.js product application (SaaS)
│   └── web/              Next.js marketing website
├── packages/
│   ├── analytics/        PostHog integration hooks
│   ├── email/            React Email templates for transactional mail
│   ├── jobs/             Trigger.dev background job definitions
│   ├── kv/               Upstash Redis client for caching and rate limiting
│   ├── logger/           Structured logging utilities
│   ├── react-query/      TanStack Query configuration, hooks, providers
│   ├── supabase/         Supabase client, RLS policies, queries and mutations
│   └── ui/               Shadcn-based shared React components
├── tooling/
│   ├── e2e/              Playwright test specs
│   └── typescript/       Shared TypeScript configuration
├── docs/                 Full documentation
├── biome.json            Linter and formatter config
└── turbo.json            Turborepo build orchestration
```

## Why not existing tools

Most SaaS templates provide structure but require significant configuration:

- **Create T3 App** and **create-next-app** give you boilerplate to configure; they do not include Supabase setup, email templates, job scheduling, or backend scaffolding
- **Firebase** projects include auth and database but lock you into a hosted runtime; no monorepo, no local development workflow
- **Wasp** and **Blitz** handle full-stack but are proprietary frameworks with limited library choices
- **Midday V1** (upstream) provided the template but lacked TanStack Query and had no built-in job scheduling

This template packages a complete, opinionated stack (Supabase + Resend + Trigger.dev + PostHog) with monorepo structure, shared packages, and best-practice patterns all pre-wired. You scaffold a project, customize environment variables, and build features.

## Limits

- **Bun-only for JavaScript.** Node.js package manager (npm/yarn) is not tested; if you use one, clear node_modules and reinstall with Bun
- **Docker required for local Supabase.** Supabase local development needs Docker; a remote Supabase project can be used instead by updating `.env` files
- **ElysiaJS backend, not Next.js API routes.** Routes go in `apps/api`, not `app/api/`; this separates backend concerns but means no colocation at the file-system level
- **No Rust or gRPC support.** All APIs are REST; if you need high-performance streaming or compiled backend services, consider rust-v1 instead
- **Playwright tests only.** End-to-end tests use Playwright; unit tests for the backend are minimal
- **Third-party service keys in `.env`.** Sentry, PostHog, Trigger.dev, Resend, Upstash, and Dub all need API keys in environment variables; no keys are provided

## Licence

MIT

Original work Copyright (c) 2024 Midday Labs AB<br>
Modified work Copyright (c) 2025 Wolven Tech Advisory
