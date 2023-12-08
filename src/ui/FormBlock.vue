<script setup lang="ts">
const props = defineProps<{
  name: string;
  labelName: string;
}>();
</script>
<template>
  <div class="w-full flex flex-col">
    <label class="text-base font-semibold mb-1" :for="props.name">{{
      props.name
    }}</label>

    <input
      :name="props.name"
      class="w-full rounded-md bg-stone-100 px-4 py-3 text-sm transition-all duration-300 placeholder:text-stone-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:indigo-400"
    />
  </div>
</template>
