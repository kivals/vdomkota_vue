<template>
  <b-container fluid>
    <b-row>
      <b-col
        v-for="cat in previewCats"
        :key="cat.id"
        cols="12"
        sm="6"
        lg="4"
        xl="2"
      >
        <b-card
          :title="cat.name"
          :img-src="cat.previewPhoto"
          :img-alt="cat.name"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>
            {{ cat.shortInfo }}
          </b-card-text>

          <b-button @click="goToCatEdit(cat.id)" variant="primary">Перейти</b-button>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'AdminCats',
  data() {
    return {
      cats: this.$store.getters.cats,
    };
  },
  computed: {
    previewCats() {
      return this.cats.map(cat => {
        let previewCat = '';
        if (Array.isArray(cat.photos)) {
          //TODO Заменить на filter
          previewCat = cat.photos.filter(
            photo => photo.previewPhoto && photo.url,
          )[0];
        }
        cat['previewPhoto'] = (previewCat && previewCat.url) || '';
        cat['shortInfo'] =
          cat.info.length > 150 ? cat.info.slice(0, 150) + '...' : cat.info;
        return cat;
      });
    },
  },
  methods: {
    goToCatEdit(catId) {
      this.$router.push({ name: 'AdminCatEdit', params: { catId } });
    },
  },
};
</script>

<style scoped></style>
