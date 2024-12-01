<template>
  <div class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4">
    <FormRadio v-model="value" name="checkbox_base" label="default" value="default" />

    <FormRadio
      v-model="value"
      name="checkbox_base"
      label="primary"
      value="primary"
      color="primary"
    />

    <FormRadio v-model="value" name="checkbox_base" value="muted" label="muted" color="muted" />

    <FormRadio v-model="value" name="checkbox_base" value="info" label="info" color="info" />

    <FormRadio
      v-model="value"
      name="checkbox_base"
      value="success"
      label="success"
      color="success"
    />

    <FormRadio
      v-model="value"
      name="checkbox_base"
      value="warning"
      label="warning"
      color="warning"
    />

    <FormRadio v-model="value" name="checkbox_base" value="danger" label="danger" color="danger" />
  </div>
</template>

<script setup lang="ts">
const value = ref('primary')
</script>
