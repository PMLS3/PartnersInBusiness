<script setup lang="ts">
import type { Workspace, WorkspaceStepData } from '../../../types'

definePageMeta({
  title: "Review Workspace",
  middleware: "auth",
})

useHead({
  title: "Review Workspace",
})

const {
  data: workspace,
  handleSubmit,
  checkPreviousSteps,
  currentStepId,
} = useMultiStepForm<Workspace, WorkspaceStepData>()

onBeforeMount(checkPreviousSteps)

const { user } = useAuth()

function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

watch(() => workspace.value, (newVal) => {
  console.log('Workspace data changed in confirm:', newVal)
}, { deep: true })
</script>

<template>
  <div>
    <WizardStepTitle />
    <div class="mx-auto w-full max-w-3xl px-4">
      <div class="bg-muted-50 dark:bg-muted-800 rounded-xl p-6">
        <!-- Workspace Type -->
        <div class="mb-6 flex items-center justify-between">
          <div>
            <BaseHeading
              tag="h3"
              size="sm"
              weight="medium"
              class="text-muted-800 dark:text-muted-100 mb-1"
            >
              Workspace Type
            </BaseHeading>
            <BaseParagraph class="text-muted-400 text-sm">
              {{ workspace.type }}
            </BaseParagraph>
          </div>
          <NuxtLink
            to="/workspace/create"
            class="text-primary-500 font-sans text-[0.65rem] font-semibold uppercase"
          >
            Edit
          </NuxtLink>
        </div>

        <!-- Workspace Details -->
        <div class="mb-6 flex items-center justify-between">
          <div>
            <BaseHeading
              tag="h3"
              size="sm"
              weight="medium"
              class="text-muted-800 dark:text-muted-100 mb-1"
            >
              Workspace Details
            </BaseHeading>
            <div class="flex items-center gap-4">
              <img
                v-if="workspace.icon"
                :src="workspace.icon"
                :alt="workspace.name"
                class="size-12 rounded-lg object-cover"
              />
              <div>
                <p class="text-muted-800 dark:text-muted-100 font-sans text-sm">
                  {{ workspace.name }}
                </p>
                <p
                  v-if="workspace.description"
                  class="text-muted-400 font-sans text-xs"
                >
                  {{ workspace.description }}
                </p>
              </div>
            </div>
          </div>
          <NuxtLink
            to="/workspace/create/details"
            class="text-primary-500 font-sans text-[0.65rem] font-semibold uppercase"
          >
            Edit
          </NuxtLink>
        </div>

        <!-- Workspace Members -->
        <div class="mb-6 flex items-center justify-between">
          <div>
            <BaseHeading
              tag="h3"
              size="sm"
              weight="medium"
              class="text-muted-800 dark:text-muted-100 mb-1"
            >
              Workspace Members
            </BaseHeading>
            <div class="flex flex-col gap-2">
              <div class="flex items-center gap-2">
                <BaseAvatar
                  :src="`https://api.dicebear.com/7.x/personas/svg?seed=${user.value?.email}`"
                  size="xs"
                />
                <p class="text-muted-800 dark:text-muted-100 font-sans text-sm">
                  {{ user.value?.email }} (Owner)
                </p>
              </div>
              <div
                v-for="email in workspace.members"
                :key="email"
                class="flex items-center gap-2"
              >
                <BaseAvatar
                  :src="`https://api.dicebear.com/7.x/personas/svg?seed=${email}`"
                  size="xs"
                />
                <p class="text-muted-800 dark:text-muted-100 font-sans text-sm">
                  {{ email }}
                </p>
              </div>
            </div>
          </div>
          <NuxtLink
            to="/workspace/create/members"
            class="text-primary-500 font-sans text-[0.65rem] font-semibold uppercase"
          >
            Edit
          </NuxtLink>
        </div>

        <!-- Workspace Files -->
        <div
          v-if="workspace.files?.length"
          class="mb-6 flex items-center justify-between"
        >
          <div>
            <BaseHeading
              tag="h3"
              size="sm"
              weight="medium"
              class="text-muted-800 dark:text-muted-100 mb-1"
            >
              Workspace Files
            </BaseHeading>
            <div class="flex flex-col gap-2">
              <div
                v-for="file in workspace.files"
                :key="file.name"
                class="flex items-center gap-2"
              >
                <div
                  class="bg-primary-500/20 text-primary-500 flex size-8 items-center justify-center rounded-lg"
                >
                  <Icon
                    :name="
                      file.type.startsWith('image/')
                        ? 'ph:image-duotone'
                        : file.type.startsWith('video/')
                        ? 'ph:video-camera-duotone'
                        : 'ph:file-duotone'
                    "
                    class="size-4"
                  />
                </div>
                <p class="text-muted-800 dark:text-muted-100 font-sans text-sm">
                  {{ file.name }}
                </p>
              </div>
            </div>
          </div>
          <NuxtLink
            to="/workspace/create/files"
            class="text-primary-500 font-sans text-[0.65rem] font-semibold uppercase"
          >
            Edit
          </NuxtLink>
        </div>

        <!-- Workspace Tools -->
        <div
          v-if="workspace.tools?.length"
          class="flex items-center justify-between"
        >
          <div>
            <BaseHeading
              tag="h3"
              size="sm"
              weight="medium"
              class="text-muted-800 dark:text-muted-100 mb-1"
            >
              Workspace Tools
            </BaseHeading>
            <div class="flex flex-wrap gap-2">
              <div
                v-for="tool in workspace.tools"
                :key="tool.name"
                class="bg-muted-100 dark:bg-muted-700 flex items-center gap-2 rounded-lg px-3 py-2"
              >
                <img :src="tool.logo" :alt="tool.name" class="size-4" />
                <span class="text-muted-800 dark:text-muted-100 font-sans text-xs">
                  {{ tool.name }}
                </span>
              </div>
            </div>
          </div>
          <NuxtLink
            to="/workspace/create/tools"
            class="text-primary-500 font-sans text-[0.65rem] font-semibold uppercase"
          >
            Edit
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
