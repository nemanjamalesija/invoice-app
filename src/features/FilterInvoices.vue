<script setup lang="ts">
import { useInvoicesStore } from '../stores/invoices';
import { storeToRefs } from 'pinia';
const { currentFilter } = storeToRefs(useInvoicesStore());
const { setFilter } = useInvoicesStore();

const filterHandler = (value: string) => {
  setFilter(value);
};
const options = [{ value: 'All' }, { value: 'Paid' }, { value: 'Pending' }, { value: 'Cancelled' }];
</script>
<template>
  <div class="flex bg-gray-0 rounded-md gap-1 font-medium text-sm p-2">
    <button
      v-for="option in options"
      :key="option.value"
      :class="
        (currentFilter === option.value && 'bg-indigo-600 py-1 px-4 rounded-md') ||
        'py-1 px-4 rounded-md'
      "
      @click="() => filterHandler(option.value)"
    >
      {{ option.value }}
    </button>
  </div>
</template>
