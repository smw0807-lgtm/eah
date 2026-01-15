import { useAuthIsAuthenticated } from "@/stores/auth";
import { Button } from "../ui/button";

export default function AddAuctionButton() {
  const isAuthenticated = useAuthIsAuthenticated();
  if (!isAuthenticated) {
    return null;
  }
  return (
    <Button
      variant="default"
      size="full"
      className="hover:bg-muted-foreground p-2"
    >
      상품등록
    </Button>
  );
}
