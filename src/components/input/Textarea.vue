<template>
  <textarea
    :value="value"
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

<script lang="ts" setup>
  defineProps({
    value: String,
    rows: String
  })
</script>
