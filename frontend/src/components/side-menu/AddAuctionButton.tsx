import { useAuthIsAuthenticated } from "@/stores/auth";
import { Button } from "../ui/button";
import { useNavigate } from "react-router";

export default function AddAuctionButton() {
  const isAuthenticated = useAuthIsAuthenticated();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return null;
  }
  return (
    <Button
      variant="default"
      size="full"
      className="hover:bg-muted-foreground p-2"
      onClick={() => navigate("/auction/create")}
    >
      상품등록
    </Button>
  );
}
