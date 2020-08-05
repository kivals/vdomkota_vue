<template>
  <div>
    <app-intro></app-intro>
    <app-cats></app-cats>
  </div>
</template>

<script>
import AppIntro from '@/components/AppIntro';
import AppCats from '@/components/AppCats';

export default {
  name: 'Main',
  components: {
    AppIntro,
    AppCats,
  },
};
</script>

<style scoped></style>
