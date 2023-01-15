import { createApp } from "vue";
import App from "@/app.vue";
import "@/style.css";
import { store } from "@/vuex/store";

createApp(App).use(store).mount("#app");
