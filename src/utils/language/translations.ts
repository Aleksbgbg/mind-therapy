import { Language } from "@/utils/language/languages";
import { Translation } from "@/utils/language/translation";

export const ROOT_HOME = Symbol();
export const ROOT_TITLE = Symbol();

export const TRANSLATIONS: Translation[] = [
  {
    name: ROOT_HOME,
    [Language.En]: "Home",
    [Language.Kr]: "홈페이지",
  },
  {
    name: ROOT_TITLE,
    [Language.En]: "Mind Therapy❤️",
    [Language.Kr]: "마음 치료❤️",
  },
];
