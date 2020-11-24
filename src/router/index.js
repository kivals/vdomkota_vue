import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '@/pages/Main';
import AdminMainInfo from '@/pages/admin/AdminMainInfo';
import AdminLogin from '@/pages/admin/AdminLogin';
import firebase from 'firebase/app';
import AdminCats from '@/pages/admin/AdminCats';

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
  {
    path: '*',
    name: '404',
    meta: { layout: 'base-empty' },
    component: () => import('@/pages/NotFoundPage'),
  },
  /* Admin routes */
  {
    path: '/admin',
    name: 'AdminHome',
    meta: { layout: 'admin', auth: true },
    component: AdminMainInfo,
  },
  {
    path: '/admin/cats',
    name: 'AdminCats',
    meta: { layout: 'admin', auth: true },
    component: AdminCats,
  },
  {
    path: '/admin/login',
    name: 'AdminLogin',
    meta: { layout: 'admin-empty' },
    component: AdminLogin,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requireAuth = to.matched.some(record => record.meta.auth);

  if (requireAuth && !currentUser) {
    next({ name: 'AdminLogin' });
  } else {
    next();
  }
});

export default router;
