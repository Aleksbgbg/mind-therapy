<script setup lang="ts">
import String from "@/components/language/string.vue";
import LanguageSelector from "@/views/language/language-selector.vue";
</script>

<template lang="pug">
.flex.justify-center
  .flex.items-center
    ul
      li.rounded.bg-blue-100.px-2.py-1 지도
  .flex.items-center.rounded-full.bg-sky-400.text-white.font-bold.text-2xl.w-36.h-36
    h1.text-center
      string(name="ROOT_TITLE")
  div
    language-selector
</template>
