import "./assets/main.css";
import { VueQueryPlugin } from "@tanstack/vue-query";

import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import VueTailwindDatepicker from "vue-tailwind-datepicker";

import App from "./App.vue";
import router from "./router";
import type { VueQueryPluginOptions } from "node_modules/@tanstack/vue-query/build/legacy";
const app = createApp(App);

const vueQueryPluginOptions: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  },
};

app.use(VueTailwindDatepicker);
app.use(PrimeVue, { ripple: true });
app.use(ToastService);
app.use(createPinia());
app.use(router);
app.use(VueQueryPlugin, vueQueryPluginOptions);

app.mount("#app");
