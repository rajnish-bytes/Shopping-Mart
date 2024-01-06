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
    // strategies: 'generateSW',
    // registerType: 'autoUpdate',

    manifest: {
      name: "shopping mart",
      short_name: "shopping mart",
      start_url: '/',
      description: "testing nuxt3 pwa",
      theme_color: '#1169d0',
      background_color: '#ffffff',
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
    // workbox: {
    //   // enabled: true,
    //   // offline: true,
    //   // clientsClaim: true,
    //   // skipWaiting: true,
    //   globPatterns: ["**/*.{js,css,html,ico,png,svg,webp,woff2}"],
    //   navigateFallback: '/',
    //   // preCaching: [
    //   //   '/',
    //   //   '/about',
    //   //   '/login'
    //   // ],
    //   // preCaching: [
    //   //   // Define the route for your homepage
    //   //   { url: '/' },

    //   //   // Add other routes as needed
    //   //   { url: '/about' },
    //   //   { url: '/login' },
    //   // ],
    //   // runtimeCaching: [
    //   //   {
    //   //     urlPattern: '.*',
    //   //     handler: 'StaleWhileRevalidate',
    //   //   },
    //   // ],
    //   runtimeCaching: [
    //     {
    //       urlPattern: './*',
    //       handler: 'StaleWhileRevalidate',
    //       method: 'GET',
    //       options: {
    //         cacheName: "app-cache",
    //         expiration: {
    //           maxEntries: 50,
    //           maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
    //         },
    //       },
    //     },
    //     // Cache assets
    //     {
    //       urlPattern: /\.(?:png|gif|jpg|jpeg|svg|css|js)$/,
    //       handler: 'StaleWhileRevalidate',
    //       options: {
    //         cacheName: "assets-cache",
    //         expiration: {
    //           maxEntries: 50,
    //           maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
    //         },
    //       },
    //     },
    //     {
    //       urlPattern: /\.(?:html|htm)$/,
    //       handler: 'StaleWhileRevalidate',
    //       options: {
    //         cacheName: 'html-cache',
    //         expiration: {
    //           maxEntries: 10,
    //           maxAgeSeconds: 24 * 60 * 60, // 1 day
    //         },
    //       },
    //     },
    //   ],
    // },
    registerType: "prompt",
    injectRegister: null,
    strategies: "injectManifest",
    srcDir: "/",
    filename: "sw.ts",
    workbox: {
      clientsClaim: true,
      skipWaiting: true,
    },
    devOptions: {
      enabled: true,
    },
    injectManifest: {
      globPatterns: ["**/*.{js,css,html,ico,png,svg,webp,woff2}"],
    },
    // devOptions: {
    //   enabled: true,
    //   suppressWarnings: true,
    //   navigateFallbackAllowlist: [/^\/$/],
    //   type: 'module',
    // },
  },
  build: {},

  nitro: {
    externals: {
      inline: ["uuid"],
    },
  },
  routeRules: {
    '/_nuxt/': { headers: { 'Service-Worker-Allowed': '/_nuxt/' } },
  }
})
