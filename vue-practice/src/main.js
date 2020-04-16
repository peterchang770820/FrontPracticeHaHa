import Vue from 'vue'
import App from './App.vue'
import axios from "axios";
import VueAxios from "vue-axios";
import interceptorsSetup from "./interceptors/interceptor";
import router from "./router/router";

Vue.config.productionTip = false

interceptorsSetup();
Vue.use(VueAxios, axios);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')







