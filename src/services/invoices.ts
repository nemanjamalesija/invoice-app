import supabase from './supabase';

export async function getInvoices() {
  const { data, error } = await supabase
    .from('invoices')
    .select('*, invoice_items:invoice_items (items(*))');

  if (error) {
    console.error(error);
    throw new Error('Invoices with items could not be loaded');
  }

  console.log(data);

  return data;
}
