import { IMAGES_KEYS_TYPE, YEARS_KEYS_TYPE } from '@/store/constants'
import { figcaptionGenerator } from '@/components/helpers'
import { Image } from '@/store/imagesStore'

const pvSource = 'Сімейний фотоальбом п. Романа Павлишака'

export const imagesPv: Image[] = [
  {
    src: '/pavl/00001',
    keys: [
      YEARS_KEYS_TYPE.Y1989_2000,
      IMAGES_KEYS_TYPE.MONASTERY,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.VASILIAN
    ],
    title: figcaptionGenerator('Монастир ЧСВВ (1990р., осінь)', 'Відновлення могил ченців; посвячення меміоріальної дошки з нагоди прийняття новіціату (чернечого стану) Андрея Шептицького'),
    source: pvSource,
    year: 1990
  },
  {
    src: '/pavl/00002',
    keys: [
      YEARS_KEYS_TYPE.Y1989_2000,
      IMAGES_KEYS_TYPE.ZAHID,
      IMAGES_KEYS_TYPE.SALINA,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: figcaptionGenerator('Саліна (1990-06-24)', 'Поминальний похід в урочище Саліна'),
    source: pvSource,
    year: 1990
  },
  {
    src: '/pavl/00003',
    keys: [
      YEARS_KEYS_TYPE.Y1989_2000,
      IMAGES_KEYS_TYPE.MONASTERY,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.VASILIAN
    ],
    title: figcaptionGenerator('Мотастир ЧСВВ (~1990р.)', 'Процесія'),
    source: pvSource,
    year: 1990
  },
  {
    src: '/pavl/00004',
    keys: [
      YEARS_KEYS_TYPE.Y1989_2000,
      IMAGES_KEYS_TYPE.MONASTERY,
      IMAGES_KEYS_TYPE.VASILIAN,
      IMAGES_KEYS_TYPE.PRIEST,
      IMAGES_KEYS_TYPE.MONK
    ],
    title: figcaptionGenerator('Мотастир ЧСВВ (1990р.)', 'Ченці'),
    source: pvSource,
    year: 1990
  },
  {
    src: '/pavl/00005',
    keys: [
      YEARS_KEYS_TYPE.Y1989_2000,
      IMAGES_KEYS_TYPE.KULTURE,
      IMAGES_KEYS_TYPE.ZAHID,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: figcaptionGenerator('Вертеп (~1989р.)', 'Вертеп'),
    source: pvSource,
    year: 1990
  },
  {
    src: '/pavl/00006',
    keys: [
      YEARS_KEYS_TYPE.Y1989_2000,
      IMAGES_KEYS_TYPE.KULTURE,
      IMAGES_KEYS_TYPE.ZAHID,
      IMAGES_KEYS_TYPE.CHILDREN
    ],
    title: figcaptionGenerator('Свято Миколая (1990р., грудень)', 'Ой хто-хто, Миколая любить...'),
    source: pvSource,
    year: 1990
  },
  {
    src: '/pavl/00008',
    keys: [
      YEARS_KEYS_TYPE.Y1989_2000,
      IMAGES_KEYS_TYPE.KULTURE,
      IMAGES_KEYS_TYPE.ZAHID,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: figcaptionGenerator('Концерт (~1989)', 'Концерт'),
    source: pvSource,
    year: 1990
  },
  {
    src: '/pavl/00009',
    keys: [
      YEARS_KEYS_TYPE.Y1989_2000,
      IMAGES_KEYS_TYPE.KULTURE,
      IMAGES_KEYS_TYPE.ZAHID,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: figcaptionGenerator('Вертеп (~1989р.)', 'Вертеп'),
    source: pvSource,
    year: 1990
  },
  {
    src: '/pavl/00011',
    keys: [
      YEARS_KEYS_TYPE.Y1989_2000,
      IMAGES_KEYS_TYPE.ZAHID,
      IMAGES_KEYS_TYPE.SALINA,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: figcaptionGenerator('Саліна (1990-06-24)', 'Поминальний похід в урочище Саліна'),
    source: pvSource,
    year: 1990
  },
  {
    src: '/pavl/00012',
    keys: [
      YEARS_KEYS_TYPE.Y1989_2000,
      IMAGES_KEYS_TYPE.ZAHID,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.PRIEST
    ],
    title: figcaptionGenerator('Колишня тюрма НКВД (1990-06-24)', 'Біля приміщення колишньої тюрми НКВД'),
    source: pvSource,
    year: 1990
  },
  {
    src: '/pavl/00013',
    keys: [
      YEARS_KEYS_TYPE.Y1989_2000,
      IMAGES_KEYS_TYPE.ZAHID,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: figcaptionGenerator('Цвинтар (1990р., кінець літа)', 'Поминальний похід на могилу хорунжого УГА В. Стецишина'),
    source: pvSource,
    year: 1990,
    w: 822,
    h: 1280
  },
  {
    src: '/pavl/00014',
    keys: [
      YEARS_KEYS_TYPE.Y1989_2000,
      IMAGES_KEYS_TYPE.SALINA,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.ZAHID
    ],
    title: figcaptionGenerator('Саліна (1990-06-24)', 'Поминальний похід в урочище Саліна'),
    source: pvSource,
    year: 1990
  },
  {
    src: '/pavl/00015',
    keys: [
      YEARS_KEYS_TYPE.Y1989_2000,
      IMAGES_KEYS_TYPE.ZAHID,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: figcaptionGenerator('Ланцюг єдності (1990-01-22)', 'Добромильчани приймають участь в акції "Злука". Ланцюг єдності, Миколаївський район'),
    source: pvSource,
    year: 1990
  },
  {
    src: '/pavl/00016',
    keys: [
      YEARS_KEYS_TYPE.Y1989_2000,
      IMAGES_KEYS_TYPE.SALINA,
      IMAGES_KEYS_TYPE.ZAHID,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: figcaptionGenerator('Саліна (~1990р.)', 'Поминальний похід в урочище Саліна'),
    source: pvSource,
    year: 1990
  },
  {
    src: '/pavl/00017',
    keys: [
      YEARS_KEYS_TYPE.Y1989_2000,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.ZAHID
    ],
    title: figcaptionGenerator('Виступ (м. Добромиль, 1990-01-22)', 'Виступ представниці Союзу українок'),
    source: pvSource,
    year: 1990
  },
  {
    src: '/pavl/00018',
    keys: [
      YEARS_KEYS_TYPE.Y1989_2000,
      IMAGES_KEYS_TYPE.KULTURE,
      IMAGES_KEYS_TYPE.ZAHID,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: figcaptionGenerator('Вертеп (~1989р.)', 'Вертеп'),
    source: pvSource,
    year: 1990
  }
]
