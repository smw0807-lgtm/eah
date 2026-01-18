import { createAuction } from "@/apis/auction";
import { useMutation } from "@tanstack/react-query";
import type { AuctionCreateInput } from "@/models/auction";
import type { UseMutationCallback } from "../types";

export function useCreateAuction(callback?: UseMutationCallback) {
  return useMutation({
    mutationFn: (auction: AuctionCreateInput) => createAuction(auction),
    onSuccess: (response) => {
      if (callback?.onSuccess) {
        callback.onSuccess(response);
      }
    },
    onError: (error) => {
      console.error(error);
      if (callback?.onError) {
        callback.onError(error);
      }
    },
  });
}
