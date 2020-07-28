<template>
  <a href="#">
    <img :src="imageUrl" alt="LOGO" />
  </a>
</template>

<script>
export default {
  name: 'AppLogo',
  data() {
    return {
      //TODO imgUrl должен получать от родителя
      image: 'logo.jpg',
    };
  },
  computed: {
    imageUrl() {
      return require(`@/assets/img/${this.image}`);
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 150px;
  @media (max-width: $md2 + px) {
    width: 130px;
  }
  @media (max-width: $md3 + px) {
    width: 110px;
  }
}
</style>
