import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
export function useUrlSearchParams(key: string) {
  const route = useRoute();
  const router = useRouter();
  const param = ref('');
  const filterValue = ref<string>('');

  const setParam = (key: string) => {
    param.value = key;
  };

  const querySearch = route.query[key];
  if (typeof querySearch === 'string') {
    param.value = querySearch;
  }

  watch(
    () => param.value,
    () => {
      if (!param.value) {
        return;
      }

      filterValue.value = param.value;

      router.push({
        path: route.path,
        query: { ...route.query, [key]: param.value ? param.value : undefined }
      });
    }
  );

  return { setParam, filterValue };
}
