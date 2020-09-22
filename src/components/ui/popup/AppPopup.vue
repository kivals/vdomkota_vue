<template>
  <div class="popup_wrapper" ref="popup_wrapper">
    <div class="app-popup">
      <div class="app-popup__img"></div>
      <div class="app-popup__text cat-description">
        <div class="cat-description__title">
          Jennifer
        </div>
        <div class="cat-description__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          efficitur blandit condimentum. Proin accumsan lorem vel gra vida
          fringilla. Suspendisse potenti. Mauris ut pulvinar nunc. Donec
          consectetur, diam in porta tempus, urna ligula ves tibulum nibh.
        </div>
        <ul class="cat-description__list">
          <li><span>Age:</span>2 month</li>
          <li><span>Inoculations:</span>none</li>
          <li><span>Diseases:</span>none</li>
          <li><span>Parasites:</span>none</li>
        </ul>
      </div>
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
  width: 970px;
  background: #fff;
  box-shadow: 0 0 17px 0 #e7e7e7;
}
.cat-description {
  &__title {
    font-size: 35px;
    line-height: 45px;
    letter-spacing: 0.06em;
    color: #545454;
  }
  &__text {
    font-size: 15px;
    line-height: 24px;
    color: #4c4c4c;
  }
  &__list {
    font-size: 15px;
    color: #545454;
    letter-spacing: 0.06em;
    span {
      font-size: 17px;
      line-height: 34px;
    }
  }
}
</style>
