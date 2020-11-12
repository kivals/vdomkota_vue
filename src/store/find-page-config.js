import { FirestoreCollection } from '@/store/helpers/firestore-collection';

export default {
  state: {
    findPageConfig: {},
  },
  mutations: {
    setFindPageConfig(state, payload) {
      state.findPageConfig = payload;
    },
  },
  actions: {
    async loadFindPageConfig({ commit }) {
      try {
        let findPageConfig = {};
        const pageConfigCollection = new FirestoreCollection('PageConfig');
        const findPage = await pageConfigCollection.getDocRequest('findPage');
        if (findPage) {
          findPageConfig = {
            title: findPage.title,
          };
          commit('setFindPageConfig', findPageConfig);
        }
        //TODO обработать ошибки
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    findPageConfig: s => s.findPageConfig,
  },
};
