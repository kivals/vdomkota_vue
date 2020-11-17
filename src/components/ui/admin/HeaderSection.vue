<template>
  <b-card>
    <template #header>
      <h6 class="mb-0">Шапка сайта - блок</h6>
    </template>
    <b-row>
      <!-- ЛОГО -->
      <b-col cols="2">
        <b-card>
          <template #header>
            <h6 class="mb-0">Логотип сайта</h6>
          </template>
          <AppLogo :logo="logo"></AppLogo>
          <template #footer>
            <b-button variant="primary">
              <b-icon icon="cloud-arrow-up" aria-hidden="true"></b-icon> Сменить
              лого
            </b-button>
          </template>
        </b-card>
      </b-col>
      <!-- МЕНЮ -->
      <b-col cols="4">
        <b-card>
          <template #header>
            <h6 class="mb-0">Навигационное меню</h6>
          </template>
          <b-list-group v-if="!isEdit">
            <b-list-group-item
              v-for="menuItem in localMenu"
              :key="menuItem.menukey"
              :disabled="!menuItem.visible"
            >
              {{ menuItem.name }}
            </b-list-group-item>
          </b-list-group>
          <b-list-group v-else>
            <b-list-group-item v-for="menuItem in localMenu" :key="menuItem.menuKey">
              <b-form-input
                v-model="menuItem.name"
                placeholder="Enter your name"
              ></b-form-input>
              <b-form-checkbox
                v-model="menuItem.visible"
                name="check-button"
                switch
              >
                Показывать: <b>{{ menuItem.visible ? 'ДА' : 'НЕТ' }}</b>
              </b-form-checkbox>
            </b-list-group-item>
          </b-list-group>
          <template #footer>
            <b-button variant="primary" @click="saveMenu">
              <b-icon icon="gear-fill" aria-hidden="true"></b-icon>
              {{ buttonText }}
            </b-button>
          </template>
        </b-card>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import AppLogo from '@/components/layouts/base/header/AppLogo';
import cloneDeep from 'lodash/cloneDeep';

export default {
  name: 'HeaderSection',
  components: {
    AppLogo,
  },
  props: {
    menu: {
      type: Array,
      required: true,
    },
    logo: {
      type: String,
    },
  },
  data() {
    return {
      localMenu: cloneDeep(this.menu),
      isEdit: false,
    };
  },
  computed: {
    buttonText() {
      return this.isEdit ? 'Сохранить' : 'Редактировать';
    },
  },
  methods: {
    saveMenu() {
      this.isEdit = !this.isEdit;
      if (!this.isEdit) {
        //Делаем копию, на всякий случай, если родитель решить мутировать localMenu
        this.$emit('saveMenu', cloneDeep(this.localMenu));
      }
    },
  },
};
</script>

<style scoped></style>
