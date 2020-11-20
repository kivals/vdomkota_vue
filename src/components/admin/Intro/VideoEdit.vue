<template>
  <b-card>
    <template #header>
      <h6 class="mb-0">Видео</h6>
    </template>
    <div class="wrapper">
      <div class="video">
        <video autoplay muted loop>
          <source :src="videoUrl" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
      <div class="video-overlay"></div>
    </div>
    <b-form-file
      v-if="isEdit && !uploading"
      accept=".mp4"
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
        @click="changeVideo"
      >
        <b-icon icon="cloud-arrow-up" aria-hidden="true"></b-icon>
        {{ buttonText }}
      </b-button>
    </template>
  </b-card>
</template>

<script>
export default {
  name: 'VideoEdit',
  props: {
    introVideo: {
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
    videoUrl() {
      if (!this.isEdit || !this.chooseFile) {
        return this.introVideo;
      }
      return URL.createObjectURL(this.chooseFile);
    },
    uploading() {
      return this.$store.getters.uploading;
    },
  },
  methods: {
    changeVideo() {
      //Файл не выбран, сохранять нечего
      // if (!this.chooseFile && this.isEdit) {
      //   return;
      // }
      // if (this.isEdit && !this.uploading) {
      //   //this.$store.dispatch('updateLogo', this.chooseFile);
      //   //this.$emit('saveLogo', this.chooseFile);
      //   return;
      // }
      this.isEdit = !this.isEdit;
      // //this.$store.commit('setUploadPercent', 0);
      // this.chooseFile = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 600px;
  position: relative;
}
.video {
  width: 100%;
  height: 100%;
  overflow: hidden;
  video {
    min-width: 100%;
    min-height: 100%;
  }
  @media (max-width: $md4+px) {
    display: none;
  }
}
</style>
