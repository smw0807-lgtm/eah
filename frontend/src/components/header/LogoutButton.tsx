import { LogOutIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useAuthActions } from "@/stores/auth";

export default function LogoutButton() {
  const { clearTokens } = useAuthActions();
  const logout = () => {
    clearTokens();
  };
  return (
    <Button onClick={logout} variant="outline">
      <LogOutIcon className="size-4" />
      <span>로그아웃</span>
    </Button>
  );
}
