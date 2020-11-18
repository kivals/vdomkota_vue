<template>
  <b-card>
    <template #header>
      <h6 class="mb-0">Логотип сайта</h6>
    </template>
    <AppLogo :logo="currentLogo"></AppLogo>
    <b-form-file
      v-model="logoFile"
      :state="Boolean(logoFile)"
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
    ></b-form-file>
    <template #footer>
      <b-button variant="primary">
        <b-icon icon="cloud-arrow-up" aria-hidden="true"></b-icon> Сменить лого
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
      logoFile: null,
    };
  },
  computed: {
    buttonText() {
      return this.isEdit ? 'Сохранить' : 'Редактировать';
    },
    logoUrl() {
      return URL.createObjectURL(this.logoFile);
    },
  },
};
</script>

<style scoped></style>
