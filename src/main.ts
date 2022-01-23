import { createApp } from 'vue'
import App from './App.vue'

import router from './routers'

import './index.css'


import { registerSW } from "virtual:pwa-register";

if ("serviceWorker" in navigator) {
  // && !/localhost/.test(window.location)) {
  registerSW();
}


createApp(App).use(router).mount('#app')
