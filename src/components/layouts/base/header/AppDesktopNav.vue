<template>
  <div class="menu">
    <ul class="menu__list">
      <router-link
        v-for="item in menu"
        :key="item.name"
        tag="li"
        :to="item.to"
        class="menu__link"
        exact-active-class="active"
        exact
        >{{ item.title }}</router-link
      >
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppDesktopNav',
  props: {
    menu: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  &__list {
    display: flex;
    justify-content: space-between;
    li {
      cursor: pointer;
      margin: 0 60px 0 0;
      &:last-child {
        margin: 0;
      }
      &.active {
        color: #000;

        &::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          background: #f95959;
          width: 25px;
          height: 2px;
        }
      }
      @media (max-width: $md2 + px) {
        margin: 0 40px 0 0;
      }
    }
  }

  &__link {
    position: relative;
    display: inline-block;
    color: rgba(0, 0, 0, 0.7);
    font-size: 15px;
    transition: 0.5s;
    padding-bottom: 8px;
    &:hover {
      color: #000;
    }
  }
}
</style>
