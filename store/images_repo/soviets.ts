import { IMAGES_KEYS_TYPE, YEARS_KEYS_TYPE } from '@/store/constants'
import { linkSourceGenerator } from '@/components/helpers'
import { Image } from '../photos'

export const imagesSoviets: Image[] = [
  {
    src: '/soviets/00001',
    keys: [
      YEARS_KEYS_TYPE.Y1945_1989,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.ZAHID
    ],
    title: 'Будинок культури (1970-1980рр.)',
    description: 'Неідентифікована подія',
    year: 1980
  },
  // {
  //   src: '/soviets/00002',
  //   keys: [
  //     YEARS_KEYS_TYPE.Y1945_1989,
  //     IMAGES_KEYS_TYPE.PEOPLE,
  //     IMAGES_KEYS_TYPE.ZAHID,
  //     IMAGES_KEYS_TYPE.SOVIET
  //   ],
  //   title: 'Могила радянським солдатам (1960-1970рр.)',
  //   description: 'Пам\'ятник солдатам Червоної армії \n' +
  //     'та членів спецгруп НКВС, загинувшим переважно у боях з українськими повстанцями',
  //   year: 1970
  // },
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
    src: '/soviets/00007',
    keys: [
      YEARS_KEYS_TYPE.Y1945_1989,
      IMAGES_KEYS_TYPE.BUILDING,
      IMAGES_KEYS_TYPE.SOVIET
    ],
    title: 'Вигляд на центр міста',
    description: 'У плані кінотеатр, пам\'ятник леніну',
    year: 1975
  },
  {
    src: '/soviets/00008',
    keys: [
      YEARS_KEYS_TYPE.Y1945_1989,
      IMAGES_KEYS_TYPE.CHILDREN,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.SOVIET
    ],
    title: 'Метелики на вулиці',
    description: 'Добромиль, діти',
    source: `${linkSourceGenerator('Метелики на вулиці"', 'https://violity.com/ua/114949764-meteliki-na-vulici-dobromil-diti?utm_source=search_result&utm_medium=meteliki-na-vulici-dobromil-diti&utm_campaign=50uah')}`,
    year: 1960
  },
  {
    src: '/soviets/00009',
    keys: [
      YEARS_KEYS_TYPE.Y1945_1989,
      IMAGES_KEYS_TYPE.SOVIET
    ],
    title: 'Пам\'ятник Леніну',
    description: 'Добромиль, центр міста',
    year: 1970
  },
  {
    src: '/soviets/00066',
    keys: [
      YEARS_KEYS_TYPE.Y1945_1989,
      IMAGES_KEYS_TYPE.SALINA,
      IMAGES_KEYS_TYPE.CHILDREN,
      IMAGES_KEYS_TYPE.BUILDING
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
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: 'Саліна (поч. 1980-х)',
    description: 'Період роботи санаторію',
    source: `${linkSourceGenerator('Санаторій "Добромиль"', 'http://dobromyl.org/2018/02/sanatorij-dobromyl/')}`,
    year: 1980
  }
];
