import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/views/Home.vue') },
  { path: '/uuid', component: () => import('@/views/Uuid-2.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
