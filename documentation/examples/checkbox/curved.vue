<template>
  <BaseFocusLoop class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4">
    <FormCheckbox v-model="options.first" label="Default" rounded="lg" />

    <FormCheckbox v-model="options.second" label="Muted" rounded="lg" color="muted" />

    <FormCheckbox v-model="options.third" label="Primary" rounded="lg" color="primary" />

    <FormCheckbox v-model="options.fourth" label="Info" rounded="lg" color="info" />

    <FormCheckbox v-model="options.fifth" label="Success" rounded="lg" color="success" />

    <FormCheckbox v-model="options.sixth" label="Warning" rounded="lg" color="warning" />

    <FormCheckbox v-model="options.seventh" label="Danger" rounded="lg" color="danger" />
  </BaseFocusLoop>
</template>

<script setup lang="ts">
const first = ref(false)
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
