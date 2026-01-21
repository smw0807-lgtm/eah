export const AuctionStatus = {
  SCHEDULED: "SCHEDULED",
  OPEN: "OPEN",
  CLOSED: "CLOSED",
  CANCELED: "CANCELED",
} as const;

export type AuctionStatus = (typeof AuctionStatus)[keyof typeof AuctionStatus];

export type AuctionCreateInput = {
  title: string;
  description?: string | null;
  startPrice: number | string;
  minBidStep?: number | string;
  buyoutPrice?: number | string | null;
  categoryId: number;
  subCategoryId: number;
  imageUrl?: string | null;
  startAt: Date | string;
  endAt: Date | string;
};

export type Image = { file: File; previewUrl: string };

export type SearchAuctionsQuery = {
  sort?: string;
  category?: string;
  search?: string;
  minPrice?: number;
  maxPrice?: number;
};
