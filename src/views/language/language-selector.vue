<script setup lang="ts">
import { ref } from "vue";
import { MUTATION, store } from "@/vuex/store";

const language = ref(store.state.language);

function languageChanged() {
  store.commit(MUTATION.CHANGE_LANGUAGE, language.value);
}
</script>

<template lang="pug">
select(v-model="language" @change="languageChanged")
  option(value="en") English
  option(value="kr") 한국어
</template>
