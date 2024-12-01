// Generated by nitro
import type { Serialize, Simplify } from 'nitropack'
declare module 'nitropack' {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/api/auth/register': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/auth/register.post').default>>>>
    }
    '/api/profile/create': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/profile/create.post').default>>>>
    }
    '/api/profile': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/profile/index').default>>>>
    }
    '/api/profile/notifications': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/profile/notifications/index').default>>>>
    }
    '/api/workspace/create': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/workspace/create.post').default>>>>
    }
    '/api/workspace/join': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/workspace/join.post').default>>>>
    }
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../node_modules/.pnpm/nuxt@3.11.2_@parcel+watcher@2.4.1_@types+node@22.10.1_@unocss+reset@0.59.1_change-case@5.4.4__twmybpxphuevzb2usqn2olokxu/node_modules/nuxt/dist/core/runtime/nitro/renderer').default>>>>
    }
    '/api/_nuxt_icon/:collection': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../node_modules/.pnpm/@nuxt+icon@1.8.2_magicast@0.3.5_rollup@4.27.3_vite@5.4.11_@types+node@22.10.1_terser@5.30.3___5lkabvldtddszrgb45aa5xyb7m/node_modules/@nuxt/icon/dist/runtime/server/api').default>>>>
    }
    '/_ipx/**': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../node_modules/.pnpm/@nuxt+image@1.8.1_ioredis@5.4.1_magicast@0.3.5_rollup@4.27.3/node_modules/@nuxt/image/dist/runtime/ipx').default>>>>
    }
  }
}
export {}