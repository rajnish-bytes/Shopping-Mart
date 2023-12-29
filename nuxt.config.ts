// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@vite-pwa/nuxt'
  ],
  i18n: {

    strategy: "no_prefix",
    defaultLocale: "en",
    locales: [
      {
        code: "en",
        iso: "en",
        name: "English",
        file: "en.json",
      },
      {
        code: "hi",
        iso: "hi",
        name: "Hindi",
        file: "hi.json",
      },
    ],
    lazy: true,
    langDir: "locales",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
    }
  },

  // PWA config
  pwa: {
    registerType: 'autoUpdate',
    strategies: 'generateSW',
    manifest: {
      name: "shopping mart",
      short_name: "shopping mart",
      description: "testing nuxt3 pwa",
      icons: [
        {
          src: 'icons/icons8-apple-logo-64.png',
          sizes: '64x64',
          type: 'image/png'
        },
        {
          src: 'icons/icons8-apple-logo-144.png',
          sizes: '144x144',
          type: 'image/png'
        },
        {
          src: 'icons/icons8-apple-logo-192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'icons/icons8-apple-logo-512.png',
          sizes: '512x512',
          type: 'image/png'
        },
      ]
    },
    workbox: {
      // Only precache these files - html should be excluded
      globPatterns: ['**/*.{js,css}'],
  
      // Don't fallback on document based (e.g. `/some-page`) requests
      // Even though this says `null` by default, I had to set this specifically to `null` to make it work
      navigateFallback: '/' ,
  },
    devOptions: {
      enabled: true,
      type: 'module',
    },
  },

})
