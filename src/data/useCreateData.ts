import supabase from '@/services/supabase';
import { useMutation, useQueryClient } from '@tanstack/vue-query';
import { invoices } from './invoices';

async function createInvoices() {
  const { error } = await supabase.from('invoices').upsert(invoices);

  if (error) console.log(error);
  return { error };
}

async function createInvoiceItems() {
  // create initial invoice_items and connect them to invoices
  const invoice_items = Array.from(invoices, (element) => {
    const randomNumber = Math.floor(Math.random() * 4) + 1;

    return { id: element.id, itemID: randomNumber, invoiceID: element.id };
  });

  const { error: firstInserError } = await supabase.from('invoice_items').upsert(invoice_items);

  if (firstInserError) {
    console.log('Error during first insert of invoice_items');
    console.log(firstInserError);
    return;
  } else {
    // now fetch the uploaded data in order to upload and connect more items to invoices
    const { data, error: fetchInvoiceItemsError } = await supabase
      .from('invoice_items')
      .select('*');

    if (fetchInvoiceItemsError) {
      console.log('Error while fetching invoice_items');
      console.log(fetchInvoiceItemsError);
      return;
    }

    const invoice_items2 = Array.from(data, (element) => {
      const randomNumber = Math.floor(Math.random() * 4) + 1;

      // have random number and if invoice with that ID already exists, filter it out
      return randomNumber === element.itemID
        ? null
        : { itemID: randomNumber, invoiceID: element.invoiceID };
    }).filter((el) => el !== null);
    const { error: finalInserError } = await supabase.from('invoice_items').upsert(invoice_items2);

    if (finalInserError) {
      console.log('Error during final inser of invoice_items');
      console.log(finalInserError);
      return;
    }
  }
}

async function uploadData() {
  const { error } = await createInvoices();
  if (!error) await createInvoiceItems();
}

export default function useCreateData() {
  const queryClient = useQueryClient();

  const { mutate: createData } = useMutation({
    mutationFn: uploadData,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['invoices']
      });
    },
    onError: (err) => console.log(err.message)
  });

  return { createData };
}
