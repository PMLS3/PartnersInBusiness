import { H3Event } from 'h3'

export interface ApiError {
  statusCode: number
  message: string
  code?: string
  details?: Record<string, any>
}

export function isApiError(error: any): error is ApiError {
  return error && typeof error === 'object' && 'statusCode' in error
}

export default defineEventHandler((event: H3Event) => {
  // Add global error handler
  event.context.error = (error: Error | ApiError) => {
    console.error('[API Error]', error)

    // If it's already an API error, use it directly
    if (isApiError(error)) {
      throw createError({
        statusCode: error.statusCode,
        message: error.message,
        data: {
          code: error.code,
          details: error.details
        }
      })
    }

    // For unknown errors, return a generic 500 error
    throw createError({
      statusCode: 500,
      message: 'Internal server error',
      data: {
        code: 'INTERNAL_ERROR',
        details: process.env.NODE_ENV === 'development' ? {
          message: error.message,
          stack: error.stack
        } : undefined
      }
    })
  }
}) 