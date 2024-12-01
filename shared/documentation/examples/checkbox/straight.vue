<template>
  <BaseFocusLoop class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4">
    <FormCheckbox v-model="options.first" label="Default" rounded="none" />

    <FormCheckbox v-model="options.second" label="Muted" rounded="none" color="muted" />

    <FormCheckbox v-model="options.third" label="Primary" rounded="none" color="primary" />

    <FormCheckbox v-model="options.fourth" label="Info" rounded="none" color="info" />

    <FormCheckbox v-model="options.fifth" label="Success" rounded="none" color="success" />

    <FormCheckbox v-model="options.sixth" label="Warning" rounded="none" color="warning" />

    <FormCheckbox v-model="options.seventh" label="Danger" rounded="none" color="danger" />
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
