import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/views/Home.vue') },
  { path: '/uuid', component: () => import('@/views/Uuid2.vue') },
  { path: '/case', component: () => import('@/views/Case.vue') },
  { path: '/kv2note', component: () => import('@/views/Kv2Note.vue') },
  { path: '/base64', component: () => import('@/views/Base64.vue') },
  { path: '/crontab', component: () => import('@/views/Crontab.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
