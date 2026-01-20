import { postFormData } from "@/lib/fetch";

export const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  const response = await postFormData(`/images/upload`, formData);
  return response.json();
};
