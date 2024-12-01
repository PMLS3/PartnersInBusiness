import { useAppConfig } from '#imports'
import { useFirebaseServer } from '../../utils/firebase-server'
import { createUser, getUserByEmail } from 'one-person-empire'
import { makeUUID } from '../../../utils/data'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { email, username, displayName, photoURL } = body
    
    // Get Firebase token from request
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

    // Check if user exists
    const existingUser = await getUserByEmail(dataConnect, { email })
    if (existingUser) {
      throw createError({
        statusCode: 400,
        message: 'User already exists'
      })
    }

    // Create new user
    const result = await createUser(dataConnect, {
      uid: makeUUID(),
      email,
      username,
      displayName,
      photoURL,
      appIds: [useAppConfig().appId],
      searchableText: `${username} ${displayName || ''}`
    })

    if (result.errors?.length > 0) {
      throw createError({
        statusCode: 400,
        message: 'Failed to create user',
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