<template>
  <section class="header">
    <div class="header__body container">
      <app-logo></app-logo>
      <app-mobile-nav v-if="isMobile" :menu="menu"></app-mobile-nav>
      <app-desktop-nav v-else :menu="menu"></app-desktop-nav>
    </div>
  </section>
</template>

<script>
import AppLogo from '@/components/layout/header/AppLogo';
import AppDesktopNav from '@/components/layout/header/AppDesktopNav';
import AppMobileNav from '@/components/layout/header/AppMobileNav';
const MOBILE_WIDTH = 680;
export default {
  name: 'AppHeader',
  components: {
    AppLogo,
    AppDesktopNav,
    AppMobileNav,
  },
  data() {
    return {
      menu: [
        { name: 'Home', title: 'Главная', to: '/', active: true },
        { name: 'SearchHosts', title: 'Ищем хозяев', to: '/find', active: false },
        { name: 'Articles', title: 'Статьи', to: '/', active: false },
        { name: 'Details', title: 'Реквизиты', to: '/', active: false },
        { name: 'About', title: 'О нас', to: '/', active: false },
      ],
      isMobile: false,
    };
  },
  created() {
    this.isMobileHandler();
    window.addEventListener('resize', this.isMobileHandler);
  },
  destroyed() {
    window.removeEventListener('resize', this.isMobileHandler);
  },
  methods: {
    isMobileHandler() {
      this.isMobile = window.outerWidth < MOBILE_WIDTH || false;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  &__body {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
