<script setup lang="ts">
import FooterRoot from "@/views/footer/footer-root.vue";
import HeaderRoot from "@/views/header/header-root.vue";
import Root from "@/views/main/root.vue";
</script>

<template lang="pug">
.h-screen.flex.flex-col
  .grow
    header
      header-root
    root
  footer
    footer-root
</template>
