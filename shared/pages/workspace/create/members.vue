<script setup lang="ts">
import type { Workspace, WorkspaceStepData } from '../../../types'

definePageMeta({
  title: "Workspace Members",
  middleware: "auth",
})

useHead({
  title: "Workspace Members",
})

const {
  data: workspace,
  errors,
  handleSubmit,
  checkPreviousSteps,
  currentStepId,
} = useMultiStepForm<Workspace, WorkspaceStepData>()

onBeforeMount(checkPreviousSteps)

const { user } = useAuth()
const memberEmails = ref<string[]>([])
const newMemberEmail = ref('')

const isValidEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

function addMember() {
  if (!newMemberEmail.value) {
    errors.value.fields.members = 'Please enter an email address'
    return
  }

  if (!isValidEmail(newMemberEmail.value)) {
    errors.value.fields.members = 'Please enter a valid email address'
    return
  }

  if (memberEmails.value.includes(newMemberEmail.value)) {
    errors.value.fields.members = 'This member has already been added'
    return
  }

  if (newMemberEmail.value === user.value?.email) {
    errors.value.fields.members = 'You are already a member of this workspace'
    return
  }

  memberEmails.value.push(newMemberEmail.value)
  workspace.value.members = memberEmails.value
  newMemberEmail.value = ''
  errors.value.fields.members = undefined
}

function removeMember(email: string) {
  memberEmails.value = memberEmails.value.filter(e => e !== email)
  workspace.value.members = memberEmails.value
}

watch(() => workspace.value, (newVal) => {
  console.log('Workspace data changed in members:', newVal)
}, { deep: true })
</script>

<template>
  <div>
    <WizardStepTitle />
    <div class="mx-auto w-full max-w-3xl px-4">
      <div class="mb-6">
        <div class="flex gap-2">
          <FormInput
            v-model="newMemberEmail"
            :error="errors.fields.members"
            type="email"
            placeholder="Enter member email"
            rounded="lg"
            :classes="{
              input: 'h-12',
            }"
            @keyup.enter="addMember"
          />
          <BaseButton
            color="primary"
            rounded="lg"
            class="h-12 w-24"
            @click="addMember"
          >
            Add
          </BaseButton>
        </div>
      </div>

      <!-- Member list -->
      <div v-if="memberEmails.length > 0" class="space-y-4">
        <div
          v-for="email in memberEmails"
          :key="email"
          class="bg-muted-50 dark:bg-muted-800 flex items-center justify-between rounded-lg p-4"
        >
          <div class="flex items-center gap-3">
            <BaseAvatar
              :src="`https://api.dicebear.com/7.x/personas/svg?seed=${email}`"
              size="sm"
            />
            <span class="text-muted-800 dark:text-muted-100 font-sans text-sm">
              {{ email }}
            </span>
          </div>
          <BaseButtonIcon
            color="danger"
            rounded="full"
            @click="removeMember(email)"
          >
            <Icon name="lucide:x" class="size-4" />
          </BaseButtonIcon>
        </div>
      </div>

      <!-- Empty state -->
      <div
        v-else
        class="bg-muted-50 dark:bg-muted-800 flex flex-col items-center justify-center rounded-lg p-8"
      >
        <img
          src="/img/illustrations/workspace/members.svg"
          alt="No members"
          class="mb-4 w-48"
        />
        <BaseHeading
          tag="h3"
          size="sm"
          weight="medium"
          class="text-muted-800 dark:text-muted-100 mb-2"
        >
          No members yet
        </BaseHeading>
        <BaseParagraph class="text-muted-400 text-sm">
          Start adding members to your workspace by entering their email address
          above.
        </BaseParagraph>
      </div>
    </div>
  </div>
</template>
