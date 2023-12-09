<script setup lang="ts">
import FormLabel from "./FormLabel.vue";

const props = defineProps<{ items; labelName: string; inputName: string }>();

console.log(props);

const selectBaseClass =
  "w-full rounded-md bg-stone-100 px-4 py-3 transition-all duration-300 placeholder:text-stone-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:indigo-400 text-gray-700 text-sm";
</script>
<template>
  <div class="w-full">
    <FormLabel :labelName="props.labelName" :inputName="props.inputName" />

    <select v-if="props.inputName === 'items'" :class="selectBaseClass" name="">
      <option default value="">Select item(s)</option>
      <option v-for="item in props.items" :key="item.id">
        {{ item.name }}&nbsp;{{ item.CPU }} core CPU / {{ item.GPU }} core GPU /
        {{ item.SSD }}&nbsp;{{ item.dataVolume }} SSD
      </option>
    </select>

    <select
      v-if="props.inputName === 'status'"
      :class="selectBaseClass"
      name=""
    >
      <option v-for="item in props.items" :key="item.id">
        {{ item.name }}
      </option>
    </select>
  </div>
</template>
