<script setup lang="ts">
  const props = defineProps<{
    title: string
    subtitle: string
    mdSubTitle?: string
  }>()
</script>

<template>
  <div class="pb-5 border-b border-gray-200 mb-5">
    <h1 class="inline-block text-3xl font-extrabold text-gray-900 tracking-wider">{{
      props.title
    }}</h1>
    <p class="mt-1 text-lg text-gray-500">
      <span class="md:hidden"> {{ props.mdSubTitle }} </span>
      <span class="hidden md:inline"> {{ props.subtitle }} </span>
    </p>
  </div>
</template>

<style scoped></style>
