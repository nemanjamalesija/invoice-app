<script setup lang="ts">
import ActionButton from "@/ui/ActionButton.vue";
import useCreateData from "./useCreateData";
import useDeleteData from "./useDeleteData";

const { isCreating, createData } = useCreateData();
const { isDeleting, deleteData } = useDeleteData();
</script>
<template>
  <div class="px-2">
    <div
      class="uppercase bg-gray-50 px-4 pt-4 pb-4 border-zinc-300 flex flex-col items-center justify-center gap-2 rounded-md"
    >
      <h3 class="mb-2 font-bold">Sample data</h3>
      <ActionButton
        type="submit"
        text="delete invoices"
        layout="sidebar"
        :disabled="isDeleting"
        @click="deleteData"
      >
      </ActionButton>
      <ActionButton
        type="submit"
        text="upload invoices"
        layout="sidebar"
        :disabled="isCreating"
        @click="createData"
      >
      </ActionButton>
    </div>
  </div>
</template>
