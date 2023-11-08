<script setup lang="ts">
import FilterInvoices from '@/features/FilterInvoices.vue';

const props = defineProps<{ totalInvoices: number }>();
</script>

<template>
  <header>
    <h1>Invoices</h1>
    <p>There are {{ props.totalInvoices }} total invoices</p>
    <FilterInvoices />
  </header>
</template>
