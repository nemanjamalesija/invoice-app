<script setup lang="ts">
import { invoices } from './invoices';
import supabase from '../services/supabase';
import { useQueryClient } from '@tanstack/vue-query';

const queryClient = useQueryClient();

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

async function deleteInvoiceItems() {
  const { error } = await supabase.from('invoice_items').delete().gt('id', 0);

  if (error) console.log(error);

  return { error };
}

async function deleteInvoices() {
  const { error } = await supabase.from('invoices').delete().gt('id', 0);
  if (error) console.log(error.message);
  queryClient.invalidateQueries({ queryKey: ['invoices'] });
}

async function deleteData() {
  const { error } = await deleteInvoiceItems();
  if (!error) await deleteInvoices();
}

async function uploadData() {
  const { error } = await createInvoices();
  if (!error) await createInvoiceItems();
}
</script>
<template>
  <div class="bg-white text-indigo-600 flex gap-4">
    <button class="" @click="deleteData">Delete</button>
    <button class="" @click="uploadData">Upload</button>
  </div>
</template>
