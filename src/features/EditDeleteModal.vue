<script setup lang="ts">
import { TrashIcon } from '@heroicons/vue/24/solid';
import { PencilIcon } from '@heroicons/vue/24/solid';
import { EyeIcon } from '@heroicons/vue/24/solid';
</script>
<template>
  <ul class="bg-white">
    <button class="flex items-center gap-1 flex-nowrap">
      <EyeIcon class="h-5 w-5" />
      <span class="text-xs whitespace-nowrap">See details</span>
    </button>
    <button class="flex items-center gap-1">
      <TrashIcon class="h-5 w-5" />
      <span class="text-xs whitespace-nowrap">Edit invoice</span>
    </button>
    <button class="flex items-center gap-1">
      <PencilIcon class="h-5 w-5" />
      <span class="text-xs whitespace-nowrap">Delete invoice</span>
    </button>
  </ul>
</template>
