<template>
  <b-container fluid="">
    <b-row>
      <b-col cols="12" xl="8">
        <HeaderSection
          :menu="mainPageConfig.menu"
          :logo="mainPageConfig.logo"
          @saveMenu="saveMenu"
          @saveLogo="saveLogo"
        ></HeaderSection>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <IntroSection
          @saveVideo="saveVideo"
          @saveIntroTitle="saveIntroTitle"
          :introVideo="mainPageConfig.introVideo"
          :introText="mainPageConfig.introText"
          :introButtonText="mainPageConfig.introButtonText"
        ></IntroSection>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import HeaderSection from '@/components/admin/Header/HeaderSection';
import IntroSection from '@/components/admin/Intro/IntroSection';

export default {
  name: 'AdminMainInfo',
  components: {
    HeaderSection,
    IntroSection,
  },
  data() {
    return {
      mainPageConfig: this.$store.getters.mainPageConfig,
    };
  },
  methods: {
    saveMenu($event) {
      //this.mainPageConfig.menu = $event;
      //TODO await? проверить везде
      this.$store.commit('setMenuConfig', $event);
      this.$store.dispatch('updateMainPageConfig');
    },
    saveLogo($event) {
      this.$store.dispatch('updateLogo', $event);
    },
    saveVideo($event) {
      this.$store.dispatch('updateVideo', $event);
    },
    saveIntroTitle($event) {
      const { title, buttonText } = $event;
      this.$store.commit('setIntroText', title);
      this.$store.commit('setIntroButtonText', buttonText);
      this.$store.dispatch('updateMainPageConfig');
    },
  },
};
</script>

<style lang="scss" scoped></style>
