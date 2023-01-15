import { Translation } from "@/utils/language/translation";
import { TRANSLATIONS } from "@/utils/language/translations";
import { store } from "@/vuex/store";

const STRINGS_BY_NAME: { [key: string]: Translation } = {};
for (const translation of TRANSLATIONS) {
  STRINGS_BY_NAME[translation.name] = translation;
}

export function getString(name: string): string {
  return STRINGS_BY_NAME[name][store.state.language];
}
