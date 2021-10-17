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
            v-for="item in [1, 5, 10, 50, 100, 500]"
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
          >
            <span class="text-gray-900">{{ item }} 个 </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div class="pt-5 md:pt-0 md:pl-5"
        ><ColumnLabel text="自定数量" />
        <div class="flex flex-wrap mb-4">
          <div class="relative">
            <input
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

          <Button class="ml-2">
            <!-- <RefreshIcon class="h-4 w-4 mr-1" /> -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            刷 新</Button
          >
        </div>
        <Textarea rows="11" />
      </div>
    </div>
  </Container>
</template>

<script lang="ts" setup>
  import Navbar from '@/components/Navbar.vue'
  import Container from '@/components/Container.vue'
  import ColumnLabel from '@/components/ColumnLabel.vue'
  import ToolHead from '@/components/tool/ToolHead.vue'
  import ToolDesc from '@/components/tool/ToolDesc.vue'
  import Button from '@/components/Button.vue'
  import Textarea from '@/components/input/Textarea.vue'
  // import { RefreshIcon } from '@heroicons/vue/outline'
</script>
