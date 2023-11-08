import { getInvoices } from '@/services/invoices'
import { useQuery } from '@tanstack/vue-query'

export default function useInvoices() {
  const { isLoading, data: invoices } = useQuery({
    queryKey: ['cabin'],
    queryFn: getInvoices
  })

  return { isLoading, invoices }
}
