<template>
  <div id="app">
    <component :is="layout">
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
  computed: {
    layout() {
      return (this.$route.meta.layout || 'base') + '-layout';
    },
  },
};
</script>
<style lang="scss">
@import '@/assets/sass/common/style.scss';
@import '~materialize-css/dist/css/materialize.min.css';
</style>
