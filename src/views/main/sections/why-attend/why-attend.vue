<script setup lang="ts">
import {
  ATTEND_REASON_1_BODY,
  ATTEND_REASON_1_TITLE,
  ATTEND_REASON_2_BODY,
  ATTEND_REASON_2_TITLE,
  ATTEND_REASON_3_BODY,
  ATTEND_REASON_3_TITLE,
} from "@/utils/language/string-translations";
import Reason from "@/views/main/sections/why-attend/reason.vue";
</script>

<template lang="pug">
.text-center.bg-blue-100.px-8.py-10
  reason(image="fa-solid fa-people-arrows" :title-name="ATTEND_REASON_1_TITLE" :body-name="ATTEND_REASON_1_BODY")
  reason(image="fa-solid fa-people-group" :title-name="ATTEND_REASON_2_TITLE" :body-name="ATTEND_REASON_2_BODY")
  reason(image="fa-solid fa-paintbrush" :title-name="ATTEND_REASON_3_TITLE" :body-name="ATTEND_REASON_3_BODY")
</template>
