import { getItems } from "@/services/apiItems";
import { useQuery } from "@tanstack/vue-query";

export default function useGetItems() {
  const { isPending, data: items } = useQuery({
    queryKey: ["items"],
    queryFn: getItems,
  });

  return { isPending, items };
}
