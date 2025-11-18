# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased] - 2025-11-17

### Added

#### Analytics
- **PostHog Integration**: Replaced OpenPanel with PostHog analytics
  - Client-side tracking with `posthog-js`
  - Server-side tracking with `posthog-node`
  - User identification support
  - Event tracking with properties
  - Automatic page view and page leave tracking
  - Location: `packages/analytics/`

#### API (ElysiaJS)
- **New ElysiaJS API Server** (`@v1/api`)
  - High-performance REST API with ElysiaJS
  - Port: 3002
  - Health check endpoints: `/`, `/health`
  - Newsletter subscription endpoint: `POST /api/subscribe`
  - Auto-generated Swagger documentation at `/swagger`
  - Type-safe validation with Elysia's type system
  - CORS enabled
  - Full TypeScript support
  - Unit tests with Bun test runner
  - Location: `apps/api/`

#### E2E Testing
- **Playwright E2E Tests** (`@v1/e2e`)
  - Cross-browser testing (Chromium, Firefox, WebKit)
  - 8 comprehensive API tests
  - 7 web application tests
  - Screenshot/video on failure
  - Interactive debug mode
  - HTML test reports
  - Location: `tooling/e2e/`

#### Web Application
- **API Integration**: Web app now uses ElysiaJS API instead of direct Supabase calls
  - Type-safe Eden Treaty client
  - Subscribe action migrated to API
  - Better error handling

### Changed

#### Analytics Package (`@v1/analytics`)
- Migrated from OpenPanel to PostHog
- Added shutdown method for graceful cleanup
- Simplified client and server-side tracking

#### Turbo Configuration
- Updated `turbo.json` with new environment variables:
  - `NEXT_PUBLIC_POSTHOG_KEY`
  - `NEXT_PUBLIC_POSTHOG_HOST`
  - `NEXT_PUBLIC_LOOPS_FORM_ID`
  - `NEXT_PUBLIC_API_URL`
  - `PORT`

### Environment Variables

#### New Required Variables

**API (`apps/api/.env`):**
```env
PORT=3002
NEXT_PUBLIC_LOOPS_FORM_ID=your_loops_form_id
```

**Analytics (Optional):**
```env
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
```

**Web App (`apps/web/.env`):**
```env
NEXT_PUBLIC_API_URL=http://localhost:3002
```

### Documentation

- **API Documentation**: Comprehensive README at `apps/api/README.md`
- **E2E Testing Guide**: Full Playwright guide at `tooling/e2e/README.md`
- **Environment Examples**: Updated `.env.example` files

### Technical Details

#### Architecture Changes

```
Before:
apps/web → Supabase (direct)
          → OpenPanel (analytics)

After:
apps/web → ElysiaJS API (@v1/api) → Loops (newsletter)
          → PostHog (analytics)
```

#### Package Updates

**Added Dependencies:**
- `elysia@^1.4.16`
- `@elysiajs/cors@^1.4.0`
- `@elysiajs/eden@^1.4.5`
- `@elysiajs/swagger@^1.3.1`
- `@sinclair/typebox@^0.34.41`
- `posthog-js@^1.294.0`
- `posthog-node@^5.11.2`
- `@playwright/test@^1.56.1`
- `playwright@^1.56.1`

#### Testing

**Unit Tests:**
- API: 5/5 tests passing ✅
- All TypeScript checks passing ✅

**E2E Tests:**
- API: 8/8 tests passing ✅
- Web: 7 tests created

### Migration Guide

#### For Developers

1. **Install dependencies:**
   ```bash
   bun install
   ```

2. **Set up environment variables:**
   ```bash
   # API
   cp apps/api/.env.example apps/api/.env

   # Web
   cp apps/web/.env.example apps/web/.env

   # Edit the files with your credentials
   ```

3. **Start the API server:**
   ```bash
   cd apps/api
   bun run dev
   ```

4. **Start the web server:**
   ```bash
   cd apps/web
   bun run dev
   ```

5. **Run tests:**
   ```bash
   # Unit tests
   cd apps/api
   bun test

   # E2E tests
   cd tooling/e2e
   bunx playwright install  # First time only
   bun test
   ```

#### Breaking Changes

- **Web App**: Subscribe action now requires API server to be running
- **Analytics**: PostHog environment variables are optional but recommended for production

### Related PRs/Issues

- TDD approach followed throughout
- All tests passing before merge
- Documentation updated

---

## Guidelines

- All dates in YYYY-MM-DD format
- Keep most recent changes at the top
- Group changes by type (Added, Changed, Deprecated, Removed, Fixed, Security)
- Link to relevant issues/PRs when available
