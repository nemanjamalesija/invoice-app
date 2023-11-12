import type { InvoiceType } from '@/types/invoiceType';
import supabase from './supabase';
import type { Ref } from 'vue';

/* 
  const { data, error } = await supabase
    .from('invoices')

    // join invoice items (*)
    .select('*, invoice_items:invoice_items (items(*))')
    // join invoice_items for a specific item
    .eq('id', 2)
    .single();

*/

// const querz = [
//   { field: 'status', value: 'checked-in', method: 'eq' },
//   { field: 'numNights', value: 1, method: 'gt' },
// ];

//   querz.forEach(
//     async (q) => await query[q.method](q.field, q.value)
//   );

type GetInvoicesParamsType = {
  filter: {
    field: string;
    value: string;
  } | null;

  sortBy: {
    field: string;
    direction: string;
  };
};

export async function getInvoices({
  filter,
  sortBy
}: GetInvoicesParamsType): Promise<InvoiceType[]> {
  console.log(sortBy);
  const query = supabase
    .from('invoices')
    .select(
      'id, clientName, clientEmail, created_at, paymentDue, status, invoice_items:invoice_items(items("price"))'
    );

  // FILTER
  if (filter) query.eq(filter.field, filter.value);

  //SORT
  if (sortBy)
    query.order(sortBy.field, {
      ascending: sortBy.direction === 'asc'
    });

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error('Invoices with items could not be loaded');
  }

  //@ts-ignore types from supabase not inferred
  return data as InvoiceType[];
}
