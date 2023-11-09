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
  <div class="col-start-2 grid items-center h-[calc(100vh-90px)] bg-gray-50">
    <HeaderInvoices v-if="invoices" :totalInvoices="invoices.length" />

    <main class="pt-10 px-12 pb-20" v-if="invoices">
      <EmptyHomePage v-if="invoices.length === 0" />

      <div v-if="invoices.length === 0">
        <SingleInvoice v-for="invoice in invoices" :key="invoice.id" :invoice="invoice" />
      </div>
    </main>
  </div>
</template>
