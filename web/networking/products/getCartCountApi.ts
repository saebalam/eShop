import { restClient } from "../res-client";

export const getCartCountApi = async () => {
  try {
    const response = await restClient({
      url: `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/cart/getCartCount`,
      method: "GET",
    });

    return response;
  } catch (error) {
    throw error;
  }
};
