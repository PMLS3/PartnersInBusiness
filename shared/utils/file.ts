/**
 * Format a file size in bytes to a human-readable string
 */
export function formatFileSize(bytes: number): string {
  const units = ['B', 'KB', 'MB', 'GB', 'TB']
  let size = bytes
  let unitIndex = 0
  
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024
    unitIndex++
  }
  
  return `${size.toFixed(1)} ${units[unitIndex]}`
}

/**
 * Get a file's extension from its name
 */
export function getFileExtension(filename: string): string {
  return filename.split('.').pop()?.toLowerCase() || ''
}

/**
 * Check if a file is an image based on its MIME type
 */
export function isImageFile(type: string): boolean {
  return type.startsWith('image/')
}

/**
 * Check if a file is a document based on its MIME type
 */
export function isDocumentFile(type: string): boolean {
  const documentTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'text/plain',
    'text/csv',
  ]
  return documentTypes.includes(type)
}

/**
 * Generate a unique filename with timestamp
 */
export function generateUniqueFilename(originalName: string): string {
  const extension = getFileExtension(originalName)
  const timestamp = Date.now()
  const random = Math.random().toString(36).substring(2, 8)
  return `${timestamp}-${random}.${extension}`
}

/**
 * Convert a File object to a Base64 string
 */
export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })
}

/**
 * Convert a Base64 string to a Blob object
 */
export function base64ToBlob(base64: string, type: string): Blob {
  const byteString = atob(base64.split(',')[1])
  const ab = new ArrayBuffer(byteString.length)
  const ia = new Uint8Array(ab)
  
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i)
  }
  
  return new Blob([ab], { type })
}

/**
 * Get a file icon based on its type
 */
export function getFileIcon(type: string): string {
  if (isImageFile(type)) return 'ph:image-duotone'
  if (type === 'application/pdf') return 'ph:file-pdf-duotone'
  if (type.includes('word')) return 'ph:file-doc-duotone'
  if (type.includes('excel')) return 'ph:file-xls-duotone'
  if (type.includes('powerpoint')) return 'ph:file-ppt-duotone'
  if (type === 'text/plain') return 'ph:file-text-duotone'
  if (type === 'text/csv') return 'ph:file-csv-duotone'
  if (type.includes('zip')) return 'ph:file-zip-duotone'
  return 'ph:file-duotone'
}

/**
 * Validate a file's size and type
 */
export function validateFile(file: File, options: {
  maxSize?: number
  allowedTypes?: string[]
} = {}): void {
  const { maxSize = 50 * 1024 * 1024, allowedTypes } = options

  if (file.size > maxSize) {
    throw new Error(`File size must be less than ${formatFileSize(maxSize)}`)
  }

  if (allowedTypes && !allowedTypes.includes(file.type)) {
    throw new Error(`File type ${file.type} is not allowed`)
  }
}

/**
 * Create a thumbnail from an image file
 */
export async function createImageThumbnail(
  file: File,
  maxWidth: number = 200,
  maxHeight: number = 200
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    if (!isImageFile(file.type)) {
      reject(new Error('File is not an image'))
      return
    }

    const img = new Image()
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    img.onload = () => {
      let width = img.width
      let height = img.height

      if (width > height) {
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width)
          width = maxWidth
        }
      } else {
        if (height > maxHeight) {
          width = Math.round((width * maxHeight) / height)
          height = maxHeight
        }
      }

      canvas.width = width
      canvas.height = height

      ctx?.drawImage(img, 0, 0, width, height)

      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob)
          } else {
            reject(new Error('Failed to create thumbnail'))
          }
        },
        'image/jpeg',
        0.7
      )
    }

    img.onerror = () => reject(new Error('Failed to load image'))

    img.src = URL.createObjectURL(file)
  })
}
