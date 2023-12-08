<script setup lang="ts">
const props = defineProps<{
  name: string;
  labelName: string;
}>();
</script>
<template>
  <div class="flex flex-col">
    <label class="text-base font-semibold" :for="props.name">{{
      props.name
    }}</label>

    <input
      :name="props.name"
      class="w-28 rounded-md bg-stone-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:ring-opacity-50 sm:w-64 focus:outline-none focus:ring focus:indigo-400"
    />
  </div>
</template>
