<script setup lang="ts">
import type { Workspace, WorkspaceStepData } from '../../../types'

definePageMeta({
  title: "Workspace Files",
  middleware: "auth",
})

useHead({
  title: "Workspace Files",
})

const {
  data: workspace,
  errors,
  handleSubmit,
  checkPreviousSteps,
  currentStepId,
} = useMultiStepForm<Workspace, WorkspaceStepData>()

onBeforeMount(checkPreviousSteps)

const { uploadAndProcessFile } = useUploadManager()
const isUploading = ref(false)
const uploadProgress = ref(0)

const onFileDropped = async (files: FileList) => {
  if (!files.length) return

  isUploading.value = true
  uploadProgress.value = 0
  
  try {
    const uploadPromises = Array.from(files).map(async (file) => {
      if (file.size > 50 * 1024 * 1024) { // 50MB limit
        throw new Error(`File ${file.name} exceeds 50MB limit`)
      }

      const uploadFile = {
        file,
        type: file.type,
        name: file.name,
        size: file.size
      }

      const result = await uploadAndProcessFile(uploadFile, (progress) => {
        uploadProgress.value = progress
      })

      if (!result) throw new Error(`Failed to upload ${file.name}`)

      return {
        name: file.name,
        size: file.size,
        type: file.type,
        url: result.src
      }
    })

    const results = await Promise.all(uploadPromises)
    workspace.value.files = [...(workspace.value.files || []), ...results]
    errors.value.fields.files = undefined
  } catch (error) {
    console.error('Error uploading files:', error)
    errors.value.fields.files = error.message
  } finally {
    isUploading.value = false
    uploadProgress.value = 0
  }
}

function removeFile(index: number) {
  if (!workspace.value.files) return
  workspace.value.files = workspace.value.files.filter((_, i) => i !== index)
}

function formatFileSize(bytes: number) {
  const units = ['B', 'KB', 'MB', 'GB']
  let size = bytes
  let unitIndex = 0
  
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024
    unitIndex++
  }
  
  return `${size.toFixed(1)} ${units[unitIndex]}`
}

watch(() => workspace.value, (newVal) => {
  console.log('Workspace data changed in files:', newVal)
}, { deep: true })
</script>

<template>
  <div>
    <WizardStepTitle />
    <div class="mx-auto w-full max-w-3xl px-4">
      <!-- File upload area -->
      <FormFullscreenDropfile
        :error="errors.fields.files"
        icon="ph:upload-duotone"
        @drop="onFileDropped"
      >
        <div class="flex flex-col items-center justify-center">
          <BaseHeading
            tag="h3"
            size="sm"
            weight="medium"
            class="text-muted-800 dark:text-muted-100 mb-2"
          >
            Drop files here or click to upload
          </BaseHeading>
          <BaseParagraph class="text-muted-400 text-sm">
            Maximum file size: 50MB
          </BaseParagraph>
          <div v-if="isUploading" class="mt-4 w-48">
            <BaseProgress
              :value="uploadProgress"
              size="xs"
              color="primary"
              :label="`${uploadProgress}%`"
            />
          </div>
        </div>
      </FormFullscreenDropfile>

      <!-- File list -->
      <div v-if="workspace.files?.length" class="mt-6 space-y-4">
        <div
          v-for="(file, index) in workspace.files"
          :key="index"
          class="bg-muted-50 dark:bg-muted-800 flex items-center justify-between rounded-lg p-4"
        >
          <div class="flex items-center gap-3">
            <div
              class="bg-primary-500/20 text-primary-500 flex size-10 items-center justify-center rounded-lg"
            >
              <Icon
                :name="
                  file.type.startsWith('image/')
                    ? 'ph:image-duotone'
                    : file.type.startsWith('video/')
                    ? 'ph:video-camera-duotone'
                    : 'ph:file-duotone'
                "
                class="size-5"
              />
            </div>
            <div>
              <p class="text-muted-800 dark:text-muted-100 font-sans text-sm">
                {{ file.name }}
              </p>
              <p class="text-muted-400 font-sans text-xs">
                {{ formatFileSize(file.size) }}
              </p>
            </div>
          </div>
          <BaseButtonIcon
            color="danger"
            rounded="full"
            @click="removeFile(index)"
          >
            <Icon name="lucide:x" class="size-4" />
          </BaseButtonIcon>
        </div>
      </div>

      <!-- Empty state -->
      <div
        v-else
        class="bg-muted-50 dark:bg-muted-800 mt-6 flex flex-col items-center justify-center rounded-lg p-8"
      >
        <img
          src="/img/illustrations/workspace/files.svg"
          alt="No files"
          class="mb-4 w-48"
        />
        <BaseHeading
          tag="h3"
          size="sm"
          weight="medium"
          class="text-muted-800 dark:text-muted-100 mb-2"
        >
          No files uploaded yet
        </BaseHeading>
        <BaseParagraph class="text-muted-400 text-sm">
          Upload files to your workspace by dragging and dropping them above.
        </BaseParagraph>
      </div>
    </div>
  </div>
</template>
