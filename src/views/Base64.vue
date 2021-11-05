<script setup lang="ts">
  import Navbar from '@/components/Navbar.vue'
  import Container from '@/components/Container.vue'
  import ToolHead from '@/components/tool/ToolHead.vue'
  import ToolDesc from '@/components/tool/ToolDesc.vue'
</script>

<template>
  <Navbar />
  <Container>
    <ToolHead
      title="Base64 解码 / 编码"
      subtitle="网络上最常见的用于传输 8Bit 字节码的编码方式之一，是一种基于 64 个可打印字符来表示二进制数据的方法。"
      mdSubtitle="是一种基于64个可打印字符来表示二进制数据的方法。"
    />
    <ToolDesc>「⌃」按钮为再输入。进入页面后自动获取焦点，可直接 Ctrl+V 粘贴文本。</ToolDesc>

    迁移中...
  </Container>
</template>

<style scoped></style>
