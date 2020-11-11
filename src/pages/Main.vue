<template>
  <div>
    <app-intro
      :title="mainPageConfig.introText"
      :videoUrl="mainPageConfig.introVideo"
      :buttonText="mainPageConfig.introButtonText"
    ></app-intro>
    <app-cats></app-cats>
    <app-donation
      :title="mainPageConfig.bankTitle"
      :bankImg="mainPageConfig.bankCatImg"
      :bankName="bank.bankName"
      :bankInfo="bank.bankInfo"
      :cardNumber="bank.cardNumber"
      :accountType="bank.accountType"
    >
    </app-donation>
    <app-help></app-help>
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
    };
  },
  mounted() {
    this.mainPageConfig = this.$store.getters.mainPageConfig;
    this.bank = this.$store.getters.bank;
    this.shelter = this.$store.getters.shelter;
  },
};
</script>

<style scoped></style>
