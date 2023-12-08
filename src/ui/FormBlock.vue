<script setup lang="ts">
import { ref } from "vue";
import FormLabel from "./FormLabel.vue";
import FormInput from "./FormInput.vue";

const props = defineProps<{
  labelName: string;
  inputName: string;
}>();

const emit = defineEmits(["onInput"]);

const onInput = (key, val) => {
  emit("onInput", key, val);
};
</script>
<template>
  <div class="w-full flex flex-col">
    <FormLabel :labelName="props.labelName" :inputName="props.inputName" />
    <FormInput @onInput="onInput" :inputName="props.inputName" />
  </div>
</template>
