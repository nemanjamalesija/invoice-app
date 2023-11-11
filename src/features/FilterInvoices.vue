<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const handler = (value: string) => {
  router.push({ path: '/', query: { status: value } });
};

const options = [{ value: 'All' }, { value: 'Paid' }, { value: 'Pending' }, { value: 'Canceled' }];
</script>
<template>
  <div class="flex bg-gray-0 rounded-md gap-1 font-medium text-sm p-2">
    <button
      v-for="option in options"
      :key="option.value"
      :class="
        (route.query.status === option.value && 'bg-indigo-600 py-1 px-4 rounded-md') ||
        'py-1 px-4 rounded-md'
      "
      @click="() => handler(option.value)"
    >
      {{ option.value }}
    </button>
  </div>
</template>
