import { IMAGES_KEYS_TYPE, YEARS_KEYS_TYPE } from '@/store/constants'
import { imagesPv } from '@/store/images_repo/pv'
import { imagesProsvita } from '@/store/images_repo/prosvita'
import { imagesGeneral } from '@/store/images_repo/general'
import { imagesSalina } from '@/store/images_repo/salina'
import { imagesChurch } from '@/store/images_repo/church'

export interface Image {
  src: string;
  keys: (IMAGES_KEYS_TYPE | YEARS_KEYS_TYPE)[];
  title: string;
  source?: string;
  year: number;
  w?: number;
  h?: number;
}

export interface PhotosStoreInterface {
  images: Image[];
}

export const state: PhotosStoreInterface = {
  images: [
    ...imagesProsvita,
    ...imagesPv,
    ...imagesGeneral,
    ...imagesSalina,
    ...imagesChurch
  ]
}
