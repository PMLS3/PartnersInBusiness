<script setup lang="ts">
import { serverTimestamp } from 'firebase/firestore'

interface Workspace {
  type: 'personal' | 'team' | 'enterprise'
  name?: string
  description?: string
  members?: string[]
  icon?: string | null
  files?: Array<{
    name: string
    size: number
    type: string
    url: string
  }> | null
  createdBy?: string
  createdAt?: any
}

interface WorkspaceStepMeta {
  name: string
  title: string
  subtitle: string
}

definePageMeta({
  title: "Create Workspace",
  middleware: "auth",
  layout: "empty",
})

useHead({
  titleTemplate: (title) =>
    `${title} | Workspace - Step ${currentStepId.value + 1}`,
})

const router = useRouter()
const { createWorkspace } = useWorkspace()
const toaster = useToaster()
const { user } = useAuth()

const initialState = ref<Workspace>({
  type: 'personal',
  name: '',
  description: '',
  members: [],
  files: [],
  icon: null,
  createdBy: user.value?.uid || null,
  createdAt: serverTimestamp()
})

const { handleSubmit, currentStepId, data: workspace, goToStep } = provideMultiStepForm<Workspace, WorkspaceStepMeta>({
  initialState,
  validateOnMount: false,
  steps: [
    {
      to: '/workspace/create',
      meta: {
        name: 'Type',
        title: 'Select workspace type',
        subtitle: 'Choose the type of workspace that best fits your needs',
      },
      validate({ data, setFieldError, resetFieldError }) {
        console.log('Validating type step:', { 
          data: data.value,
          currentStepId: currentStepId.value 
        })
        resetFieldError('type')
        if (!data.value.type) {
          console.log('Type validation failed: no type selected')
          setFieldError('type', 'Please select a workspace type')
          return false
        }
        console.log('Type validation passed')
        return true
      }
    },
    {
      to: '/workspace/create/details',
      meta: {
        name: 'Details',
        title: 'What is this workspace about?',
        subtitle: 'Add essential information about your workspace',
      },
      validate({ data, setFieldError, resetFieldError }) {
        console.log('Validating details step:', { 
          data: data.value,
          currentStepId: currentStepId.value 
        })
        resetFieldError(['name'])
        if (!data.value.name?.trim()) {
          console.log('Details validation failed: no name entered')
          setFieldError('name', 'Please enter a workspace name')
          return false
        }
        console.log('Details validation passed')
        return true
      },
    },
    {
      to: '/workspace/create/members',
      meta: {
        name: 'Members',
        title: 'Who will be part of this workspace?',
        subtitle: 'Start by adding members to your workspace',
      },
    },
    {
      to: '/workspace/create/files',
      meta: {
        name: 'Files',
        title: 'Upload workspace files',
        subtitle: 'Add files to your workspace if you have them handy. Don\'t worry, you can also manage files later.',
      },
    },
    {
      to: '/workspace/create/tools',
      meta: {
        name: 'Tools',
        title: 'Add tools to your workspace',
        subtitle: 'Tools are like apps, but for your workspace',
      },
    },
    {
      to: '/workspace/create/confirm',
      meta: {
        name: 'Review',
        title: 'Review your workspace',
        subtitle: 'Make sure everything is correct before creating your workspace',
        preview: true,
      },
    },
  ],
  async onSubmit(values) {
    console.log('Form submitted with values:', values)
    try {
      await createWorkspace({
        name: values.name!,
        type: values.type,
        description: values.description,
      })

      toaster.show({
        title: 'Success',
        message: 'Workspace created successfully',
        color: 'success',
        icon: 'ph:check-circle-duotone',
        closable: true,
      })

      // Redirect to the workspace dashboard
      router.push('/dashboard')
    } catch (error) {
      console.error('Error creating workspace:', error)
      toaster.show({
        title: 'Error',
        message: 'Failed to create workspace',
        color: 'danger',
        icon: 'ph:warning-circle-duotone',
        closable: true,
      })
    }
  },
})

function onSelectType(type: Workspace['type']) {
  console.log('Type selected:', type)
  workspace.value.type = type
  handleSubmit()
}
</script>

<template>
  <form action="" method="POST" novalidate @submit.prevent="handleSubmit">
    <SidebarLayout
      :toolbar="false"
      :sidebar="false"
      class="bg-muted-100 dark:bg-muted-900 min-h-screen w-full"
    >
      <template #logo>
        <NuxtLink
          to="/"
          class="text-muted-400 hover:text-primary-500 hover:bg-primary-500/20 flex size-12 items-center justify-center rounded-2xl transition-colors duration-300"
          @click.prevent="$router.back()"
        >
          <Icon name="lucide:arrow-left" class="size-5" />
        </NuxtLink>
      </template>

      <WizardNavigation />

      <div class="pb-32 pt-24">
        <NuxtPage />
      </div>
      <WizardButtons />
    </SidebarLayout>
  </form>
</template>
