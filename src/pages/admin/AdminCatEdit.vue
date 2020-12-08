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
            <b-button @click="saveCat(cat)" variant="success">Сохранить</b-button>
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
    next(vm => vm.setCatId(to.params.catId));
  },
  methods: {
    setCatId(id) {
      const findCat = this.$store.getters.cats.find(cat => cat.id === id);
      if (findCat) {
        this.cat = cloneDeep(findCat);
      }
    },
    async saveCat(cat) {
      await this.$store.dispatch('saveCat', cat);
    },
  },
};
</script>

<style scoped></style>
