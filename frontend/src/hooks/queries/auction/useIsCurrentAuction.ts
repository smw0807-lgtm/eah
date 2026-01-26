import { useQuery } from "@tanstack/react-query";
import { isCurrentAuction } from "@/apis/auction";

export function useIsCurrentAuction(auctionId: number) {
  return useQuery({
    queryKey: ["currentAuction", auctionId],
    queryFn: () => isCurrentAuction(auctionId),
    enabled: !!auctionId,
  });
}
