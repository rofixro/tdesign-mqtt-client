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
    {
      path: '/conditional',
      name: 'conditional',
      component: () => import('../views/conditional.vue')
    },
    {
      path: '/event-handling',
      name: 'event-handling',
      component: () => import('../views/event-handling.vue')
    },
    {
      path: '/lifecycle',
      name: 'lifecycle',
      component: () => import('../views/lifecycle.vue')
    },
    {
      path: '/watchers',
      name: 'watchers',
      component: () => import('../views/watchers.vue')
    },
    {
      path: '/template-refs',
      name: 'template-refs',
      component: () => import('../views/template-refs.vue')
    },
    {
      path: '/component-basics',
      name: 'component-basics',
      component: () => import('../views/component-basics.vue')
    },
    {
      path: '/v-model',
      name: 'v-model',
      component: () => import('../views/v-model.vue')
    },
    {
      path: '/attributes',
      name: 'attributes',
      component: () => import('../views/attributes.vue')
    }
  ]
})

export default router
