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
      {
        code: "fr",
        iso: "fr",
        name: "Franch",
        file: "fr.json",
      },
      {
        code: "bho",
        iso: "bho",
        name: "Bhojpuri",
        file: "bho.json",
      },
    ],
    defaultLocale: "en",
  },

  // PWA config
  pwa: {
    strategies: 'generateSW',
    registerType: 'autoUpdate',
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
      enabled: true,
      globPatterns: ['**/*.{js,css,html,ico,png,svg,vue}'],
      navigateFallback: null,
      preCaching: [
        // Define the route for your homepage
        { url: '/' },
  
        // Add other routes as needed
        { url: '/about' },
        { url: '/login' },
      ],
      runtimeCaching: [
        {
          urlPattern: '.*',
          strategyOptions: {
            cacheName: 'all-routes',
            cacheExpiration: {
              maxEntries: 100,
              maxAgeSeconds: 24 * 60 * 60 * 30, // 30 days
            },
          },
          handler: 'StaleWhileRevalidate',
        },
      ],
  },
  devOptions: {
    enabled: true,
    suppressWarnings: true,
    navigateFallbackAllowlist: [/^\/$/],
    type: 'module',
  },
  },

})
