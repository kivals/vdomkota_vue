<template>
  <div>
    <app-header></app-header>
    <router-view />
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '@/components/layouts/header/AppHeader';
import AppFooter from '@/components/layout/AppFooter';

export default {
  name: 'BaseLayout',
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style scoped></style>
