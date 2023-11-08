<script setup lang="ts">
import useInvoices from './useInvoices';
import LoadingSpinner from '../ui/LoadingSpinner.vue';
import SingleInvoice from './SingleInvoice.vue';
import HeaderInvoices from '@/ui/HeaderInvoices.vue';

const { isLoading, invoices } = useInvoices();
</script>

<template>
  <LoadingSpinner v-if="isLoading" />
  <HeaderInvoices />
  <SingleInvoice v-for="invoice in invoices" :key="invoice.id" :invoice="invoice" />
</template>
