import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useInvoicesStore = defineStore('invoices', () => {
  const currentFilter = ref('All');

  function setFilter(val: string) {
    currentFilter.value = val;
  }

  return { currentFilter, setFilter };
});
