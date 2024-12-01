import { H3Event } from 'h3'
import { z } from 'zod'
import type { ApiError } from '~/shared/types/api'

export function validateRequest<T extends z.ZodType>(
  schema: T,
  handler: (event: H3Event, data: z.infer<T>) => Promise<any>
) {
  return async (event: H3Event) => {
    try {
      const body = await readBody(event)
      const data = await schema.parseAsync(body)
      return handler(event, data)
    } catch (error) {
      if (error instanceof z.ZodError) {
        const apiError: ApiError = {
          message: 'Validation error',
          code: 'VALIDATION_ERROR',
          details: {
            errors: error.errors.map(err => ({
              path: err.path.join('.'),
              message: err.message
            }))
          }
        }
        event.context.error(apiError)
      }
      throw error
    }
  }
}

// Common validation schemas
export const schemas = {
  uuid: z.string().uuid(),
  email: z.string().email(),
  username: z.string().min(3).max(30).regex(/^[a-zA-Z0-9_-]+$/),
  password: z.string().min(8),
  displayName: z.string().min(2).max(50),
  url: z.string().url().optional(),
  role: z.enum(['OWNER', 'ADMIN', 'MEMBER']),
  privacy: z.object({
    isPublic: z.boolean().optional(),
    showEmail: z.boolean().optional(),
    showSocial: z.boolean().optional(),
    showSkills: z.boolean().optional()
  }).optional(),
  social: z.object({
    twitter: z.string().optional(),
    linkedin: z.string().optional(),
    github: z.string().optional(),
    website: z.string().url().optional()
  }).optional()
} 