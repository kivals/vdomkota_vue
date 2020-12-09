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
              <CatPhotos
                v-if="cat.photos.length > 0"
                v-model="cat.photos"
              ></CatPhotos>
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
      cat: {
        photos: [],
      },
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
      }
    },
    /**
     * Сохранить сущность Кот
     */
    async saveCat(cat) {
      if (!this.isChanged()) {
        console.log('Нечего сохранять');
      } else {
        await this.$store.dispatch('saveCat', cat);
      }
    },
    /**
     * Проверить были ли изменения
     * @returns {boolean} true/false
     */
    isChanged() {
      const storeCat = this.$store.getters.cats.find(cat => cat.id === this.cat.id);
      return !isEqual(storeCat, this.cat);
    },
  },
};
</script>

<style scoped></style>
