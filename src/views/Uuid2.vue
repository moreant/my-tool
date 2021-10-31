<script lang="ts" setup>
  import { ref, watch } from 'vue'
  import { v4 as uuidv4 } from 'uuid'
  import copy from 'copy-to-clipboard'

  import Navbar from '@/components/Navbar.vue'
  import Container from '@/components/Container.vue'
  import ColumnLabel from '@/components/ColumnLabel.vue'
  import ToolHead from '@/components/tool/ToolHead.vue'
  import ToolDesc from '@/components/tool/ToolDesc.vue'
  import Button from '@/components/Button.vue'
  import Textarea from '@/components/input/Textarea.vue'
  import { RefreshIcon, DuplicateIcon, CheckIcon } from '@heroicons/vue/outline'

  const generateUUID = (count: number) => {
    return count > 0
      ? Array(count)
          .fill(0)
          .map(() => uuidv4())
          .join('\n')
      : ''
  }

  const count = ref(10)
  const copyItem = ref([1, 5, 10, 50, 100, 500])
  const copyOk = ref(Array(copyItem.value.length).fill(0))
  const uuidStr = ref(generateUUID(count.value))

  const copyToClipboard = (count: number, index: number) => {
    const success = copy(generateUUID(count))
    if (success) {
      copyOk.value[index] = 1
      setTimeout(() => {
        copyOk.value[index] = 0
      }, 300)
    }
  }

  const refresh = () => {
    uuidStr.value = generateUUID(count.value)
  }

  watch(count, (val) => {
    uuidStr.value = generateUUID(val)
  })
</script>

<template>
  <Navbar />
  <Container>
    <ToolHead
      title="UUID 生成"
      subtitle="Universally unique identifier（通用唯一识别码）"
      mdSubtitle="UUID: 通用唯一识别码。"
    />
    <ToolDesc>可以点击按钮直接复制对应数量的 UUID，亦可自定义生成的 UUID 数量（0~999）。 </ToolDesc>
    <div class="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-x md:divide-y-0">
      <div class="pb-5 md:pb-0 md:pr-5">
        <ColumnLabel text="快速复制" />
        <div className="grid grid-cols-2 gap-5">
          <button
            v-for="(item, index) in copyItem"
            class="
              flex
              justify-center
              items-center
              px-6
              py-3
              md:py-5
              text-gray-400
              hover:text-gray-900
              border border-gray-300
              hover:bg-gray-50
              rounded-md
              shadow-sm
              font-medium
              space-x-1
              focus:ring-2
              focus:ring-offset-2
              focus:ring-offset-white
              focus:ring-gray-300
              focus:outline-none
              transition-colors
              duration-200
              bg-white
            "
            @click="copyToClipboard(item, index)"
          >
            <template v-if="copyOk[index] === 1">
              <CheckIcon class="text-green-400 w-5 h-5" />
            </template>
            <template v-else>
              <span class="text-gray-900">{{ item }} 个 </span>
              <DuplicateIcon class="w-5 h-5" />
            </template>
          </button>
        </div>
      </div>
      <div class="pt-5 md:pt-0 md:pl-5">
        <ColumnLabel text="自定数量" />
        <div class="flex flex-wrap mb-4">
          <div class="relative">
            <input
              v-model="count"
              type="number"
              class="
                w-32
                h-full
                block
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50
              "
              placeholder=""
            />
          </div>
          <Button class="ml-2" @click="refresh">
            <RefreshIcon class="h-4 w-4 mr-1" />
            刷 新</Button
          >
        </div>
        <Textarea v-model:value="uuidStr" rows="11" />
      </div>
    </div>
  </Container>
</template>
