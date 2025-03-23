import { auth } from "./firebase";

export const getAccessAuthToken = async (
  withBearerWord: boolean = false,
): Promise<string> => {
  const accessToken = await auth.currentUser?.getIdToken();

  if (!accessToken) {
    return '';
  }

  if (withBearerWord) {
    return `Bearer ${accessToken}`;
  }

  return accessToken;
};
