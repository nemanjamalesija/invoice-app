<script setup lang="ts">
import FormBlock from "@/ui/FormBlock.vue";
</script>

<!-- streetAdress, city postCode country clientName clientEmail paymentDue status -->

<template>
  <form
    action=""
    class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-gray-0 px-8 py-5 rounded-md flex flex-col gap-3"
  >
    <button type="button" class="self-end">X</button>
    <FormBlock name="Name" />
    <FormBlock name="Email" />
    <FormBlock name="Country" />
    <FormBlock name="City" />
    <FormBlock name="Post code" />
    <FormBlock name="Street adress" />
    <FormBlock name="Paymend due" />
    <FormBlock name="Status" />

    <button type="submit">Submit</button>
  </form>

  <div
    class="overlay absolute top-0 left-0 h-screen w-screen bg-white/10 blur-3xl z-10"
  ></div>
</template>
