import { useMutation, useQueryClient } from '@tanstack/vue-query';
import { deleteInvoice as deleteInvoiceAPI } from '@/services/apiInvoices';
import { useToast } from 'primevue/usetoast';
import { showError, showSuccess } from '@/utils/helpers';

export default function useDeleteInvoice(): any {
  const queryClient = useQueryClient();
  const toast = useToast();

  const { isPending: isDeleting, mutate: deleteInvoice } = useMutation({
    mutationFn: deleteInvoiceAPI,
    onSuccess: () => {
      showSuccess(toast, 'Invoice successfully deleted');

      queryClient.invalidateQueries({
        queryKey: ['invoices']
      });
    },
    onError: (err) => showError(toast, err.message)
  });

  return { isDeleting, deleteInvoice };
}
