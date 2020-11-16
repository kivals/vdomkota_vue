<template>
  <div id="app">
    <component :is="layout" v-if="!loading">
      <router-view />
    </component>
  </div>
</template>

<script>
import BaseLayout from '@/components/layouts/base/BaseLayout';
import AdminLayout from '@/components/layouts/admin/AdminLayout';
import AdminEmptyLayout from '@/components/layouts/admin/AdminEmptyLayout';
import BaseEmptyLayout from '@/components/layouts/base/BaseEmptyLayout';

const MOBILE_WIDTH = 768;
export default {
  name: 'App',
  components: {
    BaseLayout,
    AdminLayout,
    AdminEmptyLayout,
    BaseEmptyLayout,
  },
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || 'base') + '-layout';
    },
  },
  // created() {
  //   this.mainPageConfig = this.$store.getters.mainPageConfig;
  //   this.isMobileHandler();
  //   window.addEventListener('resize', this.isMobileHandler);
  // },
  // destroyed() {
  //   window.removeEventListener('resize', this.isMobileHandler);
  // },
  async mounted() {
    this.isMobileHandler();
    window.addEventListener('resize', this.isMobileHandler);
    await this.$store.dispatch('loadCats');
    await this.$store.dispatch('loadMainPageConfig');
    await this.$store.dispatch('loadFindPageConfig');
    this.loading = false;
  },
  destroyed() {
    window.removeEventListener('resize', this.isMobileHandler);
  },
  methods: {
    isMobileHandler() {
      console.log(window.outerWidth);
      window.outerWidth < MOBILE_WIDTH
        ? this.$store.commit('setMobileView', true)
        : this.$store.commit('setMobileView', false);
    },
  },
};
</script>
<style lang="scss">
@import '@/assets/sass/common/style.scss';

//@import '~materialize-css/dist/css/materialize.min.css';
</style>
