import * as Vue from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

import { appCoreHeader } from "./appCoreHeader.vue.js";
import { appCoreMain } from "./appCoreMain.vue.js";

const { createApp } = Vue;
// Creando con Header y Componentes
const headerID = "#header";
const appHeader = createApp(appCoreHeader);
appHeader.mount(headerID);

//Creando un gestor de ventas en el main
const mainID = "#main";
const appMain = createApp(appCoreMain);
appMain.mount(mainID);
