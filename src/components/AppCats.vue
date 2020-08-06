<template>
  <section class="cats container">
    <VueSlickCarousel class="slider-cats" v-bind="slickOptions">
      <div
        v-for="(item, index) in 10"
        :key="index"
        class="slider-cats__item cat-card"
      >
        <div class="cat-card__wrapper">
          <div class="cat-card__photo">
            <app-div-cover class="cat-card__img" image="2.jpg"></app-div-cover>
          </div>
          <p class="cat-card__name">Кличка кота</p>
          <app-button class="cat-card__btn">Подробнее</app-button>
        </div>
      </div>
    </VueSlickCarousel>
  </section>
</template>

<script>
import '@/assets/sass/slider-custom.scss';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import VueSlickCarousel from 'vue-slick-carousel';
import AppDivCover from '@/components/ui/AppDivCover';
import AppButton from '@/components/ui/AppButton';

export default {
  name: 'AppCats',
  components: {
    VueSlickCarousel,
    AppDivCover,
    AppButton,
  },
  data() {
    return {
      slickOptions: {
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            //Todo надо как-то объеденить с переменными CSS
            breakpoint: 780,
            settings: {
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
            },
          },
        ],
      },
      imgPath: require('@/assets/img/cats_slider/1.jpg'),
    };
  },
};
</script>

<style lang="scss" scoped>
.cats {
  margin-bottom: 80px;
  @media (max-width: $md2+px) {
    margin-bottom: 50px;
  }
}
.cat-card {
  cursor: pointer;
  margin-bottom: 20px;
  &:hover {
    box-shadow: 0 14px 20px -15px rgba(0, 0, 0, 0.75);
    .cat-card__btn {
      background-color: $main-color;
    }
  }
  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__photo {
    height: 250px;
    width: 350px;
    margin-bottom: 30px;
    @media (max-width: $md1+px) {
      width: 250px;
    }
    @media (max-width: $md2+px) {
      height: 200px;
      width: 200px;
    }
    @media (max-width: $md3+px) {
      min-height: 100%;
      min-width: 100%;
    }
  }
  &__name {
    font-size: 20px;
    letter-spacing: 0.06em;
    color: #545454;
    margin-bottom: 24px;
  }
  &__btn {
    margin-bottom: 34px;
  }
}
</style>
