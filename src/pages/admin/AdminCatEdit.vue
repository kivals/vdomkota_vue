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
            кнопки
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
      //TODO исполььзовать find
      const findCat = this.$store.getters.cats.filter(cat => cat.id === id);
      if (findCat.length > 0) {
        this.cat = findCat[0];
      }
    },
  },
};
</script>

<style scoped></style>
