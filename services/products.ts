import { ENDPOINTS } from "@/constants/Endpoints";
import api from "./api";

export const getAllProducts = async (): Promise<Product[]> =>
  api.get(ENDPOINTS.products).then((res) => res.data);
