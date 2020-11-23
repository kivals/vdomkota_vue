<template>
  <b-card>
    <template #header>
      <h6 class="mb-0">Другие настройки</h6>
    </template>
    <div>
      <b-form-group
        label-cols="4"
        label-cols-lg="2"
        label="Текст заголовка"
        label-for="input-default"
      >
        <b-form-input
          id="input-default"
          v-model="title"
          :readonly="!isEdit"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        label-cols="4"
        label-cols-lg="2"
        label="Текст кнопки"
        label-for="input-default"
      >
        <b-form-input
          id="input-default"
          v-model="buttonText"
          :readonly="!isEdit"
        ></b-form-input>
      </b-form-group>
    </div>
    <template #footer>
      <b-button :variant="isEdit ? 'success' : 'primary'" @click="saveConfig">
        <b-icon icon="gear-fill" aria-hidden="true"></b-icon>
        {{ componentButtonText }}
      </b-button>
    </template>
  </b-card></template
>

<script>
import cloneDeep from 'lodash/cloneDeep';

export default {
  name: 'IntroTitle',
  props: {
    introText: {
      type: String,
    },
    introButtonText: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      title: cloneDeep(this.introText),
      buttonText: cloneDeep(this.introButtonText),
      isEdit: false,
    };
  },
  computed: {
    componentButtonText() {
      return this.isEdit ? 'Сохранить' : 'Редактировать';
    },
  },
  methods: {
    saveConfig() {
      this.isEdit = !this.isEdit;
      if (!this.isEdit) {
        const introTitleConfig = {
          title: this.title,
          buttonText: this.buttonText,
        };
        //Делаем копию, на всякий случай, если родитель решить мутировать localMenu
        this.$emit('saveIntroTitle', cloneDeep(introTitleConfig));
      }
    },
  },
};
</script>

<style scoped></style>
