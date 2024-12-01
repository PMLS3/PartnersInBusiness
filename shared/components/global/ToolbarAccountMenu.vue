<script setup lang="ts">
  import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue"
  const props = withDefaults(
    defineProps<{
      avatar?: string
      user?: {
        name: string
        email: string
      }
      profiles?: {
        name: string
        email: string
        avatar: string
      }[]
    }>(),
    {
      avatar: () => "/img/avatars/2.svg",
      user: () => {
        return {
          name: "Maya Rosselini",
          email: "maya@tairo.io",
        }
      },
      profiles: () => [
        {
          name: "Mike Miller",
          email: "mike@tairo.io",
          avatar: "/img/avatars/3.svg",
        },
        {
          name: "Claire Baker",
          email: "claire@tairo.io",
          avatar: "/img/avatars/9.svg",
        },
        {
          name: "Alan Baxter",
          email: "alan@tairo.io",
          avatar: "/img/avatars/14.svg",
        },
      ],
    }
  )
  // Add a stable ID for the menu button
  const menuButtonId = "account-menu-button"
</script>

<template>
  <div
    class="group relative z-20 inline-flex items-center justify-center text-end"
  >
    <Menu
      v-slot="{ close }"
      as="div"
      class="relative z-20 size-9 text-left"
      :key="'demo-toolbar-account-menu'"
    >
      <MenuButton
        :id="menuButtonId"
        as="template"
        class="hover:bg-muted-100 dark:hover:bg-muted-700/60 flex size-9 cursor-pointer items-center justify-center rounded-full transition-colors duration-300"
      >
        <button
          type="button"
          class="group-hover:ring-primary-500 dark:ring-offset-muted-900 inline-flex size-9 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4"
        >
          <div
            class="relative inline-flex size-9 items-center justify-center rounded-full"
          >
            <img
              :src="props.avatar"
              class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
              alt=""
            />
          </div>
        </button>
      </MenuButton>

      <Transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="divide-muted-100 border-muted-200 dark:divide-muted-700 dark:border-muted-700 dark:bg-muted-800 absolute end-0 mt-2 w-64 origin-top-right divide-y rounded-md border bg-white shadow-lg focus:outline-none"
        >
          <div class="p-6 text-center">
            <div
              class="relative mx-auto flex size-20 items-center justify-center rounded-full"
            >
              <img
                :src="props.avatar"
                class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                alt=""
              />
            </div>
            <div class="mt-3">
              <h6
                class="font-heading text-muted-800 text-sm font-medium dark:text-white"
              >
                {{ props.user.name }}
              </h6>
              <p class="text-muted-400 mb-4 font-sans text-xs">
                {{ props.user.email }}
              </p>
              <BaseButton
                to="/layouts/profile-edit"
                rounded="lg"
                class="w-full"
                @click.passive="close"
              >
                Manage Account
              </BaseButton>
            </div>
          </div>
          <div class="px-6 py-1.5">
            <MenuItem
              v-slot="{ active }"
              as="div"
              v-for="profile in props.profiles"
            >
              <NuxtLink
                to="#"
                class="group flex w-full items-center rounded-md p-2 text-sm transition-colors duration-300"
                :class="[
                  active
                    ? 'bg-muted-100 dark:bg-muted-700 text-primary-500'
                    : 'text-muted-500',
                ]"
                @click.passive="close"
              >
                <div
                  class="relative inline-flex size-9 items-center justify-center rounded-full"
                >
                  <img
                    :src="profile.avatar"
                    class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                    alt=""
                  />
                </div>
                <div class="ms-2">
                  <h6
                    class="font-heading text-muted-800 text-xs font-medium leading-none dark:text-white"
                  >
                    {{ profile.name }}
                  </h6>
                  <p class="text-muted-400 font-sans text-xs">
                    {{ profile.email }}
                  </p>
                </div>
              </NuxtLink>
            </MenuItem>
          </div>

          <div class="p-6">
            <BaseButton rounded="lg" class="w-full" @click.passive="close">
              Logout
            </BaseButton>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  </div>
</template>
