export interface TopCategory {
  id: number;
  code: string;
  name: string;
}

export interface Category {
  id: number;
  code: string;
  name: string;
  parentId: number | null;
}
