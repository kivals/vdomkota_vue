<template>
  <section class="header">
    <div class="header__body container">
      <app-logo :logo="mainPageConfig.logo"></app-logo>
      <app-mobile-nav v-if="isMobileView" :menu="menu"></app-mobile-nav>
      <app-desktop-nav v-else :menu="menu"></app-desktop-nav>
    </div>
  </section>
</template>

<script>
import AppLogo from '@/components/layouts/base/header/AppLogo';
import AppDesktopNav from '@/components/layouts/base/header/AppDesktopNav';
import AppMobileNav from '@/components/layouts/base/header/AppMobileNav';

export default {
  name: 'AppHeader',
  components: {
    AppLogo,
    AppDesktopNav,
    AppMobileNav,
  },
  data() {
    return {
      mainPageConfig: {
        logo: '',
      },
      menu: [
        { name: 'Home', title: 'Главная', to: '/', active: true },
        { name: 'SearchHosts', title: 'Ищем хозяев', to: '/find', active: false },
        { name: 'Articles', title: 'Статьи', to: '/', active: false },
        { name: 'Details', title: 'Реквизиты', to: '/', active: false },
        { name: 'About', title: 'О нас', to: '/', active: false },
      ],
    };
  },
  created() {
    this.mainPageConfig = this.$store.getters.mainPageConfig;
    //this.isMobileView = this.$store.getters.isMobileView;
  },
  computed: {
    isMobileView() {
      return this.$store.getters.isMobileView;
    },
  }
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
