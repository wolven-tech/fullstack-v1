# @v1/api - ElysiaJS API Server

High-performance API server built with ElysiaJS and Bun.

## Features

- ⚡ **ElysiaJS** - Fast, ergonomic web framework for Bun
- 🔒 **Type-safe** - Full TypeScript support with Eden Treaty client
- 📝 **Auto-generated docs** - Swagger/OpenAPI documentation at `/swagger`
- ✅ **Tested** - Unit and E2E tests with Bun test runner
- 🌐 **CORS enabled** - Cross-origin requests supported

## Getting Started

### Installation

```bash
bun install
```

### Environment Setup

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

Required environment variables:
- `PORT` - API server port (default: 3002)
- `NEXT_PUBLIC_LOOPS_FORM_ID` - Loops newsletter form ID
- `NEXT_PUBLIC_POSTHOG_KEY` - PostHog analytics key (optional)
- `NEXT_PUBLIC_POSTHOG_HOST` - PostHog host URL (optional)

### Development

```bash
# Start development server with hot reload
bun run dev

# Run tests
bun test

# Type checking
bun run typecheck

# Linting
bun run lint
```

### Production

```bash
# Start production server
bun run start
```

## API Endpoints

### Health Check

```
GET /
GET /health
```

Returns server status and timestamp.

### Newsletter Subscription

```
POST /api/subscribe
Content-Type: application/json

{
  "email": "user@example.com",
  "userGroup": "general"
}
```

Subscribe a user to the newsletter via Loops.

## API Documentation

Interactive API documentation available at:
- **Swagger UI**: `http://localhost:3002/swagger`

## Type-safe Client

Use the Eden Treaty client for type-safe API calls:

```typescript
import { treaty } from "@elysiajs/eden";
import type app from "@v1/api";

const client = treaty<typeof app>("http://localhost:3002");

const { data, error } = await client.api.subscribe.post({
  email: "user@example.com",
  userGroup: "general",
});
```

## Testing

### Unit Tests

```bash
bun test
```

### E2E Tests

E2E tests are located in `tooling/e2e`:

```bash
cd ../../tooling/e2e
bun test
```

## Database Operations

Supabase is still used for database operations. Database-related scripts:

```bash
# Start Supabase locally
bun run db:start

# Run migrations
bun run db:migrate

# Seed database
bun run db:seed

# Reset database
bun run db:reset

# Generate TypeScript types
bun run db:generate
```

## Architecture

The API follows a simple, functional architecture:

```
apps/api/
├── src/
│   ├── index.ts         # Main app entry point
│   └── index.test.ts    # Unit tests
├── supabase/            # Supabase configuration
│   ├── config.toml
│   ├── migrations/
│   └── functions/
└── package.json
```

## Deployment

The API can be deployed to any platform that supports Bun:

- Bun-compatible hosting (Railway, Fly.io, etc.)
- Docker containers
- Serverless edge functions

## Related Packages

- `@v1/web` - Next.js web application
- `@v1/analytics` - Analytics with PostHog
- `@v1/e2e` - End-to-end tests

## License

Private package for V1 project.
