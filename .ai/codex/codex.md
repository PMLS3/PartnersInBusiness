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

E005:

- Context: DataConnect API usage in server endpoints
- Error: Used incorrect operation names (e.g., user_workspaces vs userWorkspaces)
- Correction: Follow exact operation names from schema (e.g., userWorkspace_insert)
- Prevention: Always reference schema.gql for exact operation names
- Related: L001

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

L001 DataConnect Direct Mutation Pattern
- Context: DataConnect API usage in server endpoints
- Insight: Direct mutation calls are preferred over abstracted functions
- Application: Use dataConnect.mutation('operation_name', { data: payload }) pattern
- Impact: Simpler code, direct mapping to schema operations
- Related: L002

L002 DataConnect Schema Table Requirements
- Context: DataConnect schema definitions
- Insight: All referenced types must have @table directive
- Application: Added @table to WorkspaceTheme, WorkspaceSettings, ProfileSocial, ProfilePrivacy
- Impact: Proper type relationships and database structure
- Related: L001

L012:

- Context: DataConnect mutations
- Insight: Mutations return key fields only and require specific input types
- Application: 
  - Use proper key types (e.g., User_Key instead of UUID)
  - Select only key fields in mutation responses
  - Use proper data input types (e.g., User_Data)
- Impact: Proper type safety and DataConnect compatibility
- Related: E005

L013:

- Context: DataConnect KeyOutput types
- Insight: KeyOutput types in DataConnect mutations cannot have field selections
- Application: 
  - Remove field selections from mutation responses
  - Use the raw KeyOutput return value
  - Query full objects separately if needed
- Impact: Proper mutation handling in DataConnect
- Related: L012

L014:

- Context: DataConnect query parameters
- Insight: Key fields require specific Key types instead of UUID
- Application: 
  - Use *_Key types for key parameters (e.g., User_Key)
  - Use proper field names from schema
  - Use standard text search instead of vector search if not supported
- Impact: Proper type safety and schema compliance in queries
- Related: L013, L012

L015:

- Context: DataConnect array and text operations
- Insight: DataConnect has specific operators for array and text operations
- Application: 
  - Use push for array updates
  - Use has for array contains checks
  - Use ilike for text search
  - Remove vector search if not supported
- Impact: Proper array and text handling in DataConnect
- Related: L014, L013

L016:

- Context: DataConnect mutation and query field selections
- Insight: DataConnect operations require careful handling of return types and field selections
- Application: 
  - Mutations return only KeyOutput types with no field selections
  - Queries can select fields from the full type
  - Use proper field names from schema (e.g., userWorkspaces not user_workspaces)
  - Remove vector search fields until supported
- Impact: Proper type handling and schema compliance
- Related: L015, L014, L013

L017:

- Context: DataConnect array operations
- Insight: DataConnect uses append for array updates, not push
- Application: 
  - Use append: [value] for adding to arrays
  - Use remove: [value] for removing from arrays
  - Use set: [value] for replacing arrays
- Impact: Proper array manipulation in DataConnect
- Related: L016, L015

L018:

- Context: DataConnect filter operations
- Insight: DataConnect has specific filter operators for different types
- Application: 
  - Use contains for array membership and text search
  - Use eq for exact matches
  - Use set for array updates
  - Remove ilike and has operators (not supported)
- Impact: Proper filtering and searching in DataConnect
- Related: L017, L016, L015

L019:

- Context: DataConnect array and text search operators
- Insight: DataConnect uses specific operators for array and text operations
- Application: 
  - Use add for adding to arrays (not union/append/set)
  - Use in for array membership checks (not overlap/contains/has)
  - Use matches for text search (not like/contains/ilike)
  - Use eq for exact matches
- Impact: Proper array and text operations in DataConnect
- Related: L018, L017, L016

L020:

- Context: DataConnect array and text search operators (correction)
- Insight: DataConnect uses different operators than previously documented
- Application: 
  - Use add for adding to arrays (not union/append/set)
  - Use in for array membership checks (not overlap/contains/has)
  - Use matches for text search (not like/contains/ilike)
  - Use eq for exact matches (unchanged)
