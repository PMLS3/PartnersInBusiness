// Generated by Nuxt'
import type { Plugin } from '#app'

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] }

type IsAny<T> = 0 extends 1 & T ? true : false
type InjectionType<A extends Plugin> = IsAny<A> extends true ? unknown : A extends Plugin<infer T> ? Decorate<T> : unknown

type NuxtAppInjections = 
  InjectionType<typeof import("../../../node_modules/.pnpm/nuxt@3.11.2_@parcel+watcher@2.4.1_@types+node@22.10.1_@unocss+reset@0.59.1_change-case@5.4.4__bpikmpbvxtoq35hrf2up5zlzyy/node_modules/nuxt/dist/app/plugins/check-outdated-build.client").default> &
  InjectionType<typeof import("../../../node_modules/.pnpm/nuxt@3.11.2_@parcel+watcher@2.4.1_@types+node@22.10.1_@unocss+reset@0.59.1_change-case@5.4.4__bpikmpbvxtoq35hrf2up5zlzyy/node_modules/nuxt/dist/app/plugins/revive-payload.server").default> &
  InjectionType<typeof import("../../../node_modules/.pnpm/nuxt@3.11.2_@parcel+watcher@2.4.1_@types+node@22.10.1_@unocss+reset@0.59.1_change-case@5.4.4__bpikmpbvxtoq35hrf2up5zlzyy/node_modules/nuxt/dist/app/plugins/revive-payload.client").default> &
  InjectionType<typeof import("../../../node_modules/.pnpm/nuxt@3.11.2_@parcel+watcher@2.4.1_@types+node@22.10.1_@unocss+reset@0.59.1_change-case@5.4.4__bpikmpbvxtoq35hrf2up5zlzyy/node_modules/nuxt/dist/head/runtime/plugins/unhead").default> &
  InjectionType<typeof import("../../../node_modules/.pnpm/nuxt@3.11.2_@parcel+watcher@2.4.1_@types+node@22.10.1_@unocss+reset@0.59.1_change-case@5.4.4__bpikmpbvxtoq35hrf2up5zlzyy/node_modules/nuxt/dist/pages/runtime/plugins/router").default> &
  InjectionType<typeof import("../../../node_modules/.pnpm/nuxt@3.11.2_@parcel+watcher@2.4.1_@types+node@22.10.1_@unocss+reset@0.59.1_change-case@5.4.4__bpikmpbvxtoq35hrf2up5zlzyy/node_modules/nuxt/dist/pages/runtime/plugins/prefetch.client").default> &
  InjectionType<typeof import("../../../node_modules/.pnpm/@nuxt+icon@1.8.2_magicast@0.3.5_rollup@4.27.3_vite@5.4.11_@types+node@22.10.1_terser@5.30.3___5lkabvldtddszrgb45aa5xyb7m/node_modules/@nuxt/icon/dist/runtime/plugin").default> &
  InjectionType<typeof import("../../../node_modules/.pnpm/@nuxtjs+color-mode@3.4.0_magicast@0.3.5_rollup@4.27.3/node_modules/@nuxtjs/color-mode/dist/runtime/plugin.server").default> &
  InjectionType<typeof import("../../../node_modules/.pnpm/@nuxtjs+color-mode@3.4.0_magicast@0.3.5_rollup@4.27.3/node_modules/@nuxtjs/color-mode/dist/runtime/plugin.client").default> &
  InjectionType<typeof import("../../../node_modules/.pnpm/@cssninja+nuxt-toaster@0.3.12_magicast@0.3.5_rollup@4.27.3_vue@3.5.12_typescript@5.6.3_/node_modules/@cssninja/nuxt-toaster/dist/runtime/plugin").default> &
  InjectionType<typeof import("../../../node_modules/.pnpm/nuxt-swiper@2.0.0_magicast@0.3.5_rollup@4.27.3/node_modules/nuxt-swiper/dist/runtime/plugins/components.client").default> &
  InjectionType<typeof import("../../../node_modules/.pnpm/nuxt@3.11.2_@parcel+watcher@2.4.1_@types+node@22.10.1_@unocss+reset@0.59.1_change-case@5.4.4__bpikmpbvxtoq35hrf2up5zlzyy/node_modules/nuxt/dist/app/plugins/view-transitions.client").default> &
  InjectionType<typeof import("../../../node_modules/.pnpm/nuxt@3.11.2_@parcel+watcher@2.4.1_@types+node@22.10.1_@unocss+reset@0.59.1_change-case@5.4.4__bpikmpbvxtoq35hrf2up5zlzyy/node_modules/nuxt/dist/app/plugins/chunk-reload.client").default> &
  InjectionType<typeof import("../../../shared/plugins/directives").default> &
  InjectionType<typeof import("../../../shared/plugins/vue-axe").default>

declare module '#app' {
  interface NuxtApp extends NuxtAppInjections { }

  interface NuxtAppLiterals {
    pluginName: 'nuxt:revive-payload:client' | 'nuxt:head' | 'nuxt:router' | 'nuxt:revive-payload:server' | 'nuxt:global-components' | 'nuxt:prefetch' | '@nuxt/icon' | 'nuxt:chunk-reload'
  }
}

declare module 'vue' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}

export { }