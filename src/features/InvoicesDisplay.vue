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
  <div class="col-start-2 grid items-center bg-red-500">
    <HeaderInvoices v-if="invoices" :totalInvoices="invoices.length" />

    <main class="pt-10 px-12 pb-20" v-if="invoices">
      <EmptyHomePage v-if="invoices.length === 0" />

      <div v-if="invoices.length === 0">
        <SingleInvoice v-for="invoice in invoices" :key="invoice.id" :invoice="invoice" />
      </div>
    </main>
  </div>
</template>

background-color: var(--color-grey-50); padding: 4rem 4.8rem 6.4rem; overflow: scroll;
