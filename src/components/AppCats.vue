<template>
  <section class="cats">
    <div class="container">
      <VueSlickCarousel
        v-if="cats.length"
        class="slider-cats"
        v-bind="slickOptions"
      >
        <div
          @click="$router.push({ name: 'Find' })"
          v-for="cat in cats"
          :key="cat.id"
          class="slider-cats__item cat-card"
        >
          <div class="cat-card__wrapper">
            <div class="cat-card__photo">
              <div class="img-wrapper">
                <img :src="cat.photo" alt="" />
              </div>
            </div>
            <p class="cat-card__name">{{ cat.name }}</p>
            <app-button class="cat-card__btn">Подробнее</app-button>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </section>
</template>

<script>
import '@/assets/sass/slider-custom.scss';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import VueSlickCarousel from 'vue-slick-carousel';
import AppButton from '@/components/ui/AppButton';
export default {
  name: 'AppCats',
  components: {
    VueSlickCarousel,
    AppButton,
  },
  props: {
    cats: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      slickOptions: {
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            //Todo надо как-то объеденить с переменными CSS
            breakpoint: 1200,
            settings: {
              arrows: false,
              dots: true,
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            //Todo надо как-то объеденить с переменными CSS
            breakpoint: 479,
            settings: {
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
            },
          },
        ],
      },
    };
  },
  computed: {
    isMobileView() {
      return this.$store.getters.isMobileView;
    },
  },
};
</script>

<style lang="scss" scoped>
.cats {
  background-color: $main-background-color;
  padding: 80px 0;
  @media (max-width: $md2+px) {
    padding: 40px 0;
  }
}
.cat-card {
  cursor: pointer;
  &:hover {
    box-shadow: 0px 2px 30px 5px rgba(13, 13, 13, 0.03);
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
    width: 350px;
    margin-bottom: 30px;
    .img-wrapper {
      width: 100%;
      overflow: hidden;
      img {
        height: auto;
        width: 100%;
      }
    }
    @media (max-width: $md1+px) {
      width: 250px;
      margin-bottom: 5px;
    }
    @media (max-width: $md4+px) {
      min-height: 100%;
      min-width: 100%;
    }
  }
  &__name {
    font-size: 20px;
    letter-spacing: 0.06em;
    color: #545454;
    margin-bottom: 24px;
    @media (max-width: $md1+px) {
      margin-bottom: 10px;
    }
  }
  &__btn {
    margin-bottom: 34px;
    @media (max-width: $md1+px) {
      margin-bottom: 10px;
    }
  }
}
</style>
