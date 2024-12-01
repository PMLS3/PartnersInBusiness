import { v4 as uuidv4 } from 'uuid'

export function makeUUID(): string {
  return uuidv4()
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
} 