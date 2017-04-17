import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueMask from 'v-mask'
import VeeValidate from 'vee-validate';
import { routes } from './routes'


Vue.use(VeeValidate);
Vue.use(VueRouter);
Vue.use(VueMask);

Vue.filter('aniversarioFilter', function (data) {
  let date = new Date(data);
  date.setHours(date.getHours() + 3)
  return date.toLocaleDateString('pt-BR');
});

const router = new VueRouter({
  routes // short for routes: routes
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
