import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useInvoicesStore = defineStore('invoices', () => {
  const currentFilter = ref('All');

  const sortByRaw = ref('paymentDue-asc');

  const setSortByRaw = (val: string) => {
    sortByRaw.value = val;
  };

  function setFilter(val: string) {
    currentFilter.value = val;
  }

  return { currentFilter, setFilter, sortByRaw, setSortByRaw };
});
