<template>
  <div class="flex flex-col gap-6 md:flex-row md:items-start">
    <BaseFocusLoop class="flex w-3/5 flex-wrap items-end gap-4">
      <FormCheckboxAnimated :classes="{ label: 'text-primary-500' }" />

      <FormCheckboxAnimated :model-value="true" :classes="{ label: 'text-primary-500' }" />

      <FormCheckboxAnimated :model-value="true" disabled :classes="{ label: 'text-primary-500' }" />
    </BaseFocusLoop>
  </div>
</template>
