import colors from 'vuetify/lib/util/colors'
export default {
  mode: 'universal',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'proj',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/global.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/globalComponents.js' },
    { src: '~/plugins/vuetify.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    // '@nuxtjs/stylelint-module',
    [
      '@nuxtjs/vuetify',
      {
        breakpoint: {
          thresholds: {
            xs: 500,
            sm: 750,
            md: 1100,
            lg: 1500,
          },
          mobileBreakpoint: 'sm',
          scrollBarWidth: 16,
        },
        customVariables: ['~/assets/styles/vuetify/_variables.scss'],
        treeShake: true,
        rtl: false,
        theme: {
          dark: true,
          themes: {
            light: {
              primary: colors.deepPurple.base,
              secondary: colors.orange.base,
              accent: colors.teal.base,
              success: colors.teal.accent4,
              info: colors.blue.darken2,
              error: colors.red.base,
              warning: colors.yellow.accent3,
              backgroundColor: '#F5F6FA',
              cardColor: '#fff',
              titleColor: '#1d253b',
              textColor: '#9a9a9a',
            },
            dark: {
              primary: colors.deepPurple.base,
              secondary: colors.orange.base,
              accent: colors.teal.base,
              success: colors.teal.accent4,
              info: colors.blue.darken2,
              error: colors.red.base,
              warning: colors.yellow.accent3,
              backgroundColor: '#1E1E2F',
              cardColor: '#27293D',
              titleColor: '#fff',
              textColor: '#9a9a9a',
            },
          },
        },
      },
    ],
  ],
  loading: {
    color: '#ffa500',
    failedColor: 'crimson',
    height: '5px',
    rtl: false,
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      'nuxt-leaflet',
      {
        /* module options */
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
