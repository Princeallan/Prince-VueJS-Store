import Vue from 'vue';
import Router from 'vue-router';


import Home from '@/pages/Home';
import Admin from '@/pages/Admin';
import Cart from '@/pages/Cart';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/',
      name: 'Admin',
      component: Admin,
    },
    {
      path: '/',
      name: 'Cart',
      component: Cart,
    },
  ],
});
