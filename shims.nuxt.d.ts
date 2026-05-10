import type { RouteMeta } from 'vue-router'

declare module '#app' {
  export type PageMeta = RouteMeta
}

// It is always important to ensure you import/export something when augmenting a type
export {}
