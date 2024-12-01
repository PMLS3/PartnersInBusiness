# DataConnect Guide

## File Structure

```
dataconnect/
├── schema/                 # Database schema definitions
│   ├── auth/
│   │   └── schema.gql     # Authentication related schemas
│   ├── workspace/
│   │   └── schema.gql     # Workspace related schemas
│   └── profile/
│       └── schema.gql     # Profile related schemas
├── connector/             # GraphQL operations
│   ├── auth/
│   │   ├── queries.gql    # Auth related queries
│   │   └── mutations.gql  # Auth related mutations
│   ├── workspace/
│   │   ├── queries.gql    # Workspace related queries
│   │   └── mutations.gql  # Workspace related mutations
│   └── profile/
│       ├── queries.gql    # Profile related queries
│       └── mutations.gql  # Profile related mutations
└── search/               # Vector search configurations
    └── [sector]/
        └── config.gql
```

## Schema Definition Guidelines

### 1. Schema Files (.gql)

- Place in `schema/[sector]/schema.gql`
- Include table definitions with proper decorators
- Define relationships between tables
- Specify indexes and constraints
- Add vector search configurations if needed

Example:

```graphql
type User @table(name: "User", singular: "user", plural: "users", key: "uid") {
  uid: UUID! @col(name: "user_id") @default(expr: "uuidV4()")
  email: String! @unique
  username: String! @unique
  displayName: String
  photoURL: String
  defaultWorkspace: UUID
  workspaces: [UserWorkspace!]! @relation
  createdAt: Timestamp! @default(expr: "request.time")
  updatedAt: Timestamp! @default(expr: "request.time")
}
```

### 2. Queries (.gql)

- Place in `connector/[sector]/queries.gql`
- Group related queries together
- Include proper authentication directives
- Add descriptive comments
- Specify return types

Example:

```graphql
# Get user by ID with related data
query getUserById($uid: UUID!) @auth(level: USER) {
  user(uid: $uid) {
    uid
    email
    username
    workspaces {
      workspace {
        uid
        name
      }
    }
  }
}
```

### 3. Mutations (.gql)

- Place in `connector/[sector]/mutations.gql`
- Include input validation
- Add proper authentication
- Handle relationships
- Return meaningful data

Example:

```graphql
# Create new user with profile
mutation createUser($input: CreateUserInput!) @auth(level: PUBLIC) {
  createUser(input: $input) {
    uid
    email
    username
  }
}
```

### 4. Vector Search

- Place configurations in `search/[sector]/config.gql`
- Specify embedding model
- Define similarity metrics
- Set dimensions and indexes

Example:

```graphql
extend type Product
  @vectorSearch(
    fields: ["name", "description"]
    embeddingModel: "textembedding-gecko@latest"
    dimensions: 1536
  )
```

## Best Practices

1. **Schema Organization**

   - Use meaningful table names
   - Group related schemas together
   - Document relationships clearly
   - Include proper indexes

2. **Query Design**

   - Keep queries focused and specific
   - Use fragments for shared fields
   - Include proper authentication
   - Optimize for performance

3. **Mutation Design**

   - Validate input data
   - Handle errors gracefully
   - Maintain data consistency
   - Return useful responses

4. **Security**
   - Use @auth directives appropriately
   - Implement row-level security
   - Validate user permissions
   - Protect sensitive data

## Authentication Levels

- `PUBLIC`: No authentication required
- `USER`: Valid user token required
- `USER_EMAIL_VERIFIED`: Verified email required
- `ADMIN`: Administrative access required

## Vector Search Configuration

1. **Setup**

   ```graphql
   type Document @table {
     content: String!
     vectorEmbedding: Vector(1536)! @vectorIndex(
       name: "content_vector_idx"
       metric: "cosine"
     )
   }
   ```

2. **Usage**
   ```graphql
   query searchDocuments($query: String!) {
     documents(vector: { field: "vectorEmbedding", query: $query, limit: 10 }) {
       content
       _score
     }
   }
   ```

## Error Handling

- Use proper error codes
- Return meaningful error messages
- Handle validation errors
- Log errors appropriately

## Performance Optimization

- Use proper indexes
- Optimize query complexity
- Implement pagination
- Cache frequently accessed data
