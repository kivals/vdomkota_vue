import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuelidate from 'vuelidate/src';
import firebase from 'firebase/app';

import 'firebase/auth';
import store from './store';

import messagePlugin from '@/plugins/message.plugin';
import 'materialize-css/dist/js/materialize.min';

Vue.config.productionTip = false;

/* Plugins */
Vue.use(Vuelidate);
Vue.use(messagePlugin);

firebase.initializeApp({
  apiKey: 'AIzaSyCKNd2ou0_Xuoqri2T83Xw14hr4T5wiK_g',
  authDomain: 'vdomkota-6332e.firebaseapp.com',
  databaseURL: 'https://vdomkota-6332e.firebaseio.com',
  projectId: 'vdomkota-6332e',
  storageBucket: 'vdomkota-6332e.appspot.com',
  messagingSenderId: '174606186449',
  appId: '1:174606186449:web:2c6b3bdf9c12f80294d2f0',
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
