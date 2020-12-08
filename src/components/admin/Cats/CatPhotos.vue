<template>
  <b-card>
    <template #header>
      <h6 class="mb-0">Фотки</h6>
    </template>
    <b-container>
      <b-row>
        <!-- Уже существующие фото -->
        <b-col cols="12" xl="4" v-for="(photo, idx) in serverPhotos" :key="idx">
          <CatPhotoItem
            :photo="photo"
            @toggleMainPhoto="toggleMainPhotoHandler"
            @delete="deleteHandler(photo)"
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
          v-for="(addedPhoto, idx) in addedPhotos"
          :key="idx"
          class="mt-3"
        >
          <CatPhotoItem
            :photo="addedPhoto"
            @toggleMainPhoto="toggleMainPhotoHandler"
            @delete="deleteHandler(addedPhoto)"
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
  model: {
    prop: 'photos',
    event: 'changePhotos',
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
    //TODO magic business number 10
    allowToAdd() {
      return this.localPhotos.length < 10 || false;
    },
    serverPhotos() {
      return this.localPhotos.filter(photo => !photo.isNew && !photo.isDelete);
    },
    //Добавленные (несохраненные) фото
    addedPhotos() {
      return this.localPhotos.filter(photo => photo.isNew);
    },
  },
  watch: {
    localPhotos: {
      deep: true,
      handler(newValue) {
        this.$emit('changePhotos', cloneDeep(newValue));
      },
    },
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      //Помечаем добавленые картинки свойством isNew, чтобы отличать загруженные с сервера
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
    toggleMainPhotoHandler($event, photo) {
      this.localPhotos.map(photo => (photo.previewPhoto = false));
      if ($event) {
        photo.previewPhoto = $event;
      }
    },
    /**
     * Обработчик удаления фото
     * @param photo фото
     */
    deleteHandler(photo) {
      if (photo.isNew) {
        //Фото которые добавил пользователь и не еще не сохранил, мы удаляем
        this.localPhotos = this.localPhotos.filter(ph => ph !== photo);
      } else {
        //Фото которые уже загружены из БД помечаем на удаление
        const idx = this.localPhotos.findIndex(p => p === photo);
        if (idx !== -1) {
          const deletedPhoto = this.localPhotos[idx];
          deletedPhoto.isDelete = true;
          //Заменяем
          this.localPhotos.splice(idx, 1, this.localPhotos[idx]);
        }
      }
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
