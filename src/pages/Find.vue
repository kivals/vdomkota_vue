<template>
  <div class="find-page">
    <app-popup v-if="isCatPopupVisible"></app-popup>
    <div class="container" @click="showCatPopup">
      <p class="find-page__title">Our friends who are looking for a house</p>
      <div class="find-page__cats">
        <div v-for="(image, idx) in images" :key="idx" class="cat-card">
          <app-div-cover
            class="cat-card__img"
            :imagePath="image"
          ></app-div-cover>
          <p class="cat-card__title">
            Кокс
          </p>
          <app-button class="cat-card__btn">Взять котика</app-button>
        </div>
      </div>
      <br />
      <br />
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/ui/AppButton';
import AppDivCover from '@/components/ui/AppDivCover';
import AppPopup from '@/components/ui/popup/AppPopup';

export default {
  name: 'Find',
  components: {
    AppButton,
    AppDivCover,
    AppPopup,
  },
  data() {
    return {
      images: [
        require('@/assets/img/cats_slider/5.jpg'),
        require('@/assets/img/cats_slider/6.jpg'),
        require('@/assets/img/cats_slider/7.jpg'),
        require('@/assets/img/cats_slider/4.jpg'),
        require('@/assets/img/cats_slider/8.jpg'),
      ],
      isCatPopupVisible: false,
    };
  },
  methods: {
    showCatPopup() {
      this.isCatPopupVisible = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.find-page {
  background-color: #f6f6f6;
  padding-top: 68px;
  &__title {
    display: block;
    margin: 0 auto 62px auto;
    font-size: 35px;
    line-height: 45px;
    letter-spacing: 0.06em;
    color: #545454;
    max-width: 400px;
  }
  &__cats {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .cat-card {
      flex: 0 0 23%;
      margin-bottom: 34px;
    }
  }
}
.cat-card {
  cursor: pointer;
  border-radius: 9px;
  background-color: #fff;
  &__img {
    border-top-left-radius: 9px;
    border-top-right-radius: 9px;
    width: 270px;
    height: 270px;
    margin-bottom: 30px;
    img {
      max-width: 100%;
    }
  }
  &__title {
    text-align: center;
    font-size: 20px;
    line-height: 45px;
    letter-spacing: 0.06em;
    color: #545454;
    margin-bottom: 25px;
  }
  &__btn {
    margin: 0 20px 34px 20px;
  }

  &:hover {
    box-shadow: 0px 2px 30px 5px rgba(13, 13, 13, 0.03);
    .cat-card__btn {
      background-color: $main-color;
    }
  }
}
</style>
