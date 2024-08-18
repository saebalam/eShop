import { restClient } from "../res-client";

export const logoutApi = async () => {
  try {
    const response = await restClient({
      url: `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/auth/logout`,
      method: "POST",
    });
  } catch (error) {}
};
