<script setup lang="ts">
import ActionButton from "@/ui/ActionButton.vue";
import FormBlock from "@/ui/FormBlock.vue";
import { ref } from "vue";

const formInputsValues = ref({});

const storeFormValujes = (key, val) => {
  formInputsValues.value = { ...formInputsValues.value, [key]: val };

  console.log(formInputsValues.value);
};
</script>

<!-- streetAdress, city postCode country clientName clientEmail paymentDue status -->

<template>
  <form
    action=""
    class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-gray-0 px-10 pt-5 pb-10 rounded-md gap-3 min-w-[1000px]"
  >
    <div class="flex justify-end">
      <ActionButton
        text="X"
        type="button"
        class="self-end text-xl font-semibold"
      />
    </div>
    <div class="flex items-center gap-5 mb-4">
      <FormBlock
        @onInput="storeFormValujes"
        labelName="Name"
        inputName="name"
      />
      <FormBlock
        @onInput="storeFormValujes"
        labelName="Email"
        inputName="email"
      />
    </div>
    <div class="flex items-center gap-5 mb-4">
      <FormBlock
        @onInput="storeFormValujes"
        labelName="Country"
        inputName="country"
      />
      <FormBlock
        @onInput="storeFormValujes"
        labelName="City"
        inputName="city"
      />
      <FormBlock
        @onInput="storeFormValujes"
        labelName="Post code"
        inputName="postCode"
      />
      <FormBlock
        @onInput="storeFormValujes"
        labelName="Street adress"
        inputName="streetAdress"
      />
    </div>
    <div class="flex gap-5 mb-4">
      <div class="w-full flex items-center justify-center gap-5">
        <FormBlock
          @onInput="storeFormValujes"
          labelName="Paymend due"
          inputName="paymentDue"
        />
        <FormBlock
          @onInput="storeFormValujes"
          labelName="Status"
          inputName="status"
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
