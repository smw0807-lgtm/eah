import { UserIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router";
export default function MyPageButton() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/mypage");
  };
  return (
    <Button variant="outline" onClick={handleClick}>
      <UserIcon className="size-4" />
      <span>마이페이지</span>
    </Button>
  );
}
