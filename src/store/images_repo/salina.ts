import { IMAGES_KEYS_TYPE, YEARS_KEYS_TYPE } from '@/store/constants'
import { figcaptionGenerator, linkSourceGenerator } from '@/components/helpers'
import { Image } from '@/store/imagesStore'

export const imagesSalina: Image[] = [
  {
    src: '/salina/00001',
    keys: [
      YEARS_KEYS_TYPE.Y1905_1939,
      IMAGES_KEYS_TYPE.SALINA,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: figcaptionGenerator(
      'Саліна',
      'Вигляд збоку'),
    year: 1930
  },
  {
    src: '/salina/00002',
    keys: [
      YEARS_KEYS_TYPE.Y1905_1939,
      IMAGES_KEYS_TYPE.SALINA,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: figcaptionGenerator(
      'Саліна',
      'Будівлі соляного заводу'),
    year: 1930
  },
  {
    src: '/salina/00003',
    keys: [
      YEARS_KEYS_TYPE.Y1905_1939,
      IMAGES_KEYS_TYPE.SALINA,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: figcaptionGenerator(
      'Саліна',
      'Соляна копальня'),
    year: 1930
  },
  {
    src: '/salina/00004',
    keys: [
      YEARS_KEYS_TYPE.Y1905_1939,
      IMAGES_KEYS_TYPE.SALINA,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: figcaptionGenerator(
      'Саліна',
      'Соляна копальня'),
    year: 1930
  },
  {
    src: '/salina/00005',
    keys: [
      YEARS_KEYS_TYPE.Y1905_1939,
      IMAGES_KEYS_TYPE.SALINA,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: figcaptionGenerator(
      'Саліна',
      'Адміністративні будівлі'),
    year: 1930
  },
  {
    src: '/salina/00006',
    keys: [
      YEARS_KEYS_TYPE.Y1905_1939,
      IMAGES_KEYS_TYPE.SALINA,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: figcaptionGenerator(
      'Саліна',
      'Вхідна у стару штольню',
      `Малюнок ${linkSourceGenerator('Володимира Шагала', 'https://paschen.livejournal.com/35228.html')}</a>`),
    year: 1930
  },
  {
    src: '/salina/tragedy/00001',
    keys: [
      YEARS_KEYS_TYPE.Y1939_1945,
      IMAGES_KEYS_TYPE.SALINA,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: figcaptionGenerator(
      'Трагедія Саліни (1941р., липень)',
      'Витягування жертв НКВД з соляних шахт в Добромилі ',
      `${linkSourceGenerator('Трагедія Саліни', 'https://paschen.livejournal.com/20535.html')}</a>`),
    year: 1941
  },
  {
    src: '/salina/tragedy/00002',
    keys: [
      YEARS_KEYS_TYPE.Y1939_1945,
      IMAGES_KEYS_TYPE.SALINA,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: figcaptionGenerator(
      'Трагедія Саліни (1941р., липень)',
      'Перша процесія йде на Саліну. Добромиль, вул. Галицька. Липень 1941 р.',
      `${linkSourceGenerator('Трагедія Саліни', 'https://paschen.livejournal.com/20535.html')}</a>`),
    year: 1941
  },
  {
    src: '/salina/tragedy/00003',
    keys: [
      YEARS_KEYS_TYPE.Y1939_1945,
      IMAGES_KEYS_TYPE.SALINA,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: figcaptionGenerator(
      'Трагедія Саліни (1941р., липень)',
      'Виступає з почесним словом Січовий Стрілець Григорій Турко. В почесній варті стоїть Ляйдкомісар Добромиля.',
      `${linkSourceGenerator('Трагедія Саліни', 'https://paschen.livejournal.com/20535.html')}</a>`),
    year: 1941
  },
  {
    src: '/salina/tragedy/00007',
    keys: [
      YEARS_KEYS_TYPE.Y1939_1945,
      IMAGES_KEYS_TYPE.SALINA,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: figcaptionGenerator(
      'Звільнення від більшовиків (1941р., липень)',
      'Святкування звільнення від більшовизму в Добромилі.',
      `${linkSourceGenerator('Трагедія Саліни', 'https://paschen.livejournal.com/20535.html')}</a>`),
    year: 1941
  },
  {
    src: '/salina/tragedy/00009',
    keys: [
      YEARS_KEYS_TYPE.Y1939_1945,
      IMAGES_KEYS_TYPE.SALINA,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: figcaptionGenerator(
      'Трагедія Саліни (1941р., липень)',
      'Промова о. Мариновича на могилі.',
      `${linkSourceGenerator('Трагедія Саліни', 'https://paschen.livejournal.com/20535.html')}</a>`),
    year: 1941
  },
  {
    src: '/salina/tragedy/00012',
    keys: [
      YEARS_KEYS_TYPE.Y1939_1945,
      IMAGES_KEYS_TYPE.SALINA,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: figcaptionGenerator(
      'Трагедія Саліни (1941р., липень)',
      'Витягування тіл із шахти',
      `${linkSourceGenerator('Трагедія Саліни', 'https://paschen.livejournal.com/20535.html')}</a>`),
    year: 1941
  }
]
