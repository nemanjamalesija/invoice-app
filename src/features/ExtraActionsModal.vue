<template>
  <ul class="bg-gray-0 shadow-2xl rounded-md absolute top-[65%] right-10 z-50">
    <button class="flex items-center gap-4 py-2 px-4 hover:bg-gray-50 w-full">
      <EyeIcon class="h-4 w-4" />
      <span class="text-sm whitespace-nowrap">See details</span>
    </button>

    <button class="flex items-center gap-4 py-2 px-4 hover:bg-gray-50 w-full">
      <TrashIcon class="h-4 w-4" />
      <span class="text-sm whitespace-nowrap">Edit invoice</span>
    </button>

    <button class="flex items-center gap-4 py-2 px-4 hover:bg-gray-50 w-full">
      <PencilIcon class="h-4 w-4" />
      <span class="text-sm whitespace-nowrap">Delete invoice</span>
    </button>
  </ul>
</template>

<script setup lang="ts">
import { TrashIcon } from '@heroicons/vue/24/solid';
import { PencilIcon } from '@heroicons/vue/24/solid';
import { EyeIcon } from '@heroicons/vue/24/solid';
</script>
