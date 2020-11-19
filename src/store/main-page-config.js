import { FirestoreCollection } from '@/store/helpers/firestore-collection';
import { Storage } from '@/store/helpers/Storage';

const LOGO_PATH = 'main-page-config/logo.jpg';

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
      // Create a root reference
      // const storageRef = Vue.$storage.ref();
      // const mainPageImagesRef = storageRef.child('main-page-config/logo.jpg');
      // const uploadTask = mainPageImagesRef.put(payload);
      // // Listen for state changes, errors, and completion of the upload.
      // uploadTask.on(
      //   'STATE_CHANGED', // or 'state_changed'
      //   function(snapshot) {
      //     console.log('snapshot');
      //     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      //     let progress =
      //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      //     console.log('Upload is ' + progress + '% done');
      //     switch (snapshot.state) {
      //       case 'PAUSED':
      //         console.log('Upload is paused');
      //         break;
      //       case 'RUNNING':
      //         console.log('Upload is running');
      //         break;
      //     }
      //   },
      //   function(error) {
      //     console.log('error = ' + error.code);
      //     // A full list of error codes is available at
      //     // https://firebase.google.com/docs/storage/web/handle-errors
      //   },
      //   function() {
      //     // Upload completed successfully, now we can get the download URL
      //     console.log('success');
      //     uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
      //       console.log('File available at', downloadURL);
      //     });
      //   },
      // );
    },
  },
  getters: {
    mainPageConfig: s => s.mainPageConfig,
    uploadPercent: s => s.uploadPercent,
    uploading: s => s.uploading,
  },
};
