// const { createApp } = Vue;
import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import { appCore } from "./appCore.vue.js";

// 4 partes importantes de la creacion de VUE Element

const idApp = "#app";

const app = createApp(appCore);

app.mount(idApp);

// createApp({
//   data() {
//     return {
//       count: 0,
//     };
//   },
// }).mount("#app");
