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
    getSortedImagesByYear: (state): Image[] => {
      return state.images.sort((imageObject1: Image, imageObject2: Image) =>
        imageObject1.year - imageObject2.year)
    },

    getImagesByFilter: (state, getters) => (filtersKeys: string[] = []): Image[] => {
      if (filtersKeys.length) {
        return getters.getSortedImagesByYear.filter((image: Image) => {
          return image.keys.some((key: string) => {
            return filtersKeys.includes(key)
          })
        })
      }

      return getters.getSortedImagesByYear
    }
  }
})
