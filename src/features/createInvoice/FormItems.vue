<script setup lang="ts">
import FormLabel from "@/ui/FormLabel.vue";
import useGetItems from "./useGetItems";

const { isPending, items } = useGetItems();
</script>
<template>
  <div v-if="isPending">loading</div>

  <div v-else class="">
    <FormLabel labelName="Items" inputName="items" />
    <select
      class="w-full rounded-md bg-stone-100 px-4 py-3 transition-all duration-300 placeholder:text-stone-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:indigo-400 text-gray-700 text-sm"
      name=""
      id=""
    >
      <option default value="">Select item(s)</option>
      <option v-for="item in items" :key="item.id">
        {{ item.name }} {{ item.CPU }}&nbsp;core&nbsp;CPU&nbsp;/&nbsp;{{
          item.GPU
        }}&nbsp;core&nbsp;GPU&nbsp;/&nbsp;{{ item.SSD }}&nbsp;{{
          item.dataVolume
        }}&nbsp;SSD&nbsp;
      </option>
    </select>
  </div>
</template>
