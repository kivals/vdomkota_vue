<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <b-card>
          <b-row>
            <b-col>
              <CatDescription :cat="cat"></CatDescription>
            </b-col>
            <b-col>
              <CatPhotos
                v-if="cat.photos.length > 0"
                :photos="cat.photos"
              ></CatPhotos>
            </b-col>
          </b-row>
          <template #footer>
            <b-button variant="success">Сохранить</b-button>
          </template>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import CatDescription from '@/components/admin/Cats/CatDescription';
import CatPhotos from '@/components/admin/Cats/CatPhotos';

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
      this.cat = findCat || {};
    },
  },
};
</script>

<style scoped></style>
