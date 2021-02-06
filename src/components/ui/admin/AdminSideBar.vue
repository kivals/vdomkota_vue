<template>
  <ul class="sidenav app-sidenav" :class="{ open }">
    <li>
      <a class="waves-effect waves-grey pointer" href="#!">
        <i class="material-icons">home</i>
        Главная страница
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AdminSideBar',
  props: {
    open: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.app-sidenav {
  padding-top: 5px;
  position: absolute;
  top: 64px;
  width: $admin-sidebar-width;
  transition: transform 0.3s;
  bottom: 0 !important;
  height: auto !important;
}
.app-sidenav.open {
  transform: translateX(0);
}
</style>
