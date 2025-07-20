import { Profile } from "@/types";
import axiosInstance from "./axios";
import { getSecureStore } from "@/utils/secureStore";

type RequestUser = {
  email: string;
  password: string;
};

async function postSignup(body: RequestUser): Promise<void> {
  const { data } = await axiosInstance.post("/auth/signup", body);

  return data;
}

async function postLogin(body: RequestUser): Promise<{ accessToken: string }> {
  const { data } = await axiosInstance.post("/auth/signin", body);

  return data;
}

async function getMe(): Promise<Profile> {
  const accessToken = await getSecureStore("accessToken");

  const { data } = await axiosInstance.get("/auth/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
}

export { postSignup, postLogin, getMe };
