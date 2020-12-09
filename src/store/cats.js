import { FirestoreCollection } from '@/store/helpers/firestore-collection';

export default {
  state: {
    cats: [],
  },
  mutations: {
    setCats(state, payload) {
      state.cats = payload;
    },
    setCat(state, payload) {
      const ind = state.cats.findIndex(c => c.id === payload.id);
      if (ind !== -1) {
        state.cats.splice(ind, 1, payload);
      } else {
        state.cats.push(payload);
      }
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
    async saveCat({ commit }, payload) {
      //1 проверим на наличие изменений
      // if (isEqual(payload, state))
      // //1. Сохраняем тестовое описание кота
      // console.log(payload);
      commit('setCat', payload);
      // const pageConfigCollection = new FirestoreCollection('cats');
      // if (payload.id) {
      //   await pageConfigCollection.saveDocRequest(payload.id, payload, {
      //     merge: true,
      //   });
      //   commit('setCat', payload);
      // }
    },
  },
  getters: {
    cats: s => s.cats,
  },
};
