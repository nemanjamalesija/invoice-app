import { getInvoices } from '@/services/apiInvoices';
import { useInvoicesStore } from '@/stores/invoices';
import { useQuery } from '@tanstack/vue-query';
import { storeToRefs } from 'pinia';
import { watch, ref } from 'vue';

export default function useInvoices() {
  const { currentFilter } = storeToRefs(useInvoicesStore());
  const filter =
    currentFilter.value === 'All' ? null : { field: 'status', value: currentFilter.value };
  const filterRef = ref(filter);

  // FILTER
  watch(
    () => currentFilter.value,
    (n) => {
      filterRef.value = n === 'All' ? null : { field: 'status', value: n };
    }
  );

  const {
    isLoading,
    error,
    data: invoices
  } = useQuery({
    queryKey: ['cabin', filterRef],
    queryFn: () => getInvoices({ filter: filterRef.value })
  });

  return { isLoading, invoices, error };
}
