import { useRuntimeConfig } from '#imports'

interface GraphQLResponse<T> {
  data: T
  errors?: Array<{
    message: string
    locations: Array<{
      line: number
      column: number
    }>
    path: string[]
  }>
}

export async function gqlQuery<T = any>(
  query: string,
  variables?: Record<string, any>
): Promise<GraphQLResponse<T>> {
  const config = useRuntimeConfig()
  const endpoint = config.public.dataconnectEndpoint as string
  const apiKey = config.dataconnectApiKey as string
  
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      query,
      variables
    })
  })

  const result = await response.json()

  if (result.errors) {
    throw new Error(result.errors[0].message)
  }

  return result
}

export async function gqlMutation<T = any>(
  mutation: string,
  variables?: Record<string, any>
): Promise<GraphQLResponse<T>> {
  return gqlQuery<T>(mutation, variables)
}

// Type-safe query/mutation helpers
export function createTypedQuery<TVariables extends Record<string, any>, TData>(query: string) {
  return (variables: TVariables) => gqlQuery<TData>(query, variables)
}

export function createTypedMutation<TVariables extends Record<string, any>, TData>(mutation: string) {
  return (variables: TVariables) => gqlMutation<TData>(mutation, variables)
} 