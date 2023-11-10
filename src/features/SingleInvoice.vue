<script setup lang="ts">
import { computed } from 'vue';
import type { InvoiceType } from '../types/invoiceType';

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
    <div class="">
      <span class=""> #{{ props.invoice.id }}</span>
      <span class=""> #{{ props.invoice.clientName }}</span>
    </div>
    <div class="">
      <div class="">
        <span class="">{{ props.invoice.createdAt }}</span>
        <span class="">{{ totalPrice }}</span>
      </div>
      <div class="">
        <span class="">{{ props.invoice.status }}</span>
      </div>
    </div>
  </article>
</template>
