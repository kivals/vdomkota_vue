<template>
  <router-link to="/"><img :src="logo" alt="LOGO"/></router-link>
</template>

<script>
export default {
  name: 'AppLogo',
  props: {
    logo: {
      type: String,
      required: true,
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
    width: 100px;
  }
  @media (max-width: $md4 + px) {
    width: 80px;
  }
}
</style>
