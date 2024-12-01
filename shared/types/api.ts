// User Types
export interface User {
  uid: string
  email: string
  username: string
  displayName?: string
  photoURL?: string
  appIds: string[]
  defaultWorkspace?: string
  createdAt: string
  updatedAt: string
}

// Workspace Types
export interface WorkspaceTheme {
  primary?: string
  secondary?: string
  logo?: string
  background?: string
}

export interface WorkspaceSettings {
  isPublic?: boolean
  allowInvites?: boolean
  allowMultipleProfiles?: boolean
  features?: string[]
}

export interface Workspace {
  uid: string
  name: string
  slug: string
  appId: string
  description?: string
  ownerId: string
  theme?: WorkspaceTheme
  settings?: WorkspaceSettings
  createdAt: string
  updatedAt: string
}

// Profile Types
export interface ProfileSocial {
  twitter?: string
  linkedin?: string
  github?: string
  website?: string
}

export interface ProfilePrivacy {
  isPublic?: boolean
  showEmail?: boolean
  showSocial?: boolean
  showSkills?: boolean
}

export interface Profile {
  uid: string
  userId: string
  appId: string
  displayName: string
  title?: string
  bio?: string
  avatar?: string
  skills?: string[]
  social?: ProfileSocial
  privacy?: ProfilePrivacy
  createdAt: string
  updatedAt: string
}

// UserWorkspace Types
export interface UserWorkspace {
  userId: string
  workspaceId: string
  appId: string
  role: string
  profileId?: string
  joinedAt: string
  updatedAt: string
}

// API Response Types
export interface ApiError {
  message: string
  code?: string
  details?: Record<string, any>
}

export interface ApiResponse<T> {
  data: T
  error?: ApiError
} 