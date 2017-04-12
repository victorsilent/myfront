import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'

Vue.use(VueRouter);

Vue.filter('aniversarioFilter', function (data) {
  return data.slice(0,10);
});

const router = new VueRouter({
  routes // short for routes: routes
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
