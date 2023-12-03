<script setup lang="ts">
import useInvoices from './useInvoices';
import LoadingSpinner from '../ui/LoadingSpinner.vue';
import SingleInvoice from './SingleInvoice.vue';
import EmptyHomePage from '@/ui/EmptyHomePage.vue';

const { isLoading, invoices } = useInvoices();
</script>

<template>
  <LoadingSpinner v-if="isLoading" />

  <div v-if="invoices" class="col-start-2 grid bg-gray-50">
    <div>
      <EmptyHomePage v-if="invoices.length === 0" />
      <div v-else class="border-[1px] border-gray-100/20 flex flex-col rounded-md bg-gray-0">
        <SingleInvoice v-for="invoice in invoices" :key="invoice.id" :invoice="invoice" />
      </div>
    </div>
  </div>
</template>
