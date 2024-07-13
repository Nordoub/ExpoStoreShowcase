import { QUERY_KEYS } from "@/constants/QueryKeys";
import { getAllProducts } from "@/services/products";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

type Options = Omit<UseQueryOptions<Product[]>, "queryKey" | "queryFn">;

const useGetAllProductsQuery = (options?: Options) => {
  return useQuery({
    queryKey: [QUERY_KEYS.products],
    queryFn: getAllProducts,
    ...options,
  });
};

export default useGetAllProductsQuery;
