import Vue from 'vue'
import Vuex from 'vuex'
import { PhotosStoreInterface, state } from '@/store/imagesStore'

Vue.use(Vuex)

export default new Vuex.Store<PhotosStoreInterface>({
  state,
  mutations: {
  },
  actions: {
  }
})
