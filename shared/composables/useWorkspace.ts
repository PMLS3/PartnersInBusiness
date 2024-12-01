import { Workspace, WorkspaceProfile, User } from "~/types"
import { showErrors, showSuccess } from "~/utils/notification"
import { createItem, makeUUID, getLink } from "~/utils/data"

export const useWorkspace = () => {
  const { user, profile, profiles, workspaceProfile } = useUser()
  const workspace = useState<Workspace | null>("workspace", () => null)
  const workspaces = useState<Workspace[]>("workspaces", () => [])
  const clientWorkspace = useState<Workspace | null>("clientWorkspace", () => ({
    uid: null,
  }))

  const createWorkspace = async (
    state: Workspace,
    newProfile: boolean = true
  ) => {
    try {
      const { data }: any = await $fetch("/api/workspaces/create/single", {
        method: "POST",
        body: {
          state: createItem(state, [
            "name",
            "owner",
            "description",
            "theme",
            "type",
            "embeddingText",
          ]),
          link: getLink(),
          newProfile,
          token: user.value?.tokenResponse?.idToken || null,
        },
      })
      return data
    } catch (error) {
      showErrors("Failed to create workspace")
    }
  }

  const setupWorkspace = async (
    state: Workspace,
    newProfile: boolean = true
  ) => {
    try {
      const { data }: any = await $fetch("/api/workspaces/create/setup", {
        method: "POST",
        body: {
          state: createItem(state, [
            "name",
            "owner",
            "description",
            "theme",
            "type",
            "embeddingText",
          ]),
          link: getLink(),
          newProfile,
          token: user.value?.tokenResponse?.idToken || null,
          clientWorkspaceUid: clientWorkspace.value?.uid,
          profile: profile.value,
        },
      })

      workspaces.value.push(data.workspace)
      workspace.value = data.workspace

      if (!profiles.value.find((p: any) => p.uid === data.profile.uid)) {
        profiles.value.push(data.profile)
      }
      profile.value = data.profile

      return data
    } catch (error) {
      showErrors("Failed to create workspace")
    }
  }

  const refreshWorkspace = async () => {
    let query = {
      token: user.value?.tokenResponse?.idToken,
      workspaceId: workspace.value?.uid,
    }

    const workspaceResult: any = await $fetch(
      "/api/workspaces/retrieve/single",
      {
        query,
      }
    )

    if (workspaceResult.statusCode !== 200) {
      showErrors(workspaceResult.errors)
      return false
    }
    workspace.value = workspaceResult.data
  }

  return {
    workspace,
    workspaces,
    clientWorkspace,
    createWorkspace,
    setupWorkspace,
    refreshWorkspace,
  }
}
