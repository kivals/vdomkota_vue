<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import BaseLayout from '@/components/layout/BaseLayout';
import AdminLayout from '@/components/layout/AdminLayout';

export default {
  name: 'App',
  components: {
    BaseLayout,
    AdminLayout,
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
