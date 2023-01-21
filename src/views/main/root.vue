<script setup lang="ts">
import Description from "@/views/main/sections/description.vue";
import MapSection from "@/views/main/sections/map.vue";
import WhyAttend from "@/views/main/sections/why-attend/why-attend.vue";
</script>

<template lang="pug">
section
  description
section
  why-attend
section
  // map seems to be a reserved word
  map-section 
</template>
