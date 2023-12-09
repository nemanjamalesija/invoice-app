<script setup lang="ts">
import ActionButton from "@/ui/ActionButton.vue";
import FormBlock from "@/ui/FormBlock.vue";
import { ref } from "vue";
import useGetItems from "./useGetItems";
import FormItems from "./FormItems.vue";
import FormBlockSelect from "@/ui/FormBlockSelect.vue";
import DatePickInput from "@/ui/DatePickInput.vue";
import LoadingSpinner from "@/ui/LoadingSpinner.vue";
const { isPending, items } = useGetItems();

console.log(items.value);

const formInputsValues = ref({});

const storeFormValues = (key, val) => {
  formInputsValues.value = { ...formInputsValues.value, [key]: val };
};

const status = [
  {
    name: "pending",
  },
  {
    name: "paid",
  },
  {
    name: "cancelled",
  },
];
</script>

<!-- streetAdress, city postCode country clientName clientEmail paymentDue status -->

<template>
  <form
    action=""
    class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-[70%] z-20 bg-gray-0 px-10 pt-5 pb-10 rounded-md gap-3 min-w-[1000px]"
  >
    <div class="flex justify-end">
      <ActionButton
        text="X"
        type="button"
        class="self-end text-xl font-semibold"
      />
    </div>

    <div class="flex items-center gap-5 mb-4">
      <FormBlock @onInput="storeFormValues" labelName="Name" inputName="name" />
      <FormBlock
        @onInput="storeFormValues"
        labelName="Email"
        inputName="email"
      />
    </div>

    <div class="flex items-center gap-5 mb-4">
      <FormBlock
        @onInput="storeFormValues"
        labelName="Country"
        inputName="country"
      />
      <FormBlock @onInput="storeFormValues" labelName="City" inputName="city" />
      <FormBlock
        @onInput="storeFormValues"
        labelName="Post code"
        inputName="postCode"
      />
      <FormBlock
        @onInput="storeFormValues"
        labelName="Street adress"
        inputName="streetAdress"
      />
    </div>

    <FormItems />

    <div class="flex gap-5 mb-4">
      <div class="w-full flex items-center justify-center gap-5">
        <DatePickInput />

        <LoadingSpinner v-if="isPending" />
        <FormBlockSelect
          v-else
          labelName="Status"
          inputName="status"
          :items="status"
        />
      </div>

      <div class="w-full flex items-end">
        <ActionButton type="submit" text="Submit" layout="sidebar" />
      </div>
    </div>
  </form>

  <div
    class="overlay absolute top-0 left-0 h-screen w-screen bg-white/10 blur-3xl z-10"
  ></div>
</template>
