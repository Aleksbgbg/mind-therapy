<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import LocalString from "@/components/language/local-string.vue";
import { type TranslationName } from "@/utils/language/translation";

const props = defineProps<{
  image: string;
  titleName: TranslationName;
  bodyName: TranslationName;
}>();
</script>

<template lang="pug">
.py-5
  font-awesome-icon.text-6xl.text-blue-500.mb-3(:icon="image")
  h3.font-bold.text-blue-500
    local-string(:name="titleName")
  p.text-sm.break-keep
    local-string(:name="bodyName")
</template>
