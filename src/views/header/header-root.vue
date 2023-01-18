<script setup lang="ts">
import Logo from "@/assets/logo.svg";
import String from "@/components/language/string.vue";
import LanguageSelector from "@/views/language/language-selector.vue";
</script>

<template lang="pug">
.flex.box-content.max-h-8.px-2.py-3
  div(class="basis-1/6")
  div(class="basis-4/6")
    logo.mx-auto
  div(class="basis-1/6")
    language-selector.text-sm
</template>
