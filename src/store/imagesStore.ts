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
    src: '/kulture/00005',
    keys: [IMAGES_KEYS.KULTURE, IMAGES_KEYS.KONCERT, YEARS_KEYS.Y1989_1991],
    title: ''
  },
  {
    src: '/kulture/00006',
    keys: [IMAGES_KEYS.KULTURE, IMAGES_KEYS.KONCERT, IMAGES_KEYS.CHILDREN, YEARS_KEYS.Y1989_1991],
    title: ''
  },
  {
    src: '/kulture/00009',
    keys: [IMAGES_KEYS.KULTURE, IMAGES_KEYS.KONCERT, IMAGES_KEYS.VERTEP, YEARS_KEYS.Y1989_1991],
    title: ''
  },
  {
    src: '/kulture/00010',
    keys: [IMAGES_KEYS.KULTURE, IMAGES_KEYS.KONCERT, YEARS_KEYS.Y1989_1991],
    title: ''
  }
]

const imagesSalina: Image[] = [
  {
    src: '/salina/00001',
    keys: [IMAGES_KEYS.SALINA, YEARS_KEYS.Y1989_1991],
    title: ''
  },
  {
    src: '/salina/00002',
    keys: [IMAGES_KEYS.SALINA, YEARS_KEYS.Y1989_1991],
    title: ''
  }
]

const imagesZluka: Image[] = [
  {
    src: '/zluka_1990/00015',
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
