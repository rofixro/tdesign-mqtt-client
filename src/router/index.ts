import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'quick-start',
      component: () => import('../views/quick-start.vue')
    },
    {
      path: '/template-syntax',
      name: 'template-syntax',
      component: () => import('../views/template-syntax.vue')
    },
    {
      path: '/reactivity-fundamentals',
      name: 'reactivity-fundamentals',
      component: () => import('../views/reactivity-fundamentals.vue')
    },
    {
      path: '/computed',
      name: 'computed',
      component: () => import('../views/computed.vue')
    },
    {
      path: '/tailwindcss',
      name: 'tailwindcss',
      component: () => import('../views/tailwindcss.vue')
    },
    
  ]
})

export default router
