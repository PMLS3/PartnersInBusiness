<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      centered?: boolean
      heading?: string
      subheading?: string
      paragraph?: string
      avatar?: string
      address?: string
      phone?: string
      email?: string
    }>(),
    {
      centered: false,
      heading: "Maya R.",
      subheading: "Tairo HQ",
      paragraph: "UI/UX designer",
      avatar: "/img/avatars/2.svg",
      address: "Los Angeles, CA",
      phone: "+1 444-751-5156",
      email: "maya@tairo.io",
    }
  )
</script>

<template>
  <div class="flex h-full flex-col">
    <div
      class="mb-4 flex items-center"
      :class="props.centered && 'flex-col-reverse'"
    >
      <div class="flex-1">
        <BaseHeading
          as="h3"
          size="md"
          weight="medium"
          lead="relaxed"
          class="text-muted-800 dark:text-white"
          :class="props.centered && 'text-center'"
        >
          <span>{{ heading }}</span>
        </BaseHeading>
        <BaseParagraph v-if="!props.centered" lead="none">
          <span class="text-primary-500 text-xs">{{ subheading }}</span>
        </BaseParagraph>
        <BaseParagraph lead="none" :class="props.centered && 'text-center'">
          <span class="text-muted-400 text-xs">{{ paragraph }}</span>
        </BaseParagraph>
      </div>
      <div class="flex-1 shrink-0">
        <div class="mx-auto" :class="props.centered ? 'w-16' : 'w-12'">
          <BaseAvatar :src="avatar" :size="props.centered ? 'lg' : 'md'" />
        </div>
      </div>
    </div>
    <div class="mb-4 space-y-2 font-sans">
      <div
        class="flex items-end gap-2"
        :class="props.centered && 'justify-center'"
      >
        <Icon name="ph:map-pin-duotone" class="text-primary-500 size-4" />
        <span class="text-muted-400 text-xs">{{ address }}</span>
      </div>
      <div
        class="flex items-end gap-2"
        :class="props.centered && 'justify-center'"
      >
        <Icon name="ph:phone-duotone" class="text-primary-500 size-4" />
        <span class="text-muted-400 text-xs">{{ phone }}</span>
      </div>
    </div>
    <div
      class="border-muted-200 dark:border-muted-700 mt-auto flex items-end justify-between border-t pt-3"
    >
      <a
        :href="`mailto:${email}`"
        class="text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
      >
        {{ email }}
      </a>
      <Icon name="ph:envelope-duotone" class="text-muted-400 size-4" />
    </div>
  </div>
</template>
