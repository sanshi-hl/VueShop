import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import ProductDetail from '../views/ProductDetail.vue';
import ShopCart from '../views/ShopCart.vue';
import Order from '../views/Order.vue';
import Location from '../components/Location.vue';

Vue.use(VueRouter);

// 防止重复点击链接时报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/product/:id',
      name: 'product',
      props: true,
      component: ProductDetail,
    },
    {
      path: '/shopCart',
      name: 'shopCart',
      component: ShopCart,
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
    },
    {
      path: '/location',
      name: 'location',
      component: Location,
    },
  ],
});
