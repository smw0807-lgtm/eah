export const get = async (url: string) => {
  return fetch(import.meta.env.VITE_API_URL + url, { method: "GET" });
};

export const post = async (url: string, data: any) => {
  return fetch(import.meta.env.VITE_API_URL + url, {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const postWithHeaders = async (
  url: string,
  data: null | Record<string, string | number | boolean | null | undefined>,
  headers: Record<string, string>,
) => {
  return fetch(import.meta.env.VITE_API_URL + url, {
    method: "POST",
    body: JSON.stringify(data),
    headers,
  });
};
