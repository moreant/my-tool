<script setup lang="ts">
  import Navbar from '@/components/Navbar.vue'
  import Container from '@/components/Container.vue'
  import { ExternalLinkIcon } from '@heroicons/vue/solid'

  const itemList = [
    {
      text: 'UUID',
      href: '/uuid'
    },
    {
      text: 'Base64',
      href: '/base64'
    },
    {
      text: '命名类型',
      href: '/case'
    },
    {
      text: 'Crontab',
      href: '/crontab'
    },
    {
      text: 'Kv2Note',
      href: '/kv2note'
    },
    {
      text: 'Trim',
      href: '/trim'
    },
    {
      text: '正则表达式',
      target: '_blank',
      href: 'https://regex101.com/'
    }
  ]

  const origin = location.origin.includes('devify') || location.origin.includes("tptp") || location.origin.includes("yeek")
</script>

<template>
  <div class="flex flex-col h-full">
    <Navbar>
      <!-- Hero -->
      <Container>
        <div class="lg:flex lg:items-center lg:justify-between">
          <h2 class="text-3xl tracking-wide text-white sm:text-4xl">
            <span class="block mb-1">使用工具何必那么复杂，</span>
            <span class="block text-blue-300">饱和转换、实时生成、快速复制。</span>
          </h2>
        </div>
      </Container>
    </Navbar>
    <div class="flex-grow">
      <Container>
        <ul class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 text-center">
          <li v-for="item in itemList" class="flex min-w-full">
            <a v-if="item.target === '_blank'" :href="item.href" target="_blank" class="home-item">
              {{ item.text }}<ExternalLinkIcon class="w-6 h-6 inline" />
            </a>
            <router-link v-else :to="item.href" class="home-item">
              {{ item.text }}
            </router-link>
          </li>
        </ul>
      </Container>
    </div>
    <div v-if="origin" class="text-center mb-4 text-gray-400">
      <a href="https://beian.miit.gov.cn" class="hover:text-gray-900">粤ICP备2021109792号</a>
    </div>
  </div>
</template>
