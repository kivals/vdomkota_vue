<template>
  <section class="intro">
    <div class="intro__video">
      <video autoplay muted loop>
        <source :src="videoPath" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>
    <div class="overlay"></div>
    <div class="intro__text">
      <h1 class="intro__title">Приют для бездомных кошек</h1>
      <app-button class="intro__btn" @click="$router.push({ name: 'Find' })"
        >Взять котика</app-button
      >
    </div>
  </section>
</template>

<script>
import AppButton from '@/components/ui/AppButton';

export default {
  name: 'AppIntro',
  components: {
    AppButton,
  },
  data() {
    return {
      videoPath: require('@/assets/video/videoplayback.mp4'),
    };
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
  @media (max-width: $md1+px) {
    height: 400px;
  }
  @media (max-width: $md2+px) {
    height: 250px;
    margin-bottom: 50px;
  }
  &__video {
    width: 100%;
    height: 100%;
    overflow: hidden;
    video {
      min-width: 100%;
      min-height: 100%;
    }
    @media (max-width: $md4+px) {
      display: none;
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
.overlay {
  z-index: 1;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: #2d3e50;
  position: absolute;
  opacity: 0.7;
}
</style>
