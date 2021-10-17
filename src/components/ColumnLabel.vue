<script setup lang="ts">
  const props = defineProps<{
    text: string
  }>()
</script>

<template>
  <label class="mb-2 inline-block text-xl font-semibold text-gray-700 tracking-wider">
    {{ props.text }}
    <slot></slot>
  </label>
</template>

<style scoped></style>
