<script setup lang="ts">
  import Navbar from '@/components/Navbar.vue'
  import Container from '@/components/Container.vue'

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
      text: '正则表达式',
      target: '_blank',
      href: 'https://regex101.com/'
    }
  ]
</script>

<template>
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
  <Container>
    <ul class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 text-center">
      <li v-for="item in itemList" class="flex min-w-full">
        <a v-if="item.target === '_blank'" :href="item.href" target="_blank" class="home-item">
          {{ item.text }}
        </a>
        <router-link v-else :to="item.href" class="home-item">
          {{ item.text }}
        </router-link>
      </li>
    </ul>
  </Container>
</template>
