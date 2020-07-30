<template>
  <div class="ibg" :style="cssVars">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AppDivCover',
  props: {
    image: {
      type: String,
      required: true,
    },
  },
  computed: {
    cssVars() {
      return {
        '--bg-image': `url('${this.imageUrl}')`,
      };
    },
    imageUrl() {
      return require(`@/assets/img/intro/${this.image}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.ibg {
  background-image: var(--bg-image);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  img {
    display: none;
  }
}
</style>
