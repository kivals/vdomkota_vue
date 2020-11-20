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
        <IntroSection :introVideo="mainPageConfig.introVideo"></IntroSection>
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
      this.$store.commit('setMenuConfig', $event);
      this.$store.dispatch('updateMainPageConfig');
    },
    saveLogo($event) {
      this.$store.dispatch('updateLogo', $event);
    },
  },
};
</script>

<style lang="scss" scoped></style>
