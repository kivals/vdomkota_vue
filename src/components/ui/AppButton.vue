<template>
  <a href="#" class="btn" @click="clickHandler">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'AppButton',
  methods: {
    clickHandler() {
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  display: block;
  text-transform: uppercase;
  color: #000;
  border: 2px solid #000;
  border-radius: 26px;
  padding: 18px 44px;
  font-size: 17px;
  transition: all 0.6s ease;
  letter-spacing: 0.06em;
}

.btn:hover {
  text-decoration: none;
  background-color: $main-color;
  color: #000;
  border-color: #006089;
}
</style>
