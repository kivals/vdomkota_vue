import firebase from 'firebase/app';

export default {
  actions: {
    async loginUser({ commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (e) {
        commit('setError', e);
        throw e;
      }
    },
    async logout() {
      await firebase.auth().signOut();
    },
  },
};
