import { getAuth } from 'firebase-admin/auth'
import { H3Event } from 'h3'

export async function requireAuth(event: H3Event) {
  try {
    const authHeader = getHeader(event, 'authorization')
    if (!authHeader?.startsWith('Bearer ')) {
      throw createError({
        statusCode: 401,
        message: 'Missing or invalid authorization header'
      })
    }

    const token = authHeader.split('Bearer ')[1]
    const decodedToken = await getAuth().verifyIdToken(token)

    // Add user to event context
    event.context.auth = {
      uid: decodedToken.uid,
      email: decodedToken.email,
      emailVerified: decodedToken.email_verified
    }
  } catch (error: any) {
    throw createError({
      statusCode: 401,
      message: error.message || 'Unauthorized'
    })
  }
}

// Helper to get authenticated user from event context
export function getAuthUser(event: H3Event) {
  const auth = event.context.auth
  if (!auth) {
    throw createError({
      statusCode: 401,
      message: 'No authenticated user'
    })
  }
  return auth
} 