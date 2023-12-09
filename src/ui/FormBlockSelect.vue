<script setup lang="ts">
import FormLabel from "./FormLabel.vue";

const props = defineProps<{ items; labelName: string; inputName: string }>();
</script>
<template>
  <div>
    <FormLabel :labelName="props.labelName" :inputName="props.inputName" />
    <select
      class="w-full rounded-md bg-stone-100 px-4 py-3 transition-all duration-300 placeholder:text-stone-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:indigo-400 text-gray-700 text-sm"
      name=""
      id=""
    >
      <option default value="">Select item(s)</option>
      <option v-for="item in props.items" :key="item.id">
        {{ item.name }} {{ item.CPU }}&nbsp;core&nbsp;CPU&nbsp;/&nbsp;{{
          item.GPU
        }}&nbsp;core&nbsp;GPU&nbsp;/&nbsp;{{ item.SSD }}&nbsp;{{
          item.dataVolume
        }}&nbsp;SSD&nbsp;
      </option>
    </select>
  </div>
</template>
