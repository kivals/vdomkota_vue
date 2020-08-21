import firebase from 'firebase/app';

export default {
  state: {
    userId: null,
  },
  mutations: {
    setUser(state, payload) {
      state.userId = payload;
    },
  },
  actions: {
    async loginUser({ commit }, { email, password }) {
      try {
        const user = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        commit('setUser', user.user.uid);
      } catch (e) {
        commit('setError', e);
        throw e;
      }
    },
  },
  getters: {
    user(state) {
      return state.userId;
    },
    checkUser(state) {
      return state.userId !== null;
    },
  },
};
