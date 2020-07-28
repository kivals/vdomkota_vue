<template>
  <div>
    <app-burger v-model="isNavOpen"></app-burger>
<!--    <app-burger :active="isNavOpen" @click="isNavOpen = $event"></app-burger>-->
    <app-sidebar :menu="menu" v-model="isNavOpen"></app-sidebar>
  </div>
</template>

<script>
import AppBurger from '@/components/common/AppBurger';
import AppSidebar from '@/components/common/AppSidebar';
export default {
  name: 'AppMobileNav',
  components: {
    AppBurger,
    AppSidebar,
  },
  props: {
    menu: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isNavOpen: false,
    };
  },
};
</script>

<style scoped></style>
