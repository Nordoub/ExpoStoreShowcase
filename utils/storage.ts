import AsyncStorage from "@react-native-async-storage/async-storage";

const AUTH_TOKEN_STORAGE_KEY = "@storeShowcase:auth-token";

export const storeAuthToken = async (token: string): Promise<void> =>
  await AsyncStorage.setItem(AUTH_TOKEN_STORAGE_KEY, token);

export const getAuthToken = async (): Promise<string | null> =>
  await AsyncStorage.getItem(AUTH_TOKEN_STORAGE_KEY);

export const isAuthenticated = async (): Promise<boolean> => {
  const token = await AsyncStorage.getItem(AUTH_TOKEN_STORAGE_KEY);
  return !!token;
};

export const deleteAuthToken = async (): Promise<void> =>
  await AsyncStorage.removeItem(AUTH_TOKEN_STORAGE_KEY);
