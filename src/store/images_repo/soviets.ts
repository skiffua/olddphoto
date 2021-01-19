import { IMAGES_KEYS_TYPE, YEARS_KEYS_TYPE } from '@/store/constants'
import { linkSourceGenerator } from '@/components/helpers'
import { Image } from '@/store/imagesStore'

export const imagesSoviets: Image[] = [
  {
    src: '/soviets/00001',
    keys: [
      YEARS_KEYS_TYPE.Y1945_1989,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.ZAHID,
      IMAGES_KEYS_TYPE.SOVIET
    ],
    title: 'Будинок культури (1970-1980рр.)',
    description: 'Неідентифікована подія',
    year: 1980
  },
  {
    src: '/soviets/00003',
    keys: [
      YEARS_KEYS_TYPE.Y1945_1989,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.ZAHID,
      IMAGES_KEYS_TYPE.SOVIET
    ],
    title: 'Радянська демонстрація (1970-1980рр.)',
    description: 'Неідентифікована подія',
    year: 1980
  },
  {
    src: '/soviets/00004',
    keys: [
      YEARS_KEYS_TYPE.Y1945_1989,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.ZAHID,
      IMAGES_KEYS_TYPE.SOVIET
    ],
    title: 'Радянська демонстрація (1970-1980рр.)',
    description: 'Неідентифікована подія',
    year: 1980
  },
  {
    src: '/soviets/00005',
    keys: [
      YEARS_KEYS_TYPE.Y1945_1989,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.ZAHID,
      IMAGES_KEYS_TYPE.SOVIET
    ],
    title: 'Радянська демонстрація (1970-1980рр.)',
    description: 'Неідентифікована подія',
    year: 1980
  },
  {
    src: '/soviets/00006',
    keys: [
      YEARS_KEYS_TYPE.Y1945_1989,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.ZAHID,
      IMAGES_KEYS_TYPE.SOVIET
    ],
    title: 'Будинок культури (1970-1980рр.)',
    description: 'Неідентифікована подія',
    year: 1980
  },
  {
    src: '/soviets/00066',
    keys: [
      YEARS_KEYS_TYPE.Y1945_1989,
      IMAGES_KEYS_TYPE.SALINA,
      IMAGES_KEYS_TYPE.CHILDREN,
      IMAGES_KEYS_TYPE.SOVIET
    ],
    title: 'Саліна (поч. 1980-х)',
    description: 'Період роботи санаторію',
    source: `${linkSourceGenerator('Санаторій "Добромиль"', 'http://dobromyl.org/2018/02/sanatorij-dobromyl/')}`,
    year: 1980
  },
  {
    src: '/soviets/00067',
    keys: [
      YEARS_KEYS_TYPE.Y1945_1989,
      IMAGES_KEYS_TYPE.SALINA,
      IMAGES_KEYS_TYPE.BUILDING,
      IMAGES_KEYS_TYPE.SOVIET
    ],
    title: 'Саліна (поч. 1980-х)',
    description: 'Період роботи санаторію',
    source: `${linkSourceGenerator('Санаторій "Добромиль"', 'http://dobromyl.org/2018/02/sanatorij-dobromyl/')}`,
    year: 1980
  }
]
