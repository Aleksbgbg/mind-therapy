<script setup lang="ts">
import { Language } from "@/utils/language/language";
import { store } from "@/vuex/store";
</script>

<template lang="pug">
slot(name="en" v-if="store.state.language == Language.En")
slot(name="kr" v-if="store.state.language == Language.Kr")
</template>
