import { IMAGES_KEYS_TYPE, YEARS_KEYS_TYPE } from '@/store/constants'
import { linkSourceGenerator } from '@/components/helpers'
import { Image } from '@/store/imagesStore'

export const imagesWWII: Image[] = [
  {
    src: '/wwii/00001',
    keys: [
      YEARS_KEYS_TYPE.Y1939_1945,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: 'Добромиль (1941-43рр.)',
    description: 'Добромиль у період Другої світової війни',
    source: `${linkSourceGenerator('Воєнний фотоальбом німецького солдата', 'http://berghofday.blogspot.com/2015/12/1941-1943.html')}`,
    year: 1980
  },
  {
    src: '/wwii/00003',
    keys: [
      YEARS_KEYS_TYPE.Y1939_1945,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: 'Добромиль (1941-43рр.)',
    description: 'Добромиль у період Другої світової війни',
    source: `${linkSourceGenerator('Воєнний фотоальбом німецького солдата', 'http://berghofday.blogspot.com/2015/12/1941-1943.html')}`,
    year: 1980
  },
  {
    src: '/wwii/00005',
    keys: [
      YEARS_KEYS_TYPE.Y1939_1945,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: 'Добромиль (1941-43рр.)',
    description: 'Добромиль у період Другої світової війни',
    source: `${linkSourceGenerator('Воєнний фотоальбом німецького солдата', 'http://berghofday.blogspot.com/2015/12/1941-1943.html')}`,
    year: 1980
  },
  {
    src: '/wwii/00006',
    keys: [
      YEARS_KEYS_TYPE.Y1939_1945,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: 'Добромиль (1941-43рр.)',
    description: 'Добромиль у період Другої світової війни',
    source: `${linkSourceGenerator('Воєнний фотоальбом німецького солдата', 'http://berghofday.blogspot.com/2015/12/1941-1943.html')}`,
    year: 1980
  }
]
