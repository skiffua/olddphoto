import { defineStore } from 'pinia';
import { imagesPv } from '~/stores/images_repo/pv';
import { imagesProsvita } from '~/stores/images_repo/prosvita';
import { imagesGeneral } from '~/stores/images_repo/general';
import { imagesSalina } from '~/stores/images_repo/salina';
import { imagesCastle } from '~/stores/images_repo/castle';
import { imagesChurch } from '~/stores/images_repo/church';
import { imagesSoviets } from '~/stores/images_repo/soviets';
import { imagesWWII } from '~/stores/images_repo/wwii';
import { imagesNl } from '~/stores/images_repo/nl';
import { IMAGES_KEYS, IMAGES_KEYS_TYPE, IMAGES_YEARS, YEARS_KEYS_TYPE } from '~/stores/constants';

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

export const usePhotosStore = defineStore('photos', {
  state: () => ({
    images: [
      ...imagesProsvita,
      ...imagesPv,
      ...imagesGeneral,
      ...imagesSalina,
      ...imagesCastle,
      ...imagesChurch,
      ...imagesSoviets,
      ...imagesWWII,
      ...imagesNl,
    ] as Image[],
    wordsKeysFilters: Object.keys(IMAGES_KEYS).reduce(
      (filtersObject, key) => ({
        ...filtersObject,
        [key]: { name: IMAGES_KEYS[key as keyof typeof IMAGES_KEYS], isActive: false },
      }),
      {} as Record<string, { name: string; isActive: boolean }>,
    ),
    yearsKeysFilters: Object.keys(IMAGES_YEARS).reduce(
      (filtersObject, key) => ({
        ...filtersObject,
        [key]: { name: IMAGES_YEARS[key as keyof typeof IMAGES_YEARS], isActive: false },
      }),
      {} as Record<string, { name: number; isActive: boolean }>,
    ),
  }),
  actions: {
    setWordsFilterKey(key: string) {
      this.wordsKeysFilters[key].isActive = !this.wordsKeysFilters[key].isActive;
    },
    setYearsFilterKey(key: string) {
      this.yearsKeysFilters[key].isActive = !this.yearsKeysFilters[key].isActive;
    },
    resetAllFilters() {
      Object.keys(this.wordsKeysFilters).forEach((key) => {
        this.wordsKeysFilters[key].isActive = false;
      });
      Object.keys(this.yearsKeysFilters).forEach((key) => {
        this.yearsKeysFilters[key].isActive = false;
      });
    },
  },
  getters: {
    wordsFiltersKeys: (state) => state.wordsKeysFilters,
    yearsFiltersKeys: (state) => state.yearsKeysFilters,
    isSomeFilterChecked: (state) =>
      !Object.values(state.wordsKeysFilters).some((filter) => filter.isActive) &&
      !Object.values(state.yearsKeysFilters).some((filter) => filter.isActive),
    isWordsKeyFiltersChecked: (state) => (filterKey: string) => state.wordsKeysFilters[filterKey].isActive,
    isYearsKeyFiltersChecked: (state) => (filterKey: string) => state.yearsKeysFilters[filterKey].isActive,

    filtersKeys(state): string[] {
      const keysFilters = Object.keys(state.wordsKeysFilters)
        .filter((keyFilter) => state.wordsKeysFilters[keyFilter].isActive);
      const yearsFilters = Object.keys(state.yearsKeysFilters)
        .filter((keyFilter) => state.yearsKeysFilters[keyFilter].isActive);
      return [...keysFilters, ...yearsFilters];
    },

    sortedImagesByYear(state): Image[] {
      return [...state.images].sort((a, b) => a.year - b.year);
    },

    imagesByFilter(): Image[] {
      if (this.filtersKeys.length) {
        return this.sortedImagesByYear.filter((image) =>
          image.keys.some((key) => this.filtersKeys.includes(key))
        );
      }
      return this.sortedImagesByYear;
    },

    imagesCount: (state) => state.images.length,
  },
});
