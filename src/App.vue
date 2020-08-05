<template>
  <div id="app">
    <app-header></app-header>
    <app-intro></app-intro>
    <app-cats></app-cats>
    <router-view />
  </div>
</template>

<script>
import AppHeader from '@/components/layout/header/AppHeader';
import AppIntro from '@/components/AppIntro';
import AppCats from '@/components/AppCats';
export default {
  name: 'App',
  components: {
    AppHeader,
    AppIntro,
    AppCats,
  },
};
</script>
<style lang="scss">
@import '@/assets/sass/common/style.scss';
</style>
