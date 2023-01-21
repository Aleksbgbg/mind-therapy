<script setup lang="ts">
import Logo from "@/assets/logo.svg";
import LanguageSelector from "@/views/language/language-selector.vue";
</script>

<template lang="pug">
.flex.box-content.h-8.px-2.py-3
  div(class="basis-1/6")
  div(class="basis-4/6")
    img.h-8.mx-auto(src="/logo.svg")
  div(class="basis-1/6")
    language-selector.text-sm
</template>
