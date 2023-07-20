import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import routes from './router';
import store from './store';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faBars,
  faMoneyCheckDollar,
  faLayerGroup,
  faUser,
  faDollarSign,
  faBookOpen,
  faUsersGear,
  faLocationArrow,
  faFileInvoice,
  faArrowRightFromBracket,
  faFileExport,
  faPrint
} from '@fortawesome/free-solid-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(IconsPlugin);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
library.add(faBars);
library.add(faMoneyCheckDollar);
library.add(faLayerGroup);
library.add(faUser);
library.add(faDollarSign);
library.add(faBookOpen);
library.add(faUsersGear);
library.add(faLocationArrow);
library.add(faFileInvoice);
library.add(faArrowRightFromBracket);
library.add(faFileExport);
library.add(faPrint);

Vue.use(VueRouter);
const router = new VueRouter({
  routes: routes
});
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
  router
}).$mount('#app')
