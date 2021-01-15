<template>
  <a @click.prevent="$emit('click')" class="app-btn">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'AppButton',
};
</script>

<style lang="scss" scoped>
.app-btn {
  text-align: center;
  cursor: pointer;
  display: block;
  text-transform: uppercase;
  color: #000;
  border: 2px solid #000;
  border-radius: 26px;
  padding: 18px 44px;
  font-size: 17px;
  transition: all 0.6s ease;
  letter-spacing: 0.06em;
  @media (max-width:$md3+px){
    padding: 10px 30px;
    font-size: 12px;
  }
}

.app-btn:hover {
  text-decoration: none;
  background-color: $main-color;
  color: #000;
  border-color: #006089;
}
</style>
