<script setup lang="ts">
  import { ref, reactive, watch } from 'vue'
  import _ from 'lodash'

  import Navbar from '@/components/Navbar.vue'
  import Container from '@/components/Container.vue'
  import ToolDesc from '@/components/tool/ToolDesc.vue'
  import ToolHead from '@/components/tool/ToolHead.vue'
  import ColumnLabel from '@/components/ColumnLabel.vue'
  import Textarea from '@/components/input/Textarea.vue'

  const input = reactive({
    input: '',
    camelCase: '',
    snakeCase: '',
    kebabCase: ''
  })

  watch(
    () => input.input,
    (val) => {
      const inputWords = val.split('\n')
      input.camelCase = inputWords.map((word) => _.camelCase(word)).join('\n')
      input.snakeCase = inputWords.map((word) => _.snakeCase(word)).join('\n')
      input.kebabCase = inputWords.map((word) => _.kebabCase(word)).join('\n')
    }
  )
</script>

<template>
  <Navbar />
  <Container>
    <ToolHead title="命名类型转换" subtitle="" mdSubtitle="" />
    <div class="grid grid-cols-4 space-x-4">
      <div class="mb-2">
        <ColumnLabel text="输入" />
        <Textarea v-model:value="input.input" rows="11" />
      </div>
      <div>
        <ColumnLabel text="驼峰命名" />
        <Textarea v-model:value="input.camelCase" rows="11" />
      </div>
      <div>
        <ColumnLabel text="snake case" />
        <Textarea v-model:value="input.snakeCase" rows="11" />
      </div>
      <div>
        <ColumnLabel text="kebab case" />
        <Textarea v-model:value="input.kebabCase" rows="11" />
      </div>
    </div>
  </Container>
</template>

<style scoped></style>
