import firebase from 'firebase/app';

export default {
  state: {
    user: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    async loginUser({ commit }, { email, password }) {
      try {
        const user = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        commit('setUser', user);
      } catch (e) {
        commit('setError', e);
        throw e;
      }
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
    checkUser(state) {
      return state.user !== null;
    },
  },
};
