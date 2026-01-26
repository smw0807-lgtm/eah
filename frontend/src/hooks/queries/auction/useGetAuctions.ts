import { getAuctions } from "@/apis/auction";
import type { SearchAuctionsQuery } from "@/models/auction";
import { useQuery } from "@tanstack/react-query";

export function useGetAuctions(query: SearchAuctionsQuery) {
  return useQuery({
    queryKey: ["auctions"],
    queryFn: () => getAuctions(query),
  });
}
