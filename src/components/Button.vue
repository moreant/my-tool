<template>
  <button
    class="
      px-4
      py-2
      border border-transparent
      shadow-sm
      text-sm
      font-medium
      rounded-md
      text-gray-900
      bg-gray-50
      border-gray-300
      hover:bg-white
    "
  >
    <div class="flex items-center justify-center"><slot /></div>
  </button>
</template>

<script setup lang="ts"></script>

<style scoped></style>
