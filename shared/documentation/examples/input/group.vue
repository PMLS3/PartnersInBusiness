<template>
  <BaseButtonGroup>
    <BaseButton color="muted">
      <span>USD</span>
    </BaseButton>

    <FormInput
      v-model.number="amount"
      :classes="{
        wrapper: 'w-28',
      }"
      type="number"
      placeholder="0.00"
    />

    <FormSelect
      v-model="taxes"
      :classes="{
        wrapper: 'w-36',
      }"
    >
      <option value="With taxes">With taxes</option>

      <option value="Without taxes">Without taxes</option>
    </FormSelect>
  </BaseButtonGroup>
</template>

<script setup lang="ts">
const amount = ref<number | undefined>(undefined)
const taxes = ref('With taxes')
</script>
