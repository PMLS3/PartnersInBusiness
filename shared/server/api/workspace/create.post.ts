import { useFirebaseServer } from '../../utils/firebase-server'
import { createWorkspace, createUserWorkspace } from 'one-person-empire'
import { makeUUID } from '../../../utils/data'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { name, description, theme, settings, userId } = body
    
    const token = getRequestHeader(event, 'authorization')?.split('Bearer ')[1]
    if (!token) {
      throw createError({
        statusCode: 401,
        message: 'Unauthorized - No token provided'
      })
    }

    const { dataConnect } = useFirebaseServer(token)
    if (!dataConnect) {
      throw createError({
        statusCode: 500,
        message: 'Failed to initialize Firebase connection'
      })
    }

    // Create workspace
    const workspaceId = makeUUID()
    const workspaceResult = await createWorkspace(dataConnect, {
      uid: workspaceId,
      name,
      description,
      theme,
      settings,
      ownerId: userId,
      appId: useAppConfig().appId,
      searchableText: `${name} ${description || ''}`
    })

    if (workspaceResult.errors?.length > 0) {
      throw createError({
        statusCode: 400,
        message: 'Failed to create workspace',
        data: workspaceResult.errors
      })
    }

    // Add user to workspace as owner
    const userWorkspaceResult = await createUserWorkspace(dataConnect, {
      userId,
      workspaceId,
      appId: useAppConfig().appId,
      role: 'OWNER'
    })

    if (userWorkspaceResult.errors?.length > 0) {
      throw createError({
        statusCode: 400,
        message: 'Failed to add user to workspace',
        data: userWorkspaceResult.errors
      })
    }

    return { 
      success: true, 
      data: { 
        workspace: workspaceResult,
        userWorkspace: userWorkspaceResult 
      }
    }
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Internal server error'
    })
  }
}) 