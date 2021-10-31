<script setup lang="ts"></script>

<style scoped></style>

<template>
  <div class="bg-blue-600 divide-y divide-black divide-opacity-10">
    <div class="max-w-7xl 2xl:max-w-screen-2xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex leading-">
      <router-link class="text-white text-2xl cursor-pointer" to="/">Devify</router-link>
    </div>
    <slot></slot>
  </div>
</template>
