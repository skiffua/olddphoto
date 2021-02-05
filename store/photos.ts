import { IMAGES_KEYS_TYPE, YEARS_KEYS_TYPE } from './constants'
import { imagesPv } from './images_repo/pv'
import { imagesProsvita } from './images_repo/prosvita'
import { imagesGeneral } from './images_repo/general'
import { imagesSalina } from './images_repo/salina'
import { imagesChurch } from './images_repo/church'
import { imagesSoviets } from './images_repo/soviets'
import { imagesWWII } from './images_repo/wwii'
import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

export interface Image {
  src: string;
  keys: (IMAGES_KEYS_TYPE | YEARS_KEYS_TYPE)[];
  title: string;
  description?: string;
  source?: string;
  year: number;
  w?: number;
  h?: number;
}

export interface PhotosStoreInterface {
  images: Image[];
}

@Module({
  name: 'photos',
  stateFactory: true,
  namespaced: true,
})
export default class PhotosModule extends VuexModule {
  images: Image[] = [
    ...imagesProsvita,
    ...imagesPv,
    ...imagesGeneral,
    ...imagesSalina,
    ...imagesChurch,
    ...imagesSoviets,
    ...imagesWWII
  ]

  get sortedImagesByYear(): Image[] {
    const sortedImages = this.images.slice()
    return sortedImages.sort((imageObject1: Image, imageObject2: Image) =>
      imageObject1.year - imageObject2.year)
  }

    get imagesByFilter() {
    return (filtersKeys: string[] = []): Image[] => {
      if (filtersKeys.length) {
        return this.sortedImagesByYear.filter((image: Image) => {
          return image.keys.some((key: string) => {
            return filtersKeys.includes(key)
          })
        })
      }

      return this.sortedImagesByYear
    }
  }

  get imagesCount(): number {
    return this.images.length
  }
}

// import { createModule, mutation, action, extractVuexModule } from "vuex-class-component";

//
// //

//
// export const state: PhotosStoreInterface = {
//   images: [
//     ...imagesProsvita,
//     ...imagesPv,
//     ...imagesGeneral,
//     ...imagesSalina,
//     ...imagesChurch,
//     ...imagesSoviets,
//     ...imagesWWII
//   ]
// }

// const VuexModule = createModule({
//   namespaced: "photosStore",
//   strict: false,
//   target: "nuxt",
// })
//
// export class PhotosStore extends VuexModule {
//
//   private images = [
//     ...imagesProsvita,
//     ...imagesPv,
//     ...imagesGeneral,
//     ...imagesSalina,
//     ...imagesChurch,
//     ...imagesSoviets,
//     ...imagesWWII
//   ]
//
//   // Explicitly define a vuex getter using class getters.
//   get sortedImagesByYear(): Image[] {
//     return this.images.sort((imageObject1: Image, imageObject2: Image) =>
//       imageObject1.year - imageObject2.year)
//   }
//
//   get imagesByFilter() {
//     return (filtersKeys: string[] = []): Image[] => {
//       if (filtersKeys.length) {
//         return this.sortedImagesByYear.filter((image: Image) => {
//           return image.keys.some((key: string) => {
//             return filtersKeys.includes(key)
//           })
//         })
//       }
//
//       return this.sortedImagesByYear
//     }
//   }
//
//   get imagesCount(): number {
//     return this.images.length
//   }
// }
