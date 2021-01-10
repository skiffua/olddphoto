import Vue from 'vue'
import Vuex from 'vuex'
import { Image, PhotosStoreInterface, state } from '@/store/imagesStore'

Vue.use(Vuex)

export default new Vuex.Store<PhotosStoreInterface>({
  state,
  mutations: {
  },
  actions: {
  },
  getters: {
    getImagesByFilter: (state) => (filtersKeys: string[] = []): Image[] => {
      if (filtersKeys.length) {
        return state.images.filter((image: Image) => {
          return image.keys.some((key: string) => {
            return filtersKeys.includes(key)
          })
        })
      }

      return state.images
    }
  }
})
