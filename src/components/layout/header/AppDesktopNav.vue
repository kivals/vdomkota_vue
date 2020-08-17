<template>
  <nav class="menu">
    <ul class="menu__list">
      <li
        v-for="item in menu"
        :key="item.name"
        :class="{ active: item.active }"
      >
        <router-link :to="item.to" class="menu__link">{{ item.title }}</router-link>
      </li>
    </ul>
  </nav>
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
      margin: 0 60px 0 0;
      &:last-child {
        margin: 0;
      }
      &.active {
        a {
          color: #000;
        }
        a::after {
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
