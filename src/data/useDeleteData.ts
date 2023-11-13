import supabase from '@/services/supabase';
import { useMutation, useQueryClient } from '@tanstack/vue-query';

async function deleteInvoiceItems() {
  const { error } = await supabase.from('invoice_items').delete().gt('id', 0);

  if (error) console.log(error);

  return { error };
}

async function deleteInvoices() {
  const { error } = await supabase.from('invoices').delete().gt('id', 0);
  if (error) console.log(error.message);
}

async function deleteDataHelper() {
  const { error } = await deleteInvoiceItems();
  if (!error) await deleteInvoices();
}

export default function useDeleteData(): any {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteData } = useMutation({
    mutationFn: deleteDataHelper,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['invoices']
      });
    },
    onError: (err) => console.log(err.message)
  });

  return { isDeleting, deleteData };
}
