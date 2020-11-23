<template>
  <b-card sub-title="Размер 150px на 150px">
    <template #header>
      <h6 class="mb-0">Логотип сайта</h6>
    </template>
    <div class="d-flex justify-content-center">
      <AppLogo v-if="!uploading" :logo="logoUrl"></AppLogo>
    </div>
    <b-form-file
      v-if="isEdit && !uploading"
      accept=".jpg, .png, .gif"
      v-model="chooseFile"
      :state="Boolean(chooseFile)"
      placeholder="Выберете картинку..."
      drop-placeholder="Перетащите сюда..."
    ></b-form-file>
    <b-progress
      v-if="uploading"
      :value="uploadPercent"
      max="100"
      variant="success"
      show-progress
      striped
      animated
    ></b-progress>
    <template #footer>
      <b-button
        :disabled="uploading"
        :variant="isEdit ? 'success' : 'primary'"
        @click="changeLogo"
      >
        <b-icon icon="cloud-arrow-up" aria-hidden="true"></b-icon>
        {{ buttonText }}
      </b-button>
    </template>
  </b-card>
</template>

<script>
import AppLogo from '@/components/layouts/base/header/AppLogo';

export default {
  name: 'LogoSection',
  components: {
    AppLogo,
  },
  props: {
    currentLogo: {
      type: String,
    },
  },
  data() {
    return {
      isEdit: false,
      chooseFile: null,
    };
  },
  computed: {
    uploadPercent() {
      return this.$store.getters.uploadPercent;
    },
    buttonText() {
      return this.isEdit ? 'Сохранить' : 'Изменить логотип';
    },
    logoUrl() {
      if (!this.isEdit || !this.chooseFile) {
        return this.currentLogo;
      }
      return URL.createObjectURL(this.chooseFile);
    },
    uploading() {
      return this.$store.getters.uploading;
    },
  },
  methods: {
    changeLogo() {
      //Файл не выбран, сохранять нечего
      if (!this.chooseFile && this.isEdit) {
        return;
      }
      if (this.isEdit && !this.uploading) {
        //this.$store.dispatch('updateLogo', this.chooseFile);
        this.$emit('saveLogo', this.chooseFile);
        return;
      }
      this.isEdit = !this.isEdit;
      this.$store.commit('setUploadPercent', 0);
      this.chooseFile = null;
    },
  },
  watch: {
    //Дожидаемся полной загругки и выходим из режима Edit
    uploadPercent: function(newValue) {
      if (newValue === 100) {
        this.isEdit = false;
      }
    },
  },
};
</script>
