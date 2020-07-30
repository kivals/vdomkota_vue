<template>
  <section class="intro" :class="{container: isFullScreen}">
    <div class="video-wrap">
      <video autoplay muted loop id="myVideo">
        <source src="@/assets/video/videoplayback.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>
    <div class="overlay"></div>
    <div class="landing-text">
      <h1>Приют для бездомных кошек</h1>
      <app-button class="video-btn" @click="toggleScreen">Взять котика</app-button>
    </div>
    <!--    <app-div-cover class="intro__picture" image="intro_cat.jpg">-->
    <!--      <div class="intro_info info">-->
    <!--        <h1 class="info__title">Приют для бездомных кошек</h1>-->
    <!--        <app-button class="info__btn">Взять котика</app-button>-->
    <!--      </div>-->
    <!--    </app-div-cover>-->
  </section>
</template>

<script>
 import AppButton from '@/components/ui/AppButton';
// import AppDivCover from '@/components/AppDivCover';

export default {
  name: 'AppIntro',
  components: {
    AppButton,
    //AppDivCover,
  },
  data() {
    return {
      isFullScreen: true,
    };
  },
  methods: {
    toggleScreen() {
      this.isFullScreen = !this.isFullScreen;
    },
  },
};
</script>

<style lang="scss" scoped>
.intro {
  text-align: center;
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  position: relative;
}
.video-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.video-wrap video {
  min-width: 100%;
  min-height: 100%;
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
.landing-text {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
}
h1 {
  margin-bottom: 46px;
  font-size: 44px;
  line-height: 57px;
  letter-spacing: 0.06em;
  color: #fff;
}

.video-btn {
  background-color: $main-color;
  color: #fff;
}
</style>
