<script setup lang="ts">
import Logo from "@/assets/logo.svg";
import String from "@/components/language/string.vue";
import { ROOT_TITLE } from "@/utils/language/translations";
import LanguageSelector from "@/views/language/language-selector.vue";
</script>

<template lang="pug">
.box-border.grid.grid-cols-6.px-2.py-3
  logo.col-start-2.col-span-4.mx-auto
  language-selector.text-sm.m-auto
</template>
