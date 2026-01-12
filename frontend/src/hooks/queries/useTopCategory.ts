import { getTopCategories } from "@/apis/category";
import type { TopCategory } from "@/models/category";
import { useQuery } from "@tanstack/react-query";

export function useTopCategory() {
  return useQuery<TopCategory[]>({
    queryKey: ["topCategory"],
    queryFn: () => getTopCategories(),
  });
}
