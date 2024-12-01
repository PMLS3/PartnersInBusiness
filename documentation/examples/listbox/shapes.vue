<template>
  <div class="grid gap-6 md:max-w-4xl md:grid-cols-3">
    <FormListbox
      v-model="value"
      label="Rounded: none"
      :items="frameworks"
      placeholder="Select a framework"
      rounded="none"
    />

    <FormListbox
      v-model="value"
      label="Rounded: sm"
      :items="frameworks"
      placeholder="Select a framework"
      rounded="sm"
    />

    <FormListbox
      v-model="value"
      label="Rounded: md"
      :items="frameworks"
      placeholder="Select a framework"
      rounded="md"
    />

    <FormListbox
      v-model="value"
      label="Rounded: lg"
      :items="frameworks"
      placeholder="Select a framework"
      rounded="lg"
    />

    <FormListbox
      v-model="value"
      label="Rounded: full"
      :items="frameworks"
      placeholder="Select a framework"
      rounded="full"
    />
  </div>
</template>

<script setup lang="ts">
const value = ref()

const frameworks = ['Javascript', 'Vue.js', 'React.js', 'Angular', 'Alpine.js']
</script>
