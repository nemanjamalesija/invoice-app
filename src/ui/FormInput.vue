<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{ inputName: string }>();

const inputVal = ref<string>();

const emit = defineEmits(["onInput"]);
</script>
<template>
  <input
    :name="props.inputName"
    class="w-full rounded-md bg-stone-100 px-4 py-3 transition-all duration-300 placeholder:text-stone-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:indigo-400 text-gray-700 text-base"
    v-model="inputVal"
    @input="emit('onInput', props.inputName, inputVal)"
  />
</template>
