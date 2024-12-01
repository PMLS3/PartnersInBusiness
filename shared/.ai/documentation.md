# Documentation Guide

> **Important**: Documentation MUST be created for:
>
> - Every new component
> - New pages
> - Server APIs
> - Tools
> - Any new feature or functionality
>
> When updating existing components or features:
>
> - Documentation MUST be reviewed
> - Documentation MUST be updated if changes affect:
>   - Props
>   - Events
>   - Usage patterns
>   - API endpoints
>   - Behavior
>   - Dependencies
>   - Examples

## 1. File Structure

documentation/
├── content/
│ └── documentation/
│ └── 60.reference/
│ ├── 1.base/ # Base components
│ ├── 2.components/ # Custom components
│ ├── 3.composables/ # Vue composables
│ ├── 4.utils/ # Utility functions
│ └── 5.types/ # TypeScript types
├── examples/
│ └── [component-name]/ # Component examples
└── utils/
└── component-meta.ts # Component metadata

## 2. Documentation Categories

### 2.1 Base Components (60.reference/1.base/)

- Core UI components
- Fundamental building blocks
- Example: BaseCard, BaseButton

### 2.2 Custom Components (60.reference/2.components/)

- Complex components
- Business-specific components
- Composed from base components

### 2.3 Composables (60.reference/3.composables/)

- Vue composables
- Shared logic
- State management

### 2.4 Utils (60.reference/4.utils/)

- Utility functions
- Helper methods
- Pure functions

### 2.5 Types (60.reference/5.types/)

- TypeScript interfaces
- Type definitions
- Type utilities

## 3. Creating Documentation Files

### 3.1 Component Documentation

Create a new markdown file in:
`documentation/content/documentation/60.reference/[category]/[component-name].md`

:::doc-message{color="info" icon="ion:information-circle-outline"}
When creating or updating component documentation, you must also update the component reference list in `.ai/components.md` under the appropriate category section:

- Base components
- Forms components
- Miscellaneous components
- Sidebar components
- Collapse Navigation components
- Top Navigation components
- Icon Navigation components
- Advanced components
- Integration components
  :::

Basic structure:

---

title: ComponentName
components:

- ComponentName
  description: Brief description of the component and its purpose
  icon:
  src: /img/illustrations/components/[component]-icon.svg
  srcDark: /img/illustrations/components/[component]-icon.svg

---

## ::doc-component-demo

title: Usage Example Title
demo: '#examples/[component-name]/[example-name].vue'

---

Description of this particular usage example.
::

:doc-component-meta{name="ComponentName"}

### 3.2 Example Files

Create example files in:
`documentation/examples/[component-name]/[example-name].vue`

Example structure:

<template>
  <div class="grid max-w-3xl gap-4 md:grid-cols-2">
    <BaseCard rounded="none" class="p-6">
      <BaseHeading
        as="h4"
        size="sm"
        weight="semibold"
        lead="tight"
        class="text-muted-800 mb-2 dark:text-white"
      >
        Iam a card
      </BaseHeading>
      <BaseParagraph
        size="sm"
        lead="tight"
        class="text-muted-400"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </BaseParagraph>
    </BaseCard>
    <!-- Additional examples... -->
  </div>
</template>

### 3.3 Component Metadata

Add component metadata in `utils/component-meta.ts`:

const metadata: Record<string, ComponentMeta> = {
ComponentName: {
mode: "all",
global: false,
prefetch: false,
preload: false,
pascalName: "ComponentName",
kebabName: "component-name",
chunkName: "components/component-name",
export: "default",
priority: 0,
meta: {
type: 1,
props: [
{
name: "propName",
global: false,
description: "Description of the prop",
tags: [
{
name: "since",
text: "version",
}
],
required: false,
type: "string | number | boolean",
default: "defaultValue"
}
],
slots: [],
events: [],
exposed: []
}
}
}

## 4. Documentation Requirements

### 4.1 Component Documentation

- [ ] Main markdown file created
- [ ] Component description added
- [ ] Props documented
- [ ] Events documented
- [ ] Slots documented
- [ ] Examples created
- [ ] Metadata added

### 4.2 Examples

- [ ] Basic usage
- [ ] All variants
- [ ] Special states
- [ ] Edge cases
- [ ] Complex interactions

### 4.3 Metadata

- [ ] Component type defined
- [ ] Props documented
- [ ] Events documented
- [ ] Slots documented
- [ ] Exposed methods documented

## 5. Best Practices

### 5.1 Examples

- Create one example file per variant/use case
- Keep examples simple and focused
- Include comments for complex logic

### 5.2 Metadata

- Document all props, events, and slots
- Include type information
- Add version tags for new features

### 5.3 Documentation

- Use clear, concise language
- Include code examples
- Document edge cases
- Add warning messages for important notes

### 5.4 File Naming

- Use kebab-case for files
- Use descriptive names
- Group related examples

## 6. AI-Friendly Documentation Tips

- Add consistent section headers
- Use structured metadata
- Include type information
- Document relationships between components
- Add clear descriptions for props and methods
- Use standardized terminology
- Include usage context and examples
