// FECTH
// AXIOS

// ---- PROMESAS EN JS

// (PROMISE) -> pendiente -> res | rej
// .then(cb)
// .catch(error => console.log(error))

import * as Vue from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

import { mainAppCore } from "./mainAppCore.Vue.js";

const { createApp } = Vue;

const mainID = "#main";
const mainApp = createApp(mainAppCore);
mainApp.mount(mainID);
