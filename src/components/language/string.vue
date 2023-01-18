<script setup lang="ts">
import { getLocalString } from "@/utils/language/local-string";
import { type TranslationName } from "@/utils/language/translation";

const props = defineProps<{
  name: TranslationName;
}>();
</script>

<template lang="pug">
span {{ getLocalString(name) }}
</template>
