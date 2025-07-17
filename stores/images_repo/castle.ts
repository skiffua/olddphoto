import { IMAGES_KEYS_TYPE, YEARS_KEYS_TYPE } from '@/stores/constants'
import { Image } from '../photos'

export const imagesCastle: Image[] = [
  {
    src: '/castle/00001',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.CASTLE,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: 'Замок Гербуртів',
    description: 'Фронтальний вигляд',
    year: 1900
  },
  {
    src: '/castle/00002',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.CASTLE,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: 'Замок Гербуртів',
    description: 'Мур',
    year: 1900
  },
  {
    src: '/castle/00003',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.CASTLE,
      IMAGES_KEYS_TYPE.MONASTERY,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: 'Монастир, замок Гербуртів',
    description: 'Вхід у монастрир, на задньому плані - замок Гербуртів',
    year: 1900
  }
]
