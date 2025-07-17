import { IMAGES_KEYS_TYPE, YEARS_KEYS_TYPE } from '@/stores/constants'
import { linkSourceGenerator } from '@/components/helpers'
import { Image } from '../photos'

const photographerSourceText = 'Воєнний фотоальбом німецького солдата'
const photographerSourceUrl = 'http://berghofday.blogspot.com/2015/12/1941-1943.html'

export const imagesWWII: Image[] = [
  {
    src: '/wwii/00001',
    keys: [
      YEARS_KEYS_TYPE.Y1939_1945,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: 'Добромиль (1941-43рр.)',
    description: 'Добромиль у період Другої світової війни',
    source: `${linkSourceGenerator(`${photographerSourceText}`, `${photographerSourceUrl}`)}`,
    year: 1941
  },
  {
    src: '/wwii/00003',
    keys: [
      YEARS_KEYS_TYPE.Y1939_1945,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: 'Добромиль (1941-43рр.)',
    description: 'Добромиль у період Другої світової війни',
    source: `${linkSourceGenerator(`${photographerSourceText}`, `${photographerSourceUrl}`)}`,
    year: 1941
  },
  {
    src: '/wwii/00003',
    keys: [
      YEARS_KEYS_TYPE.Y1939_1945,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: 'Добромиль (~1941р.)',
    description: 'Добромиль у період Другої світової війни',
    year: 1941
  },
  {
    src: '/wwii/00005',
    keys: [
      YEARS_KEYS_TYPE.Y1939_1945,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: 'Добромиль (1941-43рр.)',
    description: 'Добромиль у період Другої світової війни',
    source: `${linkSourceGenerator(`${photographerSourceText}`, `${photographerSourceUrl}`)}`,
    year: 1941
  },
  {
    src: '/wwii/00006',
    keys: [
      YEARS_KEYS_TYPE.Y1939_1945,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: 'Добромиль (1941-43рр.)',
    description: 'Добромиль у період Другої світової війни',
    source: `${linkSourceGenerator(`${photographerSourceText}`, `${photographerSourceUrl}`)}`,
    year: 1941
  },
  {
    src: '/wwii/00007',
    keys: [
      YEARS_KEYS_TYPE.Y1939_1945,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: 'Добромиль (~1941)',
    description: 'Добромиль у період Другої світової війни',
    year: 1941
  }
]
