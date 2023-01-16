<script setup lang="ts">
import { getString } from "@/utils/language/translated-string";
import { type TranslationName } from "@/utils/language/translation";

const props = defineProps<{
  name: TranslationName;
}>();
</script>

<template lang="pug">
span {{ getString(name) }}
</template>
