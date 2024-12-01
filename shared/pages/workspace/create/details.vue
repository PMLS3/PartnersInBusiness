<script setup lang="ts">
import type { Workspace, WorkspaceStepData } from '../../../types'

definePageMeta({
  title: "Workspace Details",
  middleware: "auth",
})

useHead({
  title: "Workspace Details",
})

const {
  data: workspace,
  errors,
  handleSubmit,
  checkPreviousSteps,
  currentStepId,
} = useMultiStepForm<Workspace, WorkspaceStepData>()

console.log('Details component mounted:', {
  workspace: workspace.value,
  currentStepId: currentStepId.value,
  errors: errors.value
})

onBeforeMount(checkPreviousSteps)

onMounted(() => {
  console.log('Details component mounted with workspace:', workspace.value)
})

const { uploadAndProcessFile } = useUploadManager()

const inputFile = ref<FileList | null>(null)
const avatarPreview = useNinjaFilePreview(() => inputFile.value?.item(0) || null)
const isUploading = ref(false)

watch(inputFile, async (value) => {
  const file = value?.item(0) || null
  if (file) {
    if (file.size > 2 * 1024 * 1024) { // 2MB limit
      errors.value.fields.icon = 'File size must be less than 2MB'
      inputFile.value = null
      return
    }
    isUploading.value = true
    try {
      const uploadFile: UploadFile = {
        file,
        type: file.type,
        name: file.name,
        size: file.size
      }
      const result = await uploadAndProcessFile(uploadFile)
      if (result) {
        workspace.value.icon = result.src
        errors.value.fields.icon = undefined
      }
    } catch (error) {
      console.error('Error uploading file:', error)
      errors.value.fields.icon = 'Failed to upload file'
    } finally {
      isUploading.value = false
    }
  } else {
    workspace.value.icon = null
    errors.value.fields.icon = undefined
  }
})

watch(() => workspace.value, (newVal) => {
  console.log('Workspace data changed in details:', newVal)
}, { deep: true })

watch(() => currentStepId.value, (newVal) => {
  console.log('Current step changed in details:', newVal)
})
</script>

<template>
  <div>
    <WizardStepTitle />

    <div class="mx-auto flex w-full max-w-5xl flex-col px-4">
      <div class="flex items-center justify-center">
        <FormFullscreenDropfile
          icon="ph:image-duotone"
          :filter-file-dropped="(file) => file.type.startsWith('image')"
          @drop="
            (value) => {
              inputFile = value
            }
          "
        />
        <FormInputFileHeadless
          v-slot="{ open, remove, files }"
          v-model="inputFile"
          accept="image/*"
        >
          <div class="relative size-20">
            <img
              v-if="avatarPreview"
              :src="avatarPreview"
              alt="Upload preview"
              class="bg-muted-200 dark:bg-muted-700/60 size-20 rounded-full object-cover object-center"
            />
            <img
              v-else
              src="/img/avatars/placeholder-file.png"
              alt="Upload preview"
              class="bg-muted-200 dark:bg-muted-700/60 size-20 rounded-full object-cover object-center"
            />
            <div
              v-if="isUploading"
              class="absolute inset-0 flex items-center justify-center rounded-full bg-black/50"
            >
              <BaseProgress size="xs" :value="100" color="primary" class="w-12" indeterminate />
            </div>
            <div
              v-if="files?.length && files.item(0)"
              class="absolute bottom-0 end-0 z-20"
            >
              <BaseButtonIcon
                size="sm"
                rounded="full"
                tooltip="Remove image"
                @click="remove(files.item(0)!)"
              >
                <Icon name="lucide:x" class="size-4" />
              </BaseButtonIcon>
            </div>
            <div v-else class="absolute bottom-0 end-0 z-20">
              <div class="relative" tooltip="Upload image">
                <BaseButtonIcon size="sm" rounded="full" @click="open">
                  <Icon name="lucide:plus" class="size-4" />
                </BaseButtonIcon>
              </div>
            </div>
          </div>
        </FormInputFileHeadless>
        <FormInputHelpText v-if="errors.fields.icon" color="danger">
          {{ errors.fields.icon }}
        </FormInputHelpText>
      </div>

      <div class="my-4 text-center font-sans">
        <p class="text-muted-500 text-sm">Upload a workspace logo</p>
        <p class="text-muted-400 text-xs">File size cannot exceed 2MB</p>
      </div>

      <div class="mx-auto flex w-full max-w-sm flex-col gap-3">
        <FormInput
          v-model="workspace.name"
          :error="errors.fields.name"
          rounded="lg"
          placeholder="Workspace name"
          :classes="{
            input: 'h-12 text-base text-center',
          }"
        />
        <FormTextarea
          v-model="workspace.description"
          :error="errors.fields.description"
          rounded="lg"
          placeholder="Describe your workspace..."
          autogrow
          class="max-h-52"
        />
      </div>

    </div>
  </div>
</template>
