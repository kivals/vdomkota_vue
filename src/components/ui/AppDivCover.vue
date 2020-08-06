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
      return require(`@/assets/img/cats_slider/${this.image}`);
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
  height: 100%;
  width: 100%;
}
</style>
