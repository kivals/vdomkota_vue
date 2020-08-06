<template>
  <div>
    <app-intro></app-intro>
    <app-cats></app-cats>
    <app-about></app-about>
  </div>
</template>

<script>
import AppIntro from '@/components/AppIntro';
import AppCats from '@/components/AppCats';
import AppAbout from '@/components/AppAbout';

export default {
  name: 'Main',
  components: {
    AppIntro,
    AppCats,
    AppAbout,
  },
};
</script>

<style scoped></style>
