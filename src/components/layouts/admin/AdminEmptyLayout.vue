<template>
  <div class="empty-layout grey darken-1">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'AdminEmptyLayout',
  computed: {
    error() {
      return this.$store.getters.error;
    },
  },
  watch: {
    error(error) {
      this.$error(error.message || 'Что-то пошло не так');
    },
  },
};
</script>

<style lang="scss" scoped>
.empty-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
  height: 100vh;
}
</style>
