<script setup lang="ts">
import String from "@/components/language/string.vue";
import { ROOT_HOME } from "@/utils/language/translations";
</script>

<template lang="pug">
p
  string(:name="ROOT_HOME")
</template>
