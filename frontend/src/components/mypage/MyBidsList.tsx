import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gavel, Calendar, ChevronRight } from "lucide-react";
import { statusColors, statusLabels } from "@/lib/constants";
import { useNavigate } from "react-router";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

interface Bid {
  id: number;
  auctionId: number;
  amount: string;
  createdAt: string;
  auction?: {
    id: number;
    title: string;
    description?: string;
    status: string;
    currentPrice: string | null;
    imageUrl: string | null;
    category?: { name: string };
    subCategory?: { name: string };
  };
  winningFor?: any | null;
}

interface MyBidsListProps {
  bids: Bid[];
  limit?: number;
}

export default function MyBidsList({ bids, limit }: MyBidsListProps) {
  const navigate = useNavigate();

  const formatPrice = (price: string | number) => {
    return parseInt(String(price)).toLocaleString("ko-KR");
  };

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "yyyy.MM.dd HH:mm", { locale: ko });
  };

  const displayedBids = limit ? bids?.slice(0, limit) || [] : bids || [];
  const hasMore = limit ? bids && bids.length > limit : false;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Gavel className="size-5" />
          입찰 내역 ({bids?.length || 0})
        </CardTitle>
      </CardHeader>
      <CardContent>
        {displayedBids.length > 0 ? (
          <div className="space-y-4">
            {displayedBids.map((bid) => (
              <div
                key={bid.id}
                className="group hover:bg-muted/50 flex cursor-pointer gap-4 rounded-lg border p-4 transition-all hover:shadow-md"
                onClick={() => navigate(`/auctions/${bid.auctionId}`)}
              >
                {/* 이미지 */}
                <div className="bg-muted relative h-24 w-24 shrink-0 overflow-hidden rounded-lg">
                  {bid.auction?.imageUrl ? (
                    <img
                      src={bid.auction.imageUrl}
                      alt={bid.auction.title}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  ) : (
                    <div className="bg-muted text-muted-foreground flex h-full w-full items-center justify-center">
                      <Gavel className="size-8 opacity-50" />
                    </div>
                  )}
                  {/* 낙찰 배지 */}
                  {bid.winningFor && (
                    <div className="absolute top-1 left-1">
                      <span className="rounded-full bg-green-600 px-2 py-0.5 text-xs font-medium text-white">
                        낙찰
                      </span>
                    </div>
                  )}
                  {/* 상태 배지 */}
                  {bid.auction?.status && (
                    <div className="absolute top-1 right-1">
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                          statusColors[
                            bid.auction.status as keyof typeof statusColors
                          ] || statusColors.CLOSED
                        }`}
                      >
                        {statusLabels[
                          bid.auction.status as keyof typeof statusLabels
                        ] || bid.auction.status}
                      </span>
                    </div>
                  )}
                </div>

                {/* 입찰 정보 */}
                <div className="flex flex-1 flex-col gap-2">
                  <div>
                    <h3 className="mb-1 font-semibold">
                      {bid.auction?.title || `경매 #${bid.auctionId}`}
                    </h3>
                    {bid.auction?.description && (
                      <p className="text-muted-foreground line-clamp-1 text-sm">
                        {bid.auction.description}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div className="text-primary font-semibold">
                      입찰 금액: {formatPrice(bid.amount)}원
                    </div>
                    {bid.winningFor && (
                      <div className="font-semibold text-green-600 dark:text-green-400">
                        ✓ 낙찰됨
                      </div>
                    )}
                    {bid.auction?.currentPrice && (
                      <div className="text-muted-foreground">
                        <span className="font-medium">현재가:</span>{" "}
                        {formatPrice(bid.auction.currentPrice)}원
                      </div>
                    )}
                  </div>

                  <div className="text-muted-foreground flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="size-3.5" />
                      <span>입찰일: {formatDate(bid.createdAt)}</span>
                    </div>
                    {bid.auction?.category && (
                      <div>
                        {bid.auction.category.name} &gt;{" "}
                        {bid.auction.subCategory?.name || ""}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {hasMore && (
              <div className="pt-2">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => navigate("/mypage/bids")}
                >
                  더보기
                  <ChevronRight className="ml-2 size-4" />
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-muted-foreground py-8 text-center">
            입찰 내역이 없습니다.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
