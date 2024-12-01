<script setup lang="ts">
import type { Workspace, WorkspaceStepData, WorkspaceType } from '../../../types'

interface Workspace {
  type: WorkspaceType
  name?: string
  description?: string
  members?: string[]
}

interface WorkspaceStepData {
  type: WorkspaceType
  name?: string
  description?: string
  members?: string[]
}

definePageMeta({
  title: "Workspace Type",
  middleware: "auth",
})

useHead({
  title: "Workspace Type",
})

const {
  getNextStep,
  data: workspace,
  handleSubmit,
  goToStep,
  errors,
} = useMultiStepForm<Workspace, WorkspaceStepData>()

function onSelectType(type: WorkspaceType) {
  console.log('Type selection started:', type)
  const next = getNextStep()
  console.log('Next step:', next)
  workspace.value.type = type
  console.log('Workspace data after type set:', workspace.value)
  console.log('Current errors:', errors.value)
  handleSubmit()
  if (next) {
    console.log('Navigating to next step:', next)
    goToStep(next)
  }
}
</script>

<template>
  <div>
    <WizardStepTitle />
    <div class="mx-auto w-full max-w-6xl px-4 text-center">
      <div class="ltablet:grid-cols-3 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <!-- Personal Workspace -->
        <div
          class="dark:hover:bg-muted-800 hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 group rounded-2xl p-5 transition-all duration-300 hover:bg-white hover:shadow-xl"
          :class="[
            workspace.type === 'personal'
              ? 'dark:bg-muted-800 shadow-muted-300/30 dark:shadow-muted-800/30 bg-white shadow-xl'
              : '',
          ]"
        >
          <img
            class="rounded-2xl"
            src="/img/illustrations/wizard/design.svg"
            alt="Personal workspace"
          />
          <div class="my-4">
            <BaseHeading
              tag="h3"
              weight="medium"
              size="xl"
              class="text-muted-800 dark:text-muted-100 mb-2"
            >
              <span>Personal</span>
            </BaseHeading>
            <BaseParagraph class="text-muted-400">
              <span>
                A private workspace for your personal projects and tasks.
              </span>
            </BaseParagraph>
          </div>
          <div class="mb-5 flex flex-col items-center">
            <BaseButton
              color="primary"
              rounded="lg"
              class="w-36"
              @click="() => onSelectType('personal')"
            >
              <span>
                {{ workspace.type === "personal" ? "Selected" : "Continue" }}
              </span>
            </BaseButton>
            <div class="mt-4 text-center">
              <NuxtLink
                to="/workspace/create"
                class="text-muted-400 hover:text-primary-500 font-sans text-[0.65rem] font-semibold uppercase opacity-0 transition-all duration-300 group-hover:opacity-100"
              >
                <span>Learn More</span>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Team Workspace -->
        <div
          class="dark:hover:bg-muted-800 hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 group rounded-2xl p-5 transition-all duration-300 hover:bg-white hover:shadow-xl"
          :class="[
            workspace.type === 'team'
              ? 'dark:bg-muted-800 shadow-muted-300/30 dark:shadow-muted-800/30 bg-white shadow-xl'
              : '',
          ]"
        >
          <img
            class="rounded-2xl"
            src="/img/illustrations/wizard/development.svg"
            alt="Team workspace"
          />
          <div class="my-4">
            <BaseHeading
              tag="h3"
              weight="medium"
              size="xl"
              class="text-muted-800 dark:text-muted-100 mb-2"
            >
              <span>Team</span>
            </BaseHeading>
            <BaseParagraph class="text-muted-400">
              <span>
                A collaborative workspace for your team projects and tasks.
              </span>
            </BaseParagraph>
          </div>
          <div class="mb-5 flex flex-col items-center">
            <BaseButton
              color="primary"
              rounded="lg"
              class="w-36"
              @click="() => onSelectType('team')"
            >
              <span>
                {{ workspace.type === "team" ? "Selected" : "Continue" }}
              </span>
            </BaseButton>
            <div class="mt-4 text-center">
              <NuxtLink
                to="/workspace/create"
                class="text-muted-400 hover:text-primary-500 font-sans text-[0.65rem] font-semibold uppercase opacity-0 transition-all duration-300 group-hover:opacity-100"
              >
                <span>Learn More</span>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Enterprise Workspace -->
        <div
          class="dark:hover:bg-muted-800 hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 group rounded-2xl p-5 transition-all duration-300 hover:bg-white hover:shadow-xl"
          :class="[
            workspace.type === 'enterprise'
              ? 'dark:bg-muted-800 shadow-muted-300/30 dark:shadow-muted-800/30 bg-white shadow-xl'
              : '',
          ]"
        >
          <img
            class="rounded-2xl"
            src="/img/illustrations/wizard/marketing.svg"
            alt="Enterprise workspace"
          />
          <div class="my-4">
            <BaseHeading
              tag="h3"
              weight="medium"
              size="xl"
              class="text-muted-800 dark:text-muted-100 mb-2"
            >
              <span>Enterprise</span>
            </BaseHeading>
            <BaseParagraph class="text-muted-400">
              <span>
                A workspace for your organization with advanced features.
              </span>
            </BaseParagraph>
          </div>
          <div class="mb-5 flex flex-col items-center">
            <BaseButton
              color="primary"
              rounded="lg"
              class="w-36"
              @click="() => onSelectType('enterprise')"
            >
              <span>
                {{ workspace.type === "enterprise" ? "Selected" : "Continue" }}
              </span>
            </BaseButton>
            <div class="mt-4 text-center">
              <NuxtLink
                to="/workspace/create"
                class="text-muted-400 hover:text-primary-500 font-sans text-[0.65rem] font-semibold uppercase opacity-0 transition-all duration-300 group-hover:opacity-100"
              >
                <span>Learn More</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
