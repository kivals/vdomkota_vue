import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '@/pages/Main.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/find',
    name: 'Find',
    component: () => import('@/pages/Find'),
  },
  /* Admin routes */
  {
    path: '/admin/',
    name: 'AdminHome',
    meta: { layout: 'admin' },
    component: () => import('@/pages/AdminMainInfo'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
