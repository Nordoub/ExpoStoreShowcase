import { User } from "@/models/user";
import api from "./api";
import { ENDPOINTS } from "@/constants/Endpoints";

type AuthDetails = {
  username: string;
  password: string;
};

type AuthResponse = {
  token: string;
};

export const getUser = async (id: number): Promise<User> =>
  api.get(ENDPOINTS.users + id).then((res) => res.data);

export const signIn = async ({
  username,
  password,
}: AuthDetails): Promise<AuthResponse> =>
  api.post(
    ENDPOINTS.login,
    JSON.stringify({
      username,
      password,
    })
  );
