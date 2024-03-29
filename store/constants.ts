export enum IMAGES_KEYS_TYPE {
  PEOPLE = 'PEOPLE',
  BUILDING = 'BUILDING',
  CHILDREN = 'CHILDREN',
  KULTURE = 'KULTURE',
  SPORT = 'SPORT',
  ZAHID = 'ZAHID',
  SALINA = 'SALINA',
  PRIEST = 'PRIEST',
  MONASTERY = 'MONASTERY',
  CASTLE = 'CASTLE',
  VASILIAN = 'VASILIAN',
  SOVIET = 'SOVIET'
}

export enum YEARS_KEYS_TYPE {
  Y1900_1939 = 'Y1900_1939',
  Y1939_1945 = 'Y1939_1945',
  Y1945_1989 = 'Y1945_1989',
  Y1989_2000 = 'Y1989_2000',
  Y2000_PRESENT = 'Y2000_PRESENT',
}

export const IMAGES_YEARS: Record<string, string> = {
  [YEARS_KEYS_TYPE.Y1900_1939]: '1900-1939',
  [YEARS_KEYS_TYPE.Y1939_1945]: '1939-1945',
  [YEARS_KEYS_TYPE.Y1945_1989]: '1945-1989',
  [YEARS_KEYS_TYPE.Y1989_2000]: '1989-2000',
  [YEARS_KEYS_TYPE.Y2000_PRESENT]: '2000-*'
}

export const IMAGES_KEYS: Record<string, string> = {
  [IMAGES_KEYS_TYPE.PEOPLE]: 'люди',
  [IMAGES_KEYS_TYPE.BUILDING]: 'будівлі',
  [IMAGES_KEYS_TYPE.CHILDREN]: 'діти',
  [IMAGES_KEYS_TYPE.KULTURE]: 'культура',
  [IMAGES_KEYS_TYPE.SPORT]: 'спорт',
  [IMAGES_KEYS_TYPE.ZAHID]: 'захід',
  [IMAGES_KEYS_TYPE.SALINA]: 'Саліна',
  [IMAGES_KEYS_TYPE.CASTLE]: 'замок',
  [IMAGES_KEYS_TYPE.PRIEST]: 'священник',
  [IMAGES_KEYS_TYPE.MONASTERY]: 'монастир',
  [IMAGES_KEYS_TYPE.VASILIAN]: 'Василіяни',
  [IMAGES_KEYS_TYPE.SOVIET]: 'совіти'
}

export const STATIC_FOLDER_PATH = '/photos'
