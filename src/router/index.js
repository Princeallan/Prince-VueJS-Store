import Vue from 'vue';
import Router from 'vue-router';


import Home from '@/pages/Home';
import Cart from '@/pages/Cart';

// Admin Routes
import Index from '@/pages/admin/Index';
import New from '@/pages/admin/New';
import Edit from '@/pages/admin/Edit';
import Products from '@/pages/admin/Products';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Index,

      children: [
        {
          path: '',
          name: 'Products',
          component: Products,
        },
        {
          path: 'new',
          name: 'New',
          component: New,
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          component: Edit,
        },
      ],
    },
  ],
});
