import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet } from "lucide-react";

interface AccountCardProps {
  currentAmount: string | number;
  lockedAmount: string | number;
}

export default function AccountCard({
  currentAmount,
  lockedAmount,
}: AccountCardProps) {
  const formatPrice = (price: string | number) => {
    return parseInt(String(price)).toLocaleString("ko-KR");
  };

  const availableBalance =
    parseInt(String(currentAmount)) - parseInt(String(lockedAmount));

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wallet className="size-5" />
          계좌 정보
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-muted/50 rounded-lg border p-4">
          <div className="text-muted-foreground mb-2 text-sm">
            사용 가능한 잔액
          </div>
          <div className="text-primary text-2xl font-bold">
            {formatPrice(availableBalance)}원
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg border p-3">
            <div className="text-muted-foreground mb-1 text-xs">현재 잔액</div>
            <div className="font-semibold">{formatPrice(currentAmount)}원</div>
          </div>
          <div className="rounded-lg border p-3">
            <div className="text-muted-foreground mb-1 text-xs">잠금 금액</div>
            <div className="font-semibold text-orange-600 dark:text-orange-400">
              {formatPrice(lockedAmount)}원
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
