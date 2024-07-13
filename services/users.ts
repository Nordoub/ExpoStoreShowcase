import { User } from "@/models/user";
import api from "./api";

export const getUser = async (id: number): Promise<User> =>
  api.get(`users/${id}`).then((res) => res.data);
