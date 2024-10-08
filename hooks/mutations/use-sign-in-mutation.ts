import { signIn } from "@/services/users";
import { useMutation } from "@tanstack/react-query";

const useSignInMutation = () =>
  useMutation({
    mutationFn: signIn,
    onError: () => {},
    onSuccess: () => {},
  });

export default useSignInMutation;
