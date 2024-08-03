import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/backtopone',
    name: 'BacktopOne',
    component: () => import('@/views/BacktopOne.vue')
  },
  {
    path: '/backtoptwo',
    name: 'BacktopTwo',
    component: () => import('@/views/BacktopTwo.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/accountLogin.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
