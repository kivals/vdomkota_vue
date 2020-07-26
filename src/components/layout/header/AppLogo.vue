<template>
  <a href="#">
    <img :src="imgUrl" alt="LOGO" />
  </a>
</template>

<script>
export default {
  name: 'AppLogo',
  data() {
    return {
      //TODO imgUrl должен получать от родителя
      imgUrl: '/img/logo.jpg',
    };
  },
};
</script>

<style scoped>
img {
  width: 150px;
}
</style>
