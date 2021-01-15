import { IMAGES_KEYS_TYPE, YEARS_KEYS_TYPE } from '@/store/constants'
import { figcaptionGenerator, linkSourceGenerator } from '@/components/helpers'
import { Image } from '@/store/imagesStore'

export const imagesGeneral: Image[] = [
  {
    src: '/general/00003',
    keys: [
      YEARS_KEYS_TYPE.Y1905_1939,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: figcaptionGenerator(
      'Замок',
      'Замок неподалік Добромиля',
      'Архів польський'),
    year: 1930
  },
  {
    src: '/general/00004',
    keys: [
      YEARS_KEYS_TYPE.Y1905_1939,
      IMAGES_KEYS_TYPE.MONASTERY,
      IMAGES_KEYS_TYPE.BUILDING,
      IMAGES_KEYS_TYPE.VASILIAN
    ],
    title: figcaptionGenerator(
      'Монастир',
      'Вхідна брама у монастир',
      'Архів польський'),
    year: 1930
  },
  {
    src: '/general/00007',
    keys: [
      YEARS_KEYS_TYPE.Y1945_1989,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: figcaptionGenerator(
      'Демонстрація (рік невідомий)',
      'Радянська демонстрація'),
    year: 1965
  },
  {
    src: '/general/00011',
    keys: [
      YEARS_KEYS_TYPE.Y1989_2000,
      IMAGES_KEYS_TYPE.ZAHID,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: figcaptionGenerator(
      'Вивішування українського прапора на ратушу (1989р.)',
      'Вивішування державного прапора України на ратушу. Ярослав Угрин'),
    year: 1989
  },
  {
    src: '/general/00012',
    keys: [
      YEARS_KEYS_TYPE.Y1989_2000,
      IMAGES_KEYS_TYPE.ZAHID,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: figcaptionGenerator(
      'Демонстрація (1989р.)',
      'Українська демонстрація у Добромилі'),
    year: 1989
  },
  {
    src: '/general/00021',
    keys: [
      YEARS_KEYS_TYPE.Y1989_2000,
      IMAGES_KEYS_TYPE.ZAHID,
      IMAGES_KEYS_TYPE.PRIEST,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: figcaptionGenerator(
      'Нижанковичі (1990)',
      'Перезахоронення воїнів УПА 21.10.1990 в с. Нижанковичі'),
    year: 1990
  },
  {
    src: '/general/00022',
    keys: [
      YEARS_KEYS_TYPE.Y1905_1939,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: figcaptionGenerator(
      'Добромиль-Нижанковичі-Перемишль (~1920рр.)',
      'Неідентифіковане фото'),
    year: 1920
  },
  {
    src: '/general/00023',
    keys: [
      YEARS_KEYS_TYPE.Y1905_1939,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: figcaptionGenerator(
      'Добромиль-Нижанковичі-Перемишль (~1920рр.)',
      'Неідентифіковане фото'),
    year: 1920
  },
  {
    src: '/general/00024',
    keys: [
      YEARS_KEYS_TYPE.Y1905_1939,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: figcaptionGenerator(
      'Перемишль (1938-41рр.?)',
      'Вишкіл служби порятунку?'),
    year: 1938
  },
  {
    src: '/general/00025',
    keys: [
      YEARS_KEYS_TYPE.Y1905_1939,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: figcaptionGenerator(
      'Добромиль? (1933)',
      'Вечерниці жіночого кружка'),
    year: 1933
  },
  {
    src: '/general/00033',
    keys: [
      YEARS_KEYS_TYPE.Y1989_2000,
      IMAGES_KEYS_TYPE.ZAHID,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.SALINA
    ],
    title: figcaptionGenerator(
      'Саліна (1990р.)',
      'Поминальний похід на Саліну'),
    year: 1990
  },
  {
    src: '/general/00040',
    keys: [
      YEARS_KEYS_TYPE.Y1905_1939,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: figcaptionGenerator(
      'Добромиль (поч. 1900-х)',
      'Добромиль. Загальний вигляд міста'),
    year: 1900
  },
  {
    src: '/general/00041',
    keys: [
      YEARS_KEYS_TYPE.Y1905_1939,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: figcaptionGenerator(
      'Пожежна частина (1918-1938рр.)',
      'Пожежна частина у Добромилі (Гучко)',
      `${linkSourceGenerator('Moje Kresy. Kolorowe ptaki Dobromila', 'https://nto.pl/moje-kresy-kolorowe-ptaki-dobromila/ga/4603263/zd/6268353')}`),
    year: 1920
  },
  {
    src: '/general/00042',
    keys: [
      YEARS_KEYS_TYPE.Y1905_1939,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: figcaptionGenerator(
      'Костел (поч. 1900-х)',
      'Римо-католицький костел'),
    year: 1900
  },
  {
    src: '/general/00043',
    keys: [
      YEARS_KEYS_TYPE.Y1905_1939,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: figcaptionGenerator(
      'Костел (поч. 1900-х)',
      'Римо-католицький костел'),
    year: 1900
  },
  {
    src: '/general/00044',
    keys: [
      YEARS_KEYS_TYPE.Y1905_1939,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: figcaptionGenerator(
      'Залізничний вокзал (поч. 1900-х)',
      'Залізничний вокзал у Добромилі'),
    year: 1900
  },
  {
    src: '/general/00045',
    keys: [
      YEARS_KEYS_TYPE.Y1905_1939,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: figcaptionGenerator(
      'В напрямку Добромиля (1938-1941)',
      'Передові частини німецької армії в напрямку Добромиля '),
    year: 1938
  },
  {
    src: '/general/00046',
    keys: [
      YEARS_KEYS_TYPE.Y1905_1939,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: figcaptionGenerator(
      'Добромиль (поч. 1990-х)',
      'Центральна частина міста'),
    year: 1900
  },
  {
    src: '/general/00047',
    keys: [
      YEARS_KEYS_TYPE.Y1905_1939,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: figcaptionGenerator(
      'Добромиль (поч. 1990-х)',
      'Саліна. Соляний завод'),
    year: 1900
  },
  {
    src: '/general/00048',
    keys: [
      YEARS_KEYS_TYPE.Y1905_1939,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: figcaptionGenerator(
      'Замок (поч. 1990-х)',
      'Замок Гербуртів. Добромиль'),
    year: 1900
  },
  {
    src: '/general/00049',
    keys: [
      YEARS_KEYS_TYPE.Y1905_1939,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: figcaptionGenerator(
      'Добромиль (поч. 1990-х)',
      'Центральна частина міста'),
    year: 1900
  },
  {
    src: '/general/00051',
    keys: [
      YEARS_KEYS_TYPE.Y1905_1939,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: figcaptionGenerator(
      'Добромиль (поч. 1990-х)',
      'Міська ратуша'),
    year: 1900
  },
  {
    src: '/general/00052',
    keys: [
      YEARS_KEYS_TYPE.Y1905_1939,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: figcaptionGenerator(
      'Добромиль (поч. 1990-х)',
      'Перехрестя у напрямку с. Нижанкович та с. Мігово'),
    year: 1900
  }
]
