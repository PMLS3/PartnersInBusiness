#### **Component Structure Example**

- Here is an example of a component structure:

```typescript
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string
    text: string
    label: string
    to: string
    rounded?: 'none' | 'sm' | 'md' | 'lg'
  }>(),
  {
    rounded: 'sm',
  },
)
const router = useRouter();
const { data, pending, error } = await useFetch('/api/data');
</script>

<template>
  <div>
    <h1>Data Fetching Example</h1>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <div v-else>Data: {{ data }}</div>
  </div>
</template>
```

## Component Reference

:::doc-message{color="info" icon="ion:information-circle-outline"}
All components listed here must be used in the application. If new components are created or if there are components that are not documented, they must be documented following the structure below. All reusable components must be placed in `/components`.
:::

Base components:

- [Accordion](/documentation/content/documentation/60.reference/1.base/accordion.md)
- [AvatarGroup](/documentation/content/documentation/60.reference/1.base/avatar-group.md)
- [Avatar](/documentation/content/documentation/60.reference/1.base/avatar.md)
- [Breadcrumb](/documentation/content/documentation/60.reference/1.base/breadcrumb.md)
- [ButtonAction](/documentation/content/documentation/60.reference/1.base/button-action.md)
- [ButtonClose](/documentation/content/documentation/60.reference/1.base/button-close.md)
- [ButtonIcon](/documentation/content/documentation/60.reference/1.base/button-icon.md)
- [Button](/documentation/content/documentation/60.reference/1.base/button.md)
- [Card](/documentation/content/documentation/60.reference/1.base/card.md)
- [Dropdown](/documentation/content/documentation/60.reference/1.base/dropdown.md)
- [FocusLoop](/documentation/content/documentation/60.reference/1.base/focus-loop.md)
- [IconBox](/documentation/content/documentation/60.reference/1.base/icon-box.md)
- [List](/documentation/content/documentation/60.reference/1.base/list.md)
- [Message](/documentation/content/documentation/60.reference/1.base/message.md)
- [Pagination](/documentation/content/documentation/60.reference/1.base/pagination.md)
- [Placeholder](/documentation/content/documentation/60.reference/1.base/placeholder.md)
- [Placeload](/documentation/content/documentation/60.reference/1.base/placeload.md)
- [Progress](/documentation/content/documentation/60.reference/1.base/progress.md)
- [Prose](/documentation/content/documentation/60.reference/1.base/prose.md)
- [Snack](/documentation/content/documentation/60.reference/1.base/snack.md)
- [TabsSlider](/documentation/content/documentation/60.reference/1.base/tabs-slider.md)
- [Tabs](/documentation/content/documentation/60.reference/1.base/tabs.md)
- [Tag](/documentation/content/documentation/60.reference/1.base/tag.md)
- [ThemeToggle](/documentation/content/documentation/60.reference/1.base/theme-toggle.md)
- [Typography](/documentation/content/documentation/60.reference/1.base/typography.md)

Forms components:

- [Autocomplete](/documentation/content/documentation/60.reference/2.forms/autocomplete.md)
- [CheckboxAnimated](/documentation/content/documentation/60.reference/2.forms/checkbox-animated.md)
- [CheckboxHeadless](/documentation/content/documentation/60.reference/2.forms/checkbox-headless.md)
- [Checkbox](/documentation/content/documentation/60.reference/2.forms/checkbox.md)
- [Dropfile](/documentation/content/documentation/60.reference/2.forms/dropfile.md)
- [FileHeadless](/documentation/content/documentation/60.reference/2.forms/file-headless.md)
- [File](/documentation/content/documentation/60.reference/2.forms/file.md)
- [InputNumber](/documentation/content/documentation/60.reference/2.forms/input-number.md)
- [Input](/documentation/content/documentation/60.reference/2.forms/input.md)
- [Listbox](/documentation/content/documentation/60.reference/2.forms/listbox.md)
- [RadioHeadless](/documentation/content/documentation/60.reference/2.forms/radio-headless.md)
  - [Radio](/documentation/content/documentation/60.reference/2.forms/radio.md)
- [Select](/documentation/content/documentation/60.reference/2.forms/select.md)
- [Switch](/documentation/content/documentation/60.reference/2.forms/switch.md)
- [Textarea](/documentation/content/documentation/60.reference/2.forms/textarea.md)
- [Treeselect](/documentation/content/documentation/60.reference/2.forms/treeselect.md)

