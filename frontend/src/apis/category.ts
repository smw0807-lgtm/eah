import { get } from "@/lib/fetch";

export const getCategories = async () => {
  const response = await get(`/category`);
  return response.json();
};

export const getTopCategories = async () => {
  const response = await get(`/category/get-top-categories`);
  return response.json();
};
