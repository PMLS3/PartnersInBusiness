# Component Creation Template

This guide provides a step-by-step template for creating all the necessary files, APIs, and components for a new feature in your project. We'll use the "Category" component for products as an example. Follow these steps to ensure consistency and completeness when adding new components.

> Note: Replace placeholders like YourComponent with the actual name of your component.

## Table of Contents

1. [Identify the Necessary Schema](#1-identify-the-necessary-schema)
2. [Create GraphQL Mutations and Queries](#2-create-graphql-mutations-and-queries)
3. [Implement Server-Side Functions](#3-implement-server-side-functions)
4. [Update or Create Composables](#4-update-or-create-composables)
5. [Define Types](#5-define-types)
6. [Create Components](#6-create-components)
7. [Add Forms](#7-add-forms)
8. [Create Panel Components](#8-create-panel-components)

---

## 1. Identify the Necessary Schema

Define the data model for your component in the GraphQL schema file. For categories, the schema is defined in `dataconnect/schema/crm.gql`.

Example (`dataconnect/schema/crm.gql`):

```graphql
type ProductCategory
  @table(
    name: "ProductCategory"
    singular: "productCategory"
    plural: "productCategories"
    key: "uid"
  ) {
  uid: UUID! @col(name: "product_category_id") @default(expr: "uuidV4()")
  name: String!
  slug: String!
  parentId: UUID
  description: String
  display: String # default, products, subcategories, both
  image: Upload
  menuOrder: Int
  workspace: Workspace! @ref
  owner: User! @ref
  updatedAt: Timestamp! @default(expr: "request.time")
  createdAt: Timestamp! @default(expr: "request.time")
  embeddingText: String
  embeddingVec: Vector @col(size: 768)
}
```

> Instructions:
>
> - Define your component's schema in the appropriate .gql file.
> - Ensure that all necessary fields and references are included.

---

## 2. Create GraphQL Mutations and Queries

Create the required mutations for creating, updating, and deleting your component in `dataconnect/connector/crm-mutation.gql`. Also, write queries to fetch your component data in `dataconnect/connector/crm-query.gql`.

Mutations (`dataconnect/connector/crm-mutation.gql`):

```graphql
mutation CreateProductCategory(
  $uid: UUID!
  $name: String!
  $slug: String!
  $parentId: UUID
  $description: String
  $display: String
  $image: Upload_Key
  $menuOrder: Int
  $workspaceId: Workspace_Key!
  $ownerId: User_Key!
  $embeddingText: String!
) @auth(level: PUBLIC) {
  productCategory_insert(
    data: {
      uid: $uid
      name: $name
      slug: $slug
      parentId: $parentId
      description: $description
      display: $display
      image: $image
      menuOrder: $menuOrder
      workspace: $workspaceId
      owner: $ownerId
      embeddingText: $embeddingText
      embeddingVec_embed: {
        text: $embeddingText
        model: "textembedding-gecko@003"
      }
    }
  )
}

mutation UpdateProductCategory(
  $uid: UUID!
  $name: String
  $slug: String
  $parentId: UUID
  $description: String
  $display: String
  $image: Upload_Key
  $menuOrder: Int
  $workspaceId: Workspace_Key
  $ownerId: User_Key
  $embeddingText: String!
) @auth(level: PUBLIC) {
  productCategory_update(
    key: { uid: $uid }
    data: {
      name: $name
      slug: $slug
      parentId: $parentId
      description: $description
      display: $display
      image: $image
      menuOrder: $menuOrder
      workspace: $workspaceId
      owner: $ownerId
      embeddingText: $embeddingText
      embeddingVec_embed: {
        text: $embeddingText
        model: "textembedding-gecko@003"
      }
    }
  )
}

mutation DeleteProductCategory($uid: UUID!) @auth(level: PUBLIC) {
  productCategory_delete(key: { uid: $uid })
}

# ProductCategoryRelation Mutations
mutation CreateProductCategoryRelation(
  $productId: Product_Key!
  $categoryId: ProductCategory_Key!
) @auth(level: PUBLIC) {
  productCategoryRelation_insert(
    data: { product: $productId, category: $categoryId }
  )
}

mutation DeleteProductCategoryRelation($productUid: UUID!, $categoryUid: UUID!)
@auth(level: PUBLIC) {
  productCategoryRelation_delete(
    key: { productUid: $productUid, categoryUid: $categoryUid }
  )
}
```

Queries (`dataconnect/connector/crm-query.gql`):

```graphql
query GetProductCategoriesByWorkspace(
  $workspaceId: UUID!
  $limit: Int
  $offset: Int
) @auth(level: PUBLIC) {
  productCategories(
    where: { workspace: { uid: { eq: $workspaceId } } }
    limit: $limit
    offset: $offset
    orderBy: { menuOrder: DESC }
  ) {
    uid
    name
    slug
    parentId
    description
    display
    image {
      uid
      src
      name
      type
      size
      contentType
    }
    menuOrder
  }
}

query GetProductCategoryByUid($categoryId: UUID!) @auth(level: PUBLIC) {
  productCategories(where: { uid: { eq: $categoryId } }) {
    uid
    name
    slug
    description
    display
    image {
      uid
      src
    }
    menuOrder
  }
}
```

> Instructions:
>
> - Replace ProductCategory with your component's name.
> - Ensure all necessary fields and variables are included in your mutations and queries.

---

## 3. Implement Server-Side Functions

Create server-side endpoints to handle the GraphQL mutations and queries. Use the functions inside the `server/api/categories` folder as examples. Implement endpoints for retrieving all items, retrieving single items, creating, updating, and deleting.

Example Endpoint for Create(`server/api/categories/create/single.post.ts`):

```typescript
import { useFirebaseServer } from "../../../utils/firebase"
import { createProductCategory } from "one-person-empire"
import { makeUUID } from "../../../utils/data"

interface CategoryCreatePayload {
  state: {
    name: string
    description: string
    embeddingText: string
    image?: { uid: string }[]
  }
  link: {
    userId: string
    workspaceId: string
  }
  token: string
}

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody<CategoryCreatePayload>(event)

    if (!body || !body.state || !body.link || !body.token) {
      throw createError({
        statusCode: 400,
        message: "Invalid request body",
      })
    }

    const data = await saveData(body.state, body.link, body.token)

    return {
      statusCode: 200,
      data,
    }
  } catch (error) {
    console.error("Error in category creation:", error)
    return createError({
      statusCode: error.statusCode || 500,
      message: error.message || "An error occurred while creating the category",
    })
  }
})

async function saveData(
  state: CategoryCreatePayload["state"],
  link: CategoryCreatePayload["link"],
  token: string
) {
  const { dataConnect } = useFirebaseServer(token)

  if (!dataConnect) {
    throw createError({
      statusCode: 500,
      message: "Failed to initialize Firebase connection",
    })
  }

  const payload = {
    uid: makeUUID(),
    name: state.name,
    ownerId: link.userId,
    description: state.description,
    menuOrder: state.menuOrder,
    display: state.display,
    parentId: state.parentId,
    workspaceId: link.workspaceId,
    slug: state.name.toLowerCase().replace(/ /g, "-"),
    embeddingText: state.embeddingText,
    image:
      state.image && state.image.length > 0 ? state.image[0].uid : undefined,
  }

  try {
    const payload_res = await createProductCategory(dataConnect, payload)

    if (payload_res.errors && payload_res.errors.length > 0) {
      throw createError({
        statusCode: 400,
        message: "Failed to create product category",
        data: payload_res.errors,
      })
    }

    return {
      ...payload,
      image: state.image && state.image.length > 0 ? state.image[0] : undefined,
    }
  } catch (error) {
    console.error("Error creating product category:", error)
    throw createError({
      statusCode: 500,
      message: "An error occurred while creating the product category",
    })
  }
}
```

Example Endpoint for Delete(`server/api/categories/delete/single.post.ts`):

```typescript
import { useFirebaseServer } from "../../../utils/firebase"
import { deleteProductCategory } from "one-person-empire"

interface CategoryDeletePayload {
  state: {
    uid: string
  }
  token: string
}

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody<CategoryDeletePayload>(event)

    if (!body || !body.state || !body.state.uid || !body.token) {
      throw createError({
        statusCode: 400,
        message: "Invalid request body",
      })
    }

    const data = await deleteData(body.state, body.token)

    return {
      statusCode: 200,
      data,
    }
  } catch (error) {
    console.error("Error in category deletion:", error)
    return createError({
      statusCode: error.statusCode || 500,
      message: error.message || "An error occurred while deleting the category",
    })
  }
})

async function deleteData(
  state: CategoryDeletePayload["state"],
  token: string
) {
  const { dataConnect } = useFirebaseServer(token)

  if (!dataConnect) {
    throw createError({
      statusCode: 500,
      message: "Failed to initialize Firebase connection",
    })
  }

  const payload = {
    uid: state.uid,
  }

  try {
    const payload_res = await deleteProductCategory(dataConnect, payload)

    if (payload_res.errors && payload_res.errors.length > 0) {
      throw createError({
        statusCode: 400,
        message: "Failed to delete product category",
        data: payload_res.errors,
      })
    }

    return payload
  } catch (error) {
    console.error("Error deleting product category:", error)
    throw createError({
      statusCode: 500,
      message: "An error occurred while deleting the product category",
    })
  }
}
```

Example Endpoint for Update(`server/api/categories/update/single.post.ts`):

```typescript
import { useFirebaseServer } from "../../../utils/firebase"
import { updateProductCategory } from "one-person-empire"

interface CategoryUpdatePayload {
  state: {
    uid: string
    name: string
    slug: string
    description: string
    display: boolean
    image?: string
    menuOrder: number
  }
  token: string
}

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody<CategoryUpdatePayload>(event)

    if (!body || !body.state || !body.token) {
      throw createError({
        statusCode: 400,
        message: "Invalid request body",
      })
    }

    if (!body.state.uid) {
      throw createError({
        statusCode: 400,
        message: "Category UID is required",
      })
    }

    const data = await updateData(body.state, body.token)

    return {
      statusCode: 200,
      data,
    }
  } catch (error) {
    console.error("Error in category update:", error)
    return createError({
      statusCode: error.statusCode || 500,
      message: error.message || "An error occurred while updating the category",
    })
  }
})

async function updateData(
  state: CategoryUpdatePayload["state"],
  token: string
) {
  const { dataConnect } = useFirebaseServer(token)

  if (!dataConnect) {
    throw createError({
      statusCode: 500,
      message: "Failed to initialize Firebase connection",
    })
  }

  const payload = {
    uid: state.uid,
    name: state.name,
    slug: state.slug,
    description: state.description,
    display: state.display,
    parentId: state.parentId,
    image: state.image,
    menuOrder: state.menuOrder,
    embeddingText: state.embeddingText,
  }

  try {
    const payload_res = await updateProductCategory(dataConnect, payload)

    if (!payload_res || !payload_res.data) {
      throw createError({
        statusCode: 500,
        message: "Invalid response from database",
      })
    }

    if (payload_res.errors && payload_res.errors.length > 0) {
      throw createError({
        statusCode: 400,
        message: "Failed to update product category",
        data: payload_res.errors,
      })
    }

    return payload_res.data
  } catch (error) {
    console.error("Error updating product category:", error)
    throw createError({
      statusCode: error.statusCode || 500,
      message:
        error.message ||
        "An error occurred while updating the product category",
    })
  }
}
```

Example Endpoint for Retrieve single(`server/api/categories/retrieve/single.post.ts`):

```typescript
import { useFirebaseServer } from "../../../utils/firebase"
import { getProductCategoryByUid } from "one-person-empire"

interface QueryParams {
  categoryId: string
  token: string
}

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event) as QueryParams

    if (!query.categoryId) {
      throw createError({
        statusCode: 400,
        message: "Category ID is required",
      })
    }

    if (!query.token) {
      throw createError({
        statusCode: 400,
        message: "Authentication token is required",
      })
    }

    const data = await getData(query.categoryId, query.token)

    if (!data || data.length === 0) {
      return {
        statusCode: 404,
        message: "Category not found",
        data: {},
      }
    }

    return {
      statusCode: 200,
      data: data[0],
    }
  } catch (error) {
    console.error("Error in category retrieval:", error)
    return createError({
      statusCode: error.statusCode || 500,
      message:
        error.message || "An error occurred while retrieving the category",
    })
  }
})

async function getData(categoryId: string, token: string) {
  const { dataConnect } = useFirebaseServer(token)

  if (!dataConnect) {
    throw createError({
      statusCode: 500,
      message: "Failed to initialize Firebase connection",
    })
  }

  try {
    const result = await getProductCategoryByUid(dataConnect, { categoryId })

    if (!result || !result.data || !result.data.productCategories) {
      throw createError({
        statusCode: 500,
        message: "Invalid response from database",
      })
    }

    return result.data.productCategories
      .map((item: any) => {
        if (!item) {
          console.warn("Received null or undefined item in productCategories")
          return null
        }
        // Perform any necessary transformations here
        return item
      })
      .filter(Boolean) // Remove any null items
  } catch (error) {
    console.error("Error in getData:", error)
    throw createError({
      statusCode: 500,
      message: "An error occurred while fetching the product category",
    })
  }
}
```

Example Endpoint for Retrieve all(`server/api/categories/retrieve/directory.post.ts`):

```typescript
import { useFirebaseServer } from "../../../utils/firebase"
import { getProductCategoriesByWorkspace } from "one-person-empire"

interface QueryParams {
  limit?: string
  offset?: string
  workspaceId: string
  token: string
}

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event) as QueryParams

    if (!query.workspaceId) {
      throw createError({
        statusCode: 400,
        message: "Workspace ID is required",
      })
    }

    if (!query.token) {
      throw createError({
        statusCode: 400,
        message: "Authentication token is required",
      })
    }

    const limit = parseInt(query.limit || "10", 10)
    const offset = parseInt(query.offset || "0", 10)

    const data = await getData(query.workspaceId, query.token, limit, offset)

    return {
      statusCode: 200,
      total: data.total,
      data: data.productCategories,
    }
  } catch (error) {
    console.error("Error in category retrieval:", error)
    return createError({
      statusCode: error.statusCode || 500,
      message:
        error.message || "An error occurred while retrieving the directory",
    })
  }
})

async function getData(
  workspaceId: string,
  token: string,
  limit: number,
  offset: number
) {
  console.log(workspaceId, token, limit, offset)
  const { dataConnect } = useFirebaseServer(token)

  if (!dataConnect) {
    throw createError({
      statusCode: 500,
      message: "Failed to initialize Firebase connection",
    })
  }

  try {
    const result = await getProductCategoriesByWorkspace(dataConnect, {
      workspaceId,
      limit,
      offset,
    })
    console.log(result)

    if (!result || !result.data) {
      throw createError({
        statusCode: 404,
        message: "No categories found or invalid response from database",
      })
    }

    return {
      total: result.data.total || 0,
      productCategories: result.data.productCategories || [],
    }
  } catch (error) {
    console.error("Error in getData:", error)
    throw createError({
      statusCode: 500,
      message: "An error occurred while fetching product categories",
    })
  }
}
```

> Instructions:
>
> - Create endpoints in the `server/api/your-component` folder.
> - Follow the same structure and error handling as in the category examples.
> - Ensure that authentication and validation are appropriately handled.

---

## 4. Update or Create Composables

In the `composables` folder, either create a new file or add the necessary functions and state variables to the existing file (e.g., `useCrm.ts`). Ensure all necessary functions and useState variables are defined.

Example (`composables/useCrm.ts`):

```typescript
const category = useState<Category>("category", () => ({}))
const categories = useState<Category[]>("categories", () => [])

const getAllCategories = async () => {
  const workspace = useState("workspace")
  const user = useState("user")
  try {
    const { data, statusCode } = await $fetch(
      useApiRoute("/api/categories/retrieve/directory"),
      {
        query: {
          workspaceId: workspace.value.uid,
          token: user.value.tokenResponse.idToken,
        },
      }
    )
    if (statusCode === 200) {
      categories.value = data ?? []
      return { data, statusCode }
    } else {
      throw new Error("Failed to fetch categories")
    }
  } catch (error) {
    console.error("Error fetching categories:", error)
    showErrors("Failed to fetch categories")
    return { error, statusCode: error.statusCode || 500 }
  }
}

const getCategoryById = async (categoryId: string) => {
  const user = useState("user")
  try {
    const { data, statusCode } = await $fetch(
      useApiRoute(`/api/categories/retrieve/single`),
      {
        query: {
          categoryId,
          token: user.value.tokenResponse.idToken,
        },
      }
    )
    if (statusCode === 200) {
      category.value = data
      return { data, statusCode }
    } else {
      throw new Error("Failed to fetch category")
    }
  } catch (error) {
    console.error("Error fetching category:", error)
    showErrors("Failed to fetch category")
    return { error, statusCode: error.statusCode || 500 }
  }
}

const createCategory = async (state: Category) => {
  const user = useState("user")
  const workspace = useState("workspace")
  try {
    const { data, statusCode } = await $fetch(
      useApiRoute("/api/categories/create/single"),
      {
        method: "POST",
        body: {
          state: createItem(state, ["name", "description", "embeddingText"]),
          link: getLink(),
          token: user.value.tokenResponse.idToken,
        },
      }
    )
    if (statusCode === 200) {
      categories.value.push(data)
      showSuccess("Category created successfully")
      return { data, statusCode }
    } else {
      throw new Error("Failed to create category")
    }
  } catch (error) {
    console.error("Error creating category:", error)
    showErrors("Failed to create category")
    return { error, statusCode: error.statusCode || 500 }
  }
}

const updateCategory = async (state: Category) => {
  const user = useState("user")
  try {
    const { data, statusCode } = await $fetch(
      useApiRoute("/api/categories/update/single"),
      {
        method: "POST",
        body: {
          state: createItem(state, [
            "uid",
            "name",
            "slug",
            "description",
            "display",
            "image",
            "menuOrder",
          ]),
          token: user.value.tokenResponse.idToken,
        },
      }
    )
    if (statusCode === 200) {
      const index = categories.value.findIndex((c) => c.uid === state.uid)
      if (index !== -1) {
        categories.value[index] = state
      }
      showSuccess("Category updated successfully")
      return { data, statusCode }
    } else {
      throw new Error("Failed to update category")
    }
  } catch (error) {
    console.error("Error updating category:", error)
    showErrors("Failed to update category")
    return { error, statusCode: error.statusCode || 500 }
  }
}

const deleteCategory = async (uid: string) => {
  const user = useState("user")
  try {
    const { data, statusCode } = await $fetch(
      useApiRoute("/api/categories/delete/single"),
      {
        method: "POST",
        body: {
          state: { uid },
          token: user.value.tokenResponse.idToken,
        },
      }
    )
    if (statusCode === 200) {
      categories.value = categories.value.filter((c) => c.uid !== uid)
      showSuccess("Category deleted successfully")
      return { data, statusCode }
    } else {
      throw new Error("Failed to delete category")
    }
  } catch (error) {
    console.error("Error deleting category:", error)
    showErrors("Failed to delete category")
    return { error, statusCode: error.statusCode || 500 }
  }
}
```

> Instructions:
>
> - Add functions specific to your component.
> - Implement error handling using `showSuccess` and `showErrors`.

---

## 5. Define Types

Ensure that the TypeScript interfaces for your component are defined in `types/index.ts`.

Example (`types/index.ts`):

```typescript
export interface ProductCategory {
  uid: string
  name: string
  slug: string
  parentId?: string
  description?: string
  display?: string
  image?: Upload
  menuOrder?: number
  workspace: Workspace
  owner: User
  updatedAt: Date
  createdAt: Date
  embeddingText?: string
  embeddingVec?: number[]
}

export interface ProductCategoryRelation {
  product: Product
  category: ProductCategory
}
```

> Instructions:
>
> - Define interfaces for your component.
> - Ensure all fields match those in your schema.

---

## 6. Create Components

Create a components folder for your feature in `components/global`. For example, `components/global/your-component` with files for `list.vue`, `grid.vue`, and `details.vue`.

Example (`components/global/categories/list.vue`):

```vue
<script setup lang="ts">
  const { getAllCategories, categories, category, deleteCategory } = useCrm()

  const { open } = usePanels()

  function openCategoryCreatePanel(ctg: any) {
    console.log("openCategoryCreatePanel", ctg)
    console.log("222", ctg.value)

    open("category-create", { category: ctg })
  }
  const selected = ref<string[]>([])

  const isAllVisibleSelected = computed(() => {
    return selected.value.length === categories.value?.length
  })

  function toggleAllVisibleSelection() {
    if (isAllVisibleSelected.value) {
      selected.value = []
    } else {
      selected.value = categories.value?.map((item) => item.uid) ?? []
    }
  }

  onMounted(() => {
    getAllCategories()
  })

  function goToCategory(ctg: any) {
    category.value = ctg
    useRouter().push(`/ecomm/details/category`)
  }
</script>

<template>
  <Table rounded="sm">
    <template #header>
      <TableHeading uppercase class="px-4 py-6">
        <div class="flex items-center">
          <BaseCheckbox
            :model-value="isAllVisibleSelected"
            :indeterminate="selected.length > 0 && !isAllVisibleSelected"
            name="table-1-main"
            rounded="sm"
            color="primary"
            @click="toggleAllVisibleSelection"
          />
        </div>
      </TableHeading>
      <TableHeading uppercase> Category </TableHeading>
      <TableHeading uppercase> Description </TableHeading>
      <TableHeading uppercase> Menu Order </TableHeading>
      <TableHeading uppercase> Display </TableHeading>
      <TableHeading uppercase> Parent </TableHeading>
      <TableHeading uppercase class="px-4 py-6"> Actions </TableHeading>
    </template>

    <TableRow v-for="ctg in categories" :key="category.uid">
      <TableCell class="p-4">
        <div class="flex items-center">
          <BaseCheckbox
            v-model="selected"
            :value="ctg.uid"
            :name="ctg.uid"
            rounded="sm"
            color="primary"
          />
        </div>
      </TableCell>
      <TableCell>
        <div class="flex items-center">
          <BaseAvatar :src="ctg.image?.src" size="sm" :name="ctg.name" />
          <div class="ms-3 leading-none">
            <h4 class="font-heading text-sm font-semibold">
              {{ ctg.name }}
            </h4>
            <p class="text-muted-400 font-sans text-xs">
              {{ ctg.description }}
            </p>
          </div>
        </div>
      </TableCell>
      <TableCell light>
        {{ ctg.description }}
      </TableCell>
      <TableCell>
        {{ ctg.menuOrder }}
      </TableCell>
      <TableCell>
        {{ ctg.display }}
      </TableCell>
      <TableCell>
        {{ ctg.parentId }}
      </TableCell>
      <TableCell>
        <BaseDropdown variant="button" label="Actions" placement="bottom-start">
          <BaseDropdownItem title="View" rounded="sm">
            <template #start>
              <Icon
                @click="goToCategory(ctg)"
                name="ph:eye"
                class="text-muted-400 size-6 cursor-pointer hover:text-primary-500"
              />
            </template>
          </BaseDropdownItem>
          <BaseDropdownItem title="Edit" rounded="sm">
            <template #start>
              <Icon
                @click="openCategoryCreatePanel(ctg)"
                name="ph:pencil-simple"
                class="text-muted-400 size-6 cursor-pointer hover:text-primary-500"
              />
            </template>
          </BaseDropdownItem>
          <BaseDropdownItem title="Delete" rounded="sm">
            <template #start>
              <Icon
                @click="deleteCategory(ctg.uid)"
                name="ph:trash"
                class="text-muted-400 size-6 cursor-pointer hover:text-red-500"
              />
            </template>
          </BaseDropdownItem>
        </BaseDropdown>
      </TableCell>
    </TableRow>
  </Table>
</template>
```

> Instructions:
>
> - Create components suitable for your component's functionality.
> - Use existing components as a reference for structure and style.

---

## 7. Add Forms

Add the form schema in `server/api/form/retrieve/data.ts`. Reference existing forms as examples. Then create the necessary form component in `components/global/form/create`.

Form Schema (`server/api/form/retrieve/data.ts`): You add it to the existing array async function getDemoData() { return Promise.resolve([

```typescript
   {
      id: 2,
      title: "Category",
      subtitle: "Categories for your products",
      purpose: "Add a new category for your products",
      slug: "category",
      schema: {
        rules: [],
        superRefine: [],
        fields: [
          {
            label: "Name",
            name: "name",
            as: "input",
            type: "text",
            placeholder: "Category Name",
            component: "BaseInput",
            shape: "curved",
            icon: "",
            value: "",
            required: true,
            disabled: false,
            class: "col-span-12",
          },
          {
            label: "Slug",
            name: "slug",
            as: "input",
            type: "text",
            placeholder: "category-slug",
            component: "BaseInput",
            shape: "curved",
            icon: "",
            value: "",
            required: true,
            disabled: false,
            class: "col-span-12",
          },
          {
            label: "Parent Category",
            name: "parentId",
            as: "select",
            placeholder: "Select Parent Category",
            component: "BaseSelect",
            shape: "curved",
            icon: "",
            value: "",
            required: false,
            disabled: false,
            class: "col-span-12",
            options: [], // This should be populated with existing categories
          },
          {
            label: "Description",
            name: "description",
            as: "input",
            type: "text",
            placeholder: "Category Description",
            component: "BaseTextarea",
            shape: "curved",
            icon: "",
            value: "",
            required: false,
            disabled: false,
            class: "col-span-12",
          },
          {
            label: "Display Type",
            name: "display",
            as: "select",
            placeholder: "Select Display Type",
            component: "BaseSelect",
            shape: "curved",
            icon: "",
            value: "",
            required: true,
            disabled: false,
            class: "col-span-12",
            options: [
              { value: "default", label: "Default" },
              { value: "products", label: "Products" },
              { value: "subcategories", label: "Subcategories" },
              { value: "both", label: "Both" },
            ],
          },
          {
            label: "Image",
            name: "image",
            as: "input",
            type: "file",
            placeholder: "Category Image",
            component: "BaseUpload",
            shape: "curved",
            icon: "",
            value: "",
            required: false,
            disabled: false,
            class: "col-span-12",
            accept: "image/*",
          },
          {
            label: "Menu Order",
            name: "menuOrder",
            as: "input",
            type: "number",
            placeholder: "Menu Order",
            component: "BaseInput",
            shape: "curved",
            icon: "",
            value: "",
            required: false,
            disabled: false,
            class: "col-span-12",
          },
        ],
      },
    },
```

Form Component (`components/global/form/create/category.vue`):

```vue
<script setup lang="ts">
  import { PropType, onMounted, ref, computed } from "vue"
  import { type Category } from "../../../../../../types"
  import { createItem, getLink } from "../../../../../../utils/data"
  import { showSuccess, showErrors } from "../../../../../../utils/notification"
  const props = defineProps({
    category: {
      type: Object as PropType<Category>,
      default: () => ({}),
    },
  })

  const emits = defineEmits<{
    updated_form: [props: any]
  }>()

  const { close } = usePanels()
  onKeyStroke("Escape", close)

  const { user, workspace } = useAccount()
  const { category, categories, createCategory, updateCategory } = useCrm()

  const { data, pending, error, refresh } = await useFetch(
    useApiRoute("/api/form/retrieve/data"),
    {
      query: {
        filter: "category",
      },
    }
  )

  let formData = ref({})
  let formDataInit = ref({})

  const retrieveData = computed(() => {
    return data.value?.data?.[0] || {}
  })

  onMounted(() => {
    console.log("category ONMOUNTED", props.category)
    setTimeout(() => {
      console.log("retrieveData", retrieveData.value)
      formData.value = data.value?.data?.[0] || {}

      // Populate formData with props.category if it's not null
      if (props.category && Object.keys(props.category).length > 0) {
        try {
          formData.value.schema.fields.forEach((field: any) => {
            if (props.category[field.name] !== undefined) {
              field.value = props.category[field.name]
            } else {
              console.warn(`Key "${field.name}" not found in props.category`)
            }
          })
          // Initialize formDataInit with the updated values
          formDataInit.value = { ...formData.value }
          console.log("formData after mapping", formData.value)
        } catch (mappingError) {
          console.error(
            "Error mapping category data to form schema:",
            mappingError
          )
          showErrors("Failed to initialize form with category data.")
        }
      }
    }, 500)
  })

  const loading = ref(false)

  const onSubmit = async () => {
    console.log("onSubmit", formDataInit)
    loading.value = true
    let state = formDataInit.value
    user.ownerId = user.value.uid
    let res = null
    if (props.category && Object.keys(props.category).length > 0) {
      state.uid = props.category.uid
      res = await updateCategory(state)
    } else {
      res = await createCategory(state)
    }
    if (res.statusCode === 200) {
      showSuccess(
        `Category ${props.category ? "updated" : "created"} successfully.`
      )
      close()
    } else {
      showErrors(`Failed to ${props.category ? "update" : "create"} category.`)
    }
    loading.value = false
  }

  const onUpdate = (formDataReceived: any) => {
    try {
      Object.entries(formDataReceived).forEach(([key, value]) => {
        console.log(`${key}: ${value}`)
        if (value !== undefined) {
          const field = formData.value.schema.fields.find(
            (field: any) => field.name === key
          )
          if (field) {
            field.value = value
            field.val = value
          } else {
            console.warn(`Field "${key}" not found in form schema.`)
          }
          formDataInit.value[key] = value
        }
      })

      emits("updated_form", formDataInit.value)
    } catch (updateError) {
      console.error("Error updating form data:", updateError)
      showErrors("Failed to update form data.")
    }
  }
</script>

<template>
  <FormGenerator
    :schema="formData.schema"
    @submitted_form="onSubmit"
    @updated_form="onUpdate"
  >
    <template #form_bottom>
      <BaseButton
        type="submit"
        @click="onSubmit"
        :color="loading ? 'muted' : 'primary'"
        class="w-full  mt-4"
        :loading="loading"
      >
        {{
          props.category && Object.keys(props.category).length > 0
            ? "Update"
            : "Create"
        }}
      </BaseButton>
    </template>
  </FormGenerator>
</template>
```

> Instructions:
>
> - Define form fields in the schema.
> - Implement form logic in the component.
> - Use FormGenerator for rendering forms.

---

## 8. Create Panel Components

In the `components/global/panel` folder, create a folder for your component with `button.vue` and `create.vue` files. Use the category panel components as examples.

Button Component (`components/global/panel/your-component/button.vue`):

```vue
<script setup lang="ts">
  const { open } = usePanels()
  const categories = useState<any>("categories", () => [])

  function openCategoryCreatePanel() {
    open("category-create", {})
  }
</script>
<template>
  <button
    v-if="categories.length === 0"
    type="button"
    class="border-muted-300 dark:border-muted-800 hover:border-primary-500 dark:hover:border-primary-500 group flex size-full items-center justify-center gap-2 rounded-lg border-2 border-dashed p-6 transition-colors duration-300"
    @click="openCategoryCreatePanel()"
  >
    <span class="block text-center font-sans">
      <span
        class="text-muted-800 dark:text-muted-100 group-hover:text-primary-500 dark:group-hover:text-primary-500 block transition-colors duration-300"
      >
        Create a new category
      </span>
      <span class="text-muted-400 block text-sm">
        Add a new category to your product
      </span>
    </span>
  </button>
  <div v-else class="flex justify-end">
    <BaseButtonIcon size="sm" rounded="full" @click="openCategoryCreatePanel()">
      <Icon name="lucide:plus" class="size-4" />
    </BaseButtonIcon>
  </div>
</template>
```

Create Panel (`components/global/panel/your-component/create.vue`):

```vue
<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      category?: any
    }>(),
    {
      category: undefined,
    }
  )

  let formData = ref({
    title: "Create Category",
    subtitle: "Create a new category",
  })
  let formDataInit = ref({})

  const onUpdate = (formDataReceived: any) => {
    Object.entries(formDataReceived).forEach(([key, value]) => {
      console.log(`${key}: ${value}`)
      if (value !== undefined) {
        formDataInit.value[key] = value
      }
    })
    console.log("formDataInit", formDataInit.value)
  }
</script>

<template>
  <div
    class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 border bg-white"
  >
    <div class="flex h-16 w-full items-center justify-between px-10">
      <h2
        class="font-heading text-muted-700 text-lg font-semibold dark:text-white"
      >
        {{ formData.title }}
      </h2>
      <button
        type="button"
        class="text-muted-400 nui-focus hover:bg-muted-100 focus:bg-muted-100 hover:text-muted-600 focus:text-muted-600 dark:hover:bg-muted-700 dark:focus:bg-muted-700 flex size-10 items-center justify-center rounded-full transition-colors duration-300 dark:hover:text-white dark:focus:text-white"
        @click="close"
      >
        <Icon name="feather:chevron-right" class="size-6" />
      </button>
    </div>

    <div
      class="nui-slimscroll relative h-[calc(100vh_-_64px)] w-full overflow-y-auto px-10 py-5"
    >
      <div>
        <div class="mb-4 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <BaseButtonIcon
              rounded="full"
              data-nui-tooltip="Edit task"
              data-nui-tooltip-position="end"
              size="sm"
            >
              <Icon name="lucide:edit-3" />
            </BaseButtonIcon>
            <h4
              class="text-muted-400 font-sans text-xs font-semibold uppercase"
            >
              {{ formData.subtitle }}
            </h4>
          </div>
          <BaseTag
            rounded="full"
            variant="pastel"
            color="muted"
            class="m-0 -ms-1 inline-flex h-6 scale-90 items-center gap-1 py-0 text-xs font-semibold"
          >
            <span class="block size-2 rounded-full bg-primary-500" />
            <span>Product #{{ formDataInit.product?.length || 0 }}</span>
          </BaseTag>
        </div>
        <div class="border-muted-200 dark:border-muted-700 border-b pb-6">
          <FormCreateCategory
            @updated_form="onUpdate"
            :category="props.category"
          />
        </div>
      </div>
    </div>
  </div>
</template>
```

> Instructions:
>
> - Use the panel components to open forms and other interactive elements.
> - Ensure the panels are registered and can be opened via the usePanels composable.

---

## Final Notes

- **File Paths**: Always ensure file paths are correct and use absolute paths from the project root.
- **Naming Conventions**: Follow the project's naming conventions for files and components.
- **Examples**: Refer to the category components and files for guidance and keep to the same structure.
- **Existing Components**: If some steps are already completed for your component, adjust accordingly.

By following this template and using the provided examples, you can systematically create all the necessary files, APIs, and components for your new feature, ensuring consistency and reducing errors.
