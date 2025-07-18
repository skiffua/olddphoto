import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  // Global page headers
  app: {
    head: {
      title: 'Добромиль, історичні фото',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Добромиль історичні фото, старі ретро фото. Dobromyl historical photos, old photos Dobromil' },
        { hid: 'keywords', name: 'keywords', content: 'Добромиль,історичні фото,старі фото,ретро фото,Dobromyl,historical,retro,photos,Dobromil' },
        { hid: 'og:url', property: 'og:url', content: 'https://dobromyl-historical-photos.netlify.app/' },
        { hid: 'og:title', property: 'og:title', content: 'Добромиль, історичні фото' },
        { hid: 'og:description', property: 'og:description', content: 'Добромиль історичні фото старі ретро фото Dobromyl historical photos old photos Dobromil' },
        { hid: 'og:image', property: 'og:image', content: 'https://dobromyl-historical-photos.netlify.app/photos/general/00051.jpg' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      script: [
        {
          src: 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js',
          body: true,
          type: 'text/javascript'
        },
        {
          children: `
            window.addEventListener('load', function () {
              if (window.kofiWidgetOverlay) {
                window.kofiWidgetOverlay.draw('dobromylgallery', {
                  'type': 'floating-chat',
                  'floating-chat.donateButton.text': 'Support me',
                  'floating-chat.donateButton.background-color': '#323842',
                  'floating-chat.donateButton.text-color': '#fff'
                });
              }
            });
          `,
          type: 'text/javascript',
          body: true
        },
      ],
    },
  },
  ssr: true,
  css: [],
  plugins: [],
  components: true,
  buildModules: ['@nuxt/typescript-build'],
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    path: '/sitemap.xml',
    siteUrl: 'https://dobromyl-historical-photos.netlify.app',
    gzip: true,
    urls: Array.from({ length: 17 }, (_, i) => ({
      loc: `/gallery/${i + 1}/`,
    })),
    exclude: ['/About'],
  },
  vite: {
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       additionalData: '@use "~/assets/scss/styles.scss" as *;',
    //     },
    //   },
    // },
    optimizeDeps: {
      include: ['consola']
    },
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || 'http://localhost:3000',
    }
  }
})
