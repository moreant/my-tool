<script setup lang="ts">
  defineProps<{
    name?: string
  }>()
</script>

<template>
  <label class="inline-flex items-center">
    <input type="radio" :name="name" class="simple-radio" />
    <span class="mx-2"><slot /></span>
  </label>
</template>

<style scoped></style>
