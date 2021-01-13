import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuelidate from 'vuelidate/src';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import store from './store';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faVk, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faVk, faInstagram);
Vue.component('font-awesome-icon', FontAwesomeIcon);

import messagePlugin from '@/plugins/message.plugin';

Vue.config.productionTip = false;

/* Plugins */
Vue.use(Vuelidate);
Vue.use(messagePlugin);
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

firebase.initializeApp({
  apiKey: 'AIzaSyCKNd2ou0_Xuoqri2T83Xw14hr4T5wiK_g',
  authDomain: 'vdomkota-6332e.firebaseapp.com',
  databaseURL: 'https://vdomkota-6332e.firebaseio.com',
  projectId: 'vdomkota-6332e',
  storageBucket: 'vdomkota-6332e.appspot.com',
  messagingSenderId: '174606186449',
  appId: '1:174606186449:web:2c6b3bdf9c12f80294d2f0',
});

const db = firebase.firestore();
const storage = firebase.storage();
Vue.$db = db;
Vue.$storage = storage;

let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount('#app');
  }
});
