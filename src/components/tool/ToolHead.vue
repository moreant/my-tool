<template>
  <div class="pb-5 border-b border-gray-200 mb-5">
    <h1 class="inline-block text-3xl font-extrabold text-gray-900 tracking-wider">{{ title }}</h1>
    <p class="mt-1 text-lg text-gray-500">
      <span class="md:hidden"> {{ mdSubTitle }} </span>
      <span class="hidden md:inline"> {{ subtitle }} </span>
    </p>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    title: string
    subtitle: string
    mdSubTitle?: string
  }>()
</script>

<style scoped></style>
