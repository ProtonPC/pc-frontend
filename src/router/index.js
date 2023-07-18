// Composables
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'
import { createRouter, createWebHistory } from 'vue-router'

function isAuthenticated(){
  if(import.meta.env.MODE == 'development'){
    return true
  }
  // TODO: check if user is logged in
  return false
}

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        meta: { requiresAuth: true },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: 'product-types',
        name: 'ProductTypes',
        meta: { requiresAuth: true },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/ProductTypes/ProductTypes.vue'),
      },
      {
        path: 'product-types/:id',
        name: 'ProductTypeForm',
        meta: { requiresAuth: true },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/ProductTypes/ProductTypeForm.vue'),
      },
      {
        path: 'ports',
        name: 'Ports',
        meta: { requiresAuth: true },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Ports/Ports.vue'),
      },
      {
        path: 'ports/:id',
        name: 'PortsForm',
        meta: { requiresAuth: true },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Ports/PortsForm.vue'),
      },
      {
        path: 'products',
        name: 'Products',
        meta: { requiresAuth: true },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Products/Products.vue'),
      },
      {
        path: 'products/:id',
        name: 'ProductForm',
        meta: { requiresAuth: true },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Products/ProductForm.vue'),
      },
      {
        path: 'suppliers',
        name: 'Suppliers',
        meta: { requiresAuth: true },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Suppliers/Suppliers.vue'),
      },
      {
        path: 'suppliers/:id',
        name: 'SupplierForm',
        meta: { requiresAuth: true },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Suppliers/SupplierForm.vue'),
      },
      {
        path: 'warehouses',
        name: 'Warehouses',
        meta: { requiresAuth: true },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Warehouses/Warehouses.vue'),
      },
      {
        path: 'warehouses/:id',
        name: 'WarehouseForm',
        meta: { requiresAuth: true },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Warehouses/WarehouseForm.vue'),
      },
      {
        path: 'quotes',
        name: 'Quotes',
        meta: { requiresAuth: true },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Quotes/Quotes.vue'),
      },
      {
        path: 'quotes/:id',
        name: 'QuoteForm',
        meta: { requiresAuth: true },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Quotes/QuoteForm.vue'),
      },
      {
        path: 'customers',
        name: 'Customers',
        meta: { requiresAuth: true },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Customers/Customers.vue'),
      },
      {
        path: 'customers/:id',
        name: 'CustomerForm',
        meta: { requiresAuth: true },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Customers/CustomerForm.vue'),
      },
      {
        path: 'users',
        name: 'Users',
        meta: { requiresAuth: true },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Users/Users.vue'),
      },
      {
        path: 'users/:id',
        name: 'UserForm',
        meta: { requiresAuth: true },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Users/UserForm.vue'),
      },
      {
        path: 'users/me',
        name: 'UserMe',
        meta: { requiresAuth: true },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Users/UserMe.vue'),
      },
      {
        path: 'users/edit-password',
        name: 'UserEditPassword',
        meta: { requiresAuth: true },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Users/UserEditPassword.vue'),
      },
    ],
  },
  {
    path: '/auth',
    component: () => import('@/layouts/auth/Auth.vue'),
    children: [
      {
        path: 'login',
        name: 'Login',
        meta: { requiresAuth: false },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Auth/Login.vue'),
      },
      {
        path: 'forget-password',
        name: 'ForgetPassword',
        meta: { requiresAuth: false },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Auth/ForgetPassword.vue'),
      },
      {
        path: 'reset-password',
        name: 'ResetPassword',
        meta: { requiresAuth: false },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Auth/ResetPassword.vue'),
      },
    ],
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
    if (to.meta.requiresAuth && !isAuthenticated() )
      next({
        name: "Login",
        query: {
          redirect: to.fullPath,
        },
      });
    else next();
})

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  NProgress.done()
});

export default router
