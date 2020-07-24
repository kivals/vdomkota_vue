<template>
  <div id="app">
    <app-header></app-header>
    <router-view />
  </div>
</template>

<script>
import AppHeader from '@/components/layout/header/AppHeader';
export default {
  name: 'App',
  components: {
    AppHeader,
  },
};
</script>
<style lang="scss" rel="stylesheet/scss">
  //todo перенести импорты в style.scss
@import './assets/sass/common/_variables.scss';
@import './assets/sass/common/nullstyle.scss';
@import './assets/sass/common/fonts.scss';
@import './assets/sass/common/style.scss';
</style>
