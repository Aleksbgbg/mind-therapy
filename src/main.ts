import { createApp } from "vue";
import App from "@/app.vue";
import "@/setup-font-awesome";
import "@/style.css";
import { store } from "@/vuex/store";

createApp(App).use(store).mount("#app");
