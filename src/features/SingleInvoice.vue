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
  <!-- <article class="border-b-[1px] border-gray-100/10 last:border-b-0 py-4 px-6">
    <div class="flex justify-between">
      <span class=""> {{ props.invoice.clientName }}</span>
      <span class="">{{ format(new Date(props.invoice.created_at), 'MMM dd yyy') }}</span>
    </div>
    <div class="flex flex-col">
      <span class="text-gray-400"> {{ props.invoice.clientEmail }}</span>
    </div>
    <div class="flex justify-between">
      <span class="">{{ formatCurrency(totalPrice) }}</span>
      <span class="">{{ props.invoice.status }}</span>
    </div>
  </article> -->

  <article class="grid grid-cols-[3fr,2fr,2.4fr,1.4fr,0.7fr]">
    <div class="flex flex-col">
      <span class=""> {{ props.invoice.clientName }}</span>
      <span class="text-gray-400 text-sm"> {{ props.invoice.clientEmail }}</span>
    </div>

    <span class="">{{ formatCurrency(totalPrice) }}</span>

    <div class="flex flex-col gap-1">
      <span class="">{{ formatDistanceFromNow(props.invoice.paymentDue) }}</span>
      <div class="flex text-gray-400 text-sm">
        <span class="">{{ format(new Date(props.invoice.created_at), 'MMM dd yyy') }}</span>
        <span>&nbsp;-&nbsp;</span>
        <span class="">{{ format(new Date(props.invoice.paymentDue), 'MMM dd yyy') }}</span>
      </div>
    </div>
    <span class="">{{ props.invoice.status }}</span>

    <span class="">See details</span>
  </article>
</template>
