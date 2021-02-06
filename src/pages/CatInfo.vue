<template>
  <div v-if="cat" class="cat-info container">
    <div class="cat-info__slider">
      <b-carousel id="carousel-2" :interval="5000" controls indicators>
        <b-carousel-slide v-for="(photo, ind) in cat.photos" :key="ind">
          <template #img>
            <img
              class="d-block img-fluid w-100"
              :src="photo"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>
    <div class="cat-info__text cat-description">
      <div class="cat-description__title">Кличка: {{ cat.name }}</div>
      <ul class="cat-description__list">
        <li><span>Возраст: </span>{{ cat.age }} месяцев</li>
        <li>
          <span>Кастрирован/Стерилизована: </span
          >{{ cat.neutered ? 'Да' : 'Нет' }}
        </li>
        <li><span>Прививки: </span>{{ cat.vaccinations }}</li>
        <li><span>Скрытые инфекции: </span>{{ cat.hiddenInfections }}</li>
      </ul>
      <div class="cat-description__text">
        <span v-html="cat.info"></span>
      </div>
      <app-button @click="goToGoogleForms()"
        >Оставить заявку на котика</app-button
      >
    </div>
  </div>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep';
import AppButton from '@/components/ui/AppButton';
export default {
  name: 'CatInfo',
  components: {
    AppButton,
  },
  data() {
    return {
      cat: {},
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => vm.setCat(to.params.catId));
  },
  methods: {
    setCat(id) {
      const storeCat = this.$store.getters.cats.find(cat => cat.id === id);
      if (storeCat) {
        this.cat = cloneDeep(storeCat);
      }
    },
    goToGoogleForms() {
      window.open(
        'https://docs.google.com/forms/d/1PEqWVWYwrkqdPwlh09GGG520wq1OVmQsGlZrRPsMWWQ/edit?usp=sharing',
        '_blank',
      );
    },
  },
};
</script>

<style scoped>
.cat-description {
  padding: 50px 0;
}
.cat-description__title {
  font-size: 35px;
  line-height: 45px;
  letter-spacing: 0.06em;
  color: #545454;
  margin-bottom: 30px;
}
.cat-description__text {
  font-size: 15px;
  line-height: 24px;
  color: #4c4c4c;
  margin-bottom: 30px;
}

.cat-description__list {
  font-size: 15px;
  color: #545454;
  letter-spacing: 0.06em;
}

.cat-description__list span {
  font-size: 17px;
  line-height: 34px;
}

@media (max-width: 575.98px) {
  .cat-description {
    padding: 15px 0;
  }
  .cat-description__title {
    font-size: 25px;
    line-height: 28px;
    letter-spacing: 0.05em;
    margin-bottom: 20px;
  }
  .cat-description__text {
    font-size: 12px;
    line-height: 18px;
    margin-bottom: 20px;
  }
  .cat-description__list {
    font-size: 12px;
    letter-spacing: 0.04em;
  }
  .cat-description__list span {
    font-size: 14px;
    line-height: 24px;
  }
}
</style>
