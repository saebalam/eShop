import { restClient } from "../res-client";

export const getWishlistApi = async () => {
  try {
    const response = await restClient({
      url: `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/wishlist/getWishlist`,
      method: "GET",
    });

    return response;
  } catch (error) {
    throw error;
  }
};
