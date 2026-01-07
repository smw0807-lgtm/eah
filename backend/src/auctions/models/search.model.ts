export type SearchAuctionsQuery = {
  orderBy:
    | 'createdAt'
    | 'updatedAt'
    | 'title'
    | 'description'
    | 'currentPrice'
    | 'buyoutPrice'
    | 'startAt'
    | 'endAt';
  orderDirection: 'asc' | 'desc';
};
