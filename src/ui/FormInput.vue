<script setup lang="ts">
const props = defineProps<{ name: string }>();
</script>
<template>
  <input
    :name="props.name"
    class="w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:ring-opacity-50 sm:w-64 sm:focus:w-72 focus:outline-none focus:ring focus:ring-yellow-500"
  />
</template>
