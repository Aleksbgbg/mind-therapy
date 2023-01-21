<script setup lang="ts">
import FooterRoot from "@/views/footer/footer-root.vue";
import HeaderRoot from "@/views/header/header-root.vue";
import Root from "@/views/main/root.vue";
</script>

<template lang="pug">
.flex.flex-col.h-screen.overflow-x-hidden
  header
    header-root
  .overflow-y-scroll
    main
      root
    footer
      footer-root
</template>
