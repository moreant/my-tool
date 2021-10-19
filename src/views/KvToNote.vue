<script setup lang="ts">
  import { ref, watch } from 'vue'
  import Navbar from '@/components/Navbar.vue'
  import Container from '@/components/Container.vue'
  import Textarea from '@/components/input/Textarea.vue'

  const exampleJson = [
    {
      name: '成功',
      value: '0'
    },
    {
      name: '失败',
      value: '1'
    }
  ]

  const parseJson = (val: string) => {
    try {
      const jsonArr = JSON.parse(val)
      return jsonArr
        .map((item: Kv) => {
          return `${item.value}-${item.name}`
        })
        .join(', ')
    } catch (e) {
      console.warn('JSON解析错误', e)
      return 'JSON解析错误'
    }
  }

  let inputValue = ref(JSON.stringify(exampleJson, null, 2))
  let result = ref(parseJson(inputValue.value))

  interface Kv {
    name: string
    value: string
  }

  watch(inputValue, (val) => parseJson(val))
</script>

<template>
  <Navbar />
  <Container>
    <Textarea v-model:value="inputValue" :rows="10" />
    {{ result }}
  </Container>
</template>

<style scoped></style>
