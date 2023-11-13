<script setup lang="ts">
import { invoices } from './invoices';
import supabase from '../services/supabase';
import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query';
import useCreateData from './useCreateData';
const { createData } = useCreateData();

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
</script>
<template>
  <div class="bg-white text-indigo-600 flex gap-4">
    <button class="" @click="deleteData">Delete</button>
    <button class="" @click="createData">Upload</button>
  </div>
</template>
