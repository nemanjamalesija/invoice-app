<script setup lang="ts">
import SidebarV from '@/ui/SidebarV.vue';
import InvoicesDisplay from '../features/InvoicesDisplay.vue';
import HeaderLayout from '../ui/HeaderLayout.vue';
import HeaderInvoices from '@/features/HeaderInvoices.vue';
</script>

<template>
  <div class="grid grid-cols-[240px,1fr] grid-rows-[auto,1fr] bg-gray-50 h-[calc(100vh)]">
    <HeaderLayout />

    <main class="pt-12 px-28 pb-20 bg-gray-50 overflow-y-scroll">
      <HeaderInvoices />
      <InvoicesDisplay />
    </main>
    <SidebarV />
  </div>
</template>
