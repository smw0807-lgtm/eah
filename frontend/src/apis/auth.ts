import { post, postWithHeaders } from "@/lib/fetch";
import type { SignInInput, SignUpInput } from "@/models/auth";

export const signIn = async ({ email, password }: SignInInput) => {
  const response = await postWithHeaders(`/auth/signin`, null, {
    Authorization: `Basic ${btoa(`${email}:${password}`)}`,
  });
  return response.json();
};

export const signUp = async ({
  email,
  password,
  name,
  nickname,
}: SignUpInput) => {
  const response = await post(`/auth/signup`, {
    email,
    password,
    name,
    nickname,
  });
  return response.json();
};
