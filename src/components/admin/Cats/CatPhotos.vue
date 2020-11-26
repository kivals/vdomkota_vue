<template>
  <b-card>
    <template #header>
      <h6 class="mb-0">Фотки</h6>
    </template>
    <b-container>
      <b-row>
        <!-- Уже существующие фото -->
        <b-col cols="12" xl="4" v-for="(photo, ind) in serverPhotos" :key="ind">
          <CatPhotoItem
            :photo="photo"
            @change="checkedHandler"
            @delete="deleteHandler"
          ></CatPhotoItem>
        </b-col>
      </b-row>

      <div v-if="addedPhotos.length > 0" class="delimiter mt-5">
        <span>Добавленные/несохраненные фото</span>
        <hr />
      </div>
      <!-- Новые фото -->
      <b-row>
        <b-col
          cols="12"
          xl="4"
          v-for="(addedPhoto, ind) in addedPhotos"
          :key="ind"
          class="mt-3"
        >
          <CatPhotoItem
            :photo="addedPhoto"
            @change="checkedHandler"
            @delete="deleteHandler"
          ></CatPhotoItem>
        </b-col>
      </b-row>
    </b-container>

    <div v-if="allowToAdd" class="input__wrapper">
      <input
        id="input__file"
        class="input input__file"
        type="file"
        @change="onFileChange"
      />
      <label for="input__file" class="input__file-button">
        <span class="input__file-icon-wrapper">
          <b-icon icon="plus" scale="2.5"></b-icon>
        </span>
      </label>
    </div>
  </b-card>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep';
import CatPhotoItem from '@/components/admin/Cats/CatPhotoItem';

export default {
  name: 'CatPhotos',
  components: {
    CatPhotoItem,
  },
  props: {
    photos: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      localPhotos: cloneDeep(this.photos),
    };
  },
  computed: {
    //TODO magic business number
    allowToAdd() {
      return this.localPhotos.length < 10 || false;
    },
    serverPhotos() {
      return this.localPhotos.filter(photo => !photo.isNew);
    },
    addedPhotos() {
      return this.localPhotos.filter(photo => photo.isNew);
    },
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      //Помечаем добавленые картинки, чтобы отличать загруженные с сервера
      this.localPhotos.push({
        previewPhoto: false,
        url: URL.createObjectURL(file),
        isNew: true,
      });
    },
    /**
     * Обработчик переключателя "Главное фото"
     * Только один элемент может иметь previewPhoto = true
     * Отключаем все остальные
     * @param $event true или false
     * @param photo обрабатываемый элемент
     */
    checkedHandler($event, photo) {
      this.localPhotos.map(photo => (photo.previewPhoto = false));
      if ($event) {
        photo.previewPhoto = $event;
      }
    },
    /**
     * Обработчик удаления фото
     * @param photo удаляемое фото
     */
    deleteHandler(photo) {
      this.localPhotos = this.localPhotos.filter(vp => vp !== photo);
    },
  },
};
</script>

<style lang="scss" scoped>
.delimiter {
  span {
    color: rgba(0, 0, 0, 0.3);
  }
  hr {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
}
.input__wrapper {
  width: 100%;
  position: relative;
  margin: 15px 0;
  text-align: center;
}
.input__file {
  opacity: 0;
  visibility: hidden;
  position: absolute;
}
.input__file-button {
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  background-color: #007bff;
  text-align: center;
  width: 100%;
  color: #fff;
  font-size: 1.125rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 auto;
  &:hover {
    background-color: #0069d9;
    border-color: #0062cc;
  }
}
</style>