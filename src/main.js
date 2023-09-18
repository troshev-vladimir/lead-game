import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { createMetaManager } from "vue-meta";

createApp(App)
  .use(createPinia())
  .use(router)
  .use(createMetaManager())
  .mount("#app");
