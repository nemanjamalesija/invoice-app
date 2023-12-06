<script setup lang="ts">
const props = defineProps<{ for: string; labelName: string }>();
</script>
<template>
  <label class="text-base font-semibold" :for="props.for">{{
    props.labelName
  }}</label>
</template>
