import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "collapse" | "default" | "empty" | "iconnav" | "landing" | "sidebar" | "topnav"
declare module "../../../node_modules/.pnpm/nuxt@3.11.2_@parcel+watcher@2.4.1_@types+node@22.10.1_@unocss+reset@0.59.1_change-case@5.4.4__twmybpxphuevzb2usqn2olokxu/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}