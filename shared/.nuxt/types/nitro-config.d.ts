// Generated by nitro

// App Config
import type { Defu } from 'defu'

import type { default as appConfig0 } from "/Users/peetstander/Projects/pibs/shared/app.config";
import type { default as appConfig1 } from "/Users/peetstander/Projects/pibs/node_modules/.pnpm/@shuriken-ui+nuxt@3.6.1_magicast@0.3.5_nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.10.1__4b46sbgtuk3j7f4cvciuhqlj24/node_modules/@shuriken-ui/nuxt/app.config";

type UserAppConfig = Defu<{}, [typeof appConfig0, typeof appConfig1]>

declare module 'nitropack' {
  interface AppConfig extends UserAppConfig {}
}
    
export {}