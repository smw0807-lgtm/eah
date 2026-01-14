import { signUp } from "@/apis/auth";
import type { SignUpInput } from "@/models/auth";
import { useMutation } from "@tanstack/react-query";
import type { UseMutationCallback } from "../types";

export function useSignUp(callback?: UseMutationCallback) {
  return useMutation({
    mutationFn: ({ email, password, name, nickname }: SignUpInput) =>
      signUp({ email, password, name, nickname }),
    onSuccess: () => {
      if (callback?.onSuccess) {
        callback.onSuccess();
      }
    },
    onError: (error) => {
      if (callback?.onError) {
        callback.onError(error);
      }
    },
  });
}
