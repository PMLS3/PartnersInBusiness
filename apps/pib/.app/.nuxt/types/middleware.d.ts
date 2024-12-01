import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "../../../node_modules/.pnpm/nuxt@3.11.2_@parcel+watcher@2.4.1_@types+node@22.10.1_@unocss+reset@0.59.1_change-case@5.4.4__bpikmpbvxtoq35hrf2up5zlzyy/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}
declare module 'nitropack' {
  interface NitroRouteConfig {
    appMiddleware?: MiddlewareKey | MiddlewareKey[] | Record<MiddlewareKey, boolean>
  }
}