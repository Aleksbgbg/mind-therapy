import { TRANSLATIONS } from "@/utils/language/string-translations";
import { Translation, type TranslationName } from "@/utils/language/translation";
import { store } from "@/vuex/store";

const STRINGS_BY_NAME: { [key: TranslationName]: Translation } = {};
for (const translation of TRANSLATIONS) {
  STRINGS_BY_NAME[translation.name] = translation;
}

export function getLocalString(name: TranslationName): string {
  return STRINGS_BY_NAME[name][store.state.language];
}
