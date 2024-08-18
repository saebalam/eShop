import { restClient } from "../res-client";

export const getCartApi = async () => {
  try {
    const response = await restClient({
      url: `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/cart/getCart`,
      method: "GET",
    });

    return response;
  } catch (error) {
    throw error;
  }
};
