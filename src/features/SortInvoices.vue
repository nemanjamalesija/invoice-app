<script setup lang="ts">
const options = [
  { value: 'name-asc', label: 'Sort by name (A-Z)' },
  { value: 'name-desc', label: 'Sort by name (Z-A)' },
  { value: 'regularPrice-asc', label: 'Sort by price (low first)' },
  { value: 'regularPrice-desc', label: 'Sort by price (high first)' },
  { value: 'maxCapacity-asc', label: 'Sort by capacity (low first)' },
  { value: 'maxCapacity-desc', label: 'Sort by capacity (high first)' }
];
</script>
<template>
  <select class="bg-gray-0 py-3 px-4 text-sm font-medium rounded-md">
    <option value="" v-for="option in options" :key="option.value">{{ option.label }}</option>
  </select>
</template>
