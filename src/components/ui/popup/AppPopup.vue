<template>
  <div class="popup_wrapper" ref="popup_wrapper">
    <div class="app-popup">
      <i class="material-icons app-popup__icon" @click="closePopup">close</i>
      <div class="app-popup__img">
        <b-carousel
          id="carousel-1"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          style="text-shadow: 1px 1px 2px #333;"
        >
          <!-- Slides with image only -->
          <b-carousel-slide
            v-for="(photo, ind) in cat.photos"
            :key="ind"
            :img-src="photo"
          ></b-carousel-slide>
        </b-carousel>
      </div>
      <div class="app-popup__text cat-description">
        <div class="cat-description__title">
          {{ cat.name }}
        </div>
        <div class="cat-description__text">
          {{ cat.info }}
        </div>
        <ul class="cat-description__list">
          <li><span>Возраст:</span>{{ cat.age }}</li>
          <li><span>Болезни:</span>{{ cat.diseases }}</li>
          <li><span>Паразиты:</span>{{ cat.parasites }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppPopup',
  props: {
    catId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      cat: {},
    };
  },
  methods: {
    closePopup() {
      this.$emit('closePopup');
    },
    findCatById(id) {
      return this.$store.getters.cats.find(c => c.id === id);
    },
  },
  mounted() {
    let vm = this;
    document.addEventListener('click', e => {
      if (e.target === vm.$refs['popup_wrapper']) {
        vm.closePopup();
      }
    });

    this.cat = this.findCatById(this.catId);
  },
};
</script>

<style lang="scss">
.popup_wrapper {
  background: rgba(64, 64, 64, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  overflow: auto;
}
.app-popup {
  padding: 16px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  background: #fff;
  box-shadow: 0 0 17px 0 #e7e7e7;
  z-index: 9999;
  &__icon {
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    font-size: 30px;
    border: 2px solid $main-color;
    border-radius: 50%;
    @media (max-width: $md4+px) {
      top: auto;
      right: 10px;
      bottom: 10px;
    }
  }
  &__img {
    flex: 1 0 40%;
    @media (max-width: $md4+px) {
      width: 100%;
      height: 150px;
    }
  }
  @media (max-width: $md3+px) {
    width: 100vw;
  }
  @media (max-width: $md4+px) {
    display: block;
  }
}
.cat-description {
  padding: 50px 40px;
  &__title {
    font-size: 35px;
    line-height: 45px;
    letter-spacing: 0.06em;
    color: #545454;
    margin-bottom: 30px;
    @media (max-width: $md2+px) {
      font-size: 28px;
      line-height: 33px;
      letter-spacing: 0.05em;
      margin-bottom: 20px;
    }
  }
  &__text {
    font-size: 15px;
    line-height: 24px;
    color: #4c4c4c;
    margin-bottom: 30px;
    @media (max-width: $md2+px) {
      font-size: 13px;
      line-height: 18px;
      margin-bottom: 18px;
    }
  }
  &__list {
    font-size: 15px;
    color: #545454;
    letter-spacing: 0.06em;
    @media (max-width: $md2+px) {
      font-size: 14px;
      letter-spacing: 0.05em;
    }
    span {
      font-size: 17px;
      line-height: 34px;
      @media (max-width: $md2+px) {
        font-size: 15px;
        line-height: 22px;
      }
    }
  }
  @media (max-width: $md3+px) {
    padding: 20px 10px;
  }
}
</style>
