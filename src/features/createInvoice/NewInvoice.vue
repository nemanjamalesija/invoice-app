<script setup lang="ts">
import FormBlockVue from "@/ui/FormBlock.vue";
</script>

<!-- streetAdress, city postCode country clientName clientEmail paymentDue status -->

<template>
  <form
    action=""
    class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500"
  >
    <FormBlockVue />
    <FormBlockVue />
    <FormBlockVue />
    <FormBlockVue />
    <FormBlockVue />
    <FormBlockVue />
    <FormBlockVue />
    <FormBlockVue />
  </form>
  <!-- <div
    class="overlay absolute top-0 left-0 h-screen w-screen bg-red-400/5"
  ></div> -->
</template>
