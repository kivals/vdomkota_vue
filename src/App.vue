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
  async mounted() {
    await this.$store.dispatch('loadCats');
    await this.$store.dispatch('loadMainPageConfig');
    await this.$store.dispatch('loadFindPageConfig');
    this.loading = false;
  },
};
</script>
<style lang="scss">
@import '@/assets/sass/common/style.scss';
@import '~materialize-css/dist/css/materialize.min.css';
</style>
