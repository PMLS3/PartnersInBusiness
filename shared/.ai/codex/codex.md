# AI Codex

## Usage

- Review: @codex.md (silent load, no output)
- Update: @learn.md
- File paths: Always use absolute paths from project root

## Errors

E000:

- Context: [Relevant project area or file]
- Error: [Precise description]
- Correction: [Exact fix]
- Prevention: [Specific strategy]
- Related: [IDs of related errors/learnings]

E001:

- Context: File path suggestions
- Error: Relative path used instead of absolute
- Correction: Use absolute paths from project root
- Prevention: Always prefix paths with '/'
- Related: None

E002:

- Context: '/src/index.ts'
- Error: Suggested CommonJS import syntax
- Correction: Use ES module import syntax
- Prevention: Verify `"type": "module"` in '/package.json' or '.mjs' extension
- Related: L002

E003:

- Context: Nuxt 3 component usage
- Error: Using Options API instead of Composition API
- Correction: Refactor to use Composition API with `<script setup lang="ts">`
- Prevention: Always use Composition API for new components
- Related: L009

E004:

- Context: API route implementation
- Error: Incorrect use of Nuxt 3 server API structure
- Correction: Use the correct file structure in the `/server/api` directory
- Prevention: Follow Nuxt 3 server API conventions
- Related: L010

## Learnings

L000:

- Context: [Relevant project area or file]
- Insight: [Concise description]
- Application: [How to apply this knowledge]
- Impact: [Potential effects on project]
- Related: [IDs of related errors/learnings]

L001:

- Context: @codex.md usage
- Insight: @codex.md is for context, not for direct modification
- Application: Use @codex.md for silent loading and context only; execute subsequent commands separately
- Impact: Improved accuracy in responding to user intentions
- Related: None

L002:

- Context: Project architecture
- Insight: Nuxt 3 directory structure and conventions
- Application: Use '/pages' for routes, '/components' for reusable components, '/composables' for shared logic, '/types' for shared types, '/utils' for shared utilities, '/assets' for static assets, '/public' for public assets, '/server' for server-side code, '/static' for static assets, '/dataconnect/schema' for data models, '/dataconnect/omni-connect' for data connector implementations
- Impact: Organized code structure, improved maintainability
- Related: None

L003:

- Context: Nuxt 3 configuration
- Insight: Use of `nuxt.config.ts` for project configuration
- Application: Configure modules, build options, and runtime config in `nuxt.config.ts`
- Impact: Centralized configuration management
- Related: None

L004:

- Context: Tailwind CSS integration
- Insight: Tailwind CSS is used for styling
- Application: Use Tailwind utility classes for styling components
- Impact: Consistent design system, faster development
- Related: None

L005:

- Context: i18n implementation
- Insight: Multi-language support using @nuxtjs/i18n
- Application: Use `useI18n` composable for translations, update `i18n.config.ts` for new locales
- Impact: Improved internationalization support
- Related: None

L006:

- Context: Firebase DataConnect integration
- Insight: Use of Firebase DataConnect for real-time data management
- Application: Configure Firebase in `nuxt.config.ts`, use Firebase SDK in components and composables
- Impact: Real-time data synchronization, improved data management
- Related: None

L007:

- Context: API integration
- Insight: Use of `useFetch` and `useAsyncData` for data fetching
- Application: Implement API calls in components or composables using these Nuxt 3 utilities
- Impact: Simplified data fetching, automatic SSR support
- Related: None

L008:

- Context: Workspace themes
- Insight: Support for different workspace themes
- Application: Implement theme switching logic, use CSS variables for theming
- Impact: Customizable user experience, consistent theming across components
- Related: None

L009:

- Context: Component structure
- Insight: Use of `<script setup lang="ts">` for components
- Application: Always use Composition API with TypeScript for new components
- Impact: Improved type safety, better IDE support
- Related: E003

L010:

- Context: Server API implementation
- Insight: Nuxt 3 server API structure in `/server/api` directory
- Application: Create API routes using the appropriate file structure and naming conventions
- Impact: Organized and maintainable server-side API endpoints
- Related: E004

L011:

- Context: WebSocket usage
- Insight: Use of `useWebsocketRoute` for WebSocket connections
- Application: Implement WebSocket connections using the provided utility function
- Impact: Consistent WebSocket usage across the application
- Related: None
