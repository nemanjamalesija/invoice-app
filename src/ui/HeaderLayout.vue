<script setup lang="ts">
import useInvoices from '@/features/useInvoices';
import ActionButton from '../ui/ActionButton.vue';
</script>
<template>
  <header class="col-start-2 row-start-1 bg-gray-0 h-[90px] flex items-center px-7 justify-end">
    <ActionButton type="primary" text="New Invoice" />
  </header>
</template>
