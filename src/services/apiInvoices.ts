import type { InvoiceType } from '@/types/invoiceType';
import supabase from './supabase';

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

export async function getInvoices({ filter }): Promise<InvoiceType[]> {
  let query = supabase
    .from('invoices')
    .select(
      'id, clientName, clientEmail, created_at, paymentDue, status, invoice_items:invoice_items(items("price"))'
    );

  // FILTER
  if (filter) query[filter.method || 'eq'](filter.field, filter.value);

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error('Invoices with items could not be loaded');
  }

  //@ts-ignore types from supabase not inferred
  return data as InvoiceType[];
}
