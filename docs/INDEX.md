# Fullstack V1 Documentation Index

**Last Updated**: 2025-11-18
**Repository**: fullstack-v1
**Organization**: Wolven Tech Advisory

---

## 📖 Documentation Structure

This repository uses a structured documentation approach with:
- **Timestamps** for versioning
- **Clear deprecation** markers
- **Organized by type** (architecture, guides, operations, etc.)
- **Service-specific docs** in app/package directories

---

## 📂 Directory Organization

### Root Documentation (`/docs`)
```
docs/
├── current/          # Active, current documentation
├── archive/          # Historical/deprecated docs (timestamped)
├── guides/           # How-to guides and tutorials
├── architecture/     # Architecture Decision Records (ADRs)
├── operations/       # Operational guides (deployment, monitoring)
├── roadmaps/         # Product roadmaps and planning
├── api/              # API documentation
├── development/      # Development guides
└── images/           # Documentation images and diagrams
```

### Apps Documentation
Each app has its own `/docs` directory:
```
apps/[app-name]/docs/
├── architecture/     # App-specific architecture
├── guides/          # App-specific guides
├── api/             # API documentation
└── changelog/       # App changelog
```

### Packages Documentation
Each package has its own `/docs` directory:
```
packages/[package-name]/docs/
├── architecture/     # Package-specific architecture
├── guides/          # Package-specific guides
└── changelog/       # Package changelog
```

---

## 📚 Current Documentation

### Core Documentation
- ✅ **[README](./README.md)** - Documentation guide and quick links
- ✅ **[Root README](../README.md)** - Project overview and getting started

### Architecture
- 📝 **[ARCHITECTURE](./current/ARCHITECTURE.md)** - System architecture overview
- 📝 **[MONOREPO_STRUCTURE](./current/MONOREPO_STRUCTURE.md)** - Monorepo organization
- 📝 **[TECH_STACK](./current/TECH_STACK.md)** - Technology stack decisions

### Guides
- 📝 **[GETTING_STARTED](./guides/GETTING_STARTED.md)** - Quick start guide
- 📝 **[REACT_QUERY_GUIDE](./guides/REACT_QUERY_GUIDE.md)** - TanStack Query usage
- 📝 **[SUPABASE_GUIDE](./guides/SUPABASE_GUIDE.md)** - Supabase integration
- 📝 **[DEPLOYMENT_GUIDE](./guides/DEPLOYMENT_GUIDE.md)** - Deployment instructions

### Development
- 📝 **[DEVELOPMENT_STANDARDS](./development/DEVELOPMENT_STANDARDS.md)** - Coding standards and DoD/DoR
- 📝 **[TESTING_GUIDE](./development/TESTING_GUIDE.md)** - Testing strategies
- 📝 **[CONTRIBUTING](./development/CONTRIBUTING.md)** - Contribution guidelines

---

## 🗄️ Archived Documentation

Historical documentation is kept in `/docs/archive/` with timestamps:

*No archived documentation yet.*

---

## 🏷️ Documentation Conventions

### Timestamps
All timestamped documentation uses format: `YYYY-MM-DD_FILENAME.md`

Example: `2025-11-18_INITIAL_SETUP.md`

### Status Markers
- ✅ **CURRENT** - Active, up-to-date documentation
- ⚠️ **DEPRECATED** - No longer accurate, kept for history
- 🔄 **SUPERSEDED** - Replaced by newer document (link provided)
- 📝 **DRAFT** - Work in progress

### Linking
Always use relative paths:
```markdown
[Architecture Guide](./current/ARCHITECTURE.md)
```

---

## 🔍 Finding Documentation

### By Topic
- **Architecture**: `/docs/architecture/` or `/docs/current/`
- **How-To**: `/docs/guides/`
- **Roadmaps**: `/docs/roadmaps/`
- **Historical**: `/docs/archive/`

### By App
- **Main App**: `/apps/app/docs/`
- **Marketing Site**: `/apps/web/docs/`
- **Supabase**: `/apps/api/docs/`

### By Package
- **React Query**: `/packages/react-query/docs/`
- **Supabase**: `/packages/supabase/docs/`
- **UI Components**: `/packages/ui/docs/`
- **Analytics**: `/packages/analytics/docs/`

### By Date
All timestamped files are prefixed with `YYYY-MM-DD_`

---

## 📝 Contributing Documentation

### Creating New Documentation
1. Determine type (guide, architecture, operations)
2. Place in appropriate directory
3. Add timestamp if appropriate
4. Update this INDEX.md
5. Add status marker (CURRENT, DRAFT, etc.)

### Deprecating Documentation
1. Move to `/docs/archive/` with timestamp prefix
2. Add deprecation marker to title
3. Update INDEX.md
4. Add link to replacement document if applicable

### Updating Documentation
1. Update the document
2. Update "Last Updated" timestamp in document
3. If major changes, consider creating new timestamped version

---

## 📧 Documentation Maintainers

For questions or suggestions about documentation:
- Create an issue with `[docs]` prefix
- Contact: Wolven Tech Advisory

---

**Navigation**: [Home](../README.md) | [Architecture](./current/) | [Guides](./guides/) | [Roadmaps](./roadmaps/) | [Archive](./archive/)
