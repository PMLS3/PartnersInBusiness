import { ref } from 'vue'
import { useToaster } from './useToaster'
import { useLoading } from './useLoading'

export interface UploadFile {
  file: File
  type: string
  name: string
  size: number
}

export interface UploadResult {
  src: string
  name: string
  type: string
  size: number
}

export function useFileUpload() {
  const toaster = useToaster()
  const loading = useLoading()
  const progress = ref(0)
  const isUploading = ref(false)

  const uploadFile = async (
    file: UploadFile,
    onProgress?: (progress: number) => void
  ): Promise<UploadResult | null> => {
    if (!file) return null

    const formData = new FormData()
    formData.append('file', file.file)

    try {
      isUploading.value = true
      progress.value = 0
      loading.start()

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          )
          progress.value = percentCompleted
          onProgress?.(percentCompleted)
        },
      })

      if (!response.ok) {
        throw new Error('Failed to upload file')
      }

      const result = await response.json()

      return {
        src: result.url,
        name: file.name,
        type: file.type,
        size: file.size,
      }
    } catch (error) {
      console.error('Error uploading file:', error)
      toaster.show({
        title: 'Error',
        message: 'Failed to upload file',
        color: 'danger',
        icon: 'ph:warning-circle-duotone',
        closable: true,
      })
      return null
    } finally {
      isUploading.value = false
      progress.value = 0
      loading.stop()
    }
  }

  const validateFile = (file: File, options: {
    maxSize?: number
    allowedTypes?: string[]
  } = {}) => {
    const { maxSize = 50 * 1024 * 1024, allowedTypes } = options

    if (file.size > maxSize) {
      throw new Error(`File size must be less than ${formatFileSize(maxSize)}`)
    }

    if (allowedTypes && !allowedTypes.includes(file.type)) {
      throw new Error(`File type ${file.type} is not allowed`)
    }
  }

  const formatFileSize = (bytes: number) => {
    const units = ['B', 'KB', 'MB', 'GB']
    let size = bytes
    let unitIndex = 0
    
    while (size >= 1024 && unitIndex < units.length - 1) {
      size /= 1024
      unitIndex++
    }
    
    return `${size.toFixed(1)} ${units[unitIndex]}`
  }

  return {
    uploadFile,
    validateFile,
    formatFileSize,
    progress,
    isUploading,
  }
}
