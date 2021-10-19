import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/views/Home.vue') },
  { path: '/uuid', component: () => import('@/views/Uuid2.vue') },
  { path: '/kv2note', component: () => import('@/views/Kv2Note.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
