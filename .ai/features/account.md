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
   - Creates user profile in DataConnect
   - Adds current `appId` to user's `appIds` array
   - Redirects to workspace creation wizard

## Workspace Creation

### Workspace Types

```typescript
interface Workspace {
  uid: string
  name: string
  slug: string
  appId: string  // Specific to the app where workspace was created
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
```

### Workspace Creation Flow

1. User initiates workspace creation
2. System:
   - Creates workspace with current `appId`
   - Checks if user has any existing profiles
   - If no profiles:
     - Automatically creates first profile
     - Associates profile with workspace
   - If has profiles:
     - Prompts to create new profile or use existing
     - Associates chosen/created profile with workspace

## Profile Management

### Profile Types

```typescript
interface Profile {
  uid: string
  userId: string
  appId: string  // Specific to the app where profile was created
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
   - Users can have different profiles per app/workspace
   - First profile is auto-created with first workspace
   - Subsequent workspaces:
     - Option to create new profile
     - Option to use existing profile from same app

2. **Profile Privacy**
   - Control what information is visible to other workspace members
   - Separate public and private information

## Implementation Details

### Auth Composable

```typescript
export function useAuth() {
  const user = useState<User | null>('user', () => null)
  const appId = useAppConfig().appId
  
  async function register(email: string, password: string, username: string) {
    // Create Firebase auth record
    const { user: firebaseUser } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    
    // Create user in DataConnect with appId
    const userData = await createUserData(firebaseUser.uid, {
      email,
      username,
      appIds: [appId]
    })
    
    return userData
  }

  // ... other auth methods
}
```

### Workspace Composable

```typescript
export function useWorkspace() {
  const appId = useAppConfig().appId
  
  async function createWorkspace(data: WorkspaceCreationData) {
    // Create workspace with appId
    const workspace = await createWorkspaceData({
      ...data,
      appId
    })
    
    // Handle profile creation/selection
    const profile = await handleProfileForWorkspace(workspace.uid)
    
    return { workspace, profile }
  }

  async function handleProfileForWorkspace(workspaceId: string) {
    const existingProfiles = await getUserProfiles(appId)
    
    if (!existingProfiles.length) {
      // Auto-create first profile
      return await createProfile({
        workspaceId,
        appId
      })
    }
    
    // Return UI for profile selection/creation
    return {
      existingProfiles,
      createNewProfile: () => createProfile({ workspaceId, appId })
    }
  }
}
```

This implementation provides a complete multi-app authentication and account management system with workspace support and profile management. The system is built on Firebase Authentication for secure user management and uses DataConnect for storing user data, workspaces, and profiles.
