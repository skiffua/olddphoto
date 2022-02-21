import { IMAGES_KEYS_TYPE, YEARS_KEYS_TYPE } from '@/store/constants'
import { linkSourceGenerator } from '@/components/helpers'
import { Image } from '../photos'

export const imagesChurch: Image[] = [
  {
    src: '/church/00001',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.PRIEST,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: 'Cвященник (~1930)',
    description: 'о. Володимир Сурм\'як (1895-1953) (РКЦ). ' +
      '<br />Włodzimierz Surmiak - Roman Catholic priest, parish priest in Dobromil',
    source: `Сімейний фотоальбом ${linkSourceGenerator('Anna Baranova', 'https://www.facebook.com/abaranowa')}</a>`,
    w: 822,
    h: 1210,
    year: 1930
  },
  {
    src: '/church/00002',
    keys: [
      YEARS_KEYS_TYPE.Y1939_1945,
      IMAGES_KEYS_TYPE.PRIEST,
      IMAGES_KEYS_TYPE.CHILDREN
    ],
    title: 'Cвященник з дітьми (1944р.)',
    description: 'Другий ряд - Мокрицька, Коронович, Стецишин, о. Гораєцький (УГКЦ), Хадай. Локація - пожежна частина',
    source: 'Сімейний фотоальбом сім\'ї Назарик (с. Мігово)',
    year: 1944
  },
  {
    src: '/church/00003',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.CHILDREN,
      IMAGES_KEYS_TYPE.PRIEST
    ],
    title: 'Княжпіль (~1938р.)',
    description: `о. Петро Дутко (УГКЦ), ${linkSourceGenerator('Дмитро Хадай', 'https://uk.wikipedia.org/wiki/%D0%A5%D0%B0%D0%B4%D0%B0%D0%B9_%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%BE_%D0%A1%D1%82%D0%B5%D0%BF%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87')}`,
    year: 1938
  },
  {
    src: '/church/00005',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.PRIEST,
      IMAGES_KEYS_TYPE.CHILDREN
    ],
    title: 'Урочисте причастя (1932р.)',
    description: 'о. Іван Господаревський, єп. Йосафат Коциловський, о. Теодор Гораєцький, о. Йосип Маринович (УГКЦ)',
    year: 1932
  },
  {
    src: '/church/00006',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.BUILDING,
      IMAGES_KEYS_TYPE.PRIEST,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: 'Церква, с. Мігово (1932р.)',
    description: 'Єпископська візитація в с. Мігово. о. Микола Грицеляк, о. Іван Господаревський, єп. Йосафат Коциловський, о. Йосип Маринович, о. Петро Дутко, о. Станислав Дашо (УГКЦ)',
    year: 1937
  },
  {
    src: '/church/00008',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.BUILDING,
      IMAGES_KEYS_TYPE.PRIEST,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: 'Добромильщина (середина 1930-х)',
    description: `Празник Зіслання Святого Духа. 
    На підводі єпископ Перемишльської єпархії УГКЦ ${linkSourceGenerator('Й. Коциловський', 'https://uk.wikipedia.org/wiki/%D0%99%D0%BE%D1%81%D0%B0%D1%84%D0%B0%D1%82_(%D0%9A%D0%BE%D1%86%D0%B8%D0%BB%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9)')},
    по ліву руку - о. Йосип Маринович`,
    year: 1935
  },
  {
    src: '/church/00009',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.PRIEST,
      IMAGES_KEYS_TYPE.PEOPLE
    ],
    title: 'Похорон (1948р.)',
    description: 'Похорон о. Івана Господаревського (УГКЦ)',
    year: 1948
  },
  {
    src: '/church/00010',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.PRIEST,
      IMAGES_KEYS_TYPE.CHILDREN
    ],
    title: 'Причастя (1935р.)',
    description: 'Причастя. Добромиль і Ляцко. о. Іван Господаревський, о. Теодор Гораєцький (УГКЦ)',
    year: 1935
  },
  {
    src: '/church/00011',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.PRIEST,
      IMAGES_KEYS_TYPE.CHILDREN
    ],
    title: 'Причастя (1938-39р.)',
    description: 'Причастя, с. Ляцко (теперішня Солянуватка). о. Теодор Гораєцький (УГКЦ) з дітьми. ' +
      `Майбутні однокласники ${linkSourceGenerator('Богдана Цицика', 'https://uk.wikipedia.org/wiki/%D0%A6%D0%B8%D1%86%D0%B8%D0%BA_%D0%91%D0%BE%D0%B3%D0%B4%D0%B0%D0%BD_%D0%93%D1%80%D0%B8%D0%B3%D0%BE%D1%80%D0%BE%D0%B2%D0%B8%D1%87')}. ` +
      'Можливо, сам Богдан також на світлині',
    year: 1939
  },
  {
    src: '/church/00012',
    keys: [
      YEARS_KEYS_TYPE.Y1945_1989
    ],
    title: 'г. Радич (1950-60рр.)',
    description: 'г. Радич. Вигляд з теперішньої вулиці Івана Франка',
    year: 1960
  },
  {
    src: '/church/00020',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.MONASTERY,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.VASILIAN
    ],
    title: 'Добромиль, монастир (1931р.)',
    description: 'о. Пасив Шевага (з Кристинополя), 2-й - ?, 3-й – о. Мелетій Лончина, 4-й – Веніамин Муциковський (ігумен монастиря у Буковій), 5-й - ?, 6-й – о. Януарій Коциловський (з Жовкви), 7-й – о. Корнилій Войтович, 8-й – о. Йосафат Лабай, ігумен, 9-й – о. Йосиф Загвійський',
    source: `${linkSourceGenerator('Архівні фото з життя монастиря до 1939 року', 'https://www.dobromyl-monastery.com/photoarchives-ua')}`,
    year: 1931
  },
  {
    src: '/church/00021',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.MONASTERY,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.PRIEST,
      IMAGES_KEYS_TYPE.VASILIAN
    ],
    title: 'Добромиль, монастир (1929/30р.)',
    description: 'Добромильські брати-філософи з о. Степаном Решетилом, секретарем і прокуратором (економом) Галицької Провінції отців Василіян (в центрі). \n' +
      '\n' +
      'Зліва від нього Севастіян Сабол, справа – Віталій Байрак. Зліва внизу сидить Роман Лукань, справа внизу Христофор Миськів.',
    source: `${linkSourceGenerator('Архівні фото з життя монастиря до 1939 року', 'https://www.dobromyl-monastery.com/photoarchives-ua')}`,
    year: 1930
  },
  {
    src: '/church/00022',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.MONASTERY,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.PRIEST,
      IMAGES_KEYS_TYPE.VASILIAN
    ],
    title: 'Добромиль, монастир (~1930р.)',
    description: 'Зимою на лижах біля чернечої гори',
    source: `${linkSourceGenerator('Архівні фото з життя монастиря до 1939 року', 'https://www.dobromyl-monastery.com/photoarchives-ua')}`,
    year: 1930
  },
  {
    src: '/church/00023',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.MONASTERY,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.VASILIAN
    ],
    title: 'Добромиль, монастир (1929/30р.)',
    description: 'Добромильські брати-філософи на санях взимку 1930/1931 р. біля Чернеяої гори.',
    source: `${linkSourceGenerator('Архівні фото з життя монастиря до 1939 року', 'https://www.dobromyl-monastery.com/photoarchives-ua')}`,
    year: 1930
  },
  {
    src: '/church/00024',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.MONASTERY,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.PRIEST,
      IMAGES_KEYS_TYPE.VASILIAN
    ],
    title: 'Добромиль, монастир (1931/32р.)',
    description: 'Сидять зліва-направо: 1-й – о. Йосиф Пеленський, 2-й – о. Полікарп Марцінюк, ігумен Буківського монастиря, 3-й – о. Микола Грицеляк, канцлер владики Йосафата Коциловського, 4-й – о. Веніамин Муциковський, 5-й – о. Діонісій Ткачук, Протоархимандрит Чину (з 17.07.1931), 6-й – єпископ Йосафат Коциловський, ЧСВВ, 7-й – о. Степан Решетило, Настоятель-адміністратор Галицької Провінції Найсвятішого Спасителя (з 6.08.1931, 12.07.1932 - Протоігумен), 8-й - ? ...',
    source: `${linkSourceGenerator('Архівні фото з життя монастиря до 1939 року', 'https://www.dobromyl-monastery.com/photoarchives-ua')}`,
    year: 1930
  },
  {
    src: '/church/00025',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.MONASTERY,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.PRIEST,
      IMAGES_KEYS_TYPE.VASILIAN
    ],
    title: 'Добромиль, священники (УГКЦ) (~1930р.)',
    description: `${linkSourceGenerator(
        'о. Йосиф Галабарда',
        'https://uk.wikipedia.org/wiki/%D0%99%D0%BE%D1%81%D0%B8%D1%84_%D0%9F%D0%B5%D1%82%D1%80%D0%BE_%D0%93%D0%B0%D0%BB%D0%B0%D0%B1%D0%B0%D1%80%D0%B4%D0%B0')} (справа), можливо зі своїм батьком Михайлом Галабардою.`,
    source: `${linkSourceGenerator('Архівні фото з життя монастиря до 1939 року', 'https://www.dobromyl-monastery.com/photoarchives-ua')}`,
    w: 822,
    h: 1280,
    year: 1930
  },
  {
    src: '/church/00026',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.MONASTERY,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.PRIEST,
      IMAGES_KEYS_TYPE.VASILIAN
    ],
    title: 'Обряд освячення дзвона  (кін. 1930-х)',
    description: `Обряд освячення дзвона здійснює ${linkSourceGenerator(
        'о. Йосиф Галабарда',
        'https://uk.wikipedia.org/wiki/%D0%99%D0%BE%D1%81%D0%B8%D1%84_%D0%9F%D0%B5%D1%82%D1%80%D0%BE_%D0%93%D0%B0%D0%BB%D0%B0%D0%B1%D0%B0%D1%80%D0%B4%D0%B0')}, ігумен Добромильського монастиря св. Онуфрія.`,
    source: `${linkSourceGenerator('Архівні фото з життя монастиря до 1939 року', 'https://www.dobromyl-monastery.com/photoarchives-ua')}`,
    year: 1938
  },
  {
    src: '/church/00027',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.MONASTERY,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: 'Добромильський монастир (кінець 1920-30р.)',
    description: 'Добромильський монастир св. Онуфрія 1920-30-ті рр. (вид зі сходу).',
    source: `${linkSourceGenerator('Архівні фото з життя монастиря до 1939 року', 'https://www.dobromyl-monastery.com/photoarchives-ua')}`,
    year: 1925
  },
  {
    src: '/church/00028',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.MONASTERY,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.PRIEST,
      IMAGES_KEYS_TYPE.VASILIAN,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: 'Добромильський монастир (1934р.)',
    description: 'Перед церквою Добромильського монастиря – в центрі – о. Іпатій Майка (1934 р.) – Апостольство Молитви зі своїм провідником ймовірно на празник Серця Христового.',
    source: `${linkSourceGenerator('Архівні фото з життя монастиря до 1939 року', 'https://www.dobromyl-monastery.com/photoarchives-ua')}`,
    year: 1934
  },
  {
    src: '/church/00029',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.MONASTERY,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.PRIEST,
      IMAGES_KEYS_TYPE.VASILIAN
    ],
    title: 'Добромильський монастир (1931/32р.)',
    description: 'Збір урожаю яблук в саду Добромильського монастиря. Справа-наліво 1-й – Дам’ян Богун, 2-й – Методій Болецький (з песиком), 3-й – за ним о. ігумен Йосафат Лабай (з яблуком), 5-й – Орест Карплюк, ще наліво з руками в кишенях Севастіян Шевчук. Осінь 1931-го або 1932-го.',
    source: `${linkSourceGenerator('Архівні фото з життя монастиря до 1939 року', 'https://www.dobromyl-monastery.com/photoarchives-ua')}`,
    year: 1931
  },
  {
    src: '/church/00030',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.MONASTERY,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.PRIEST,
      IMAGES_KEYS_TYPE.VASILIAN
    ],
    title: 'Добромиль (1932/33р.)',
    description: 'Єпископ-помічник Перемишльський Григорій Лакота серед василіян в Добромилі. Можливо на якийсь із відпустових празників (Преображення ГНІХ, Воздвиження Чесного Хреста або Св. Онуфрія) Сидять зліва-направо: 1-й – о. Марко Романович, 2-й – Мелетій Лончина, 3-й – єпископ Григорій Лакота, 4-й – о. Йосафат Лабай, ігумен монастиря, 5-й – о. Платон Мартинюк; стоїть у верхньому ряді 5-й зліва – о. Павло Теодорович, магістр новіціяту в Крехові...',
    source: `${linkSourceGenerator('Архівні фото з життя монастиря до 1939 року', 'https://www.dobromyl-monastery.com/photoarchives-ua')}`,
    year: 1932
  },
  {
    src: '/church/00032',
    keys: [
      YEARS_KEYS_TYPE.Y1900_1939,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.PRIEST
    ],
    title: 'Добромиль, околиці (~1990р.)',
    description: 'о. Гнатюк (УГКЦ) з парафіанами',
    source: `${linkSourceGenerator('Фото з життя о. Северіяна Гнатюка - кінець 80х / початок 90х', 'https://www.dobromyl-monastery.com/photoarchives-hnatyuk-ua')}`,
    year: 1990
  }
]
