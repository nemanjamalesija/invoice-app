<script setup lang="ts">
const props = defineProps<{ labelName: string; inputName: string }>();
</script>
<template>
  <label class="text-sm font-semibold mb-1" :for="props.inputName">{{
    props.labelName
  }}</label>
</template>
