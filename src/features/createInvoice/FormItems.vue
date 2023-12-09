<script setup lang="ts">
import useGetItems from "./useGetItems";
import FormBlockSelect from "@/ui/FormBlockSelect.vue";

const { isPending, items } = useGetItems();
</script>

<template>
  <div v-if="isPending">loading</div>
  <div v-else class="grid grid-cols-[1fr,1fr] gap-5 mb-4">
    <div class="gap-5 mb-4 items-end">
      <FormBlockSelect :items="items" :labelName="Items" :inputName="items" />
    </div>
    <div class="w-full">aaa</div>
  </div>
</template>
