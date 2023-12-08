<script setup lang="ts">
import { ref } from "vue";
import FormLabel from "./FormLabel.vue";
import FormInput from "./FormInput.vue";

const props = defineProps<{
  name: string;
}>();

const emit = defineEmits(["onLog"]);

const onInput = (val) => {
  emit("onLog", val);
};
</script>
<template>
  <div class="w-full flex flex-col">
    <FormLabel :name="props.name" />
    <FormInput @onInput="onInput" :name="props.name" />
  </div>
</template>
