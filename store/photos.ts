import {IMAGES_KEYS, IMAGES_KEYS_TYPE, IMAGES_YEARS, YEARS_KEYS_TYPE} from './constants'
import { imagesPv } from './images_repo/pv'
import { imagesProsvita } from './images_repo/prosvita'
import { imagesGeneral } from './images_repo/general'
import { imagesSalina } from './images_repo/salina'
import { imagesChurch } from './images_repo/church'
import { imagesSoviets } from './images_repo/soviets'
import { imagesWWII } from './images_repo/wwii'
import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { imagesNl } from '~/store/images_repo/nl'

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
    ...imagesWWII,
    ...imagesNl
  ]

  wordsKeysFilters: Record<string, any> = Object.keys(IMAGES_KEYS)
    .reduce((filtersObject: any, key: string) => {
      filtersObject[key] = {
        name: IMAGES_KEYS[key],
        isActive: false
      }
      return filtersObject
    }, {})

  yearsKeysFilters: Record<string, any> = Object.keys(IMAGES_YEARS)
    .reduce((filtersObject: any, key: any) => {
      filtersObject[key] = {
        name: IMAGES_YEARS[key],
        isActive: false
      }
      return filtersObject
    }, {})

  @Mutation
  setWordsFilterKey(key: string) {
    this.wordsKeysFilters[key].isActive = !this.wordsKeysFilters[key].isActive
  }

  @Mutation
  setYearsFilterKey(key: string) {
    this.yearsKeysFilters[key].isActive = !this.yearsKeysFilters[key].isActive
  }

  @Mutation
  resetAllFilters() {
    Object.keys(this.wordsKeysFilters).forEach(key => {
      this.wordsKeysFilters[key].isActive = false
    })

    Object.keys(this.yearsKeysFilters).forEach(key => {
      this.yearsKeysFilters[key].isActive = false
    })
  }

  get wordsFiltersKeys(): Record<string, any> {
    return this.wordsKeysFilters
  }

  get yearsFiltersKeys(): Record<string, any> {
    return this.yearsKeysFilters
  }

  get isSomeFilterChecked(): boolean {
    return !Object.keys(this.wordsKeysFilters)
      .some(filter => this.wordsKeysFilters[filter].isActive === true)
      && !Object.keys(this.yearsKeysFilters)
      .some(filter => this.yearsKeysFilters[filter].isActive === true)
  }

  get isWordsKeyFiltersChecked() {
    return (filterKey: string): boolean => this.wordsKeysFilters[filterKey].isActive
  }

  get isYearsKeyFiltersChecked() {
    return (filterKey: string): boolean => this.yearsKeysFilters[filterKey].isActive
  }

  get filtersKeys(): string[] {
    const keysFilters: string[] = Object.keys(this.wordsKeysFilters)
      .filter(keyFilter => this.wordsKeysFilters[keyFilter].isActive === true)
      .map(keyFilter => keyFilter)
    const yearsFilters: string[] = Object.keys(this.yearsKeysFilters)
      .filter(keyFilter => this.yearsKeysFilters[keyFilter].isActive === true)
      .map(keyFilter => keyFilter)

    return [...keysFilters, ...yearsFilters]
  }

  get sortedImagesByYear(): Image[] {
    const sortedImages = this.images.slice()
    return sortedImages.sort((imageObject1: Image, imageObject2: Image) =>
      imageObject1.year - imageObject2.year)
  }

  get imagesByFilter() {
    if (this.filtersKeys.length) {
      return this.sortedImagesByYear.filter((image: Image) => {
        return image.keys.some((key: string) => {
          return this.filtersKeys.includes(key)
        })
      })
    }

    return this.sortedImagesByYear
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
