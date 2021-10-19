<script setup lang="ts">
  import { ref } from 'vue'
  import Navbar from '@/components/Navbar.vue'
  import Container from '@/components/Container.vue'
  import ToolHead from '@/components/tool/ToolHead.vue'
  import ToolDesc from '@/components/tool/ToolDesc.vue'
  import Textarea from '@/components/input/Textarea.vue'
</script>

<template>
  <Navbar />
  <Container>
    <textarea
      class="
        w-full
        border-gray-300
        shadow-sm
        focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50
        rounded-md
      "
    ></textarea>
  </Container>
</template>

<style scoped></style>
