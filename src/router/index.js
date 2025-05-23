import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/destination',
      name: 'destination',
      component: () => import('../views/AppDestination.vue')
    },
    {
      path: '/crew',
      name: 'crew',
      component: () => import('../views/AppCrew.vue')
    },
    {
      path: '/technology',
      name: 'technology',
      component: () => import('../views/AppTechnology.vue')
    }
  ]
})

export default router
