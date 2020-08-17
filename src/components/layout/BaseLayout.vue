<template>
  <div>
    <app-header></app-header>
    <router-view />
  </div>
</template>

<script>
import AppHeader from '@/components/layout/header/AppHeader';

export default {
  name: 'BaseLayout',
  components: {
    AppHeader,
  },
};
</script>

<style scoped></style>
