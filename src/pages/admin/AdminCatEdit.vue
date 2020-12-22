<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <b-card>
          <b-row>
            <b-col>
              <CatDescription v-if="cat.id" :cat.sync="cat"></CatDescription>
            </b-col>
            <b-col>
              <CatPhotos v-if="cat.id" v-model="cat.photos"></CatPhotos>
            </b-col>
          </b-row>
          <template #footer>
            <b-button @click="saveCat(cat)" variant="success"
              >Сохранить</b-button
            >
          </template>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import CatDescription from '@/components/admin/Cats/CatDescription';
import CatPhotos from '@/components/admin/Cats/CatPhotos';
import cloneDeep from 'lodash/cloneDeep';
import isEqual from 'lodash/isEqual';

export default {
  name: 'AdminCatEdit',
  components: {
    CatDescription,
    CatPhotos,
  },
  data() {
    return {
      cat: {},
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => vm.setCat(to.params.catId));
  },
  methods: {
    /**
     * Метод для хука beforeRouteEnter
     * установить состояние компоненты
     */
    setCat(id) {
      const storeCat = this.$store.getters.cats.find(cat => cat.id === id);
      if (storeCat) {
        this.cat = cloneDeep(storeCat);
      } else {
        //Создание нового кота
        this.cat = this.createEmptyCat(id);
      }
    },
    createEmptyCat(id) {
      return {
        id,
        photos: [],
      };
    },
    /**
     * Сохранить сущность Кот
     */
    async saveCat(cat) {
      if (!this.isChanged()) {
        console.log('Нечего сохранять');
        return;
      }
      const newPhotos = cat.photos.filter(ph => ph.isNew && ph.file);
      console.log(newPhotos);
      //Установливаем количество фото которые нам необходимо загрузить - нужно для progress bar
      this.$store.commit('setUploadingFilesCount', newPhotos.length);
      newPhotos.forEach(photo =>
        this.$store.dispatch('saveCatPhoto', { catId: cat.id, photo }),
      );
    },
    /**
     * Проверить были ли изменения
     * @returns {boolean} true/false
     */
    isChanged() {
      const storeCat = this.$store.getters.cats.find(
        cat => cat.id === this.cat.id,
      );
      return !isEqual(storeCat, this.cat);
    },
  },
};
</script>

<style scoped></style>
