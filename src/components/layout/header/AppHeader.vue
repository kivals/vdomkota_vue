<template>
  <section class="header">
    <div class="header__body container">
      <app-logo></app-logo>
      <app-nav :menu="menuItems"></app-nav>
    </div>
  </section>
</template>

<script>
import AppLogo from '@/components/layout/header/AppLogo';
import AppNav from '@/components/layout/header/AppNav';
export default {
  name: 'AppHeader',
  components: {
    AppLogo,
    AppNav,
  },
  data() {
    return {
      menuItems: [
        { name: 'Home', title: 'Главна', active: true },
        { name: 'SearchHosts', title: 'Ищем хозяев', active: false },
        { name: 'Articles', title: 'Статьи', active: false },
        { name: 'Details', title: 'Реквизиты', active: false },
        { name: 'About', title: 'О нас', active: false },
      ],
    };
  },
};
</script>

<style scoped></style>
