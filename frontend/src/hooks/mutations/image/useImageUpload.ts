import { useMutation } from "@tanstack/react-query";
import { uploadImage } from "@/apis/image";
import type { UseMutationCallback } from "../types";

export function useImageUpload(callback?: UseMutationCallback) {
  return useMutation({
    mutationFn: (image: File) => uploadImage(image),
    onSuccess: (response) => {
      if (callback?.onSuccess) {
        callback.onSuccess(response);
      }
    },
    onError: (error) => {
      if (callback?.onError) {
        callback.onError(error);
      }
    },
  });
}
