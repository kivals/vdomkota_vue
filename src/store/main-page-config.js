import { FirestoreCollection } from '@/store/helpers/firestore-collection';

export default {
  state: {
    mainPageConfig: {},
  },
  mutations: {
    setMainPageConfig(state, config) {
      state.mainPageConfig = config;
    },
    setMenuConfig(state, menu) {
      state.mainPageConfig.menu = menu;
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
            logo: mainPage.logo,
            introText: mainPage.introText,
            introButtonText: mainPage.introButtonText,
            introVideo: mainPage.introVideo,
            introImg: mainPage.introImg,
            shelterCatImg: mainPage.shelterCatImg,
            bankCatImg: mainPage.bankCatImg,
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
    //TODO Сделать вывод пользователю сообщения об успехе или нет
    async updateMainPageConfig({ state }) {
      try {
        //TODO дублируется
        const pageConfigCollection = new FirestoreCollection('PageConfig');
        await pageConfigCollection.saveDocRequest(
          'mainPage',
          state.mainPageConfig,
        );
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    mainPageConfig: s => s.mainPageConfig,
  },
};
