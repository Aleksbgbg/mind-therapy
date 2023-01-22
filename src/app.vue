<script setup lang="ts">
import { computed } from "vue";
import { Language } from "@/utils/language/language";
import FooterRoot from "@/views/footer/footer-root.vue";
import HeaderRoot from "@/views/header/header-root.vue";
import Root from "@/views/main/root.vue";
import { store } from "@/vuex/store";

const language = computed(
  () =>
    ({
      [Language.En]: "font-en",
      [Language.Kr]: "font-kr",
    }[store.state.language])
);
</script>

<template lang="pug">
.flex.flex-col.h-screen.overflow-x-hidden(:class="language")
  header
    header-root
  .overflow-y-scroll
    main
      root
    footer
      footer-root
</template>
