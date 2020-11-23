import { FirestoreCollection } from '@/store/helpers/firestore-collection';
import { Storage } from '@/store/helpers/Storage';

const LOGO_PATH = 'main-page-config/logo.jpg';
const VIDEO_PATH = 'main-page-config/video.mp4';

export default {
  state: {
    mainPageConfig: {},
    uploadPercent: 0,
    uploading: false,
  },
  mutations: {
    setMainPageConfig(state, config) {
      state.mainPageConfig = config;
    },
    setMenuConfig(state, menu) {
      state.mainPageConfig.menu = menu;
    },
    setLogo(state, logo) {
      state.mainPageConfig.logo = logo;
    },
    setUploadPercent(state, value) {
      state.uploadPercent = value;
    },
    setUploading(state, value) {
      state.uploading = value;
    },
    setIntroText(state, value) {
      state.mainPageConfig.introText = value;
    },
    setIntroButtonText(state, value) {
      state.mainPageConfig.introButtonText = value;
    },
  },
  actions: {
    async loadMainPageConfig({ commit }) {
      console.log('loadMainPageConfig');
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
      console.log('updateMainPageConfig');
      console.log(state.mainPageConfig.introVideo);
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
    updateLogo({ commit }, payload) {
      commit('setUploading', true);
      const logoRef = Storage.getInstance().update(LOGO_PATH, payload);
      logoRef.on(
        'state_changed',
        snapshot => {
          const completedValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          commit('setUploadPercent', completedValue);
        },
        //TODO Обработка ошибок
        error => {
          commit('setUploading', false);
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          console.log(error.message);
        },
        () => {
          commit('setUploadPercent', 100);
          logoRef.snapshot.ref.getDownloadURL().then(url => {
            commit('setUploading', false);
            commit('setLogo', url);
          });
        },
      );
    },

    updateVideo({ commit, dispatch }, payload) {
      commit('setUploading', true);
      const videoRef = Storage.getInstance().update(VIDEO_PATH, payload);
      videoRef.on(
        'state_changed',
        snapshot => {
          const completedValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          commit('setUploadPercent', completedValue);
        },
        //TODO Обработка ошибок
        error => {
          commit('setUploading', false);
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          console.log(error.message);
        },
        () => {
          commit('setUploadPercent', 100);
          videoRef.snapshot.ref.getDownloadURL().then(url => {
            commit('setUploading', false);
            commit('setIntroVideo', url);
            dispatch('updateMainPageConfig');
          });
        },
      );
    },
  },
  getters: {
    mainPageConfig: s => s.mainPageConfig,
    uploadPercent: s => s.uploadPercent,
    uploading: s => s.uploading,
  },
};
