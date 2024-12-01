import { useAppConfig } from '#imports'
import { z } from 'zod'
import { useFirebaseServer } from '~/shared/utils/firebase-server'
import { validateRequest, schemas } from '~/shared/server/middleware/validation'
import { makeUUID } from '~/shared/utils/data'
import type { H3Event } from 'h3'
import type { 
  Workspace, 
  Profile, 
  WorkspaceTheme, 
  WorkspaceSettings,
  ApiResponse 
} from '~/shared/types/api'

// Request validation schema
const createWorkspaceSchema = z.object({
  name: z.string().min(3).max(50),
  theme: z.object({
    primary: z.string().optional(),
    secondary: z.string().optional(),
    logo: z.string().optional(),
    background: z.string().optional()
  }).optional(),
  settings: z.object({
    isPublic: z.boolean().optional(),
    allowInvites: z.boolean().optional(),
    allowMultipleProfiles: z.boolean().optional(),
    features: z.array(z.string()).optional()
  }).optional(),
  userId: z.string().uuid(),
  profileName: z.string().optional(),
  profileTitle: z.string().optional(),
  profileId: z.string().uuid().optional()
})

type RequestBody = z.infer<typeof createWorkspaceSchema>

export default defineEventHandler((event) =>
  validateRequest(createWorkspaceSchema, async (event: H3Event, body: RequestBody) => {
    const config = useAppConfig()
    const { name, theme, settings, userId, profileName, profileTitle, profileId } = body

    // Get auth token from request
    const authHeader = getHeader(event, 'authorization')
    if (!authHeader?.startsWith('Bearer ')) {
      throw createError({
        statusCode: 401,
        message: 'Missing or invalid authorization header'
      })
    }
    const token = authHeader.split('Bearer ')[1]

    // Initialize Firebase with auth token
    const { dataConnect } = useFirebaseServer(token)
    if (!dataConnect) {
      throw createError({
        statusCode: 500,
        message: 'Failed to initialize Firebase connection'
      })
    }

    try {
      // Create workspace
      const workspaceResult = await dataConnect.mutation('workspace_insert', {
        data: {
          uid: makeUUID(),
          name,
          slug_expr: `slugify(${name})`,
          appId: config.appId,
          ownerId: userId,
          theme,
          settings: settings || {
            isPublic: false,
            allowInvites: true,
            allowMultipleProfiles: true,
            features: []
          }
        }
      })

      if (workspaceResult.errors?.length) {
        throw createError({
          statusCode: 400,
          message: 'Failed to create workspace',
          data: workspaceResult.errors
        })
      }

      const workspace = workspaceResult.data.workspace_insert

      // Check existing profiles
      const profilesResult = await dataConnect.query('profiles', {
        where: {
          userId: { eq: userId },
          appId: { eq: config.appId }
        }
      })

      let profile: Profile | undefined
      if (!profilesResult.data.profiles.length) {
        // Create first profile
        const profileResult = await dataConnect.mutation('profile_insert', {
          data: {
            uid: makeUUID(),
            userId,
            appId: config.appId,
            displayName: profileName || name,
            title: profileTitle,
            privacy: {
              isPublic: true,
              showEmail: false,
              showSocial: true,
              showSkills: true
            }
          }
        })

        if (profileResult.errors?.length) {
          throw createError({
            statusCode: 400,
            message: 'Failed to create profile',
            data: profileResult.errors
          })
        }
        profile = profileResult.data.profile_insert
      } else if (profileId) {
        profile = profilesResult.data.profiles.find((p: Profile) => p.uid === profileId)
      }

      // Add user to workspace with profile
      const membershipResult = await dataConnect.mutation('user_workspace_insert', {
        data: {
          userId,
          workspaceId: workspace.uid,
          appId: config.appId,
          role: 'OWNER',
          profileId: profile?.uid
        }
      })

      if (membershipResult.errors?.length) {
        throw createError({
          statusCode: 400,
          message: 'Failed to add user to workspace',
          data: membershipResult.errors
        })
      }

      return {
        data: {
          workspace,
          profile
        }
      } satisfies ApiResponse<{ workspace: Workspace; profile: Profile }>
    } catch (error: any) {
      event.context.error(error)
    }
  })
) 