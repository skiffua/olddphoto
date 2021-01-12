import { IMAGES_KEYS_TYPE, YEARS_KEYS_TYPE } from '@/store/constants'
import { figcaptionGenerator, linkSourceGenerator } from '@/components/helpers'
import { Image } from '@/store/imagesStore'

export const imagesGeneral: Image[] = [
  {
    src: '/general/00001',
    keys: [
      YEARS_KEYS_TYPE.Y1989_2000,
      IMAGES_KEYS_TYPE.CHURCH,
      IMAGES_KEYS_TYPE.FAMOUS,
      IMAGES_KEYS_TYPE.UGKC
    ],
    title: figcaptionGenerator(
      'Cвященник (1930)',
      'о. Теодор Гораєцький (УГКЦ)',
      `Сімейний фотоальбом ${linkSourceGenerator('Артура Курцвеля', 'https://en.wikipedia.org/wiki/Arthur_Kurzweil')}</a>`),
    w: 822,
    h: 1280,
    year: 1930
  }
]
