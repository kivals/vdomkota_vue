<template>
  <b-card sub-title="Размер 150px на 150px">
    <template #header>
      <h6 class="mb-0">Логотип сайта</h6>
    </template>
    <AppLogo :logo="logoUrl"></AppLogo>
    <b-form-file
      v-if="this.isEdit"
      accept=".jpg, .png, .gif"
      v-model="customFile"
      :state="Boolean(customFile)"
      placeholder="Выберете картинку или перенесите сюда..."
      drop-placeholder="Drop file here..."
    ></b-form-file>
    <template #footer>
      <b-button variant="primary" @click="changeLogo">
        <b-icon icon="cloud-arrow-up" aria-hidden="true"></b-icon> {{ buttonText }}
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
      customFile: null,
    };
  },
  computed: {
    buttonText() {
      return this.isEdit ? 'Сохранить новый логотип' : 'Сменить логотип';
    },
    logoUrl() {
      if (!this.isEdit || !this.customFile) {
        return this.currentLogo;
      }
      return URL.createObjectURL(this.customFile);
    },
  },
  methods: {
    changeLogo() {
      this.isEdit = !this.isEdit;
    },
  },
};
</script>
