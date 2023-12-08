<script setup lang="ts">
import ActionButton from "@/ui/ActionButton.vue";
import FormBlock from "@/ui/FormBlock.vue";
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
      <FormBlock name="Name" />
      <FormBlock name="Email" />
    </div>
    <div class="flex items-center gap-5 mb-4">
      <FormBlock name="Country" />
      <FormBlock name="City" />
      <FormBlock name="Post code" />
      <FormBlock name="Street adress" />
    </div>
    <div class="flex gap-5 mb-4">
      <div class="w-full flex items-center justify-center gap-5">
        <FormBlock name="Paymend due" />
        <FormBlock name="Status" />
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
