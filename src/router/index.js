import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '@/pages/Main';
import AdminMainInfo from '@/pages/admin/AdminMainInfo';
import AdminLogin from '@/pages/admin/AdminLogin';
import firebase from 'firebase/app';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    meta: { layout: 'base' },
    component: Main,
  },
  {
    path: '/find',
    name: 'Find',
    meta: { layout: 'base' },
    component: () => import('@/pages/Find'),
  },
  /* Admin routes */
  {
    path: '/admin',
    name: 'AdminHome',
    meta: { layout: 'admin', auth: true },
    component: AdminMainInfo,
  },
  {
    path: '/login',
    name: 'AdminLogin',
    meta: { layout: 'admin-empty' },
    component: AdminLogin,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requireAuth = to.matched.some(record => record.meta.auth);

  if (requireAuth && !currentUser) {
    next('/login');
  } else {
    next();
  }
});

export default router;
