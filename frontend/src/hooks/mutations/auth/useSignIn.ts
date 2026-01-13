import { signIn } from "@/apis/auth";
import type { SignInInput } from "@/models/auth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useAuthActions } from "@/stores/auth";
import type { UseMutationCallback } from "../types";

export function useSignIn(callback?: UseMutationCallback) {
  const { setTokens } = useAuthActions();

  return useMutation({
    mutationFn: ({ email, password }: SignInInput) =>
      signIn({ email, password }),
    onSuccess: (data) => {
      // 백엔드 응답: { message: 'Signin successful', access_token, refresh_token }
      const accessToken = data?.access_token;
      const refreshToken = data?.refresh_token;

      if (callback?.onSuccess) {
        callback.onSuccess();
      }
      if (accessToken && refreshToken) {
        setTokens(accessToken, refreshToken);
      }
    },
    onError: (error) => {
      console.log(error);
      toast.error("로그인 실패", {
        position: "top-center",
      });
    },
  });
}
