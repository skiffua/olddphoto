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
      { hid: 'description', name: 'description', content: 'Добромиль історичні фото старі ретро фото Dobromyl historical photos old photos Dobromil' },
      { hid: 'keywords', name: 'keywords', content: 'Добромиль, історичні фото, Dobromyl, historical, retro, photos, Dobromil'},
      { hid: 'og:url', property: 'og:url', content: 'https://dobromyl-historical-photos.netlify.app/'},
      { hid: 'og:title', property: 'og:title', lang: 'ua', content: 'Добромиль, історичні фото'},
      { hid: 'og:title', property: 'og:title', lang: 'en', content: 'Dobromyl, retro photos'},
      { hid: 'og:description', property: 'og:description', content: 'Добромиль історичні фото старі ретро фото Dobromyl historical photos old photos Dobromil'},
      { hid: 'og:image', property: 'og:image', content: 'https://dobromyl-historical-photos.netlify.app/photos/general/00051.jpg'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  ssr: true,

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
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    path: '/sitemapindex.xml',
    hostname: 'https://dobromyl-historical-photos.netlify.app',
    gzip: true,
    routes: async () => {
      const galleryPages = Array.from({ length: 17 }, (_, i) => i + 1);
      return galleryPages.map((page) => `/gallery/${page}/`);
    },
    exclude: [
      '/About'
    ],
  },
  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: 'https://dobromyl-historical-photos.netlify.app/sitemapindex.xml'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  target: 'static',
  generate: {
    routes: () => Array.from({ length: 17 }, (_, index) => index += 1 )
      .map((page) => `/gallery/${page}/`)
  }
  // typescript: {
  //   typeCheck: {
  //     eslint: {
  //       files: './**/*.{ts,js,vue}'
  //     },
  //     typescript: require.resolve('typescript'),
  //   }
  // }
}
