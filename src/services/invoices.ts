import supabase from './supabase'

export async function getInvoices() {
  const { data, error } = await supabase.from('invoices').select('*')

  if (error) {
    console.error(error)
    throw new Error('Invoices could not be loaded')
  }

  return data
}
