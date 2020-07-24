<template>
  <img v-bind="$attrs" />
</template>

<script>
export default {
  name: 'AppImgComp',
  props: {
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
  },
};
</script>

<style scoped>
  img {

  }
</style>
