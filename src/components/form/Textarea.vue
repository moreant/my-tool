<script lang="ts" setup>
  defineProps<{
    modelValue?: string
    rows?: string
  }>()

  const emit = defineEmits(['update:modelValue'])

  // 亦可这样
  const handleInput = (event: Event) =>
    emit('update:modelValue', (<HTMLInputElement>event.target).value)
</script>

<template>
  <!-- <input :value="modelValue" @input="handleInput" /> -->
  <textarea
    :value="modelValue"
    :rows="rows"
    @input="handleInput"
    class="w-full simple-input"
  ></textarea>
</template>
