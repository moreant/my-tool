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
      title="Crontab"
      subtitle="Crontab 是用来让使用者在固定时间或固定间隔执行程序之用，换句话说，也就是类似使用者的时程表。"
      mdSubtitle="Crontab 是用来定期执行程序的命令。"
    />
    <ToolDesc>目前仅支持 Spring 类型</ToolDesc>

    迁移中...
  </Container>
</template>

<style scoped></style>
