<template>
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
        ></b-form-input>
        <b-form-checkbox v-model="menuItem.visible" name="check-button" switch>
          Показывать: <b>{{ menuItem.visible ? 'ДА' : 'НЕТ' }}</b>
        </b-form-checkbox>
      </b-list-group-item>
    </b-list-group>
    <template #footer>
      <b-button :variant="isEdit ? 'success' : 'primary'" @click="saveMenu">
        <b-icon icon="gear-fill" aria-hidden="true"></b-icon>
        {{ buttonText }}
      </b-button>
    </template>
  </b-card>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep';

export default {
  name: 'MenuSection',
  props: {
    menu: {
      type: Array,
      required: true,
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
