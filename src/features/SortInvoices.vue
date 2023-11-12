<script setup lang="ts">
import { useInvoicesStore } from '@/stores/invoices';

const { setSortByRaw } = useInvoicesStore();

const handleSetSortRaw = (event) => {
  setSortByRaw(event.target.value);
};

const options = [
  { value: 'paymentDue-asc', label: 'Sort by date (low first)' },
  { value: 'paymentDue-desc', label: 'Sort by date (high first)' },
  { value: 'clientName-asc', label: 'Sort by name (A-Z)' },
  { value: 'clientName-desc', label: 'Sort by name (Z-A)' }
];
</script>
<template>
  <select class="bg-gray-0 py-3 px-4 text-sm font-medium rounded-md" @change="handleSetSortRaw">
    <option :value="option.value" v-for="option in options" :key="option.value">
      {{ option.label }}
    </option>
  </select>
</template>
