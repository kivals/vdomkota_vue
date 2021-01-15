<template>
  <section class="intro">
    <div v-if="isMobileView" class="intro__img">
      <img src="https://i12.fotocdn.net/s125/0ccc87e3d624a6ea/public_pin_m/2842757689.jpg" alt="" />
    </div>
    <div v-else class="intro__video">
      <video autoplay muted loop>
        <source :src="videoUrl" type="video/mp4" />
        <source src="https://firebasestorage.googleapis.com/v0/b/vdomkota-6332e.appspot.com/o/main-page-config%2F480.webm?alt=media&token=2529a684-15bd-4773-9cb6-d01cb8ddfba0" type="video/webm" />
        Your browser does not support HTML5 video.
      </video>
    </div>
    <div class="video-overlay"></div>
    <div class="intro__text">
      <h1 class="intro__title">{{ title }}</h1>
      <app-button class="intro__btn" @click="$router.push({ name: 'Find' })">
        {{ buttonText }}
      </app-button>
    </div>
  </section>
</template>

<script>
import AppButton from '@/components/ui/AppButton';

export default {
  name: 'AppIntro',
  props: {
    title: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
    },
    buttonText: {
      type: String,
      required: true,
    },
  },
  components: {
    AppButton,
  },
  computed: {
    isMobileView() {
      return this.$store.getters.isMobileView;
    },
  },
};
</script>

<style lang="scss" scoped>
.intro {
  text-align: center;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  position: relative;
  @media (max-width: $md2+px) {
    height: 350px;
  }
  @media (max-width: $md4+px) {
    height: 250px;
  }
  &__video {
    width: 100%;
    height: 100%;
    overflow: hidden;
    video {
      pointer-events: none;
      min-width: 100%;
      min-height: 100%;
    }
    @media (max-width: $md4+px) {
      display: none;
    }
  }
  &__img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
      height: auto;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
  &__text {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 50px 0;
    z-index: 2;
  }
  &__title {
    font-size: 44px;
    line-height: 57px;
    letter-spacing: 0.06em;
    color: #fff;
    @media (max-width: $md3+px) {
      font-size: 30px;
      line-height: 40px;
      letter-spacing: 0.03em;
    }
  }
  &__btn {
    background-color: $main-color;
    color: #fff;
  }
}
</style>
