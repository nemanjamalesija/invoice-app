<script setup lang="ts">
import { computed } from 'vue';
import type { InvoiceType } from '../types/invoiceType';
import { formatCurrency } from '@/utils/helpers';
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
  <article class="border-b-[1px] border-slate-50/20 last:border-b-0 py-4 px-6">
    <div class="flex items-center justify-between">
      <span class=""> #{{ props.invoice.id }}</span>
      <span class=""> {{ props.invoice.clientName }}</span>
    </div>
    <div class="flex items-center justify-between">
      <div class="flex flex-col">
        <span class="">{{ format(new Date(props.invoice.created_at), 'MMM dd yyy') }}</span>
        <span class="">{{ formatCurrency(totalPrice) }}</span>
      </div>
      <div class="flex self-end">
        <span class="">{{ props.invoice.status }}</span>
      </div>
    </div>
  </article>
</template>
