<template>
  <div id="app">
    <app-header></app-header>
    <router-view />
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '@/components/layout/header/AppHeader';
import AppFooter from '@/components/layout/AppFooter';
export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
<style lang="scss">
@import '@/assets/sass/common/style.scss';
</style>
