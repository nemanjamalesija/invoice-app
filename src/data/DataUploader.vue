<script setup lang="ts">
import useCreateData from './useCreateData';
import useDeleteData from './useDeleteData';

const { isCreating, createData } = useCreateData();
const { isDeleting, deleteData } = useDeleteData();
</script>
<template>
  <div class="bg-white text-indigo-600 flex gap-4">
    <button :disabled="isDeleting" class="" @click="deleteData">Delete</button>
    <button :disabled="isCreating" class="" @click="createData">Upload</button>
  </div>
</template>
