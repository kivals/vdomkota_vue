import { FirestoreCollection } from '@/store/helpers/firestore-collection';

export default {
  state: {
    mainPageConfig: {},
  },
  mutations: {
    setMainPageConfig(state, payload) {
      state.mainPageConfig = payload;
    },
  },
  actions: {
    async loadMainPageConfig({ commit }) {
      try {
        let mainPageConfig = {};
        const pageConfigCollection = new FirestoreCollection('PageConfig');
        const mainPage = await pageConfigCollection.getDocRequest('mainPage');
        if (mainPage) {
          mainPageConfig = {
            logo: mainPage.logoUrl,
            introText: mainPage.introText,
            introButtonText: mainPage.introButtonText,
            introVideo: mainPage.introVideoUrl,
            introImg: mainPage.introImgUrl,
            shelterCatImg: mainPage.shelterCatImgUrl,
            bankCatImg: mainPage.bankCatImgUrl,
            bankTitle: mainPage.bankTitle,
            helpTitle: mainPage.helpTitle,
            shelterTitle: mainPage.shelterTitle,
            footerTitleQuestions: mainPage.footerTitleQuestions,
            footerTitleVisit: mainPage.footerTitleVisit,
            menu: mainPage.menu,
          };
          commit('setMainPageConfig', mainPageConfig);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    mainPageConfig: s => s.mainPageConfig,
  },
};
