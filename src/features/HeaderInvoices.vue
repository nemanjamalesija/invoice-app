<script setup lang="ts">
import FilterInvoices from '@/features/FilterInvoices.vue';

const props = defineProps<{ totalInvoices: number }>();
</script>

<template>
  <header class="flex items-center justify-between mb-6">
    <h1 class="text-3xl font-semibold">Invoices</h1>
    <FilterInvoices />
  </header>
</template>
