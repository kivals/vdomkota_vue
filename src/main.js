import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuelidate from 'vuelidate/src';

import 'materialize-css/dist/js/materialize.min';

Vue.config.productionTip = false;

/* Plugins */
Vue.use(Vuelidate);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
