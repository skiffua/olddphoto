import { IMAGES_KEYS_TYPE, YEARS_KEYS_TYPE } from '@/store/constants'
import { linkSourceGenerator } from '@/components/helpers'
import { Image } from '@/store/imagesStore'

const photographerSourceText = 'Історичний блог'
const photographerSourceUrl = 'https://axisslovakia.tumblr.com/page/61'

export const imagesSalina: Image[] = [
  {
    src: '/salina/00001',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.SALINA,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: 'Саліна',
    description: 'Вигляд збоку',
    year: 1930
  },
  {
    src: '/salina/00002',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.SALINA,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: 'Саліна',
    description: 'Будівлі соляного заводу',
    year: 1930
  },
  {
    src: '/salina/00003',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.SALINA,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: 'Саліна',
    description: 'Соляна копальня',
    year: 1930
  },
  {
    src: '/salina/00004',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.SALINA,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: 'Саліна',
    description: 'Соляна копальня',
    year: 1930
  },
  {
    src: '/salina/00005',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.SALINA,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: 'Саліна',
    description: 'Адміністративні будівлі',
    year: 1930
  },
  {
    src: '/salina/00006',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.SALINA,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: 'Саліна',
    description: 'Вхідна у стару штольню',
    source: `Малюнок ${linkSourceGenerator('Володимира Шагала', 'https://paschen.livejournal.com/35228.html')}</a>`,
    year: 1930
  },
  {
    src: '/salina/tragedy/00001',
    keys: [
      YEARS_KEYS_TYPE.Y1939_1945,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.SALINA
    ],
    title: 'Трагедія Саліни (1941р., липень)',
    description: 'Витягування жертв НКВД з соляних шахт в Добромилі ',
    source: `${linkSourceGenerator('Трагедія Саліни', 'https://paschen.livejournal.com/20535.html')}</a>`,
    year: 1941
  },
  {
    src: '/salina/tragedy/00002',
    keys: [
      YEARS_KEYS_TYPE.Y1939_1945,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.SALINA
    ],
    title: 'Трагедія Саліни (1941р., липень)',
    description: 'Перша процесія йде на Саліну. Добромиль, вул. Галицька. Липень 1941 р.',
    source: `${linkSourceGenerator('Трагедія Саліни', 'https://paschen.livejournal.com/20535.html')}</a>`,
    year: 1941
  },
  {
    src: '/salina/tragedy/00003',
    keys: [
      YEARS_KEYS_TYPE.Y1939_1945,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.SALINA
    ],
    title: 'Трагедія Саліни (1941р., липень)',
    description: 'Виступає з почесним словом Січовий Стрілець Григорій Турко. В почесній варті стоїть Ляйдкомісар Добромиля.',
    source: `${linkSourceGenerator('Трагедія Саліни', 'https://paschen.livejournal.com/20535.html')}</a>`,
    year: 1941
  },
  {
    src: '/salina/tragedy/00004',
    keys: [
      YEARS_KEYS_TYPE.Y1939_1945,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.SALINA
    ],
    title: 'Трагедія Саліни (1941р., липень)',
    description: 'Витягування тіл із шахти',
    source: `${linkSourceGenerator(`${photographerSourceText}`, `${photographerSourceUrl}`)}`,
    year: 1941
  },
  {
    src: '/salina/tragedy/00005',
    keys: [
      YEARS_KEYS_TYPE.Y1939_1945,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.SALINA
    ],
    title: 'Трагедія Саліни (1941р., липень)',
    description: 'Витягування тіл із шахти',
    source: `${linkSourceGenerator(`${photographerSourceText}`, `${photographerSourceUrl}`)}`,
    year: 1941
  },
  {
    src: '/salina/tragedy/00007',
    keys: [
      YEARS_KEYS_TYPE.Y1939_1945,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: 'Звільнення від більшовиків (1941р., липень)',
    description: 'Святкування звільнення від більшовизму в Добромилі.',
    source: `${linkSourceGenerator('Трагедія Саліни', 'https://paschen.livejournal.com/20535.html')}</a>`,
    year: 1941
  },
  {
    src: '/salina/tragedy/00009',
    keys: [
      YEARS_KEYS_TYPE.Y1939_1945,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.SALINA
    ],
    title: 'Трагедія Саліни (1941р., липень)',
    description: 'Промова о. Мариновича на могилі.',
    source: `${linkSourceGenerator('Трагедія Саліни', 'https://paschen.livejournal.com/20535.html')}</a>`,
    year: 1941
  },
  {
    src: '/salina/tragedy/00012',
    keys: [
      YEARS_KEYS_TYPE.Y1939_1945,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.SALINA
    ],
    title: 'Трагедія Саліни (1941р., липень)',
    description: 'Витягування тіл із шахти',
    source: `${linkSourceGenerator('Трагедія Саліни', 'https://paschen.livejournal.com/20535.html')}</a>`,
    year: 1941
  }
]
