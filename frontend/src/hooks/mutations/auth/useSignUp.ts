import { signUp } from "@/apis/auth";
import type { SignUpInput } from "@/models/auth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function useSignUp() {
  return useMutation({
    mutationFn: ({ email, password, name, nickname }: SignUpInput) =>
      signUp({ email, password, name, nickname }),
    onSuccess: () => {
      toast.success("회원가입 성공", {
        position: "top-center",
      });
    },
    onError: () => {
      toast.error("회원가입 실패", {
        position: "top-center",
      });
    },
  });
}
