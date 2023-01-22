<script setup lang="ts">
import LocalString from "@/components/language/local-string.vue";
import {
  FOOTER_ABOUT,
  FOOTER_BLOG,
  FOOTER_COMPANY,
  FOOTER_COUNTRY,
  FOOTER_SOCIALS,
  MAP_LOCATION,
} from "@/utils/language/string-translations";
import BrandIcon from "@/views/footer/brand-icon.vue";
</script>

<template lang="pug">
.columns-2.text-gray-700.bg-slate-100.p-5(class="text-[0.65rem]")
  .mb-2
    h5.font-bold.pb-2
      local-string(:name="FOOTER_COMPANY")
    ul
      li.pb-2
        a(href="#")
          local-string(:name="FOOTER_ABOUT")
      li.pb-2
        a(href="#")
          local-string(:name="FOOTER_BLOG")
  div
    h5.font-bold
      local-string(:name="FOOTER_SOCIALS")
    .py-3
      brand-icon(brand="twitter")
      brand-icon.mx-5(brand="instagram")
      brand-icon(brand="facebook")
  img.w-16.mt-8(src="/logo.svg")
  div(class="text-[0.5rem]")
    p.font-en.my-3 © {{ new Date().getFullYear() }} MindArt
    p.font-en MindArt Inc
    p
      local-string(:name="MAP_LOCATION")
    p
      local-string(:name="FOOTER_COUNTRY")
</template>
