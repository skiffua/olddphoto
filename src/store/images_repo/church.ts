import { IMAGES_KEYS_TYPE, YEARS_KEYS_TYPE } from '@/store/constants'
import { figcaptionGenerator, linkSourceGenerator } from '@/components/helpers'
import { Image } from '@/store/imagesStore'

export const imagesChurch: Image[] = [
  {
    src: '/church/00020',
    keys: [
      YEARS_KEYS_TYPE.Y1905_1939,
      IMAGES_KEYS_TYPE.MONASTERY,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.PRIEST,
      IMAGES_KEYS_TYPE.VASILIAN,
      IMAGES_KEYS_TYPE.UGKC
    ],
    title: figcaptionGenerator(
      'Добромиль, монастир (1931р.)',
      'о. Пасив Шевага (з Кристинополя), 2-й - ?, 3-й – о. Мелетій Лончина, 4-й – Веніамин Муциковський (ігумен монастиря у Буковій), 5-й - ?, 6-й – о. Януарій Коциловський (з Жовкви), 7-й – о. Корнилій Войтович, 8-й – о. Йосафат Лабай, ігумен, 9-й – о. Йосиф Загвійський',
      `${linkSourceGenerator('Архівні фото з життя монастиря до 1939 року', 'https://www.dobromyl-monastery.com/photoarchives-ua')}`),
    year: 1931
  },
  {
    src: '/church/00021',
    keys: [
      YEARS_KEYS_TYPE.Y1905_1939,
      IMAGES_KEYS_TYPE.MONASTERY,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.PRIEST,
      IMAGES_KEYS_TYPE.VASILIAN,
      IMAGES_KEYS_TYPE.UGKC
    ],
    title: figcaptionGenerator(
      'Добромиль, монастир (1929/30р.)',
      'Добромильські брати-філософи з о. Степаном Решетилом, секретарем і прокуратором (економом) Галицької Провінції отців Василіян (в центрі). \n' +
      '\n' +
      'Зліва від нього Севастіян Сабол, справа – Віталій Байрак. Зліва внизу сидить Роман Лукань, справа внизу Христофор Миськів.',
      `${linkSourceGenerator('Архівні фото з життя монастиря до 1939 року', 'https://www.dobromyl-monastery.com/photoarchives-ua')}`),
    year: 1930
  },
  {
    src: '/church/00022',
    keys: [
      YEARS_KEYS_TYPE.Y1905_1939,
      IMAGES_KEYS_TYPE.MONASTERY,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.PRIEST,
      IMAGES_KEYS_TYPE.VASILIAN,
      IMAGES_KEYS_TYPE.UGKC
    ],
    title: figcaptionGenerator(
      'Добромиль, монастир (~1930р.)',
      'Зимою на лижах біля чернечої гори',
      `${linkSourceGenerator('Архівні фото з життя монастиря до 1939 року', 'https://www.dobromyl-monastery.com/photoarchives-ua')}`),
    year: 1930
  },
  {
    src: '/church/00023',
    keys: [
      YEARS_KEYS_TYPE.Y1905_1939,
      IMAGES_KEYS_TYPE.MONASTERY,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.PRIEST,
      IMAGES_KEYS_TYPE.VASILIAN,
      IMAGES_KEYS_TYPE.UGKC
    ],
    title: figcaptionGenerator(
      'Добромиль, монастир (1929/30р.)',
      'Добромильські брати-філософи на санях взимку 1930/1931 р. біля Чернеяої гори.',
      `${linkSourceGenerator('Архівні фото з життя монастиря до 1939 року', 'https://www.dobromyl-monastery.com/photoarchives-ua')}`),
    year: 1930
  },
  {
    src: '/church/00024',
    keys: [
      YEARS_KEYS_TYPE.Y1905_1939,
      IMAGES_KEYS_TYPE.MONASTERY,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.PRIEST,
      IMAGES_KEYS_TYPE.VASILIAN,
      IMAGES_KEYS_TYPE.UGKC
    ],
    title: figcaptionGenerator(
      'Добромиль, монастир (1931/32р.)',
      'Сидять зліва-направо: 1-й – о. Йосиф Пеленський, 2-й – о. Полікарп Марцінюк, ігумен Буківського монастиря, 3-й – о. Микола Грицеляк, канцлер владики Йосафата Коциловського, 4-й – о. Веніамин Муциковський, 5-й – о. Діонісій Ткачук, Протоархимандрит Чину (з 17.07.1931), 6-й – єпископ Йосафат Коциловський, ЧСВВ, 7-й – о. Степан Решетило, Настоятель-адміністратор Галицької Провінції Найсвятішого Спасителя (з 6.08.1931, 12.07.1932 - Протоігумен), 8-й - ? ...',
      `${linkSourceGenerator('Архівні фото з життя монастиря до 1939 року', 'https://www.dobromyl-monastery.com/photoarchives-ua')}`),
    year: 1930
  },
  {
    src: '/church/00025',
    keys: [
      YEARS_KEYS_TYPE.Y1905_1939,
      IMAGES_KEYS_TYPE.MONASTERY,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.PRIEST,
      IMAGES_KEYS_TYPE.VASILIAN,
      IMAGES_KEYS_TYPE.UGKC
    ],
    title: figcaptionGenerator(
      'Добромиль, священники (УГКЦ) (~1930р.)',
      `${linkSourceGenerator(
        'о. Йосиф Галабарда',
        'https://uk.wikipedia.org/wiki/%D0%99%D0%BE%D1%81%D0%B8%D1%84_%D0%9F%D0%B5%D1%82%D1%80%D0%BE_%D0%93%D0%B0%D0%BB%D0%B0%D0%B1%D0%B0%D1%80%D0%B4%D0%B0')} (справа), можливо зі своїм батьком Михайлом Галабардою.`,
      `${linkSourceGenerator('Архівні фото з життя монастиря до 1939 року', 'https://www.dobromyl-monastery.com/photoarchives-ua')}`),
    w: 822,
    h: 1280,
    year: 1930
  },
  {
    src: '/church/00026',
    keys: [
      YEARS_KEYS_TYPE.Y1905_1939,
      IMAGES_KEYS_TYPE.MONASTERY,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.PRIEST,
      IMAGES_KEYS_TYPE.VASILIAN,
      IMAGES_KEYS_TYPE.UGKC
    ],
    title: figcaptionGenerator(
      'Обряд освячення дзвона  (кінець 1930-х)',
      `Обряд освячення дзвона здійснює ${linkSourceGenerator(
        'о. Йосиф Галабарда',
        'https://uk.wikipedia.org/wiki/%D0%99%D0%BE%D1%81%D0%B8%D1%84_%D0%9F%D0%B5%D1%82%D1%80%D0%BE_%D0%93%D0%B0%D0%BB%D0%B0%D0%B1%D0%B0%D1%80%D0%B4%D0%B0')}, ігумен Добромильського монастиря св. Онуфрія.`,
      `${linkSourceGenerator('Архівні фото з життя монастиря до 1939 року', 'https://www.dobromyl-monastery.com/photoarchives-ua')}`),
    year: 1938
  },
  {
    src: '/church/00027',
    keys: [
      YEARS_KEYS_TYPE.Y1905_1939,
      IMAGES_KEYS_TYPE.MONASTERY,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.PRIEST,
      IMAGES_KEYS_TYPE.VASILIAN,
      IMAGES_KEYS_TYPE.UGKC,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: figcaptionGenerator(
      'Добромильський монастир (кінець 1920-30р)',
      'Добромильський монастир св. Онуфрія 1920-30-ті рр. (вид зі сходу).',
      `${linkSourceGenerator('Архівні фото з життя монастиря до 1939 року', 'https://www.dobromyl-monastery.com/photoarchives-ua')}`),
    year: 1925
  },
  {
    src: '/church/00028',
    keys: [
      YEARS_KEYS_TYPE.Y1905_1939,
      IMAGES_KEYS_TYPE.MONASTERY,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.PRIEST,
      IMAGES_KEYS_TYPE.VASILIAN,
      IMAGES_KEYS_TYPE.UGKC,
      IMAGES_KEYS_TYPE.BUILDING
    ],
    title: figcaptionGenerator(
      'Добромильський монастир (1934р)',
      'Перед церквою Добромильського монастиря – в центрі – о. Іпатій Майка (1934 р.) – Апостольство Молитви зі своїм провідником ймовірно на празник Серця Христового.',
      `${linkSourceGenerator('Архівні фото з життя монастиря до 1939 року', 'https://www.dobromyl-monastery.com/photoarchives-ua')}`),
    year: 1934
  },
  {
    src: '/church/00029',
    keys: [
      YEARS_KEYS_TYPE.Y1905_1939,
      IMAGES_KEYS_TYPE.MONASTERY,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.PRIEST,
      IMAGES_KEYS_TYPE.VASILIAN,
      IMAGES_KEYS_TYPE.UGKC
    ],
    title: figcaptionGenerator(
      'Добромильський монастир (1931/32р)',
      'Збір урожаю яблук в саду Добромильського монастиря. Справа-наліво 1-й – Дам’ян Богун, 2-й – Методій Болецький (з песиком), 3-й – за ним о. ігумен Йосафат Лабай (з яблуком), 5-й – Орест Карплюк, ще наліво з руками в кишенях Севастіян Шевчук. Осінь 1931-го або 1932-го.',
      `${linkSourceGenerator('Архівні фото з життя монастиря до 1939 року', 'https://www.dobromyl-monastery.com/photoarchives-ua')}`),
    year: 1931
  },
  {
    src: '/church/00030',
    keys: [
      YEARS_KEYS_TYPE.Y1905_1939,
      IMAGES_KEYS_TYPE.MONASTERY,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.PRIEST,
      IMAGES_KEYS_TYPE.VASILIAN,
      IMAGES_KEYS_TYPE.UGKC
    ],
    title: figcaptionGenerator(
      'Добромиль (1932/33р)',
      'Єпископ-помічник Перемишльський Григорій Лакота серед василіян в Добромилі. Можливо на якийсь із відпустових празників (Преображення ГНІХ, Воздвиження Чесного Хреста або Св. Онуфрія) Сидять зліва-направо: 1-й – о. Марко Романович, 2-й – Мелетій Лончина, 3-й – єпископ Григорій Лакота, 4-й – о. Йосафат Лабай, ігумен монастиря, 5-й – о. Платон Мартинюк; стоїть у верхньому ряді 5-й зліва – о. Павло Теодорович, магістр новіціяту в Крехові...',
      `${linkSourceGenerator('Архівні фото з життя монастиря до 1939 року', 'https://www.dobromyl-monastery.com/photoarchives-ua')}`),
    year: 1932
  },
  {
    src: '/church/00032',
    keys: [
      YEARS_KEYS_TYPE.Y1905_1939,
      IMAGES_KEYS_TYPE.MONASTERY,
      IMAGES_KEYS_TYPE.PEOPLE,
      IMAGES_KEYS_TYPE.PRIEST,
      IMAGES_KEYS_TYPE.VASILIAN,
      IMAGES_KEYS_TYPE.UGKC
    ],
    title: figcaptionGenerator(
      'Добромиль, околиці (~1990р)',
      'о. Гнатюк (УГКЦ)',
      `${linkSourceGenerator('Фото з життя о. Северіяна Гнатюка - кінець 80х / початок 90х', 'https://www.dobromyl-monastery.com/photoarchives-hnatyuk-ua')}`),
    year: 1990
  }
]
