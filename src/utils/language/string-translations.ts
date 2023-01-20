import { Language } from "./language";
import { Translation } from "@/utils/language/translation";

export const MAP_TITLE = Symbol();
export const MAP_LOCATION = Symbol();
export const MAP_GO = Symbol();

export const TRANSLATIONS: Translation[] = [
  {
    name: MAP_TITLE,
    [Language.En]: "MindArt Studio",
    [Language.Kr]: "마인드아트 마음 치료 작업실",
  },
  {
    name: MAP_LOCATION,
    [Language.En]: "40 Gireum-ro 9-gil, Seongbuk-gu, Seoul",
    [Language.Kr]: "서울특별시 성북구 40길음로 9길",
  },
  {
    name: MAP_GO,
    [Language.En]: "Directions",
    [Language.Kr]: "바로 가기",
  },
];
