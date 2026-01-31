import { post } from "@/lib/fetch";

export const createBid = async (auctionId: number, amount: number) => {
  const response = await post(`/bids/create`, {
    auctionId,
    amount,
  });
  return response.json();
};
