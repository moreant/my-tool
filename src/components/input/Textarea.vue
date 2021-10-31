<script lang="ts" setup>
  import { watchEffect } from 'vue'

  const props = defineProps<{
    value?: string
    rows?: string
  }>()

  const emit = defineEmits(['update:value'])

  watchEffect(() => emit('update:value', props.value))

  // 亦可这样
  // const handleInput = (event: Event) => emit('update:value', (<HTMLInputElement>event.target).value)
</script>

<template>
  <textarea
    v-model="value"
    :rows="rows"
    class="
      w-full
      border-gray-300
      shadow-sm
      focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50
      rounded-md
    "
  ></textarea>
</template>
