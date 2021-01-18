<template>
  <div class="find-page">
<!--    <app-popup v-if="catPopupId" :catId="catPopupId" @closePopup="closePopup">-->
<!--    </app-popup>-->
    <div class="container">
      <p class="find-page__title">{{ findPageConfig.title }}</p>
      <div class="find-page__cats">
        <div
          v-for="cat in comCats"
          :key="cat.id"
          class="cat-card"
          @click="$router.push({ name: 'CatInfo', params: { catId: cat.id } })"
        >
          <app-div-cover
            class="cat-card__img"
            :imagePath="cat.photo"
          ></app-div-cover>
          <p class="cat-card__title">
            {{ cat.name }}
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
// import AppPopup from '@/components/ui/popup/AppPopup';

export default {
  name: 'Find',
  components: {
    AppButton,
    AppDivCover,
    // AppPopup,
  },
  data() {
    return {
      findPageConfig: {
        title: '',
      },
      cats: [],
      catPopupId: '',
    };
  },
  computed: {
    comCats() {
      return this.cats.map(c => {
        return {
          id: c.id,
          name: c.name,
          photo: c.previewPhoto,
        };
      });
    },
  },
  async mounted() {
    this.findPageConfig = this.$store.getters.findPageConfig;
    this.cats = this.$store.getters.cats;
  },
  methods: {
    // showCatPopup(id) {
    //   this.catPopupId = id;
    // },
    // closePopup() {
    //   this.catPopupId = '';
    // },
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
    text-align: center;
    @media (max-width: $md2+px) {
      margin: 0 auto 42px auto;
      font-size: 25px;
      line-height: 35px;
      letter-spacing: 0.05em;
    }
    @media (max-width: $md3+px) {
      margin: 0 auto 22px auto;
      font-size: 20px;
      line-height: 25px;
      letter-spacing: 0.04em;
    }
  }
  &__cats {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .cat-card {
      width: 250px;
      margin-bottom: 34px;
      @media (max-width: $md2+px) {
        width: 210px;
        margin-bottom: 24px;
      }
      @media (max-width: $md3+px) {
        width: 180px;
        margin-bottom: 20px;
      }
      @media (max-width: $md4+px) {
        width: 100%;
      }
    }
  }
  @media (max-width: $md2+px) {
    padding-top: 48px;
  }
  @media (max-width: $md3+px) {
    padding-top: 28px;
  }
}
.cat-card {
  cursor: pointer;
  border-radius: 9px;
  background-color: #fff;
  &:hover {
    box-shadow: 0 2px 30px 5px rgba(13, 13, 13, 0.03);
    .cat-card__btn {
      background-color: $main-color;
    }
  }
  &__img {
    width: 100%;
    height: 250px;
    border-top-left-radius: 9px;
    border-top-right-radius: 9px;
    margin-bottom: 30px;
    @media (max-width: $md2+px) {
      height: 230px;
    }
    @media (max-width: $md3+px) {
      height: 200px;
      margin-bottom: 20px;
    }
  }
  &__title {
    text-align: center;
    font-size: 20px;
    line-height: 45px;
    letter-spacing: 0.06em;
    color: #545454;
    margin-bottom: 25px;
    @media (max-width: $md3+px) {
      font-size: 15px;
      line-height: 25px;
      letter-spacing: 0.04em;
      margin-bottom: 15px;
    }
  }
  &__btn {
    margin: 0 10px 34px 10px;
    @media (max-width: $md3+px) {
      margin: 0 10px 24px 10px;
    }
  }
}
</style>
