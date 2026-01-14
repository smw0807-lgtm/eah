export type UseMutationCallback = {
  onSuccess?: (
    response?: Record<string, string | number | boolean | null | undefined>,
  ) => void;
  onMutate?: () => void;
  onSettled?: () => void;
  onError?: (error: Error) => void;
};
