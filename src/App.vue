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
<style lang="scss">
@import '@/assets/sass/common/style.scss';
</style>
