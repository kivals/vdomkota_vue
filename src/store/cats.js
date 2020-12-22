import { FirestoreCollection } from '@/store/helpers/firestore-collection';
import { Storage } from '@/store/helpers/Storage';
//import Vue from 'vue';
import firebase from 'firebase/app';

export default {
  state: {
    cats: [],
    uploadingFilesCount: 0,
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
    setUploadingFilesCount(state, value) {
      if (!value) {
        state.uploadingFilesCount--;
      }
      state.uploadingFilesCount = value;
    },
  },
  actions: {
    /**
     * Загрузка котов из Store
     * @param commit
     * @returns {Promise<void>}
     */
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
    //TODO мы не должны управлят id он сам должен присваиваться
    // eslint-disable-next-line no-unused-vars
    saveCatPhoto({ commit }, cat) {
      const { catId, photo } = cat;
      if (!catId || !photo) {
        return;
      }
      const photoPath = `cats/${catId}/cat-img-${new Date().getTime()}.jpg`;
      console.log(photoPath);
      //1. загружаем фото
      const photoRef = Storage.getInstance().putFile(photoPath, photo.file);
      photoRef.on(
        'state_changed',
        null,
        error => {
          commit('setUploadingFilesCount', 0);
          console.error(error);
        },
        () => {
          commit('setUploadingFilesCount');
          photoRef.snapshot.ref
            .getDownloadURL()
            .then(url => {
              console.log('Файл закгружен = ' + url);
              //2 добавляем данные о фото в коллекцию cats
              const pageConfigCollection = new FirestoreCollection('cats');
              const catRef = pageConfigCollection._ref.doc(catId);
              return catRef.update({
                photos: firebase.firestore.FieldValue.arrayUnion({
                  previewPhoto: photo.previewPhoto,
                  url,
                }),
              });
              //return pageConfigCollection.saveDocRequest(cat.id, cat);
            })
            .then(() => {
              console.log('after save');
            });
        },
      );

      //1 проверим на наличие изменений
      // if (isEqual(payload, state))
      // //1. Сохраняем тестовое описание кота
      // console.log(payload);
      // const pageConfigCollection = new FirestoreCollection('cats');
      // if (cat.id) {
      //   await pageConfigCollection.saveDocRequest(cat.id, cat, {
      //     merge: true,
      //   });
      //   commit('setCat', payload);
      // }
      //1. Сохраняем новые фотки
      //const catRef = Storage.getInstance().update(LOGO_PATH, payload);

      //await this.saveCatPhotos();
    },
  },
  getters: {
    cats: s => s.cats,
  },
};
