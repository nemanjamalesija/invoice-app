<script setup lang="ts">
import { ref } from 'vue';
import ExtraActionsModal from './ExtraActionsModal.vue';
import { EllipsisHorizontalIcon } from '@heroicons/vue/24/solid';
import { vOnClickOutside } from '@vueuse/components';

const isOpen = ref(false);
const toggled = ref(false);

const closeElement = (ev) => {
  if (toggled.value === true) {
    toggled.value = false;
    isOpen.value = false;
    console.log(ev);
    return;
  } else isOpen.value = false;

  console.log(ev);
};

const toggleElement = () => {
  if (toggled.value === true) {
    toggled.value = false;

    return;
  } else {
    toggled.value = true;
    isOpen.value = true;
  }
};
</script>
<template>
  <button @click="toggleElement">
    <EllipsisHorizontalIcon class="h-8 w-8 text-white" />
  </button>

  <ExtraActionsModal v-if="isOpen && toggled" v-on-click-outside="closeElement" />
</template>
