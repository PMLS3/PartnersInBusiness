import { useAppConfig } from '#imports'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useFirebaseServer } from '~/shared/utils/firebase-server'
import { makeUUID } from '~/shared/utils/data'
import type { H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
  try {
    const config = useAppConfig()
    const body = await readBody<{
      email: string
      password: string
      username: string
      displayName?: string
      token: string
    }>(event)

    const { auth, dataConnect } = useFirebaseServer(body.token)
    if (!dataConnect) {
      throw createError({
        statusCode: 500,
        message: 'Failed to initialize Firebase connection'
      })
    }

    try {
      // Create Firebase user
      const { user: firebaseUser } = await createUserWithEmailAndPassword(
        auth,
        body.email,
        body.password
      )

      // Create user in DataConnect
      const userPayload = {
        uid: makeUUID(),
        email: body.email,
        username: body.username,
        displayName: body.displayName,
        photoURL: firebaseUser.photoURL,
        appIds: [config.appId]
      }

      const result = await dataConnect.mutation('user_insert', {
        data: userPayload
      })

      if (result.errors?.length) {
        throw result.errors
      }

      return {
        statusCode: 200,
        data: result.data.user_insert
      }
    } catch (error: any) {
      // Handle specific Firebase errors
      if (error.code === 'auth/email-already-in-use') {
        throw createError({
          statusCode: 400,
          message: 'Email already registered',
          code: 'EMAIL_EXISTS'
        })
      }
      if (error.code === 'auth/invalid-email') {
        throw createError({
          statusCode: 400,
          message: 'Invalid email format',
          code: 'INVALID_EMAIL'
        })
      }
      if (error.code === 'auth/weak-password') {
        throw createError({
          statusCode: 400,
          message: 'Password is too weak',
          code: 'WEAK_PASSWORD'
        })
      }
      throw error
    }
  } catch (error: any) {
    return createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'An error occurred while registering user'
    })
  }
}) 