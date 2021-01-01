import { IMAGES_KEYS, YEARS_KEYS } from '@/store/constants'

export interface Image {
  src: string;
  keys: (IMAGES_KEYS | YEARS_KEYS)[];
  title: string;
}

export interface PhotosStoreInterface {
  images: Image[];
}

const imagesKulture: Image[] = [
  {
    src: '../assets/images/kulture/00005.jpg',
    keys: [IMAGES_KEYS.KULTURE, IMAGES_KEYS.KONCERT, YEARS_KEYS.Y1989_1991],
    title: ''
  },
  {
    src: '../assets/images/kulture/00006.jpg',
    keys: [IMAGES_KEYS.KULTURE, IMAGES_KEYS.KONCERT, IMAGES_KEYS.CHILDREN, YEARS_KEYS.Y1989_1991],
    title: ''
  },
  {
    src: '../assets/images/kulture/00009.jpg',
    keys: [IMAGES_KEYS.KULTURE, IMAGES_KEYS.KONCERT, IMAGES_KEYS.VERTEP, YEARS_KEYS.Y1989_1991],
    title: ''
  },
  {
    src: '../assets/images/kulture/00010.jpg',
    keys: [IMAGES_KEYS.KULTURE, IMAGES_KEYS.KONCERT, YEARS_KEYS.Y1989_1991],
    title: ''
  }
]

const imagesSalina: Image[] = [
  {
    src: '../assets/images/salina/00001.jpg',
    keys: [IMAGES_KEYS.SALINA, YEARS_KEYS.Y1989_1991],
    title: ''
  },
  {
    src: '../assets/images/salina/00002.jpg',
    keys: [IMAGES_KEYS.SALINA, YEARS_KEYS.Y1989_1991],
    title: ''
  }
]

const imagesZluka: Image[] = [
  {
    src: '../assets/images/zluka_1990/00015.jpg',
    keys: [IMAGES_KEYS.ZLUKA, YEARS_KEYS.Y1989_1991],
    title: ''
  }
]

export const state: PhotosStoreInterface = {
  images: [
    ...imagesZluka,
    ...imagesKulture,
    ...imagesSalina
  ]
}
