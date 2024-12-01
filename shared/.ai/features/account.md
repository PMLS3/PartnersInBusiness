# Account Management System

This document outlines the authentication, account creation, and workspace management system.

## Table of Contents

1. [File Structure](#file-structure)
2. [Authentication Flow](#authentication-flow)
3. [User Registration](#user-registration)
4. [Workspace Creation](#workspace-creation)
5. [Profile Management](#profile-management)
6. [Implementation Details](#implementation-details)

## File Structure

```
├── components/
│   ├── auth/
│   │   ├── LoginForm.vue
│   │   ├── RegisterForm.vue
│   │   ├── RecoverForm.vue
│   │   └── SocialAuth.vue
│   ├── workspace/
│   │   ├── CreateForm.vue
│   │   ├── InviteMembers.vue
│   │   └── ProfileSetup.vue
│   └── profile/
│       ├── ProfileCard.vue
│       └── ProfileEditor.vue
├── composables/
│   ├── useAuth.ts
│   ├── useWorkspace.ts
│   └── useProfile.ts
├── pages/
│   ├── auth/
│   │   ├── login.vue
│   │   ├── register.vue
│   │   └── recover.vue
│   ├── workspace/
│   │   ├── create/
│   │   │   ├── index.vue
│   │   │   ├── step-1.vue  # Workspace Details
│   │   │   ├── step-2.vue  # Theme Selection
│   │   │   ├── step-3.vue  # Profile Setup
│   │   │   └── step-4.vue  # Team Invites
│   │   └── [id]/
│   │       ├── settings.vue
│   │       └── members.vue
│   └── profile/
│       └── [id].vue
├── server/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── register.post.ts
│   │   │   └── workspace-setup.post.ts
│   │   ├── workspace/
│   │   │   ├── create.post.ts
│   │   │   └── invite.post.ts
│   │   └── profile/
│   │       ├── create.post.ts
│   │       └── update.post.ts
│   └── utils/
│       └── firebase.ts
└── types/
    ├── auth.ts
    ├── workspace.ts
    └── profile.ts
```

## Authentication Flow

### Login Process

1. User accesses `/auth/login`
2. Can choose between:
   - Email/Password login
   - Social authentication (Google, Twitter, LinkedIn)
3. On successful authentication:
   - If user has workspaces -> Redirect to last active workspace
   - If no workspaces -> Redirect to workspace creation wizard

### Registration Process

1. User accesses `/auth/register`
2. Provides:
   - Email
   - Password
   - Username
3. Firebase creates authentication record
4. System creates user profile in DataConnect
5. Redirects to workspace creation wizard

## User Registration

```typescript:types/auth.ts
interface User {
  uid: string
  email: string
  displayName?: string
  photoURL?: string
  workspaces: Workspace[]
  defaultWorkspace?: string
  createdAt: Date
  updatedAt: Date
}

interface AuthState {
  user: User | null
  loading: boolean
  error: Error | null
}
```

### Firebase Authentication Setup

```typescript:server/utils/firebase.ts
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  // ... other config
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
```

## Workspace Creation

### Workspace Types

```typescript:types/workspace.ts
interface Workspace {
  uid: string
  name: string
  slug: string
  owner: string
  members: WorkspaceMember[]
  theme: WorkspaceTheme
  settings: WorkspaceSettings
  createdAt: Date
  updatedAt: Date
}

interface WorkspaceMember {
  uid: string
  role: 'owner' | 'admin' | 'member'
  profile: Profile
  joinedAt: Date
}

interface WorkspaceTheme {
  primary: string
  logo?: string
  background?: string
}
```

### Workspace Creation Wizard Steps

1. **Basic Details** (step-1.vue)

   - Workspace name
   - Workspace description
   - Industry/Type

2. **Theme Selection** (step-2.vue)

   - Color scheme
   - Logo upload
   - Layout preferences

3. **Profile Setup** (step-3.vue)

   - Create new profile or select existing
   - Profile details
   - Role selection

4. **Team Setup** (step-4.vue)
   - Invite team members
   - Set roles and permissions

## Profile Management

### Profile Types

```typescript:types/profile.ts
interface Profile {
  uid: string
  userId: string
  workspaceId: string
  displayName: string
  title?: string
  bio?: string
  avatar?: string
  skills?: string[]
  social?: {
    twitter?: string
    linkedin?: string
    github?: string
  }
  createdAt: Date
  updatedAt: Date
}
```

### Profile Features

1. **Multiple Profiles**

   - Users can have different profiles per workspace
   - Option to clone existing profile during workspace setup

2. **Profile Privacy**
   - Control what information is visible to other workspace members
   - Separate public and private information

## Implementation Details

### Auth Composable

```typescript:composables/useAuth.ts
export function useAuth() {
  const user = useState<User | null>('user', () => null)
  const loading = ref(false)
  const error = ref<Error | null>(null)

  async function login(email: string, password: string) {
    loading.value = true
    try {
      const { user: firebaseUser } = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      // Fetch user data from DataConnect
      const userData = await fetchUserData(firebaseUser.uid)
      user.value = userData
    } catch (err) {
      error.value = err as Error
    } finally {
      loading.value = false
    }
  }

  async function register(email: string, password: string, username: string) {
    loading.value = true
    try {
      const { user: firebaseUser } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      // Create user in DataConnect
      const userData = await createUserData(firebaseUser.uid, {
        email,
        username,
      })
      user.value = userData
    } catch (err) {
      error.value = err as Error
    } finally {
      loading.value = false
    }
  }

  // ... other auth methods

  return {
    user,
    loading,
    error,
    login,
    register,
    // ... other methods
  }
}
```

### Workspace Composable

```typescript:composables/useWorkspace.ts
export function useWorkspace() {
  const workspace = useState<Workspace | null>('workspace', () => null)
  const loading = ref(false)

  async function createWorkspace(data: WorkspaceCreationData) {
    loading.value = true
    try {
      const workspaceData = await $fetch('/api/workspace/create', {
        method: 'POST',
        body: data,
      })
      workspace.value = workspaceData
    } finally {
      loading.value = false
    }
  }

  async function inviteMembers(emails: string[]) {
    if (!workspace.value) return

    return await $fetch('/api/workspace/invite', {
      method: 'POST',
      body: {
        workspaceId: workspace.value.uid,
        emails,
      },
    })
  }

  // ... other workspace methods

  return {
    workspace,
    loading,
    createWorkspace,
    inviteMembers,
    // ... other methods
  }
}
```

### Profile Composable

```typescript:composables/useProfile.ts
export function useProfile() {
  const profile = useState<Profile | null>('profile', () => null)
  const profiles = useState<Profile[]>('profiles', () => [])

  async function createProfile(data: ProfileCreationData) {
    return await $fetch('/api/profile/create', {
      method: 'POST',
      body: data,
    })
  }

  async function updateProfile(data: Partial<Profile>) {
    if (!profile.value) return

    return await $fetch('/api/profile/update', {
      method: 'POST',
      body: {
        profileId: profile.value.uid,
        ...data,
      },
    })
  }

  // ... other profile methods

  return {
    profile,
    profiles,
    createProfile,
    updateProfile,
    // ... other methods
  }
}
```

This implementation provides a complete authentication and account management system with workspace support and profile management. The system is built on Firebase Authentication for secure user management and uses DataConnect for storing user data, workspaces, and profiles.
