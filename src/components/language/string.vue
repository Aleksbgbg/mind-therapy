<script setup lang="ts">
import { getString } from "@/utils/language/translated-string";

const props = defineProps<{
  name: string;
}>();
</script>

<template lang="pug">
span {{ getString(name) }}
</template>
