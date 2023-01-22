<script setup lang="ts">
import { onMounted, ref } from "vue";
import { computed } from "@vue/reactivity";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import officeThumbnailImage from "@/assets/map/office-thumbnail.jpg";
import mapPinImage from "@/assets/map/pin.svg?url";
import LocalString from "@/components/language/local-string.vue";
import kakao from "@/declarations/kakao-maps-module.d";
import { getLocalString } from "@/utils/language/local-string";
import { MAP_GO, MAP_LOCATION, MAP_SECTION_TITLE, MAP_TITLE } from "@/utils/language/string-translations";

const targetLocation = new kakao.maps.LatLng(37.60601, 127.0199608);

const directionsUrl = computed(
  () =>
    `https://map.kakao.com/link/to/${getLocalString(MAP_TITLE)},${targetLocation.getLat()},${targetLocation.getLng()}`
);

const mapElement = ref(null);

onMounted(() => {
  const map = new kakao.maps.Map(mapElement.value, {
    center: targetLocation,
    level: 3,
  });

  const MARKER_RATIO = 9.847393 / 5.6444445;
  const markerWidth = 22;
  const markerHeight = markerWidth * MARKER_RATIO;
  new kakao.maps.Marker({
    map,
    position: targetLocation,
    image: new kakao.maps.MarkerImage(mapPinImage, new kakao.maps.Size(markerWidth, markerHeight), {}),
  });
});
</script>

<template lang="pug">
.bg-slate-50.py-5
  h2.text-2xl.font-black.text-center.text-blue-600.pb-5
    local-string(:name="MAP_SECTION_TITLE")
  .relative
    .h-96(ref="mapElement")
    img.absolute.z-10.bottom-0.right-0.ring-2.ring-white.w-24.m-3(:src="officeThumbnailImage")
  .text-center.p-2
    h3.font-bold
      local-string(:name="MAP_TITLE")
    p.text-sm.mb-2
      font-awesome-icon.text-blue-500.w-4.mr-1(icon="fa-solid fa-location-dot")
      local-string(:name="MAP_LOCATION")
    a.btn-primary(:href="directionsUrl")
      font-awesome-icon.w-4.mr-1(icon="fa-solid fa-diamond-turn-right")
      local-string(:name="MAP_GO")
</template>
