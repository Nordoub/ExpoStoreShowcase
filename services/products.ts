import api from "./api";

export const getAllProducts = async (): Promise<Product[]> =>
  api.get("products").then((res) => res.data);
