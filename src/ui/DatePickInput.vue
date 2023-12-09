<script setup lang="ts">
import { ref } from "vue";
import VueTailwindDatepicker from "vue-tailwind-datepicker";
import FormLabel from "./FormLabel.vue";

const dateValue = ref([]);
const formatter = ref({
  date: "DD MMM YYYY",
  month: "MMM",
});
</script>

<template>
  <div class="w-full">
    <FormLabel labelName="Due date" inputName="due date" />

    <vue-tailwind-datepicker
      v-model="dateValue"
      overlay
      as-single
      :formatter="formatter"
      input-classes="w-full rounded-md bg-stone-100 px-4 py-3 transition-all duration-300 placeholder:text-stone-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:indigo-400 text-gray-700 text-sm"
    />
  </div>
</template>
