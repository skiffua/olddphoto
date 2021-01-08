import { IMAGES_KEYS, YEARS_KEYS } from '@/store/constants'
import { figcaptionGenerator } from '@/components/helpers'

export interface Image {
  src: string;
  keys: (IMAGES_KEYS | YEARS_KEYS)[];
  title: string;
  description?: string;
}

export interface PhotosStoreInterface {
  images: Image[];
}

const imagesPavlishak: Image[] = [
  {
    src: '/pavl/00001',
    keys: [IMAGES_KEYS.KULTURE, IMAGES_KEYS.KONCERT, YEARS_KEYS.Y1989_1991],
    title: figcaptionGenerator('Монастир ЧСВВ (1990р., осінь)', 'Відновлення могил ченців; посвячення меміоріальної дошки з нагоди прийняття новіціату (чернечого стану) Андрея Шептицького')
  },
  {
    src: '/pavl/00002',
    keys: [IMAGES_KEYS.KULTURE, IMAGES_KEYS.KONCERT, IMAGES_KEYS.CHILDREN, YEARS_KEYS.Y1989_1991],
    title: figcaptionGenerator('Саліна (1990-06-24)', 'Поминальний похід в урочище Саліна')
  },
  {
    src: '/pavl/00003',
    keys: [IMAGES_KEYS.KULTURE, IMAGES_KEYS.KONCERT, IMAGES_KEYS.CHILDREN, YEARS_KEYS.Y1989_1991],
    title: figcaptionGenerator('Мотастир ЧСВВ (~1990р.)', 'Процесія')
  },
  {
    src: '/pavl/00004',
    keys: [IMAGES_KEYS.KULTURE, IMAGES_KEYS.KONCERT, IMAGES_KEYS.VERTEP, YEARS_KEYS.Y1989_1991],
    title: figcaptionGenerator('Мотастир ЧСВВ (1990р.)', 'Ченці')
  },
  {
    src: '/pavl/00005',
    keys: [IMAGES_KEYS.KULTURE, IMAGES_KEYS.KONCERT, YEARS_KEYS.Y1989_1991],
    title: figcaptionGenerator('Вертеп (~1989р.)', 'Вертеп')
  },
  {
    src: '/pavl/00006',
    keys: [IMAGES_KEYS.KULTURE, IMAGES_KEYS.KONCERT, IMAGES_KEYS.CHILDREN, YEARS_KEYS.Y1989_1991],
    title: figcaptionGenerator('Свято Миколая (1990р., грудень)', 'Ой хто-хто, Миколая любить...')
  },
  {
    src: '/pavl/00008',
    keys: [IMAGES_KEYS.KULTURE, IMAGES_KEYS.KONCERT, IMAGES_KEYS.CHILDREN, YEARS_KEYS.Y1989_1991],
    title: figcaptionGenerator('Концерт (~1989)', 'Концерт')
  },
  {
    src: '/pavl/00009',
    keys: [IMAGES_KEYS.KULTURE, IMAGES_KEYS.KONCERT, IMAGES_KEYS.CHILDREN, YEARS_KEYS.Y1989_1991],
    title: figcaptionGenerator('Вертеп (~1989р.)', 'Вертеп')
  },
  {
    src: '/pavl/00011',
    keys: [IMAGES_KEYS.KULTURE, IMAGES_KEYS.KONCERT, IMAGES_KEYS.CHILDREN, YEARS_KEYS.Y1989_1991],
    title: figcaptionGenerator('Саліна (1990-06-24)', 'Поминальний похід в урочище Саліна')
  },
  {
    src: '/pavl/00012',
    keys: [IMAGES_KEYS.KULTURE, IMAGES_KEYS.KONCERT, IMAGES_KEYS.CHILDREN, YEARS_KEYS.Y1989_1991],
    title: figcaptionGenerator('Колишня тюрма НКВД (1990-06-24)', 'Біля приміщення колишньої тюрми НКВД')
  },
  {
    src: '/pavl/00013',
    keys: [IMAGES_KEYS.KULTURE, IMAGES_KEYS.KONCERT, IMAGES_KEYS.CHILDREN, YEARS_KEYS.Y1989_1991],
    title: figcaptionGenerator('Цвинтар (1990р., кінець літа)', 'Поминальний похід на могилу хорунжого УГА В. Стецишина')
  },
  {
    src: '/pavl/00014',
    keys: [IMAGES_KEYS.KULTURE, IMAGES_KEYS.KONCERT, IMAGES_KEYS.CHILDREN, YEARS_KEYS.Y1989_1991],
    title: figcaptionGenerator('Саліна (1990-06-24)', 'Поминальний похід в урочище Саліна')
  },
  {
    src: '/pavl/00015',
    keys: [IMAGES_KEYS.KULTURE, IMAGES_KEYS.KONCERT, IMAGES_KEYS.CHILDREN, YEARS_KEYS.Y1989_1991],
    title: figcaptionGenerator('Ланцюг єдності (1990-01-22)', 'Добромильчани приймають участь в акції "Злука". Ланцюг єдності, Миколаївський район')
  },
  {
    src: '/pavl/00016',
    keys: [IMAGES_KEYS.KULTURE, IMAGES_KEYS.KONCERT, IMAGES_KEYS.CHILDREN, YEARS_KEYS.Y1989_1991],
    title: figcaptionGenerator('Саліна (~1990р.)', 'Поминальний похід в урочище Саліна')
  },
  {
    src: '/pavl/00017',
    keys: [IMAGES_KEYS.KULTURE, IMAGES_KEYS.KONCERT, IMAGES_KEYS.CHILDREN, YEARS_KEYS.Y1989_1991],
    title: figcaptionGenerator('Виступ (м. Добромиль, 1990-01-22)', 'Виступ представниці Союзу українок')
  },
  {
    src: '/pavl/00018',
    keys: [IMAGES_KEYS.KULTURE, IMAGES_KEYS.KONCERT, IMAGES_KEYS.CHILDREN, YEARS_KEYS.Y1989_1991],
    title: figcaptionGenerator('Вертеп (~1989р.)', 'Вертеп')
  }
]

export const state: PhotosStoreInterface = {
  images: [
    ...imagesPavlishak
  ]
}
