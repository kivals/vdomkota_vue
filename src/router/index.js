import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '@/pages/Main';
import AdminMainInfo from '@/pages/admin/AdminMainInfo';
import AdminLogin from '@/pages/admin/AdminLogin';;

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
    meta: { layout: 'admin' },
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

export default router;
