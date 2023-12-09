<script setup lang="ts">
import ActionButton from "@/ui/ActionButton.vue";
import useGetItems from "./useGetItems";
import FormBlockSelect from "@/ui/FormBlockSelect.vue";

const { isPending, items } = useGetItems();
</script>

<template>
  <div v-if="isPending">loading</div>
  <div v-else class="gap-5 mb-4">
    <div class="gap-5 mb-4 items-end grid grid-cols-[1fr,1fr]">
      <FormBlockSelect :items="items" labelName="Items" inputName="items" />

      <div class="flex items-center gap-4">
        <div class="flex items-center gap-2">
          <ActionButton
            :disabled="false"
            type="button"
            layout="secondary"
            text="+"
          ></ActionButton>
          <span class="text-sm font-semibold mb-1">Qantity&nbsp;</span>
          <ActionButton
            :disabled="false"
            type="button"
            layout="secondary"
            text="-"
          ></ActionButton>
        </div>

        <ActionButton
          :disabled="false"
          class="w-full"
          type="button"
          layout="primary"
          text="Add item"
        ></ActionButton>
      </div>
    </div>
    <div>
      <div class="w-full">aaa</div>
      <div class="w-full">aaa</div>
      <div class="w-full">aaa</div>
      <div class="w-full">aaa</div>
      <div class="w-full">aaa</div>
      <div class="w-full">aaa</div>
      <div class="w-full">aaa</div>
      <div class="w-full">aaa</div>
      <div class="w-full">aaa</div>
      <div class="w-full">aaa</div>
      <div class="w-full">aaa</div>
      <div class="w-full">aaa</div>
      <div class="w-full">aaa</div>
      <div class="w-full">aaa</div>
      <div class="w-full">aaa</div>
    </div>
  </div>
</template>
