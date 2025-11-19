<p align="center">
  <img src="./docs/images/logo.svg" alt="Fullstack V1" width="200" />
</p>

<p align="center">
	<h1 align="center"><b>Fullstack V1</b></h1>
<p align="center">
    A production-ready full-stack SaaS monorepo starter
    <br />
    <br />
    <a href="./docs/README.md"><strong>📖 Documentation</strong></a> ·
    <a href="./docs/guides/GETTING_STARTED.md"><strong>🚀 Getting Started</strong></a> ·
    <a href="#whats-included"><strong>What's included</strong></a> ·
    <a href="#key-features"><strong>Key Features</strong></a>
  </p>
</p>

Everything you need to build a production-ready full-stack SaaS. An opinionated stack using the latest Next.js framework with TanStack Query, Supabase, and modern tooling. This monorepo focuses on code reuse and best practices that will grow with your business.

> **Note:** This is a fork and evolution of the [Midday V1](https://github.com/midday-ai/v1) starter kit, enhanced with TanStack Query for robust server state management and additional full-stack features.

## 🚀 Quick Start

Create your own project from this template:

```bash
bunx degit wolven-tech/fullstack-v1 my-saas-app
cd my-saas-app
bun install
```

Then follow the [Getting Started Guide](./docs/guides/GETTING_STARTED.md) to:
- Set up environment variables
- Configure services (Supabase, PostHog, Sentry, etc.)
- Customize branding and content

## 📖 Documentation

- **[Documentation Hub](./docs/README.md)** - Complete documentation index
- **[Getting Started Guide](./docs/guides/GETTING_STARTED.md)** - Quick start and setup
- **[Architecture Overview](./docs/current/ARCHITECTURE.md)** - System design and patterns
- **[React Query Guide](./docs/guides/REACT_QUERY_GUIDE.md)** - Data fetching with TanStack Query
- **[Monorepo Structure](./docs/current/MONOREPO_STRUCTURE.md)** - Understanding the monorepo

## What's included

[Next.js](https://nextjs.org/) - Framework<br>
[ElysiaJS](https://elysiajs.com/) - High-performance API server with Bun<br>
[Turborepo](https://turbo.build) - Build system<br>
[Biome](https://biomejs.dev) - Linter, formatter<br>
[TailwindCSS](https://tailwindcss.com/) - Styling<br>
[Shadcn](https://ui.shadcn.com/) - UI components<br>
[TypeScript](https://www.typescriptlang.org/) - Type safety<br>
[Supabase](https://supabase.com/) - Authentication, database, storage<br>
[TanStack Query](https://tanstack.com/query) - Server state management<br>
[Upstash](https://upstash.com/) - Cache and rate limiting<br>
[React Email](https://react.email/) - Email templates<br>
[Resend](https://resend.com/) - Email delivery<br>
[i18n](https://next-international.vercel.app/) - Internationalization<br>
[Sentry](https://sentry.io/) - Error handling/monitoring<br>
[Dub](https://dub.sh/) - Sharable links<br>
[Trigger.dev](https://trigger.dev/) - Background jobs<br>
[PostHog](https://posthog.com/) - Product analytics and feature flags<br>
[Playwright](https://playwright.dev/) - End-to-end testing<br>
[Claude Code](https://claude.com/code) - AI-assisted development with MCP<br>
[react-safe-action](https://next-safe-action.dev) - Validated Server Actions<br>
[nuqs](https://nuqs.47ng.com/) - Type-safe search params state manager<br>
[next-themes](https://next-themes-example.vercel.app/) - Theme manager<br>

## Directory Structure

```
.
├── apps                         # App workspace
│    ├── api                     # ElysiaJS API server + Supabase (Auth, Database, Storage)
│    ├── app                     # App - your product
│    ├── web                     # Marketing site
│    └── ...
├── packages                     # Shared packages between apps
│    ├── analytics               # PostHog analytics integration
│    ├── email                   # React email library
│    ├── jobs                    # Trigger.dev background jobs
│    ├── kv                      # Upstash rate-limited key-value storage
│    ├── logger                  # Logger library
│    ├── react-query             # TanStack Query hooks and providers
│    ├── supabase                # Supabase - Queries, Mutations, Clients
│    └── ui                      # Shared UI components (Shadcn)
├── tooling                      # Shared configuration used by apps and packages
│    ├── e2e                     # Playwright end-to-end tests
│    └── typescript              # Shared TypeScript configuration
├── docs/                        # Documentation
├── .clauderc                    # Claude Code CLI instructions
├── .mcp.json                    # MCP servers for Claude Code
├── biome.json                   # Biome configuration
├── turbo.json                   # Turbo configuration
├── LICENSE.md
└── README.md
```

## Prerequisites

- [Bun](https://bun.sh/) - JavaScript runtime & package manager
- [Docker](https://www.docker.com/) - For local Supabase development
- [Supabase](https://supabase.com/) - Backend services
- [Upstash](https://upstash.com/) - Redis for caching and rate limiting
- [Resend](https://resend.com/) - Email delivery
- [Sentry](https://sentry.io/) - Error monitoring
- [PostHog](https://posthog.com/) - Product analytics
- [Trigger.dev](https://trigger.dev/) - Background jobs
- [Dub](https://dub.sh/) - Link management

## Getting Started

### From Template (Recommended)

```bash
bunx degit wolven-tech/fullstack-v1 my-saas-app
cd my-saas-app
bun run setup
```

### Manual Setup

1. **Install dependencies**:

```sh
bun install
```

2. **Copy environment files**:

```sh
cp apps/api/.env.example apps/api/.env
cp apps/app/.env.example apps/app/.env.local
cp apps/web/.env.example apps/web/.env.local
```

3. **Update environment variables** with your actual service credentials

4. **Start development server**:

```sh
bun dev              # Start all apps
bun dev:app          # Start app only (port 3000)
bun dev:web          # Start web only (port 3001)
```

See the [Getting Started Guide](./docs/guides/GETTING_STARTED.md) for detailed setup instructions.

## Available Scripts

```sh
bun build            # Build all apps
bun lint             # Lint all apps
bun typecheck        # Type check all apps
bun format           # Format all files with Biome
bun clean            # Clean all node_modules
bun clean:workspaces # Clean all build outputs
```

## Package Structure

### Apps
- `apps/app` - Main SaaS application with authentication and dashboard
- `apps/web` - Marketing website
- `apps/api` - ElysiaJS API server with Supabase integration

### Packages
- `packages/analytics` - PostHog analytics integration
- `packages/email` - Email templates using React Email
- `packages/jobs` - Background jobs with Trigger.dev
- `packages/kv` - Upstash Redis for caching and rate limiting
- `packages/logger` - Logging utilities
- `packages/react-query` - TanStack Query configuration and hooks
- `packages/supabase` - Supabase client setup, queries, and mutations
- `packages/ui` - Shared UI components built with Shadcn

### Tooling
- `tooling/e2e` - Playwright end-to-end tests
- `tooling/typescript` - Shared TypeScript configurations

## Key Features

- **Full-stack TypeScript** - Type safety across the entire stack
- **Monorepo architecture** - Shared code between apps with Turborepo
- **Server state management** - TanStack Query for data fetching and caching
- **Authentication** - Supabase Auth with Google OAuth
- **Database** - PostgreSQL with Supabase
- **Type-safe actions** - Server actions with validation using next-safe-action
- **Internationalization** - Built-in i18n support
- **Dark mode** - Theme switching with next-themes
- **Product analytics** - PostHog for analytics and feature flags
- **Error monitoring** - Sentry integration
- **Email** - Transactional emails with Resend and React Email
- **Background jobs** - Trigger.dev for async tasks
- **Rate limiting** - Upstash Redis-based rate limiting
- **E2E testing** - Playwright for reliable end-to-end testing

## AI-Assisted Development

This project is optimized for development with [Claude Code CLI](https://claude.com/code):

- **`.clauderc`** - AI assistant instructions and development guidelines
- **`.mcp.json`** - MCP servers configuration (Playwright, Sentry, Trigger.dev)
- **[MCP Documentation](./docs/MCP.md)** - MCP servers setup and usage

Claude Code provides enhanced capabilities through Model Context Protocol (MCP):
- Automated Playwright test execution and debugging
- Sentry error monitoring and analysis
- Trigger.dev background job management

**Note**: This project uses Claude Code CLI, not Cursor IDE or other AI coding assistants.

## Contributing

We welcome contributions! Please see our [Contributing Guide](./docs/development/CONTRIBUTING.md) for details.

## Documentation

For comprehensive documentation, visit the [docs](./docs) directory:

- **Getting Started**: [Setup Guide](./docs/guides/GETTING_STARTED.md)
- **Architecture**: [System Design](./docs/current/ARCHITECTURE.md)
- **Guides**: [React Query](./docs/guides/REACT_QUERY_GUIDE.md), [Supabase](./docs/guides/SUPABASE_GUIDE.md)
- **Development**: [Standards](./docs/development/DEVELOPMENT_STANDARDS.md), [Testing](./docs/development/TESTING_GUIDE.md)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

Original work Copyright (c) 2024 Midday Labs AB<br>
Modified work Copyright (c) 2025 Wolven Tech Advisory
