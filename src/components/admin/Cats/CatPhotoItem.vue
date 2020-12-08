<template>
  <b-card
    :img-src="photo.url"
    img-alt="Card Image"
    no-body
    img-top
    style="max-width: 30rem;"
  >
    <template #footer>
      <div class="d-flex justify-content-between align-items-center">
        <b-form-checkbox
          :checked="photo.previewPhoto"
          @change="$emit('toggleMainPhoto', $event, photo)"
          name="check-button"
          switch
        >
          Основное: <b>{{ photo.previewPhoto ? 'ДА' : 'НЕТ' }}</b>
        </b-form-checkbox>
        <b-icon
          @click="$emit('delete', photo)"
          style="cursor: pointer"
          icon="x-circle"
          scale="1.5"
          variant="danger"
        ></b-icon>
      </div>
    </template>
  </b-card>
</template>

<script>
export default {
  name: 'CatPhotoItem',
  model: {
    prop: 'photo',
    event: 'change',
  },
  props: {
    photo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>