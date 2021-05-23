import Vue from 'vue';
import Router from 'vue-router';
import AllProducts from '../components/AllProducts';
import LamSach from '../components/LamSach';
import DuongDa from '../components/DuongDa';

import ChamSocCoThe from '../components/ChamSocCoThe';
import PhuKien from '../components/PhuKien';
import Product from '../components/Product';
import CartCheckout from '../components/CartCheckout';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      name: 'All Products',
      component: AllProducts,
    },
    {
      path: '/LamSach',
      name: 'LamSach',
      component: LamSach,
    },
    {
      path: '/DuongDa',
      name: 'DuongDa',
      component: DuongDa,
    },
    /* {
      path: '/TrangDiemNen',
      name: 'TrangDiemNen',
      component: TrangDiemNen,
    }, */
    {
      path: '/ChamSocCoThe',
      name: 'ChamSocCoThe',
      component: ChamSocCoThe,
    },
    {
      path: '/PhuKien',
      name: 'PhuKien',
      component: PhuKien,
    },
    {
      path: '/product-details',
      name: 'Product',
      component: Product,
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: CartCheckout,
    },
  ],
});
