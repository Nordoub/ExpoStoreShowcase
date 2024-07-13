import { QUERY_KEYS } from "@/constants/QueryKeys";
import { User } from "@/models/user";
import { getUser } from "@/services/users";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

type Options = Omit<UseQueryOptions<User>, "queryKey" | "queryFn">;

const useGetUserQuery = (id: number, options?: Options) => {
  return useQuery({
    queryKey: [QUERY_KEYS.user],
    queryFn: () => getUser(id),
    ...options,
  });
};

export default useGetUserQuery;
