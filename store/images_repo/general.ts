import { IMAGES_KEYS_TYPE, YEARS_KEYS_TYPE } from '@/store/constants'
import { linkSourceGenerator } from '@/components/helpers'
import { Image } from '../photos'

export const imagesGeneral: Image[] = [
  {
    src: '/general/00001',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: 'Добромиль (поч. 1900-х)',
    description: 'Колишня податкова',
    h: 311,
    w: 500,
    year: 1900
  },
  {
    src: '/general/00002',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: 'Добромиль (поч. 1900-х)',
    description: 'Будинок "Сокола" у Добромилі',
    year: 1900
  },
  {
    src: '/general/00003',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.CASTLE,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: 'Замок',
    description: 'Замок неподалік Добромиля',
    source: 'Архів польський',
    year: 1930
  },
  {
    src: '/general/00004',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.MONASTERY,
      IMAGES_KEYS_TYPE.BUILDING,
      IMAGES_KEYS_TYPE.VASILIAN
    ],
    title: 'Монастир',
    description: 'Вхідна брама у монастир',
    source: 'Архів польський',
    year: 1930
  },
  {
    src: '/general/00005',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: 'Будинок старости (1910р.)',
    description: 'Будинок старости у Добромилі',
    source: `${linkSourceGenerator('POLSKA-ORG.PL',
      'https://polska-org.pl/8237242,foto.html')}`,
    year: 1910
  },
  {
    src: '/general/00006',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: 'Добромиль (1927-1931рр.)',
    description: 'Панорама міста',
    source: `${linkSourceGenerator('POLSKA-ORG.PL',
      'https://gdansk.fotopolska.eu/Dobromil/b320323,Panoramy_Dobromila.html?f=1352127-foto')}`,
    year: 1930
  },
  {
    src: '/general/00007',
    keys: [
      YEARS_KEYS_TYPE.Y1945_1989,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.SOVIET
    ],
    title: 'Демонстрація (рік невідомий)',
    description: 'Радянська демонстрація',
    year: 1965
  },
  {
    src: '/general/00008',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: 'Добромиль (1915-1935рр.)',
    description: 'Можливо, готель. Локація не ідентифікована',
    source: `${linkSourceGenerator('POLSKA-ORG.PL',
  'https://polska-org.pl/9009029,foto.html?idEntity=5893274')}`,
    year: 1920
  },
  {
    src: '/general/00009',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: 'Добромиль (1913р.)',
    description: 'Ратуша, пам\'ятник А. Міцкевичу',
    source: `${linkSourceGenerator('Fotopolska.Eu',
      'https://gdansk.fotopolska.eu/Dobromil_Ratusz')}`,
    year: 1913
  },
  {
    src: '/general/00010',
    keys: [
      YEARS_KEYS_TYPE.Y1939_1945,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: 'Добромиль (1942р.)',
    description: 'Залізничний вокзал',
    source: `${linkSourceGenerator('Fotopolska.Eu',
      'https://gdansk.fotopolska.eu/Dobromil/b388062,Przystanek_osobowy_Dobromil.html')}`,
    year: 1942
  },
  {
    src: '/general/00011',
    keys: [
      YEARS_KEYS_TYPE.Y1989_2000,
      IMAGES_KEYS_TYPE.ZAHID,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: 'Вивішування українського прапора на ратушу (1989р.)',
    description: 'Вивішування державного прапора України на ратушу. Ярослав Угрин',
    year: 1989
  },
  {
    src: '/general/00012',
    keys: [
      YEARS_KEYS_TYPE.Y1989_2000,
      IMAGES_KEYS_TYPE.ZAHID,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: 'Демонстрація (1989р.)',
    description: 'Українська демонстрація у Добромилі',
    year: 1989
  },
  {
    src: '/general/00013',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.KULTURE,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: 'c. Солянуватка (1936-38рр.)',
    description: 'Молодь с. Солянуватка. В першому ряді - Мальгівський Теодор. Просвіта.',
    source: 'Сімейний фотоальбом родини Босаневич',
    year: 1937
  },
  {
    src: '/general/00014',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: 'Добромиль (поч. 1900-х)',
    description: 'Міська ратуша',
    year: 1900
  },
  {
    src: '/general/00015',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: 'Добромиль (поч. 1990-х)',
    description: 'Панорама міста',
    year: 1900
  },
  {
    src: '/general/00016',
    keys: [
      YEARS_KEYS_TYPE.Y1945_1989,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: 'Добромиль (~1980)',
    description: 'Ресторан "Добромиль"',
    year: 1980
  },
  {
    src: '/general/00018',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: 'Добромиль (~1900)',
    description: 'Центр міста',
    source: `${linkSourceGenerator('Arthur Kurzweil', 'https://www.facebook.com/arthur.kurzweil.9')}`,
    year: 1900
  },
  {
    src: '/general/00021',
    keys: [
      YEARS_KEYS_TYPE.Y1989_2000,
      IMAGES_KEYS_TYPE.ZAHID,
      IMAGES_KEYS_TYPE.PRIEST,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: 'Нижанковичі (1990)',
    description: 'Перезахоронення воїнів УПА 21.10.1990 в с. Нижанковичі',
    year: 1990
  },
  {
    src: '/general/00022',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: 'Добромиль-Нижанковичі-Перемишль (~1920рр.)',
    description: 'Неідентифіковане фото',
    year: 1920
  },
  {
    src: '/general/00023',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: 'Добромиль-Нижанковичі-Перемишль (~1920рр.)',
    description: 'Неідентифіковане фото',
    year: 1920
  },
  {
    src: '/general/00024',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: 'Перемишль (1938-41рр.?)',
    description: 'Вишкіл служби порятунку?',
    year: 1938
  },
  {
    src: '/general/00025',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: 'Добромиль? (1933)',
    description: 'Вечерниці жіночого кружка',
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
    title: 'Саліна (1990р.)',
    description: 'Поминальний похід на Саліну',
    year: 1990
  },
  {
    src: '/general/00040',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: 'Добромиль (поч. 1900-х)',
    description: 'Добромиль. Загальний вигляд міста',
    year: 1900
  },
  {
    src: '/general/00041',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: 'Пожежна частина (1918-1938рр.)',
    description: 'Пожежна частина у Добромилі (Гучко)',
    source: `${linkSourceGenerator('Moje Kresy. Kolorowe ptaki Dobromila', 'https://nto.pl/moje-kresy-kolorowe-ptaki-dobromila/ga/4603263/zd/6268353')}`,
    year: 1920
  },
  {
    src: '/general/00042',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: 'Костел (поч. 1900-х)',
    description: 'Римо-католицький костел',
    year: 1900
  },
  {
    src: '/general/00043',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: 'Костел (поч. 1900-х)',
    description: 'Римо-католицький костел',
    year: 1900
  },
  {
    src: '/general/00044',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: 'Залізничний вокзал (поч. 1900-х)',
    description: 'Залізничний вокзал у Добромилі',
    year: 1900
  },
  {
    src: '/general/00045',
    keys: [
      YEARS_KEYS_TYPE.Y1939_1945,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: 'В напрямку Добромиля (1941р.)',
    description: 'Передові частини німецької армії в напрямку Добромиля',
    year: 1941
  },
  {
    src: '/general/00046',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: 'Добромиль (поч. 1900-х)',
    description: 'Центральна частина міста',
    year: 1900
  },
  {
    src: '/general/00047',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.SALINA,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: 'Добромиль (поч. 1900-х)',
    description: 'Саліна. Соляний завод',
    year: 1900
  },
  {
    src: '/general/00048',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: 'Замок (поч. 1900-х)',
    description: 'Замок Гербуртів. Добромиль',
    year: 1900
  },
  {
    src: '/general/00049',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: 'Добромиль (поч. 1900-х)',
    description: 'Центральна частина міста',
    year: 1900
  },
  {
    src: '/general/00051',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: 'Добромиль (поч. 1900-х)',
    description: 'Міська ратуша',
    year: 1900
  },
  {
    src: '/general/00052',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: 'Добромиль (поч. 1900-х)',
    description: 'Перехрестя у напрямку с. Нижанкович та с. Мігово',
    year: 1900
  },
  {
    src: '/general/00060',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: 'Пивний завод (поч. 1990-х)',
    description: 'Дорога на пивний завод у Добромилі',
    year: 1900
  },
  {
    src: '/general/00061',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: 'Учасники "Сокола" (поч. 1990-х)',
    description: 'Учасники добромильського "Сокола". Другий справа у верхньому ряду Юзеф Ґебультович.',
    source: `${linkSourceGenerator('Добромильські володарі. Яворовські', 'http://dobromyl.org/2014/12/dobromylski-volodari-4/')}`,
    year: 1900
  },
  {
    src: '/general/00062',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: 'Залізничний вокзал (1904р.)',
    description: 'Залізничний вокзал у Добромилі',
    year: 1904
  },
  {
    src: '/general/00063',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.MONASTERY,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: 'Монастир (поч. 1990-х)',
    description: 'Добромильський монастир',
    year: 1900
  },
  {
    src: '/general/00064',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: 'Добромиль (поч. 1990-х)',
    description: 'Панорама міста',
    year: 1900
  },
  {
    src: '/general/00065',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: 'Замок Гербуртів (поч. 1990-х)',
    description: 'Руїни замку',
    year: 1900
  }
]
