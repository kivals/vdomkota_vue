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
    isMobileView: false,
  },
  mutations: {
    setError(state, e) {
      state.error = e;
    },
    clearError(state) {
      state.error = null;
    },
    setMobileView(state, payload) {
      state.isMobileView = payload;
    },
  },
  getters: {
    error: s => s.error,
    isMobileView: s => s.isMobileView,
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
