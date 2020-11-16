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
import AppHeader from '@/components/layouts/base/header/AppHeader';
import AppFooter from '@/components/layouts/base/footer/AppFooter';

export default {
  name: 'BaseLayout',
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style scoped></style>
