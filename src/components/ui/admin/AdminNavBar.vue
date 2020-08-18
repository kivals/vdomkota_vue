<template>
  <nav>
    <div class="nav-wrapper">
      <a href="#" @click.prevent="$emit('click')" class="brand-logo">
        <i class="material-icons black-text">dehaze</i>
        ВДОМКОТА
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AdminNavBar',
};
</script>

<style lang="scss" scoped>
.nav-wrapper {
  background-color: $main-color;
}
.brand-logo {
  margin-left: 2rem;
}
</style>