Miscellaneous components:

- [CheckAnimated](/documentation/content/documentation/60.reference/3.tairo/check-animated.md)
- [ContentWrapper](/documentation/content/documentation/60.reference/3.tairo/content-wrapper.md)
- [Error](/documentation/content/documentation/60.reference/3.tairo/error.md)
- [FlexTable](/documentation/content/documentation/60.reference/3.tairo/flex-table.md)
- [FormGroup](/documentation/content/documentation/60.reference/3.tairo/form-group.md)
- [FormSave](/documentation/content/documentation/60.reference/3.tairo/form-save.md)
- [Logo](/documentation/content/documentation/60.reference/3.tairo/logo.md)
- [Modal](/documentation/content/documentation/60.reference/3.tairo/modal.md)
- [Popover](/documentation/content/documentation/60.reference/3.tairo/popover.md)
- [SidebarTools](/documentation/content/documentation/60.reference/3.tairo/sidebar-tools.md)
- [Table](/documentation/content/documentation/60.reference/3.tairo/table.md)
- [Toaster](/documentation/content/documentation/60.reference/3.tairo/toaster.md)
- [Toc](/documentation/content/documentation/60.reference/3.tairo/toc.md)

Sidebar components:

- [Layout](/documentation/content/documentation/60.reference/4.sidebar/layout.md)
- [Navigation](/documentation/content/documentation/60.reference/4.sidebar/navigation.md)
- [Subsidebar](/documentation/content/documentation/60.reference/4.sidebar/subsidebar.md)
- [Toolbar](/documentation/content/documentation/60.reference/4.sidebar/toolbar.md)
- [CircularMenu](/documentation/content/documentation/60.reference/4.sidebar/circular-menu.md)

Collapse Navigation components:

- [Layout](/documentation/content/documentation/60.reference/5.collapse/layout.md)
- [Navigation](/documentation/content/documentation/60.reference/5.collapse/navigation.md)
- [Toolbar](/documentation/content/documentation/60.reference/5.collapse/toolbar.md)
- [CircularMenu](/documentation/content/documentation/60.reference/5.collapse/circular-menu.md)

Top Navigation components:

- [Layout](/documentation/content/documentation/60.reference/6.topnav/layout.md)
- [Navigation](/documentation/content/documentation/60.reference/6.topnav/navigation.md)
- [Footer](/documentation/content/documentation/60.reference/6.topnav/footer.md)
- [CircularMenu](/documentation/content/documentation/60.reference/6.topnav/circular-menu.md)

Icon Navigation components:

- [Layout](/documentation/content/documentation/60.reference/7.iconnav/layout.md)
- [Navigation](/documentation/content/documentation/60.reference/7.iconnav/navigation.md)
- [Footer](/documentation/content/documentation/60.reference/7.iconnav/footer.md)
- [CircularMenu](/documentation/content/documentation/60.reference/7.iconnav/circular-menu.md)

Advanced components:

- [InputPassword](/documentation/content/documentation/60.reference/8.advanced/input-password.md)
- [InputPhone](/documentation/content/documentation/60.reference/8.advanced/input-phone.md)
- [Markdown](/documentation/content/documentation/60.reference/8.advanced/markdown.md)

Integration components:

- [Apexcharts](/documentation/content/documentation/60.reference/9.integration/apexcharts.md)
- [Carousel](/documentation/content/documentation/60.reference/9.integration/carousel.md)
- [Icons](/documentation/content/documentation/60.reference/9.integration/icons.md)
- [Mapbox](/documentation/content/documentation/60.reference/9.integration/mapbox.md)
- [Slider](/documentation/content/documentation/60.reference/9.integration/slider.md)

:::doc-message{color="warning" icon="ion:warning-outline"}
For each documented component, create an example Vue file in `/documentation/examples/[component-name]/[example-name].vue`. These examples should demonstrate the component's usage and various props or variations.
:::

### Example Component Documentation

Here's an example of how to document a component:

## ::doc-component-demo

title: Component Name
demo: '/documentation/examples/component-name/basic.vue'

---

Brief description of the component and its usage.
::

::doc-component-meta{name="ComponentName"}

Make sure to create a corresponding example Vue file in `/documentation/examples/component-name/basic.vue`.
