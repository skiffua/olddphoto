import { IMAGES_KEYS_TYPE, YEARS_KEYS_TYPE } from '@/stores/constants'
import { Image } from '../photos'

const nlSource = 'Сімейний фотоальбом п. Марії Наливайко'

export const imagesNl: Image[] = [
  {
    src: '/nl/00001',
    keys: [
      YEARS_KEYS_TYPE.Y1989_2000,
      IMAGES_KEYS_TYPE.ZAHID,
      IMAGES_KEYS_TYPE.KULTURE,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: 'Концерт (~1990р.)',
    description: 'Виконується пісня "Ой ти, кальнонько, калино..."',
    source: nlSource,
    year: 1990
  },
  {
    src: '/nl/00002',
    keys: [
      YEARS_KEYS_TYPE.Y1989_2000,
      IMAGES_KEYS_TYPE.ZAHID,
      IMAGES_KEYS_TYPE.KULTURE,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: 'Концерт (21 листопада 1989р.)',
    description: 'Перша зустріч з громадою м. Добромиль. Свято і концерт ' +
      '"А ми тую червону калину підіймемо...". На сцені товариство української мови ' +
      'ім. Т. Шевченка ДОКу Добромиль',
    source: nlSource,
    year: 1989
  },
  {
    src: '/nl/00003',
    keys: [
      YEARS_KEYS_TYPE.Y1989_2000,
      IMAGES_KEYS_TYPE.ZAHID,
      IMAGES_KEYS_TYPE.KULTURE,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: 'Зустріч зі св. Миколаєм (1989р.)',
    description: 'Фрагмент "А ось і прийшов Св. Миколай"',
    source: nlSource,
    year: 1989
  },
  {
    src: '/nl/00004',
    keys: [
      YEARS_KEYS_TYPE.Y1989_2000,
      IMAGES_KEYS_TYPE.ZAHID,
      IMAGES_KEYS_TYPE.KULTURE,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: 'Зустріч зі св. Миколаєм (20 січня 1990р.)',
    description: 'Святкування Різдвяних свят (будинок "Просвіти" у м. Добромиль).' +
      ' Уривок вистави',
    source: nlSource,
    year: 1989
  },
  {
    src: '/nl/00005',
    keys: [
      YEARS_KEYS_TYPE.Y1989_2000,
      IMAGES_KEYS_TYPE.ZAHID,
      IMAGES_KEYS_TYPE.KULTURE,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: 'Концерт (~1990р.)',
    description: 'Уривок концерту "А ми тую червону калину підіймемо',
    source: nlSource,
    year: 1990
  },
]
