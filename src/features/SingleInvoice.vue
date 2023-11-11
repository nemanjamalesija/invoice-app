<script setup lang="ts">
import { computed } from 'vue';
import type { InvoiceType } from '../types/invoiceType';
import { formatCurrency, formatDistanceFromNow } from '@/utils/helpers';
import { format } from 'date-fns';

// props
const props = defineProps<{ invoice: InvoiceType }>();

const totalPrice = computed(() => {
  return props.invoice.invoice_items.reduce((acc, item) => {
    return acc + item.items.price;
  }, 0);
});
</script>

<template>
  <article
    class="grid grid-cols-[0.4fr,3fr,3fr,1.8fr,1.8fr,0.7fr] py-4 px-6 border-b border-gray-100/10 last:border-b-0 items-center"
  >
    <span class="font-bold"> #{{ props.invoice.id }}</span>
    <div class="flex flex-col gap-1">
      <span class="font-medium"> {{ props.invoice.clientName }}</span>
      <span class="text-gray-400 text-sm"> {{ props.invoice.clientEmail }}</span>
    </div>

    <div class="flex flex-col gap-1">
      <span class="">{{ formatDistanceFromNow(props.invoice.paymentDue) }}</span>
      <div class="flex text-gray-400 text-sm">
        <span class="">{{ format(new Date(props.invoice.created_at), 'MMM dd yyy') }}</span>
        <span>&nbsp;-&nbsp;</span>
        <span class="">{{ format(new Date(props.invoice.paymentDue), 'MMM dd yyy') }}</span>
      </div>
    </div>
    <span class="font-medium price">{{ formatCurrency(totalPrice) }}</span>

    <span class="">{{ props.invoice.status }}</span>

    <span class="">See details</span>
  </article>
</template>

<style scoped>
.price {
  font-family: 'Sono';
}
</style>
