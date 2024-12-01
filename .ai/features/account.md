# Account Management System

This document outlines the authentication, account creation, workspace management, and profile system for multi-app support.

## Table of Contents

1. [Multi-App Support](#multi-app-support)
2. [Authentication Flow](#authentication-flow)
3. [User Registration](#user-registration)
4. [Workspace Creation](#workspace-creation)
5. [Profile Management](#profile-management)
6. [Implementation Details](#implementation-details)

## Multi-App Support

The system is designed to work across multiple applications, with each app having its own unique identifier.

### App Integration

1. App identification:
   - Each app has a unique `appId` obtained through `useAppConfig().appId`
   - The `appId` is stored with:
     - User records (array of accessed apps)
     - Workspace records (workspace's parent app)
     - Profile records (profile's parent app)

2. Cross-app functionality:
   - Users can access multiple apps with the same account
   - Each app access is tracked in user's `appIds` array
   - Workspaces and profiles are app-specific

## Authentication Flow

### Login Process

1. User accesses `/auth/login`
2. Can choose between:
   - Email/Password login
   - Social authentication (Google, Twitter, LinkedIn)
3. On successful authentication:
   - System checks if user has accessed this app before
   - If new app access, adds `appId` to user's `appIds` array
   - If user has workspaces in this app -> Redirect to last active workspace
   - If no workspaces -> Redirect to workspace creation wizard

### Registration Process

1. User accesses `/auth/register`
2. Provides:
   - Email
   - Password
   - Username
3. System:
   - Creates Firebase authentication record
   - Creates user profile in DataConnect using `CreateUser` mutation
   - Adds current `appId` to user's `appIds` array
   - Redirects to workspace creation wizard

## Data Types

### User Type

```typescript
interface User {
  uid: UUID
  email: string
  username: string
  displayName?: string
  photoURL?: string
  appIds: string[]
  defaultWorkspace?: UUID
  createdAt: Date
  updatedAt: Date
  // Relations (not directly settable)
  workspaces: UserWorkspace[]
  profiles: Profile[]
}
```

### Workspace Type

```typescript
interface Workspace {
  uid: UUID
  name: string
  slug: string
  appId: string
  description?: string
  ownerId: UUID
  theme: {
    primary?: string
    secondary?: string
    logo?: string
    background?: string
  }
  settings: {
    isPublic: boolean
    allowInvites: boolean
    allowMultipleProfiles: boolean
    features: string[]
  }
  createdAt: Date
  updatedAt: Date
}
```

### UserWorkspace Type

```typescript
interface UserWorkspace {
  userId: UUID
  workspaceId: UUID
  appId: string
  role: string
  profileId?: UUID
  joinedAt: Date
}
```

### Profile Type

```typescript
interface Profile {
  uid: UUID
  userId: UUID
  appId: string
  displayName: string
  title?: string
  bio?: string
  avatar?: string
  skills?: string[]
  social: {
    twitter?: string
    linkedin?: string
    github?: string
    website?: string
  }
  privacy: {
    isPublic: boolean
    showEmail: boolean
    showSocial: boolean
    showSkills: boolean
  }
  createdAt: Date
  updatedAt: Date
}
```

## DataConnect Operations

### User Operations

```typescript
import { useFirebaseServer } from "@/utils/firebase-server"
import { addUser, updateUser, getUser, getUserByEmail } from "one-person-empire"
import { makeUUID } from "@/utils/data"

// Mutations
const createUser = async (token: string, data: {
  email: string
  username: string
  displayName?: string
  photoURL?: string
  defaultWorkspace?: UUID
  appIds: string[]
}) => {
  const { dataConnect } = useFirebaseServer(token)
  
  if (!dataConnect) {
    throw createError({
      statusCode: 500,
      message: "Failed to initialize Firebase connection",
    })
  }

  const payload = {
    uid: makeUUID(),
    ...data
  }

  const result = await addUser(dataConnect, payload)
  
  if (result.errors?.length > 0) {
    throw createError({
      statusCode: 400,
      message: "Failed to create user",
      data: result.errors,
    })
  }

  return payload
}

const updateUserData = async (token: string, uid: string, data: Partial<User>) => {
  const { dataConnect } = useFirebaseServer(token)
  return await updateUser(dataConnect, { uid, ...data })
}

// Queries
const getUserData = async (token: string, uid: string) => {
  const { dataConnect } = useFirebaseServer(token)
  return await getUser(dataConnect, { uid })
}

const findUserByEmail = async (token: string, email: string) => {
  const { dataConnect } = useFirebaseServer(token)
  return await getUserByEmail(dataConnect, { email })
}
```

### Workspace Operations

```typescript
import { 
  addUserWorkspace, 
  updateUserWorkspaceRole,
  getWorkspace,
  getUserWorkspaces 
} from "one-person-empire"

// Mutations
const createWorkspace = async (token: string, data: {
  userId: UUID
  workspaceId: UUID
  appId: string
  role: string
  profileId?: UUID
}) => {
  const { dataConnect } = useFirebaseServer(token)
  
  const payload = {
    uid: makeUUID(),
    ...data
  }

  const result = await addUserWorkspace(dataConnect, payload)
  
  if (result.errors?.length > 0) {
    throw createError({
      statusCode: 400,
      message: "Failed to create workspace",
      data: result.errors,
    })
  }

  return payload
}

const updateWorkspaceRole = async (token: string, key: UserWorkspace_Key, role: string) => {
  const { dataConnect } = useFirebaseServer(token)
  return await updateUserWorkspaceRole(dataConnect, { key, role })
}

// Queries
const getWorkspaceData = async (token: string, uid: string) => {
  const { dataConnect } = useFirebaseServer(token)
  return await getWorkspace(dataConnect, { uid })
}

const listUserWorkspaces = async (token: string, userId: UUID, appId: string) => {
  const { dataConnect } = useFirebaseServer(token)
  return await getUserWorkspaces(dataConnect, { userId, appId })
}
```

### Profile Operations

```typescript
import { getProfile, getUserProfiles } from "one-person-empire"

// Queries
const getProfileData = async (token: string, uid: string) => {
  const { dataConnect } = useFirebaseServer(token)
  return await getProfile(dataConnect, { uid })
}

const listUserProfiles = async (token: string, userId: UUID, appId: string) => {
  const { dataConnect } = useFirebaseServer(token)
  return await getUserProfiles(dataConnect, { userId, appId })
}
```

### Search Operations

```typescript
import { searchUsers, searchWorkspaces, searchProfiles } from "one-person-empire"

const searchUsersData = async (token: string, query: string, appId: string, limit = 10) => {
  const { dataConnect } = useFirebaseServer(token)
  return await searchUsers(dataConnect, { query, appId, limit })
}

const searchWorkspacesData = async (token: string, query: string, appId: string, limit = 10) => {
  const { dataConnect } = useFirebaseServer(token)
  return await searchWorkspaces(dataConnect, { query, appId, limit })
}

const searchProfilesData = async (token: string, query: string, appId: string, limit = 10) => {
  const { dataConnect } = useFirebaseServer(token)
  return await searchProfiles(dataConnect, { query, appId, limit })
}
```

This implementation provides a complete multi-app authentication and account management system using Firebase Authentication for secure user management and the generated DataConnect client from `one-person-empire` package for data operations. Each operation properly handles Firebase server initialization and error handling.
