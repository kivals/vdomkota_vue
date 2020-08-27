<template>
  <div ref="admin">
    <admin-nav-bar @click="isOpen = !isOpen" />
    <admin-side-bar :open="isOpen" />
    <main class="app-content" :class="{ full: !this.isOpen }">
      <div class="app-page">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
import AdminNavBar from '@/components/ui/admin/AdminNavBar';
import AdminSideBar from '@/components/ui/admin/AdminSideBar';

export default {
  name: 'AdminLayout',
  components: {
    AdminNavBar,
    AdminSideBar,
  },
  data() {
    return {
      isOpen: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.app-content {
  padding-top: 64px;
  padding-left: $admin-sidebar-width;
  transition: padding-left 0.3s;
  position: relative;
  &.full {
    padding-left: 0;
  }
}
</style>
