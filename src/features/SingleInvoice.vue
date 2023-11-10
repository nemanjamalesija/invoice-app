<script setup lang="ts">
import type { InvoiceType } from '../types/invoiceType';

// props
const props = defineProps<{ invoice: InvoiceType }>();
</script>

<template>
  <article class="border-b-[1px] border-slate-50/20 last:border-b-0 py-4 px-6">
    <div class="">
      <span class=""> #{{ props.invoice.id }}</span>
      <span class=""> #{{ props.invoice.clientName }}</span>
    </div>
  </article>
</template>
