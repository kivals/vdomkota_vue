<template>
  <div class="admin">
    <!-- Side Navbar -->
    <nav class="side-navbar show">
      <div class="side-navbar-wrapper">
        <!-- Sidebar Header    -->
        <div
          class="sidenav-header d-flex align-items-center justify-content-center"
        >
          <!-- Shelter Info-->
          <div class="sidenav-header-inner text-center">
            <img
              src="/assets/img/logo.jpg"
              alt="ЛОГО ПРИЮТА"
              class="img-fluid rounded-circle"
            />
            <h2 class="h5">В ДОМ КОТА</h2>
            <span>Приют</span>
          </div>
          <!-- Small Brand information, appears on minimized sidebar-->
          <div class="sidenav-header-logo">
            <a href="index.html" class="brand-small text-center">
              <strong>B</strong><strong class="text-primary">D</strong></a
            >
          </div>
        </div>
        <!-- Sidebar Navigation Menus-->
        <div class="main-menu">
          <h5 class="sidenav-heading">Страницы</h5>
          <ul id="side-main-menu" class="side-menu list-unstyled">
            <li>
              <router-link to="/admin">
                <b-icon icon="house-door"></b-icon>
                Главная
              </router-link>
            </li>
            <li>
              <a href="forms.html">
                <b-icon icon="search"></b-icon>
                Ищем хозяев
              </a>
            </li>
            <li>
              <a href="charts.html">
                <b-icon icon="journal-text"></b-icon>
                Статьи
              </a>
            </li>
            <li>
              <a href="tables.html">
                <b-icon icon="credit-card"></b-icon>
                Реквизиты
              </a>
            </li>
            <li>
              <a href="tables.html">
                <b-icon icon="dot"></b-icon>
                О нас
              </a>
            </li>
          </ul>
        </div>
        <div class="admin-menu">
          <h5 class="sidenav-heading">Контент сайта</h5>
          <ul id="side-admin-menu" class="side-menu list-unstyled">
            <li>
              <a href="#"><b-icon icon="journals"></b-icon>Котики</a>
            </li>
            <li>
              <a href="#"><b-icon icon="list-ol"></b-icon>Список статей </a>
            </li>
            <li>
              <a href=""
                ><b-icon icon="info-circle"></b-icon>Банковские данные</a
              >
            </li>
            <li>
              <a href=""><b-icon icon="house"></b-icon>Приют</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="page">
      <header class="header">
        <nav class="navbar">
          <div class="container-fluid">
            <div
              class="navbar-holder d-flex align-items-center justify-content-between"
            >
              <div class="navbar-header">
                <a
                  id="toggle-btn"
                  v-if="showToggleBtn"
                  @click.prevent="toggleBtnClick"
                  href="#"
                  class="menu-btn"
                  ><i class="icon-bars"> </i></a>

                <a href="index.html" class="navbar-brand">
                  <div class="brand-text d-none d-md-inline-block">
                    <strong class="text-primary">В ДОМ КОТА</strong>
                  </div>
                </a>
              </div>
              <ul
                class="nav-menu list-unstyled d-flex flex-md-row align-items-md-center"
              >
                <!-- Log out-->
                <li class="nav-item">
                  <a href="login.html" class="nav-link logout">
                    <span class="d-none d-sm-inline-block">Logout</span>
                    <b-icon icon="box-arrow-right"></b-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminLayout',
  data() {
    return {
      sideNavShow: true,
      isOpen: true,
    };
  },
  methods: {
    toggleBtnClick() {
      this.sideNavShow = !this.sideNavShow;
    },
  },
};
</script>

<style lang="scss" scope>
@import '@/assets/sass/common/admin.scss';
@import '@/assets/sass/common/admin-icons.scss';
</style>
