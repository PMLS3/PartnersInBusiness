export * from "./wizard"

export interface User {
  uid: string
  username: string
  email: string
  name?: string
  surname?: string
  embeddingText?: string
  updatedAt: Date
  embedding?: number[]
  tokenResponse?: any
}

export interface Workspace {
  uid: string
  name: string
  owner: User
  description?: string
  theme?: string
  avatar?: any
  background?: any
  type?: string
  updatedAt: Date
  embeddingText?: string
  embedding?: number[]
}

export interface WorkspaceProfile {
  uid: string
  workspace: Workspace
  user: User
  name: string
  surname?: string
  email?: string
  phone?: string
  embeddingText?: string
  updatedAt: Date
  embedding?: number[]
}
