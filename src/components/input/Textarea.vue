<script lang="ts" setup>
  import { ref, watchEffect } from 'vue'

  const props = defineProps<{
    value?: string
    rows?: number
  }>()

  const emit = defineEmits(['update:value'])

  const currentValue = ref(props.value)

  watchEffect(() => emit('update:value', currentValue.value))
  // 亦可这样
  // const handleInput = (event: Event) => emit('update:value', (<HTMLInputElement>event.target).value)
</script>

<template>
  <textarea
    v-model="currentValue"
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
