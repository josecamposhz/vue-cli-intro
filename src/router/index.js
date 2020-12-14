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
    name: 'Paises',
    component: () => import('../views/Countries')
  },
  {
    path: '*',
    component: () => import('../views/404')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
