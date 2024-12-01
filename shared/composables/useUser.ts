import { User, WorkspaceProfile } from "~/types"

export const useUser = () => {
  const user = useState<User | null>("user", () => null)
  const profile = useState<WorkspaceProfile | null>("profile", () => null)
  const profiles = useState<WorkspaceProfile[]>("profiles", () => [])
  const workspaceProfile = useState<WorkspaceProfile | null>(
    "workspaceProfile",
    () => null
  )

  return {
    user,
    profile,
    profiles,
    workspaceProfile,
  }
}
