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
export async function getInvoices(): Promise<InvoiceType[]> {
  const { data, error } = await supabase
    .from('invoices')
    .select(
      'id, clientName, clientEmail, created_at, paymentDue, status, invoice_items:invoice_items(items("price"))'
    );

  if (error) {
    console.error(error);
    throw new Error('Invoices with items could not be loaded');
  }

  //@ts-ignore types from supabase not inferred
  return data as InvoiceType[];
}
