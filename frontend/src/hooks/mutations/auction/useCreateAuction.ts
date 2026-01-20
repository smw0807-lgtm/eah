import { createAuction } from "@/apis/auction";
import { useMutation } from "@tanstack/react-query";
import type { AuctionCreateInput } from "@/models/auction";
import type { UseMutationCallback } from "../types";

export function useCreateAuction(callback?: UseMutationCallback) {
  return useMutation({
    mutationFn: (auction: AuctionCreateInput) => createAuction(auction),
    onError: (error) => {
      if (callback?.onError) {
        callback.onError(error);
      }
    },
  });
}
