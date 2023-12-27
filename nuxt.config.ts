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

    lazy: true,
    langDir: "locales",
    strategy: "no_prefix",
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
    defaultLocale: "hi"
  },

  // PWA config
  pwa: {
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
      navigateFallback: '/'
    },
    devOptions: {
      enabled: true,
    }
  },

})
