import Vue from 'vue'
import App from './App.vue'
import VueGallery from 'vue-gallery'
import VuePictureSwipe from 'vue-picture-swipe'
import router from './router'
import store from './store'

Vue.component('VGallery', VueGallery)
Vue.component('vue-picture-swipe', VuePictureSwipe)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
