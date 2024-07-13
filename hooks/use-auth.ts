import { useAuthContext } from "../context/AuthProvider";
import { showErrorToast } from "../utils/show-toast";

import api from "../services/api";
import { deleteAuthToken, storeAuthToken } from "@/utils/storage";
import { useState } from "react";
import useAlert from "./use-alert";

type AuthDetails = {
  username: string;
  password: string;
};

type AuthResponse = {
  token: string;
};

const useAuth = () => {
  const { setIsLoggedIn } = useAuthContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const showAlert = useAlert();

  const signIn = async ({ username, password }: AuthDetails) => {
    setIsLoading(true);
    try {
      const {
        data: { token },
      } = await api.post<AuthResponse>(
        "auth/login",
        JSON.stringify({
          username,
          password,
        })
      );

      storeAuthToken(token);
      setIsLoggedIn(true);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      showErrorToast("Login failed. Please try again.");
    }
  };

  const signOut = async () => {
    showAlert({
      title: "Sign out",
      subtitle: "Are you sure you want to sign out?",
      onPressSubmit: async () => {
        await deleteAuthToken();
        setIsLoggedIn(false);
      },
    });
  };

  return { signIn, signOut, isLoading };
};

export default useAuth;
