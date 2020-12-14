import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/lifecycle',
    name: 'Lifecycle',
    component: () => import('../views/Lifecycle')
  },
  {
    path: '/tasks',
    name: 'Task',
    component: () => import('../views/Task')
  },
  {
    path: '/countries',
    name: 'Countries',
    // Alias
    alias: '/paises',
    component: () => import('../views/Countries')
  },
  {
    path: '/countries/:name',
    name: 'Country',
    component: () => import('../views/Country')
  },
  // Redirect
  {
    path: '/paises/:name', redirect: '/countries/:name'
  },
  {
    path: '*',
    component: () => import('../views/404')
  },
  //‎Rutas anidadas‎
  {
    path: '/auth',
    name: 'AuthLayout',
    component: () => import('../layouts/AuthLayout'),
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('../views/auth/Login'),
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('../views/auth/Register'),
      },
      {
        path: '/',
        redirect: 'login'
      },
      {
        path: '*',
        redirect: 'login'
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
