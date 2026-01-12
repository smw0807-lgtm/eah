import { signIn } from "@/apis/auth";
import type { SignInInput } from "@/models/auth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function useSignIn() {
  return useMutation({
    mutationFn: ({ email, password }: SignInInput) =>
      signIn({ email, password }),
    onSuccess: () => {
      toast.success("로그인 성공", {
        position: "top-center",
      });
    },
    onError: () => {
      toast.error("로그인 실패", {
        position: "top-center",
      });
    },
  });
}
