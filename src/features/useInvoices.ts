import { getInvoices } from '@/services/apiInvoices';
import { useQuery } from '@tanstack/vue-query';

export default function useInvoices() {
  const {
    isLoading,
    error,
    data: invoices
  } = useQuery({
    queryKey: ['cabin'],
    queryFn: getInvoices
  });

  return { isLoading, invoices, error };
}
