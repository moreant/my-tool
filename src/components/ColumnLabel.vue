<template>
  <label class="mb-2 inline-block text-xl font-semibold text-gray-700 tracking-wider">
    {{ text }}
    <slot></slot>
  </label>
</template>

<script setup lang="ts">
  defineProps({
    text: String
  })
</script>

<style scoped></style>
