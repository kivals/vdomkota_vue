<template>
  <div class="header__logo">
    <img :src="logoPath" alt="LOGO" />
  </div>
</template>

<script>
export default {
  name: 'AppLogo',
  data() {
    return {
      //TODO должен получать от родителя
      logoPath: '/img/logo.jpg',
    };
  },
};
</script>

<style scoped>
img {
  width: 150px;
}
</style>
