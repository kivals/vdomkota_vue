<template>
  <b-card>
    <template #header>
      <h6 class="mb-0">Фотки</h6>
    </template>
    <b-container>
      <b-row>
        <b-col cols="12" xl="4" v-for="(photo, ind) in photos" :key="ind">
          <b-card
            overlay
            :img-src="photo.url"
            img-alt="Card Image"
            text-variant="white"
            sub-title="В ДОМ КОТА"
            style="max-width: 30rem;"
          >
          </b-card>
        </b-col>
      </b-row>
    </b-container>

    <b-button block variant="primary"
      ><b-icon icon="plus" scale="2.5"></b-icon
    ></b-button>
  </b-card>
</template>

<script>
export default {
  name: 'CatPhotos',
  props: {
    photos: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>