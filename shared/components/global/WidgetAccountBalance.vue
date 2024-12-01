<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      heading?: string
      paragraph?: string
      data?: string
    }>(),
    {
      heading: "Account Balance",
      paragraph: "9,543.12",
      data: "$149.32 Today, Sep 25",
    }
  )
</script>

<template>
  <BaseCard rounded="md">
    <div class="flex flex-col gap-4 px-8 pt-8 text-center">
      <BaseHeading
        as="h4"
        size="sm"
        weight="medium"
        lead="none"
        class="text-muted-400 uppercase"
      >
        {{ heading }}
      </BaseHeading>
      <p>
        <span
          class="text-muted-800 font-sans text-4xl font-medium before:text-xl before:content-['$'] dark:text-white"
        >
          {{ paragraph }}
        </span>
      </p>
      <div class="flex items-center justify-center gap-x-2">
        <Icon name="lucide:arrow-up" class="iconify text-success-500 size-4" />
        <span class="text-muted-400 font-sans text-sm">
          {{ data }}
        </span>
      </div>
    </div>
    <ChartAreaBalance />
  </BaseCard>
</template>
