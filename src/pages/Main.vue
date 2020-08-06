<template>
  <div>
    <app-intro></app-intro>
    <app-cats></app-cats>
    <app-about></app-about>
    <app-donation></app-donation>
  </div>
</template>

<script>
import AppIntro from '@/components/AppIntro';
import AppCats from '@/components/AppCats';
import AppAbout from '@/components/AppAbout';
import AppDonation from '@/components/AppDonation';

export default {
  name: 'Main',
  components: {
    AppIntro,
    AppCats,
    AppAbout,
    AppDonation,
  },
};
</script>

<style scoped></style>
