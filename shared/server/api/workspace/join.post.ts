import { useAppConfig } from '#imports'
import { gqlMutation, gqlQuery } from '~/shared/utils/dataconnect'
import type { 
  Profile, 
  Workspace, 
  UserWorkspace,
  ProfilePrivacy,
  ApiResponse 
} from '~/shared/types/api'

interface ProfileData {
  displayName: string
  title?: string
  bio?: string
  privacy?: ProfilePrivacy
}

interface RequestBody {
  userId: string
  workspaceId: string
  profileId?: string
  createNewProfile?: boolean
  profileData?: ProfileData
}

interface ResponseData {
  membership: UserWorkspace
  profile: Profile
}

export default defineEventHandler(async (event) => {
  const config = useAppConfig()
  const body = await readBody<RequestBody>(event)
  const { userId, workspaceId, profileId, createNewProfile, profileData } = body

  try {
    let profile: Profile

    // Get workspace to check settings
    const { data: { workspace } } = await gqlQuery<{ workspace: Workspace }>('GetWorkspace', {
      uid: workspaceId
    })

    if (createNewProfile && workspace.settings?.allowMultipleProfiles) {
      // Create new profile
      const { data: { profile: newProfile } } = await gqlMutation<{ profile: Profile }>('CreateProfile', {
        userId,
        appId: config.appId,
        ...profileData,
        privacy: profileData?.privacy || {
          isPublic: true,
          showEmail: false,
          showSocial: true,
          showSkills: true
        }
      })
      profile = newProfile
    } else if (profileId) {
      // Verify profile exists and belongs to user
      const { data: { profile: existingProfile } } = await gqlQuery<{ profile: Profile }>('GetProfile', {
        uid: profileId
      })
      if (existingProfile && existingProfile.userId === userId) {
        profile = existingProfile
      } else {
        throw new Error('Invalid profile selected')
      }
    } else {
      throw new Error('Must either select an existing profile or create a new one')
    }

    // Add user to workspace with selected/created profile
    const { data: { membership } } = await gqlMutation<{ membership: UserWorkspace }>('AddUserToWorkspace', {
      userId,
      workspaceId,
      appId: config.appId,
      role: 'MEMBER',
      profileId: profile.uid
    })

    return {
      data: {
        membership,
        profile
      }
    } satisfies ApiResponse<ResponseData>
  } catch (error: any) {
    throw createError({
      statusCode: 400,
      message: error.message
    })
  }
}) 