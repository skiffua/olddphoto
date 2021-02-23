export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Добромиль, історичні фото',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Добромиль, історичні фото. Dobromyl, historical photos' },
      { hid: 'keywords', name: 'keywords', content: 'Добромиль, історичні фото, Dobromyl, historical photos, Dobromil'},
      { hid: "og:url", property: "og:url", content: 'https://dobromyl-historical-photos.herokuapp.com/'},
      { hid: "og:title", property: "og:title", content: 'Добромиль, історичні фото'},
      { hid: "og:description", property: "og:description", content: 'Добромиль, історичні фото, старі фото, Dobromyl, historical photos, old photos, Dobromil'},
      // { hid: "og:image", property: "og:image", content: 'https://dobromyl-historical-photos.herokuapp.com/photos/general/00051.jpg'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],
  sitemap: {
    hostname: 'https://dobromyl-historical-photos.herokuapp.com/',
    exclude: [
      '/about'
    ],
  },
  robots: {
    UserAgent: '*',
    Allow: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  // typescript: {
  //   typeCheck: {
  //     eslint: {
  //       files: './**/*.{ts,js,vue}'
  //     },
  //     typescript: require.resolve('typescript'),
  //   }
  // }
}
