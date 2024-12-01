import { useFirebaseServer } from '../../utils/firebase-server'
import { createProfile } from 'one-person-empire'
import { makeUUID } from '../../../utils/data'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { 
      userId, 
      displayName, 
      title, 
      bio, 
      avatar, 
      skills, 
      social, 
      privacy 
    } = body
    
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

    const result = await createProfile(dataConnect, {
      uid: makeUUID(),
      userId,
      appId: useAppConfig().appId,
      displayName,
      title,
      bio,
      avatar,
      skills,
      social,
      privacy,
      searchableText: `${displayName} ${title || ''} ${bio || ''}`
    })

    if (result.errors?.length > 0) {
      throw createError({
        statusCode: 400,
        message: 'Failed to create profile',
        data: result.errors
      })
    }

    return { success: true, data: result }
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Internal server error'
    })
  }
}) 