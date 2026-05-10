import process from 'node:process'
import { webUpdateNotice } from '@plugin-web-update-notification/vite'
import WebfontDownload from 'vite-plugin-webfont-dl'

import { pwa } from './config'

const { VITE_APP_DESCRIPTION } = process.env

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: true,
    typeCheck: true,
    strict: true,
  },

  app: {
    pageTransition: { name: 'fade', mode: 'out-in' },
    layoutTransition: { name: 'fade', mode: 'out-in' },
    keepalive: true,
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: VITE_APP_DESCRIPTION },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
      ],

    },
  },

  modules: [
    '@nuxt/ui', // https://ui.nuxt.com/
    '@nuxt/test-utils/module', // https://github.com/danielroe/nuxt-vitest
    'nuxt-icons', // https://nuxt.com/modules/icons
    '@nuxt/icon', // https://nuxt.com/modules/icon
    'nuxt-viewport', // https://nuxt.com/modules/nuxt-viewport
    'nuxt-content-twoslash', // https://github.com/antfu/nuxt-content-twoslash
    '@nuxt/content', // https://nuxt.com/modules/content
    '@nuxt/devtools', // https://nuxt.com/modules/devtools
    '@nuxtjs/color-mode', // https://nuxt.com/modules/color-mode
    '@nuxtjs/i18n', // https://nuxt.com/modules/i18n
    '@pinia/nuxt', // https://nuxt.com/modules/pinia
    '@pinia-plugin-persistedstate/nuxt', // https://nuxt.com/modules/pinia-plugin-persistedstate
    '@unocss/nuxt', // https://nuxt.com/modules/unocss
    '@vueuse/nuxt', // https://nuxt.com/modules/vueuse
    ['unplugin-icons/nuxt', { compiler: 'vue3' }], // https://github.com/antfu/unplugin-icons#configuration
    '@vite-pwa/nuxt', // https://nuxt.com/modules/vite-pwa-nuxt
    'notivue/nuxt',
    '@nuxt/eslint',
    ['vite-plugin-version-mark/nuxt', {
      // name: 'test-app',
      // version: '0.0.1',
      // command: 'git describe --tags',
      // ifGitSHA: true,
      ifShortSHA: true,
      ifMeta: true,
      ifLog: true,
      ifGlobal: true,
    }], // https://github.com/ZhongxuYang/vite-plugin-version-mark
    'unplugin-info/nuxt', // https://github.com/yjl9903/unplugin-info
  ],
  icon: {
    customCollections: [
      {
        prefix: 'svg',
        dir: './app/assets/icons',
      },
    ],
  },
  ui: {
    theme: {
      prefix: 'tw',
    },
  },
  content: {
    experimental: { nativeSqlite: true },
  },
  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/', '/about'],
    },
  },

  colorMode: {
    classSuffix: '',
  },
  future: {
    compatibilityVersion: 4,
  },
  i18n: {
    defaultLocale: 'zh-CN',
    locales: [
      {
        code: 'zh-CN',
        file: 'zh-CN.json',
        name: '简体中文',
      },
      {
        code: 'en-US',
        file: 'en-US.json',
        name: 'English',
      },
    ],

  },

  devtools: {
    enabled: true,
  },

  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },

  pwa,

  build: {

  },

  css: [
    '~/assets/style/index.css',
  ],

  postcss: {
    plugins: {

    },
  },

  devServer: {
    port: Number(process.env.VITE_DEV_PORT || 5679),
  },

  vite: {
    plugins: [
      webUpdateNotice({
        logVersion: true,
      }), // https://github.com/GreatAuk/plugin-web-update-notification
      WebfontDownload(), // https://github.com/feat-agency/vite-plugin-webfont-dl
    ],
  },

  compatibilityDate: '2026-05-10',
})
