<script setup lang="ts">
import ActionButton from "@/ui/ActionButton.vue";
import FormBlock from "@/ui/FormBlock.vue";
</script>

<!-- streetAdress, city postCode country clientName clientEmail paymentDue status -->

<template>
  <form
    action=""
    class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-gray-0 px-10 pt-5 pb-10 rounded-md flex flex-col gap-3 min-w-[500px]"
  >
    <ActionButton
      text="X"
      type="button"
      class="self-end text-xl font-semibold"
    />
    <FormBlock name="Name" />
    <FormBlock name="Email" />
    <FormBlock name="Country" />
    <FormBlock name="City" />
    <FormBlock name="Post code" />
    <FormBlock name="Street adress" />
    <FormBlock name="Paymend due" />
    <FormBlock name="Status" />

    <ActionButton type="submit" text="Submit" layout="sidebar" />
  </form>

  <div
    class="overlay absolute top-0 left-0 h-screen w-screen bg-white/10 blur-3xl z-10"
  ></div>
</template>
