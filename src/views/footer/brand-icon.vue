<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const props = defineProps<{
  brand: string;
}>();
</script>

<template lang="pug">
a(href="#")
  font-awesome-icon.rounded-full.outline.outline-2.p-1(:icon="`fa-brands fa-${brand}`")
</template>
