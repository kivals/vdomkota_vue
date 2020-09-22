<template>
  <div class="popup_wrapper" ref="popup_wrapper">
    <div class="app-popup">
      <div class="app-popup__header">
        <span>PopupName</span>
        <span>
          <i @click="closePopup" class="material-icons">close</i>
        </span>
      </div>
      <div class="app-popup__content">
        <slot></slot>
      </div>
      <div class="app-popup__footer"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppPopup',
  methods: {
    closePopup() {
      this.$emit('closePopup');
    },
  },
  mounted() {
    let vm = this;
    document.addEventListener('click', e => {
      if (e.target === vm.$refs['popup_wrapper']) {
        vm.closePopup();
      }
    });
  },
};
</script>

<style lang="scss">
.popup_wrapper {
  background: rgba(64, 64, 64, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
}
.app-popup {
  padding: 16px;
  position: fixed;
  top: 50%;
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
