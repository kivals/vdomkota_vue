<template>
  <section class="header">
    <div class="header__body container">
      <app-logo :logo="mainPageConfig.logo"></app-logo>
      <app-mobile-nav v-if="isMobileView" :menu="mergedMenu"></app-mobile-nav>
      <app-desktop-nav v-else :menu="mergedMenu"></app-desktop-nav>
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
        menu: [],
      },
      appMenu: [
        { name: 'Main', title: 'Главная', to: '/', active: true },
        {
          name: 'Find',
          title: 'Ищем хозяев',
          to: '/find',
          active: false,
        },
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
    /*
    Смержить 2 меню:
     1) из тукещей Data
     2) из Firestore
     //TODO вынести в утилиты
     */
    mergedMenu() {
      const fsMenu = this.mainPageConfig.menu;
      let mergedMenu = [];
      fsMenu.forEach(fsMenuItem => {
        let appMenuItem = this.appMenu.filter(m => {
          return m.name === fsMenuItem.menuKey;
        });
        if (appMenuItem.length === 1) {
          const item = {
            name: appMenuItem[0].name,
            title: fsMenuItem.name,
            to: appMenuItem[0].to,
            active: appMenuItem[0].active,
            visible: fsMenuItem.visible,
          };
          mergedMenu.push(item);
        }
      });
      return mergedMenu.filter(m => m.visible);
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
