<template>
  <nav>
    <div class="nav-wrapper">
      <a href="#" @click.prevent="$emit('click')" class="brand-logo">
        <i class="material-icons black-text">dehaze</i>
        ВДОМКОТА
      </a>
      <ul class="right">
        <li class="logout">
          <a href="#" @click.prevent="logout">
            <i class="material-icons">exit_to_app</i>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AdminNavBar',
  methods: {
    async logout() {
      await this.$store.dispatch('logout');
      await this.$router.push({ name: 'AdminLogin' });
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-wrapper {
  background-color: $main-color;
}
.brand-logo {
  margin-left: 2rem;
}
.logout {
  width: 50px;
  text-align: center;
  margin-right: 2rem;
}
</style>
