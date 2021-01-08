import Vue from 'vue'
import App from './App.vue'
import VuePictureSwipe from 'vue-picture-swipe'
import LightGallery from 'vue-light-gallery'
import router from './router'
import store from './store'
import lightbox from 'vlightbox'

Vue.use(lightbox)
Vue.use(LightGallery)
Vue.component('vue-picture-swipe', VuePictureSwipe)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
