<script setup lang="ts">
import Bunny from "@/assets/description/bunny.svg";
import LocalString from "@/components/language/local-string.vue";
import PerLanguage from "@/components/language/per-language.vue";
import { DESCRIPTION_BUTTON_ATTEND, DESCRIPTION_HEADING } from "@/utils/language/string-translations";
</script>

<template lang="pug">
.bg-purple-100.px-10.py-5
  bunny.float-right
  h2.mb-2
    local-string.font-black.text-3xl.text-orange-500(:name="DESCRIPTION_HEADING")
  p.mb-5
    per-language
      template(v-slot:en)
        p
          | a place to heal your
          | 
          span.underline.underline-offset-2.decoration-2.decoration-sky-500 heart
          | 
          | through
          | 
          span.underline.underline-offset-2.decoration-2.decoration-pink-500 art
      template(v-slot:kr)
        p
          span.underline.underline-offset-4.decoration-2.decoration-pink-500 미술
          | 로
          | 
          span.underline.underline-offset-4.decoration-2.decoration-sky-500 마음
          | 을 치료할 수 있는 공간
  a.btn-primary(href="#visit")
    local-string(:name="DESCRIPTION_BUTTON_ATTEND")
</template>
