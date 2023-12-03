import { useMutation, useQueryClient } from '@tanstack/vue-query';
import { deleteInvoice as deleteInvoiceAPI } from '@/services/apiInvoices';
import { useToast } from 'primevue/usetoast';

export default function useDeleteInvoice() {
  const queryClient = useQueryClient();
  const toast = useToast();
  const showSuccess = () => {
    toast.add({
      severity: 'info',
      summary: 'Success',
      detail: 'Cabin successfully deleted',
      life: 3000
    });
  };

  const showError = () => {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Could not delete the cabin.',
      life: 3000
    });
  };

  const { isPending: isDeleting, mutate: deleteInvoice } = useMutation({
    mutationFn: deleteInvoiceAPI,
    onSuccess: () => {
      showSuccess();

      queryClient.invalidateQueries({
        queryKey: ['invoices']
      });
    },
    onError: (err) => showError()
  });

  return { isDeleting, deleteInvoice };
}
