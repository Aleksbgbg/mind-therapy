import { Language } from "@/utils/language/language";
import { persist, retrieveOrDefault } from "@/utils/persistence";
import { createStore } from "vuex";

const LANGUAGE_KEY = "LANG";

export const MUTATION = {
  CHANGE_LANGUAGE: "changeLanguage",
};

export const store = createStore({
  state() {
    return {
      language: retrieveOrDefault(LANGUAGE_KEY, Language.Kr),
    };
  },
  mutations: {
    [MUTATION.CHANGE_LANGUAGE](state, lang) {
      state.language = lang;
      persist(LANGUAGE_KEY, lang);
    },
  },
});
