import { IMAGES_KEYS_TYPE, YEARS_KEYS_TYPE } from '@/store/constants'
import { figcaptionGenerator, linkSourceGenerator } from '@/components/helpers'
import { Image } from '@/store/imagesStore'

export const imagesGeneral: Image[] = [
  {
    src: '/general/00001',
    keys: [
      YEARS_KEYS_TYPE.Y1905_1939,
      IMAGES_KEYS_TYPE.CHURCH,
      IMAGES_KEYS_TYPE.PRIEST,
      IMAGES_KEYS_TYPE.UGKC
    ],
    title: figcaptionGenerator(
      'Cвященник (1930)',
      'о. Теодор Гораєцький (УГКЦ)',
      `Сімейний фотоальбом ${linkSourceGenerator('Артура Курцвеля', 'https://en.wikipedia.org/wiki/Arthur_Kurzweil')}</a>`),
    w: 822,
    h: 1210,
    year: 1930
  },
  {
    src: '/general/00002',
    keys: [
      YEARS_KEYS_TYPE.Y1905_1939,
      IMAGES_KEYS_TYPE.CHURCH,
      IMAGES_KEYS_TYPE.PRIEST,
      IMAGES_KEYS_TYPE.UGKC
    ],
    title: figcaptionGenerator(
      'Cвященник з дітьми (1944)',
      'Другий ряд - Мокрицька, Коронович, Стецишин, о. Гораєцький (УГКЦ), Хадай. Локація - пожежна частина',
      'Сімейний фотоальбом сім\'ї Назарик (с. Мігово)'),
    year: 1944
  },
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
    src: '/general/00005',
    keys: [
      YEARS_KEYS_TYPE.Y1905_1939,
      IMAGES_KEYS_TYPE.CHURCH,
      IMAGES_KEYS_TYPE.UGKC,
      IMAGES_KEYS_TYPE.PRIEST,
      IMAGES_KEYS_TYPE.CHILDREN
    ],
    title: figcaptionGenerator(
      'Урочисте причастя (1932р.)',
      'о. Іван Господаревський, єп. Йосафат Коциловський, о. Теодор Гораєцький, о. Йосип Маринович (УГКЦ)'),
    year: 1932
  },
  {
    src: '/general/00006',
    keys: [
      YEARS_KEYS_TYPE.Y1905_1939,
      IMAGES_KEYS_TYPE.CHURCH,
      IMAGES_KEYS_TYPE.UGKC,
      IMAGES_KEYS_TYPE.PRIEST,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: figcaptionGenerator(
      'Церква, с. Мігово (1932р.)',
      'Єпископська візитація в с. Мігово. о. Микола Грицеляк, о. Іван Господаревський, єп. Йосафат Коциловський, о. Йосип Маринович, о. Петро Дутко, о. Станислав Дашо (УГКЦ)'),
    year: 1937
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
    src: '/general/00008',
    keys: [
      YEARS_KEYS_TYPE.Y1905_1939,
      IMAGES_KEYS_TYPE.CHURCH,
      IMAGES_KEYS_TYPE.UGKC,
      IMAGES_KEYS_TYPE.PRIEST,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: figcaptionGenerator(
      'Празник (середина 1930-х)',
      'Празник Зіслання Святого Духа'),
    year: 1935
  },
  {
    src: '/general/00009',
    keys: [
      YEARS_KEYS_TYPE.Y1905_1939,
      IMAGES_KEYS_TYPE.PRIEST,
      IMAGES_KEYS_TYPE.UGKC
    ],
    title: figcaptionGenerator(
      'Похорон (1948р.)',
      'Похорон о. Івана Господаревського (УГКЦ)'),
    year: 1948
  },
  {
    src: '/general/00010',
    keys: [
      YEARS_KEYS_TYPE.Y1905_1939,
      IMAGES_KEYS_TYPE.PRIEST,
      IMAGES_KEYS_TYPE.UGKC,
      IMAGES_KEYS_TYPE.CHILDREN
    ],
    title: figcaptionGenerator(
      'Причастя (1935р.)',
      'Причастя. Добромиль і Ляцко. о. Іван Господаревський, о. Теодор Гораєцький (УГКЦ)'),
    year: 1935
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
  }
]
