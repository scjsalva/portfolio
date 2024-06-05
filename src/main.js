import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import Particles from "@tsparticles/vue3";
import { loadFull } from "tsparticles"; 

createApp(App).use(store).use(router).use(Particles, {
  init: async engine => {
    await loadFull(engine); // you can load the full tsParticles library from "tsparticles" if you need it
    // await loadSlim(engine); // or you can load the slim version from "@tsparticles/slim" if don't need Shapes or Animations
  }
}).mount('#app')
