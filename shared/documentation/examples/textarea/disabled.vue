<template>
  <div class="grid gap-6 md:max-w-4xl md:grid-cols-3">
    <FormTextarea
      v-model="value"
      size="sm"
      label="Message"
      rounded="md"
      placeholder="Write a message..."
      disabled
    />

    <FormTextarea
      v-model="value"
      label="Message"
      rounded="md"
      placeholder="Write a message..."
      disabled
    />
  </div>
</template>

<script setup lang="ts">
const value = ref('')
</script>
