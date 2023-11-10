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

export async function getInvoices() {
  const { data, error } = await supabase
    .from('invoices')
    .select('id, clientName, created_at, status, invoice_items:invoice_items(items("price"))');

  if (error) {
    console.error(error);
    throw new Error('Invoices with items could not be loaded');
  }

  console.log(data);

  return data;
}
