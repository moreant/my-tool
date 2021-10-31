<script setup lang="ts">
  import { ref, watch } from 'vue'
  import Navbar from '@/components/Navbar.vue'
  import Container from '@/components/Container.vue'
  import ToolHead from '@/components/tool/ToolHead.vue'
  import Textarea from '@/components/form/Textarea.vue'

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

  const parseJson = (val: string): string => {
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

  watch(inputValue, (val) => {
    result.value = parseJson(val)
  })
</script>

<template>
  <Navbar />
  <Container>
    <ToolHead title="Kv2Note" subtitle="将 KV 格式的 Json 数组转为单行注释" />
    <Textarea v-model:value="inputValue" rows="10" />
    {{ result }}
  </Container>
</template>

<style scoped></style>
