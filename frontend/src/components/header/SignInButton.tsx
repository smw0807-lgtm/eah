import { LogInIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useOpenSigninModal } from "@/stores/signin-modal";

export default function SignInButton() {
  const openSigninModal = useOpenSigninModal();
  return (
    <Button onClick={openSigninModal} variant="outline">
      <LogInIcon className="size-4" />
      <span>로그인</span>
    </Button>
  );
}
