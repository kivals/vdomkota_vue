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

          <b-button @click="goToCatEdit(cat.id)" variant="primary"
            >Перейти</b-button
          >
        </b-card>
      </b-col>
    </b-row>
    <b-row class="mt-30px">
      <b-col cols="12" sm="6" lg="4" xl="2">
        <b-card @click="goToCatEdit('new')" style="cursor: pointer">
          <div class="text-center">
            <b-icon
              icon="plus"
              font-scale="7.5"
              style="color: #383e49"
            ></b-icon>
          </div>
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
      cats: [],
    };
  },
  computed: {
    previewCats() {
      return this.cats.map(cat => {
        let previewCat = '';
        if (Array.isArray(cat.photos)) {
          previewCat = cat.photos.find(
            photo => photo.previewPhoto && photo.url,
          );
        }
        cat['previewPhoto'] = (previewCat && previewCat.url) || '';
        cat['shortInfo'] =
          cat.info.length > 150 ? cat.info.slice(0, 150) + '...' : cat.info;
        return cat;
      });
    },
  },
  mounted() {
    this.cats = this.$store.getters.cats;
  },
  methods: {
    goToCatEdit(catId) {
      this.$router.push({ name: 'AdminCatEdit', params: { catId } });
    },
  },
};
</script>

<style scoped></style>
