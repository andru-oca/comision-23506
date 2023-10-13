import * as Vue from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import { mainCore } from "./mainCore.vue.js";
const { createApp } = Vue;

const mainID = "#main";
const appMain = createApp(mainCore);

appMain.mount(mainID);
