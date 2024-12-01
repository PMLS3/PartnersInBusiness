<script setup lang="ts">
import type { Workspace, WorkspaceStepData, Tool } from '../../../types'

definePageMeta({
  title: "Workspace Tools",
  middleware: "auth",
})

useHead({
  title: "Workspace Tools",
})

const {
  data: workspace,
  errors,
  handleSubmit,
  checkPreviousSteps,
  currentStepId,
} = useMultiStepForm<Workspace, WorkspaceStepData>()

onBeforeMount(checkPreviousSteps)

const availableTools: Tool[] = [
  {
    name: 'Notion',
    logo: '/img/tools/notion.svg',
    description: 'All-in-one workspace for your notes, tasks, and collaboration'
  },
  {
    name: 'Slack',
    logo: '/img/tools/slack.svg',
    description: 'Business communication platform for team collaboration'
  },
  {
    name: 'GitHub',
    logo: '/img/tools/github.svg',
    description: 'Development platform for version control and collaboration'
  },
  {
    name: 'Figma',
    logo: '/img/tools/figma.svg',
    description: 'Design tool for interface design and prototyping'
  },
  {
    name: 'Jira',
    logo: '/img/tools/jira.svg',
    description: 'Project management tool for agile teams'
  },
  {
    name: 'Google Drive',
    logo: '/img/tools/google-drive.svg',
    description: 'Cloud storage and file sharing platform'
  }
]

const selectedTools = ref<Tool[]>([])

function toggleTool(tool: Tool) {
  const index = selectedTools.value.findIndex(t => t.name === tool.name)
  if (index === -1) {
    selectedTools.value.push(tool)
  } else {
    selectedTools.value.splice(index, 1)
  }
  workspace.value.tools = selectedTools.value
}

function isSelected(tool: Tool) {
  return selectedTools.value.some(t => t.name === tool.name)
}

watch(() => workspace.value, (newVal) => {
  console.log('Workspace data changed in tools:', newVal)
}, { deep: true })
</script>

<template>
  <div>
    <WizardStepTitle />
    <div class="mx-auto w-full max-w-6xl px-4">
      <div class="ltablet:grid-cols-3 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="tool in availableTools"
          :key="tool.name"
          class="dark:hover:bg-muted-800 hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 group rounded-2xl p-5 transition-all duration-300 hover:bg-white hover:shadow-xl"
          :class="[
            isSelected(tool)
              ? 'dark:bg-muted-800 shadow-muted-300/30 dark:shadow-muted-800/30 bg-white shadow-xl'
              : '',
          ]"
          @click="toggleTool(tool)"
        >
          <div class="flex items-center gap-4">
            <img :src="tool.logo" :alt="tool.name" class="size-12" />
            <div>
              <BaseHeading
                tag="h3"
                weight="medium"
                size="sm"
                class="text-muted-800 dark:text-muted-100 mb-1"
              >
                {{ tool.name }}
              </BaseHeading>
              <BaseParagraph class="text-muted-400 text-xs">
                {{ tool.description }}
              </BaseParagraph>
            </div>
          </div>
          <div class="mt-4 flex items-center justify-between">
            <div
              class="text-primary-500 font-sans text-[0.65rem] font-semibold uppercase"
            >
              {{ isSelected(tool) ? 'Selected' : 'Select' }}
            </div>
            <div
              class="bg-primary-500/20 text-primary-500 flex size-8 items-center justify-center rounded-lg"
            >
              <Icon
                :name="isSelected(tool) ? 'lucide:check' : 'lucide:plus'"
                class="size-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
