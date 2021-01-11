<template>
  <div>
    <app-intro
      :title="mainPageConfig.introText"
      :videoUrl="mainPageConfig.introVideo"
      :buttonText="mainPageConfig.introButtonText"
    ></app-intro>
    <app-cats :cats="sliderCats"></app-cats>
    <app-donation
      :title="mainPageConfig.bankTitle"
      :bankImg="mainPageConfig.bankCatImg"
      :bankName="bank.bankName"
      :bankInfo="bank.bankInfo"
      :cardNumber="bank.cardNumber"
      :accountType="bank.accountType"
    >
    </app-donation>
    <app-help :title="mainPageConfig.helpTitle"></app-help>
    <app-about
      :shelterCatImg="mainPageConfig.shelterCatImg"
      :shelterTitle="mainPageConfig.shelterTitle"
      :shelterInfo="shelter.shelterInfo"
    ></app-about>
  </div>
</template>

<script>
import AppIntro from '@/components/AppIntro';
import AppCats from '@/components/AppCats';
import AppAbout from '@/components/AppAbout';
import AppDonation from '@/components/AppDonation';
import AppHelp from '@/components/AppHelp';

export default {
  name: 'Main',
  components: {
    AppIntro,
    AppCats,
    AppAbout,
    AppDonation,
    AppHelp,
  },
  data() {
    return {
      mainPageConfig: {
        introText: '',
        introVideo: '',
        introButtonText: '',
        bankCatImg: '',
        shelterCatImg: '',
        bankTitle: '',
        helpTitle: '',
        shelterTitle: '',
        logo: '',
        introImg: '',
      },
      bank: {
        bankInfo: '',
        bankName: '',
        cardNumber: '',
        accountType: '',
      },
      shelter: {
        shelterAddress: '',
        shelterEmail: '',
        shelterInfo: '',
        shelterPhone: '',
      },
      cats: [],
    };
  },
  computed: {
    sliderCats() {
      return this.cats.map(c => {
        return {
          id: c.id,
          name: c.name,
          photo: c.previewPhoto,
        };
      });
    },
  },
  mounted() {
    this.mainPageConfig = this.$store.getters.mainPageConfig;
    this.bank = this.$store.getters.bank;
    this.shelter = this.$store.getters.shelter;
    this.cats = this.$store.getters.cats;
  },
};
</script>

<style lang="scss">
ol.carousel-indicators li {
  background-color: $main-color;
  opacity: 0.7;
  &.active {
    background-color: #ff0000;
    opacity: 1;
  }
}

.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23f38bae' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E") !important;
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23f38bae' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
}
</style>
