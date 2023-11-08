<script setup lang="ts">
import useInvoices from './useInvoices';
import LoadingSpinner from '../ui/LoadingSpinner.vue';
import SingleInvoice from './SingleInvoice.vue';
import HeaderInvoices from './HeaderInvoices.vue';
import EmptyHomePage from '@/ui/EmptyHomePage.vue';

const { isLoading, invoices } = useInvoices();
</script>

<template>
  <LoadingSpinner v-if="isLoading" />

  <HeaderInvoices v-if="invoices" :totalInvoices="invoices.length" />
  <EmptyHomePage />

  <!-- <main v-if="invoices && invoices.length > 0">
    <SingleInvoice v-for="invoice in invoices" :key="invoice.id" :invoice="invoice" />
  </main> -->
</template>
