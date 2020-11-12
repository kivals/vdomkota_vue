import Vue from 'vue';
import Vuex from 'vuex';

import user from './user';
import mainPageConfig from './main-page-config';
import findPageConfig from './find-page-config';
import bankInfo from './bank-info';
import shelterInfo from './shelter';
import cats from '@/store/cats';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null,
  },
  mutations: {
    setError(state, e) {
      state.error = e;
    },
    clearError(state) {
      state.error = null;
    },
  },
  getters: {
    error: s => s.error,
  },
  modules: {
    user,
    cats,
    mainPageConfig,
    findPageConfig,
    bankInfo,
    shelterInfo,
  },
});
