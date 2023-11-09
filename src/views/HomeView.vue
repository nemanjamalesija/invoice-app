<script setup lang="ts">
import SidebarV from '@/ui/SidebarV.vue';
import InvoicesDisplay from '../features/InvoicesDisplay.vue';
import HeaderLayout from '../ui/HeaderLayout.vue';
</script>

<template>
  <div class="grid grid-cols-[240px,1fr] grid-rows-[auto,1fr] h-[calc(100vh)]">
    <HeaderLayout />
    <InvoicesDisplay />
    <SidebarV />
  </div>
</template>
