<script setup lang="ts">
const props = defineProps<{ name: string }>();
</script>
<template>
  <label class="text-base font-semibold" :for="props.name">{{
    props.name
  }}</label>
</template>
