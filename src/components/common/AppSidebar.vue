<template>
  <div class="sidebar" @click="closeSidebarPanel">
    <div class="sidebar-backdrop" v-if="isNavOpen"></div>
    <transition name="slide">
      <div v-if="isNavOpen" class="sidebar-panel">
        <ul class="sidebar-panel-nav">
          <li v-for="item in menu" :key="item.name">
            <router-link :to="item.to">{{ item.title }}</router-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AppSidebar',
  props: {
    menu: {
      type: Array,
      required: true,
    },
    isNavOpen: {
      type: Boolean,
      default: false,
    },
  },
  model: {
    prop: 'isNavOpen',
    event: 'click',
  },
  methods: {
    closeSidebarPanel() {
      this.$emit('click', !this.isNavOpen);
    },
  },
};
</script>

<style scoped>
ul.sidebar-panel-nav > li > a {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  display: block;
  padding-bottom: 0.5em;
}

ul.sidebar-panel-nav {
  list-style-type: none;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}
.sidebar-backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
}

.sidebar-panel {
  overflow-y: auto;
  background-color: #130f40;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 999;
  padding: 3rem 20px 2rem 20px;
  width: 200px;
}
</style>
