<template>
  <div class="donation-card" :style="cssVars">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AppDonationCard',
  data() {
    return {
      //TODO вопрос загрузки иконок - хранилище иконок
      icon: require('@/assets/img/icons/credit_card.png'),
    };
  },
  computed: {
    cssVars() {
      return {
        '--bg-image': `url('${this.icon}')`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.donation-card {
  position: relative;
  font-size: 20px;
  letter-spacing: 0.06em;
  color: #292929;
  background-color: $main-color;
  padding: 17px 15px 17px 59px;
  margin-bottom: 25px;
  border-radius: 9px;
  @media (max-width: $md1+px) {
    font-size: 16px;
    letter-spacing: 0.04em;
  }

  &:before {
    content: '';
    position: absolute;
    left: 14px;
    top: 50%;
    height: 24px;
    width: 30px;
    transform: translateY(-50%);
    background-image: var(--bg-image);
  }
}
</style>
