// Composables
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'
import { createRouter, createWebHistory } from 'vue-router'

const isAuthenticated = true;

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: 'product-types',
        name: 'ProductTypes',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/ProductTypes/ProductTypes.vue'),
      },
      {
        path: 'product-types/:id',
        name: 'ProductTypeForm',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/ProductTypes/ProductTypeForm.vue'),
      },
      {
        path: 'ports',
        name: 'Ports',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Ports/Ports.vue'),
      },
      {
        path: 'ports/:id',
        name: 'PortsForm',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Ports/PortsForm.vue'),
      },
      {
        path: 'products',
        name: 'Products',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Products/Products.vue'),
      },
      {
        path: 'products/:id',
        name: 'ProductForm',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Products/ProductForm.vue'),
      },
      {
        path: 'suppliers',
        name: 'Suppliers',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Suppliers/Suppliers.vue'),
      },
      {
        path: 'warehouses',
        name: 'Warehouses',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Warehouses/Warehouses.vue'),
      },
      {
        path: 'warehouses/:id',
        name: 'WarehouseForm',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Warehouses/WarehouseForm.vue'),
      },
      {
        path: 'customers',
        name: 'Customers',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Customers/Customers.vue'),
      },
      {
        path: 'customers/:id',
        name: 'CustomerForm',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Customers/CustomerForm.vue'),
      },
      {
        path: 'users',
        name: 'Users',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Users/Users.vue'),
      },
      {
        path: 'users/:id',
        name: 'UserForm',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Users/UserForm.vue'),
      },
      {
        path: 'users/me',
        name: 'UserMe',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Users/UserMe.vue'),
      },
      {
        path: 'users/edit-password',
        name: 'UserEditPassword',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Users/UserEditPassword.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '@/views/Login.vue'),
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '@/views/ResetPassword.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start();
      document.title = to.name + " - Price Calculator";
  }
  next();
});

router.beforeEach((to, from, next) => {
    if ((to.name !== "ResetPassword" && to.name !== "Login") && !isAuthenticated )
      next({ name: "Login" });
    else next();
})

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  NProgress.done()
});

export default router
