import { useAppConfig } from '#imports'
import { useFirebaseServer } from '~/shared/utils/firebase-server'
import { makeUUID } from '~/shared/utils/data'
import type { H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
  try {
    const config = useAppConfig()
    const body = await readBody<{
      userId: string
      displayName: string
      title?: string
      bio?: string
      social?: {
        twitter?: string
        linkedin?: string
        github?: string
        website?: string
      }
      privacy?: {
        isPublic?: boolean
        showEmail?: boolean
        showSocial?: boolean
        showSkills?: boolean
      }
      workspaceId?: string
      token: string
    }>(event)

    const { dataConnect } = useFirebaseServer(body.token)
    if (!dataConnect) {
      throw createError({
        statusCode: 500,
        message: 'Failed to initialize Firebase connection'
      })
    }

    try {
      // Create profile
      const profilePayload = {
        uid: makeUUID(),
        userId: body.userId,
        appId: config.appId,
        displayName: body.displayName,
        title: body.title,
        bio: body.bio,
        social: body.social,
        privacy: body.privacy || {
          isPublic: true,
          showEmail: false,
          showSocial: true,
          showSkills: true
        }
      }

      const profileResult = await dataConnect.mutation('profile_insert', {
        data: profilePayload
      })

      if (profileResult.errors?.length) {
        throw profileResult.errors
      }

      // If workspaceId is provided, update the user's workspace profile
      if (body.workspaceId) {
        const membershipResult = await dataConnect.mutation('user_workspace_update', {
          key: { 
            userId: body.userId, 
            workspaceId: body.workspaceId 
          },
          data: { 
            profileId: profileResult.data.profile_insert.uid 
          }
        })

        if (membershipResult.errors?.length) {
          throw membershipResult.errors
        }
      }

      return {
        statusCode: 200,
        data: profileResult.data.profile_insert
      }
    } catch (error: any) {
      throw error
    }
  } catch (error: any) {
    return createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'An error occurred while creating profile'
    })
  }
}) 