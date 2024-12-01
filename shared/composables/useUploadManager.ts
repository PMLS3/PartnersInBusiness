import { ref } from 'vue'
import { useFileUpload, type UploadFile, type UploadResult } from './useFileUpload'
import { useToaster } from './useToaster'

export interface UploadTask {
  id: string
  file: UploadFile
  status: 'pending' | 'uploading' | 'completed' | 'error'
  progress: number
  result?: UploadResult
  error?: Error
}

export function useUploadManager() {
  const { uploadFile, validateFile } = useFileUpload()
  const toaster = useToaster()
  
  const tasks = ref<Map<string, UploadTask>>(new Map())
  const activeUploads = ref(0)

  const uploadAndProcessFile = async (
    file: UploadFile,
    onProgress?: (progress: number) => void
  ): Promise<UploadResult | null> => {
    const taskId = crypto.randomUUID()

    try {
      // Validate file before upload
      validateFile(file.file, {
        maxSize: 50 * 1024 * 1024, // 50MB
        allowedTypes: [
          'image/jpeg',
          'image/png',
          'image/gif',
          'image/webp',
          'application/pdf',
          'application/msword',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          'application/vnd.ms-excel',
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          'application/vnd.ms-powerpoint',
          'application/vnd.openxmlformats-officedocument.presentationml.presentation',
          'text/plain',
          'text/csv',
          'application/json',
          'application/zip',
          'application/x-zip-compressed',
        ],
      })

      // Create upload task
      const task: UploadTask = {
        id: taskId,
        file,
        status: 'pending',
        progress: 0,
      }
      tasks.value.set(taskId, task)
      activeUploads.value++

      // Start upload
      task.status = 'uploading'
      const result = await uploadFile(file, (progress) => {
        task.progress = progress
        onProgress?.(progress)
      })

      if (!result) {
        throw new Error('Upload failed')
      }

      // Update task with result
      task.status = 'completed'
      task.result = result
      task.progress = 100

      return result
    } catch (error) {
      console.error('Error in upload manager:', error)
      
      // Update task with error
      const task = tasks.value.get(taskId)
      if (task) {
        task.status = 'error'
        task.error = error as Error
      }

      toaster.show({
        title: 'Error',
        message: error.message || 'Failed to upload file',
        color: 'danger',
        icon: 'ph:warning-circle-duotone',
        closable: true,
      })

      return null
    } finally {
      activeUploads.value--
    }
  }

  const getTask = (taskId: string): UploadTask | undefined => {
    return tasks.value.get(taskId)
  }

  const removeTask = (taskId: string) => {
    tasks.value.delete(taskId)
  }

  const clearCompletedTasks = () => {
    for (const [taskId, task] of tasks.value.entries()) {
      if (task.status === 'completed' || task.status === 'error') {
        tasks.value.delete(taskId)
      }
    }
  }

  return {
    uploadAndProcessFile,
    getTask,
    removeTask,
    clearCompletedTasks,
    tasks,
    activeUploads,
  }
}
