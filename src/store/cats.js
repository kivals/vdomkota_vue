import { FirestoreCollection } from '@/store/helpers/firestore-collection';

export default {
  state: {
    cats: [],
  },
  mutations: {
    setCats(state, payload) {
      state.cats = payload;
    },
  },
  actions: {
    async loadShelterCats({ commit }) {
      try {
        const pageConfigCollection = new FirestoreCollection('cats');
        const cats = await pageConfigCollection.getAllDocsRequest({
          field: 'hasHome',
          operator: '==',
          value: false,
        });
        commit('setCats', cats);
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    cats: s => s.cats,
  },
};
