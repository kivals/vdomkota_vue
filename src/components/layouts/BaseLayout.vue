<template>
  <div>
    <app-header></app-header>
    <main>
      <router-view />
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '@/components/layouts/header/AppHeader';
import AppFooter from '@/components/layouts/AppFooter';

export default {
  name: 'BaseLayout',
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style scoped></style>
