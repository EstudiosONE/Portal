import Vue from 'vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import store from './vue/vuex/store.js'
import router from './vue/vue-router/router.js'

import app from './vue/app.vue'


// Inicializar la app
import components from './vue/components/_components.js'
components();
Vue.use(VueMaterial);

// App
new Vue({
  el: '#app',
  render: h => h(app),
  store,
  router
})
