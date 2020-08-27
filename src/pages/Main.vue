<template>
  <div>
    <app-intro></app-intro>
    <app-cats></app-cats>
    <app-donation></app-donation>
    <app-help></app-help>
    <app-about></app-about>
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
};
</script>

<style scoped></style>
