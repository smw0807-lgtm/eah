import { createBid } from "@/apis/bid";
import { useMutation } from "@tanstack/react-query";
import type { UseMutationCallback } from "../types";

export function useCreateBid(callback?: UseMutationCallback) {
  return useMutation({
    mutationFn: ({
      auctionId,
      amount,
    }: {
      auctionId: number;
      amount: number;
    }) => createBid(auctionId, amount),
    onSuccess: (data) => {
      if (callback?.onSuccess) {
        callback.onSuccess(data);
      }
    },
    onError: (error) => {
      if (callback?.onError) {
        callback.onError(error);
      }
    },
  });
}
