<template>
  <div class="app-popup">
    <div class="app-popup__header">
      <span>PopupName</span>
      <span><i class="material-icons">close</i></span>
    </div>
    <div class="app-popup__content">
      <slot></slot>
    </div>
    <div class="app-popup__footer"></div>
  </div>
</template>

<script>
export default {
  name: 'AppPopup',
};
</script>

<style lang="scss">
.app-popup {
  padding: 16px;
  position: fixed;
  top: 50px;
  width: 400px;
  background: #fff;
  box-shadow: 0 0 17px 0 #e7e7e7;
  &__header,
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
