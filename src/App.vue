<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import BaseLayout from '@/components/layout/BaseLayout';

export default {
  name: 'App',
  components: {
    BaseLayout,
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
</style>