- Impact: Correct array and text operations in DataConnect
- Related: L019, L018, L017

L021:

- Context: DataConnect standard PostgreSQL operators
- Insight: DataConnect uses standard PostgreSQL operators for filtering and updates
- Application: 
  - Use append for array updates
  - Use contains for array membership checks
  - Use ilike for case-insensitive text search
  - Use eq for exact matches
- Impact: Proper PostgreSQL-compatible operations in DataConnect
- Related: L020, L019, L018

L022:

- Context: DataConnect operator prefixes
- Insight: DataConnect operators require underscore prefix
- Application: 
  - Use _append for array updates
  - Use _contains for array membership checks
  - Use _ilike for case-insensitive text search
  - Use eq for exact matches (no prefix needed)
- Impact: Proper operator syntax in DataConnect
- Related: L021, L020, L019

L023:

- Context: DataConnect array and text search operators (final correction)
- Insight: DataConnect uses standard PostgreSQL-style operators
- Application: 
  - Use push for array updates
  - Use has for array membership checks
  - Use like for text search
  - Use eq for exact matches
- Impact: Correct operator usage in DataConnect
- Related: L022, L021, L020

L024:

- Context: DataConnect basic operations
- Insight: DataConnect may only support basic equality operations
- Application: 
  - Use direct assignment for array updates
  - Use eq for all comparisons
  - Avoid complex operators until confirmed in schema
  - May need to implement advanced filtering in application code
- Impact: Limited but reliable DataConnect operations
- Related: L023, L022, L021

L025:

- Context: DataConnect variable handling
- Insight: DataConnect requires individual field variables instead of composite types
- Application: 
  - Break down *_Data types into individual field variables
  - Use separate variables for each field in mutations
  - Structure data object in the mutation itself
  - Make optional fields nullable in variable definitions
- Impact: Proper variable handling in DataConnect mutations
- Related: L024, L023, L022

L026:

- Context: DataConnect mutation syntax
- Insight: DataConnect mutations require direct field assignment without data wrapper
- Application: 
  - Pass fields directly to mutation operations
  - Remove data: {} wrapper from mutations
  - Use same variable names as field names
  - Keep variables and fields aligned
- Impact: Proper mutation syntax in DataConnect
- Related: L025, L024, L023

L027:

- Context: DataConnect schema alignment
- Insight: Mutations must match exact schema definitions
- Application: 
  - Always use data argument for insert/update operations
  - Use String for enum types (e.g., WorkspaceRole)
  - Match field types exactly as defined in schema
  - Keep composite keys as defined in schema
- Impact: Proper schema compliance in DataConnect operations
- Related: L026, L025, L024

L028:

- Context: DataConnect mutation argument structure
- Insight: DataConnect requires data to be passed as a single input object
- Application: 
  - Use *_Data input types for data argument
  - Pass data as a single variable instead of individual fields
  - Structure input types on client side
  - Keep mutation definitions simple and consistent
- Impact: Proper mutation argument handling in DataConnect
- Related: L027, L026, L025

L029:

- Context: DataConnect relation fields
- Insight: Relation fields (@relation) cannot be set directly in mutation data
- Application: 
  - Remove relation fields from mutation input data
  - Manage relations through separate operations
  - Only include directly settable fields in *_Data types
  - Use separate mutations for managing relationships
- Impact: Proper handling of relations in DataConnect
- Related: L028, L027, L026

L030:

- Context: DataConnect mutation variables
- Insight: DataConnect requires individual field variables instead of composite Data types
- Application: 
  - Break down *_Data type variables into individual fields
  - Use separate variables for each field in mutation input
  - Structure data object inside the mutation
  - Make optional fields nullable in variable definitions
- Impact: Proper variable handling in DataConnect mutations
- Related: L029, L028, L027

L031:

- Context: DataConnect mutation argument structure (correction)
- Insight: DataConnect mutations require direct field arguments, not data objects
- Application: 
  - Pass fields directly as mutation arguments
  - Remove data wrapper completely
  - Remove nested data objects
  - Keep field names consistent between variables and arguments
- Impact: Proper mutation argument structure in DataConnect
- Related: L030, L029, L028
