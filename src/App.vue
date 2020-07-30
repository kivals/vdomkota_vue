<template>
  <div id="app">
    <app-header></app-header>
    <app-intro></app-intro>
    <router-view />
  </div>
</template>

<script>
import AppHeader from '@/components/layout/header/AppHeader';
import AppIntro from '@/components/AppIntro';
export default {
  name: 'App',
  components: {
    AppHeader,
    AppIntro
  },
};
</script>
<style lang="scss">
@import '@/assets/sass/common/style.scss';
</style>
