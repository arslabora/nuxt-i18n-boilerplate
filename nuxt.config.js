export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'liuteriadautore',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    'nuxt-windicss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-i18n',
  ],

  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.js', name: 'English' },
      { code: 'it', iso: 'it-IT', file: 'it.js', name: 'Italiano' },
      { code: 'pt', iso: 'pt-BR', file: 'pt.js', name: 'Portugues' },
      { code: 'fr', iso: 'fr-FR', file: 'fr.js', name: 'Français' },
      { code: 'es', iso: 'es-ES', file: 'es.js', name: 'Español' },
    ],
    vueI18nLoader: true,
    defaultLocale: 'en',
    strategy: 'prefix',
    seo: true,
    langDir: '~/locales/',
    lazy: true,
    vueI18n: {
      fallbackLocale: 'en',
    },
  },

  windicss: {
    scan: {
      dirs: ['./'],
      exclude: [
        'node_modules',
        '.git',
        '.github',
        '.nuxt/**/*',
        '*.template.html',
        'app.html',
      ],
    },
    transformCSS: 'pre',
    preflight: {
      alias: {
        // add nuxt aliases
        'nuxt-link': 'a',
        // @nuxt/image module
        'nuxt-img': 'img',
      },
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
