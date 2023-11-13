<script setup lang="ts">
import DataUploader from '@/data/DataUploader.vue';
import { UserCircleIcon } from '@heroicons/vue/24/solid';
</script>
<template>
  <aside
    class="row-start-1 row-end-[-1] col-start-1 grid grid-rows-[90px,1fr,90px,180px] bg-gray-0 w-full"
  >
    <div class="flex items-center justify-center bg-indigo-600 rounded-tr-3xl">
      <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#FFF"
          fill-rule="evenodd"
          d="M20.513 0C24.965 2.309 28 6.91 28 12.21 28 19.826 21.732 26 14 26S0 19.826 0 12.21C0 6.91 3.035 2.309 7.487 0L14 12.9z"
        ></path>
      </svg>
    </div>

    <div class="border-b border-zinc-300 w-full"></div>

    <div class="flex items-center justify-center">
      <UserCircleIcon class="h-8 w-8 text-white" />
    </div>

    <DataUploader />
  </aside>
</template>
