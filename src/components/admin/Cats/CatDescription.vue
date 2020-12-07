<template>
  <b-card>
    <template #header>
      <h6 class="mb-0">Карточка: {{ localCat.name }}</h6>
    </template>
    <b-form>
      <b-form-group
        id="input-group-1"
        label="Кличка животного:"
        label-for="catName"
        description="*Обязательное поле"
      >
        <b-form-input
          id="catName"
          v-model="localCat.name"
          type="text"
          required
          placeholder="Введите кличку животного"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Возраст животного (месяцы):"
        label-for="catAge"
        description="*Обязательное поле"
      >
        <b-form-input
          id="catAge"
          v-model="localCat.age"
          type="number"
          required
          placeholder="Введите возраст животного"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Описание животного:"
        label-for="catInfo"
        description="*Обязательное поле"
      >
        <b-form-textarea
          id="catInfo"
          v-model="localCat.info"
          placeholder="Опишите животное..."
          rows="7"
          max-rows="15"
        ></b-form-textarea>
      </b-form-group>

      <b-form-group
        id="input-group-4"
        label="Болезни животного:"
        label-for="catDiseases"
      >
        <b-form-input
          id="catDiseases"
          v-model="localCat.diseases"
          type="text"
          placeholder="Напишите болезни животного"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-5"
        label="Прививки животного:"
        label-for="catInoculation"
      >
        <b-form-input
          id="catInoculation"
          v-model="localCat.inoculations"
          type="text"
          placeholder="Напишите прививки животного"
        ></b-form-input>
      </b-form-group>

      <hr class="mt-5" />

      <b-form-group
        id="input-group-6"
        label="Дополнительная информация:"
        label-for="catExtraInfo"
      >
        <b-form-textarea
          id="catExtraInfo"
          v-model="localCat.extraInfo"
          placeholder="Дополните информацию о животном ..."
          rows="3"
          max-rows="10"
        ></b-form-textarea>
      </b-form-group>

      <b-form-group id="input-group-7">
        <b-form-checkbox v-model="localCat.hasHome" name="check-button" switch>
          Забрали домой: <b>{{ localCat.hasHome ? 'ДА' : 'НЕТ' }}</b>
        </b-form-checkbox>
      </b-form-group>
    </b-form>
  </b-card>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep';
export default {
  name: 'CatDescription',
  props: {
    cat: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      localCat: cloneDeep(this.cat),
    };
  },
};
</script>

<style scoped></style>
