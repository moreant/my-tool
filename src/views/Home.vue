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
      text: '驼峰蛇形',
      href: '/camel'
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
          <span class="block text-blue-300">自动焦点、饱和转化、实时生成、快速复制。</span>
        </h2>
      </div>
    </Container>
  </Navbar>
  <Container>
    <ul class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 text-center">
      <li v-for="item in itemList" class="flex min-w-full">
        <router-link
          class="
            group
            text=xl
            md:text-2xl
            tracking-wider
            text-gray-900
            font-bold
            relative
            rounded-xl
            border border-gray-400 border-opacity-30
            transition-all
            duration-100
            ease-in-out
            hover:shadow-xl hover:bg-blue-500 hover:text-white
            w-full
            md:w-full
            p-6
            md:p-12
            bg-white
            2xl:py-14 2xl:text-3xl
          "
          :to="item.href"
        >
          {{ item.text }}
        </router-link>
      </li>
    </ul>
  </Container>
</template>
