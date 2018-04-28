import Vue from 'vue'
import App from './App.vue'
import Router from './route.js'

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router
})
