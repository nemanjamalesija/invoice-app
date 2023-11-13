import { getInvoices } from '@/services/apiInvoices';
import { useInvoicesStore } from '@/stores/invoices';
import { useQuery } from '@tanstack/vue-query';
import { storeToRefs } from 'pinia';
import { watch, ref } from 'vue';
import { useRouter } from 'vue-router';

export default function useInvoices() {
  const { currentFilter, sortByRaw } = storeToRefs(useInvoicesStore());
  const filter =
    currentFilter.value === 'All' ? null : { field: 'status', value: currentFilter.value };
  const filterRef = ref(filter);
  const sortByRef = ref({ field: 'paymentDue', direction: 'asc' });
  const router = useRouter();

  // FILTER
  watch(
    () => currentFilter.value,
    (n) => {
      filterRef.value = n === 'All' ? null : { field: 'status', value: n };
      router.push({ path: '/', query: { status: n } });
    }
  );

  // SORT

  watch(
    () => sortByRaw.value,
    (n) => {
      sortByRaw.value = n;
      const [field, direction] = sortByRaw.value.split('-');
      sortByRef.value.field = field;
      sortByRef.value.direction = direction;

      console.log(sortByRef.value);

      router.push({ path: '/', query: { status: n } });
    }
  );

  const {
    isLoading,
    error,
    data: invoices
  } = useQuery({
    queryKey: ['invoices', filterRef, sortByRef],
    queryFn: () =>
      getInvoices({
        filter: filterRef.value,
        sortBy: { field: sortByRef.value.field, direction: sortByRef.value.direction }
      })
  });

  return { isLoading, invoices, error };
}
