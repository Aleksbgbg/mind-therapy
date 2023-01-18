<script setup lang="ts">
import { ref } from "vue";
import { Language } from "@/utils/language/language";
import { MUTATION, store } from "@/vuex/store";

const language = ref(store.state.language);

function languageChanged() {
  store.commit(MUTATION.CHANGE_LANGUAGE, language.value);
}
</script>

<template lang="pug">
select.bg-transparent.outline-none(v-model="language" @change="languageChanged")
  option(:value="Language.En") 🇬🇧 English
  option(:value="Language.Kr") 🇰🇷 한국어
</template>
