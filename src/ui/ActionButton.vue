<script setup lang="ts">
const props = defineProps<{
  text: string;
  disabled: boolean;
  layout: string;
  class?: string;
}>();

const base =
  "inline-block cursor-pointer bg-indigo-600 font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-indigo-400  hover:text-indigo-950 focus:bg-indigo-400 focus:outline-none focus:ring focus:ring-indigo-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-white disabled:border disabled:border-indigo-400";
const styles: {
  [key: string]: string;
} = {
  sidebar: base + "px-4 py-3 md:px-6 md:py-3.5 text-sm rounded-md w-full ",
  primary: base + "px-4 py-3 md:px-6 md:py-3.5 text-sm rounded-full ",
  small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs ",
  round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm ",
  secondary:
    "inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-300 focus:text-white focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
};
</script>
<template>
  <button
    :type="props.type"
    :disabled="props.disabled"
    :className="styles[props.layout] + props.class"
  >
    {{ text }}
  </button>
</template>
