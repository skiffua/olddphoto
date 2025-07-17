// types/runtime-config.d.ts
export {}

declare module 'nuxt/schema' {
  interface RuntimeConfig {
    // серверні змінні
  }

  interface PublicRuntimeConfig {
    apiBaseUrl: string
  }
}
