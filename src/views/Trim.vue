<script setup lang="ts">
  import { ref, watch } from 'vue'
  import Navbar from '@/components/Navbar.vue'
  import Container from '@/components/Container.vue'
  import ToolHead from '@/components/tool/ToolHead.vue'
  import Textarea from '@/components/form/Textarea.vue'

  let inputValue = ref('')
  let result = ref('')

  watch(inputValue, (val) => {
    const regex = /[\u4e00-\u9fa5].+/gm;
    const match = val.match(regex)
    if (match) {
      result.value = match.join(', ')
    } else {
      result.value = '无匹配项'
    }
  })
</script>

<template>
  <Navbar />
  <Container>
    <ToolHead
      title="Tirm"
      subtitle="粘贴即可清除从 Words 复制过来的奇奇怪怪的字符"
      mdSubtitle="清除奇奇怪怪的字符"
    />
    <Textarea v-model="inputValue" rows="10" />
    <Textarea v-model="result" rows="11" />
  </Container>
</template>

<style scoped></style>
