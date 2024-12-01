<template>
  <BaseFocusLoop class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4">
    <FormCheckbox v-model="options.first" label="Default" rounded="full" />

    <FormCheckbox v-model="options.second" label="Muted" rounded="full" color="muted" />

    <FormCheckbox v-model="options.third" label="Primary" rounded="full" color="primary" />

    <FormCheckbox v-model="options.fourth" label="Info" rounded="full" color="info" />

    <FormCheckbox v-model="options.fifth" label="Success" rounded="full" color="success" />

    <FormCheckbox v-model="options.sixth" label="Warning" rounded="full" color="warning" />

    <FormCheckbox v-model="options.seventh" label="Danger" rounded="full" color="danger" />
  </BaseFocusLoop>
</template>

<script setup lang="ts">
const options = reactive({
  first: true,
  second: true,
  third: true,
  fourth: true,
  fifth: true,
  sixth: true,
  seventh: true,
})
</script>
