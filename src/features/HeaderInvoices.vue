<script setup lang="ts">
import FilterInvoices from '@/features/FilterInvoices.vue';
import SortInvoices from './SortInvoices.vue';

const props = defineProps<{ totalInvoices: number }>();
</script>

<template>
  <header class="flex items-center justify-between mb-6">
    <h1 class="text-3xl font-semibold">Invoices</h1>
    <div class="flex gap-5">
      <FilterInvoices />
      <SortInvoices />
    </div>
  </header>
</template>
